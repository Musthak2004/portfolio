"use client";

import { useState } from "react";
import { Container } from "@/components/ui/primitives";
import { track } from "@/lib/site";

const services = ["Website", "Web App", "Mobile App", "AI Automation", "Custom Software", "SEO", "Technical Content", "Not sure"];
const budgets = ["< $500", "$500 – $1.5k", "$1.5k – $5k", "$5k+", "Not sure yet"];
const timelines = ["ASAP", "1 month", "1–3 months", "Flexible"];

const inputCls =
  "w-full px-4 py-3 bg-[#07070D] border border-surface-border text-ink placeholder-ink-dim text-sm focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-colors min-h-[48px]";

export default function StartProjectForm() {
  const [service, setService] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    if (!service) { setError("Please choose what you are looking to build."); return; }
    setStatus("sending"); setError("");
    track("form_started", { service });
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, service, source: "website/start-project" }),
      });
      if (!res.ok) throw new Error("submit failed");
      setStatus("done");
      track("form_submitted", { service });
    } catch {
      setStatus("error");
      setError("Something went wrong. Please email musthakcool55@gmail.com directly.");
    }
  }

  if (status === "done") {
    return (
      <div className="border border-emerald-400/20 bg-emerald-400/5 p-8 md:p-10 text-center" role="status">
        <p className="font-mono text-xs text-emerald-400 mb-3">✓ PROJECT BRIEF RECEIVED</p>
        <h2 className="text-2xl font-bold text-ink mb-3">Thank you — brief received.</h2>
        <p className="text-ink-muted leading-relaxed max-w-md mx-auto">
          Your project brief is in. MS Bee reviews every brief personally and follows up
          with next steps or clarifying questions.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="border border-surface-border bg-surface-light p-6 md:p-8 space-y-6" aria-label="Project brief form" noValidate={false}>
      <div>
        <span id="service-label" className="block font-mono text-xs text-ink-muted mb-3">01 — WHAT ARE YOU LOOKING TO BUILD? *</span>
        <div className="flex flex-wrap gap-2" role="group" aria-labelledby="service-label">
          {services.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setService(s)}
              aria-pressed={service === s}
              className={`px-4 py-2.5 text-sm border transition-colors min-h-[44px] ${
                service === s ? "border-accent bg-accent/10 text-ink" : "border-surface-border text-ink-muted hover:text-ink hover:border-ink-dim"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="problem" className="block font-mono text-xs text-ink-muted mb-2">02 — WHAT PROBLEM ARE YOU TRYING TO SOLVE? *</label>
        <textarea id="problem" name="problem" rows={4} required placeholder="Describe the problem, not just the deliverable…" className={`${inputCls} resize-none`} />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="company" className="block font-mono text-xs text-ink-muted mb-2">03 — COMPANY / INDUSTRY</label>
          <input id="company" name="company" placeholder="Company + industry" className={inputCls} autoComplete="organization" />
        </div>
        <div>
          <label htmlFor="current_system" className="block font-mono text-xs text-ink-muted mb-2">04 — CURRENT WEBSITE OR SYSTEM</label>
          <input id="current_system" name="current_system" placeholder="https://… or current tools" className={inputCls} />
        </div>
      </div>

      <div>
        <label htmlFor="expected_outcome" className="block font-mono text-xs text-ink-muted mb-2">05 — EXPECTED OUTCOME</label>
        <textarea id="expected_outcome" name="expected_outcome" rows={3} placeholder="What does success look like?" className={`${inputCls} resize-none`} />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="timeline" className="block font-mono text-xs text-ink-muted mb-2">06 — TIMELINE</label>
          <select id="timeline" name="timeline" className={inputCls} defaultValue="">
            <option value="" disabled>Select…</option>
            {timelines.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="budget" className="block font-mono text-xs text-ink-muted mb-2">07 — BUDGET RANGE</label>
          <select id="budget" name="budget" className={inputCls} defaultValue="">
            <option value="" disabled>Select…</option>
            {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
          </select>
        </div>
      </div>

      <div className="grid sm:grid-cols-3 gap-5">
        <div>
          <label htmlFor="name" className="block font-mono text-xs text-ink-muted mb-2">08 — NAME *</label>
          <input id="name" name="name" required placeholder="Your name" className={inputCls} autoComplete="name" />
        </div>
        <div>
          <label htmlFor="email" className="block font-mono text-xs text-ink-muted mb-2">EMAIL *</label>
          <input id="email" name="email" type="email" required placeholder="your@email.com" className={inputCls} autoComplete="email" />
        </div>
        <div>
          <label htmlFor="whatsapp" className="block font-mono text-xs text-ink-muted mb-2">WHATSAPP</label>
          <input id="whatsapp" name="whatsapp" placeholder="+94 …" className={inputCls} autoComplete="tel" />
        </div>
      </div>

      {error && <p role="alert" className="text-sm text-red-400">{error}</p>}

      <button type="submit" disabled={status === "sending"} className="w-full bg-accent text-white px-6 py-3.5 text-sm font-medium transition-all hover:bg-accent-hover active:scale-[0.98] min-h-[52px] disabled:opacity-60">
        {status === "sending" ? "Sending…" : "Submit Project Brief →"}
      </button>
    </form>
  );
}
