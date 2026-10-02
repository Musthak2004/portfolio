import { NextResponse } from "next/server";

/**
 * Lead intake endpoint — storage-ready.
 * Today: validates + logs. Tomorrow: persist to DB (Lead model in types/index.ts)
 * without changing the public form contract.
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, problem, service } = body ?? {};
    if (!name || typeof name !== "string" || !name.trim()) {
      return NextResponse.json({ error: "Name is required." }, { status: 400 });
    }
    if (!email || typeof email !== "string" || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return NextResponse.json({ error: "Valid email is required." }, { status: 400 });
    }
    if (!problem || typeof problem !== "string" || !problem.trim()) {
      return NextResponse.json({ error: "Problem is required." }, { status: 400 });
    }
    if (!service || typeof service !== "string" || !service.trim()) {
      return NextResponse.json({ error: "Service is required." }, { status: 400 });
    }

    const lead = {
      id: `lead_${Date.now()}`,
      name: String(name).slice(0, 200),
      email: String(email).slice(0, 200),
      whatsapp: String(body.whatsapp ?? "").slice(0, 50),
      company: String(body.company ?? "").slice(0, 200),
      industry: String(body.industry ?? "").slice(0, 200),
      service: String(service).slice(0, 100),
      problem: String(problem).slice(0, 5000),
      current_system: String(body.current_system ?? "").slice(0, 500),
      expected_outcome: String(body.expected_outcome ?? "").slice(0, 2000),
      timeline: String(body.timeline ?? "").slice(0, 100),
      budget: String(body.budget ?? "").slice(0, 100),
      source: String(body.source ?? "website").slice(0, 100),
      status: "NEW",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    // TODO: persist `lead` to database when admin layer lands.
    console.log("[lead]", JSON.stringify(lead));

    return NextResponse.json({ ok: true, id: lead.id }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}
