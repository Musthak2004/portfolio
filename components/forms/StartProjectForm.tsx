"use client";

import { useState } from "react";
import { track } from "@/lib/site";

const services = ["Website", "Web App", "Mobile App", "AI Automation", "Custom Software", "SEO", "Technical Content", "Not sure"];
const budgets = ["< $500", "$500 – $1.5k", "$1.5k – $5k", "$5k+", "Not sure yet"];
const timelines = ["ASAP", "1 month", "1–3 months", "Flexible"];

const inputCls =
  "w-full min-h-[48px] rounded-[1px] border border-surface-border bg-[#07070D] px-4 py-3 text-sm text-ink placeholder:text-ink-dim transition-colors focus:border-accent/60 focus:outline-none focus:ring-1 focus:ring-accent/25";

const labelCls = "mb-2 block font-mono text-[10px] uppercase tracking-[0.14em] text-ink-muted";

export default function StartProjectForm() {
  const [service, setService] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    if (!service) {
      setError("Please choose what you are looking to build.");
      return;
    }
    setStatus("sending");
    setError("");
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
      <div className="border border-emerald-400/25 bg-emerald-400/[0.05] p-8 text-center md:p-12" role="status">
        <span className="inline-flex border border-emerald-400/30 bg-emerald-400/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-emerald-400">
          ✓ Project brief received
        </span>
        <h2 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-ink">Thank you — brief received.</h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-ink-muted">
          MS Bee reviews every brief personally and follows up with next steps or clarifying
          questions. Nothing else is needed from you right now.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="border border-surface-border bg-surface p-6 md:p-8"
      aria-label="Project brief form"
      noValidate={false}
    >
      <div className="space-y-8">
        <div>
          <span id="service-label" className={labelCls}>
            01 — What are you looking to build? *
          </span>
          <div className="flex flex-wrap gap-2" role="group" aria-labelledby="service-label">
            {services.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setService(s)}
                aria-pressed={service === s}
                className={`min-h-[44px] rounded-[1px] border px-4 py-2.5 text-sm transition-colors ${
                  service === s
                    ? "border-accent/60 bg-accent/10 text-ink"
                    : "border-surface-border text-ink-muted hover:border-surface-strong hover:text-ink"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="problem" className={labelCls}>
            02 — What problem are you trying to solve? *
          </label>
          <textarea
            id="problem"
            name="problem"
            rows={4}
            required
            placeholder="Describe the problem, not just the deliverable…"
            className={`${inputCls} resize-none`}
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="company" className={labelCls}>03 — Company / industry</label>
            <input id="company" name="company" placeholder="Company + industry" className={inputCls} autoComplete="organization" />
          </div>
          <div>
            <label htmlFor="current_system" className={labelCls}>04 — Current website or system</label>
            <input id="current_system" name="current_system" placeholder="https://… or current tools" className={inputCls} />
          </div>
        </div>

        <div>
          <label htmlFor="expected_outcome" className={labelCls}>05 — Expected outcome</label>
          <textarea
            id="expected_outcome"
            name="expected_outcome"
            rows={3}
            placeholder="What does success look like?"
            className={`${inputCls} resize-none`}
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="timeline" className={labelCls}>06 — Timeline</label>
            <select id="timeline" name="timeline" className={inputCls} defaultValue="">
              <option value="" disabled>Select…</option>
              {timelines.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="budget" className={labelCls}>07 — Budget range</label>
            <select id="budget" name="budget" className={inputCls} defaultValue="">
              <option value="" disabled>Select…</option>
              {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
            </select>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-3">
          <div>
            <label htmlFor="name" className={labelCls}>08 — Name *</label>
            <input id="name" name="name" required placeholder="Your name" className={inputCls} autoComplete="name" />
          </div>
          <div>
            <label htmlFor="email" className={labelCls}>Email *</label>
            <input id="email" name="email" type="email" required placeholder="your@email.com" className={inputCls} autoComplete="email" />
          </div>
          <div>
            <label htmlFor="whatsapp" className={labelCls}>WhatsApp</label>
            <input id="whatsapp" name="whatsapp" placeholder="+94 …" className={inputCls} autoComplete="tel" />
          </div>
        </div>
      </div>

      {error && (
        <p role="alert" className="mt-6 border border-red-400/25 bg-red-400/[0.05] px-4 py-3 text-sm text-red-400">
          {error}
        </p>
      )}

      <div className="mt-8 flex flex-col gap-3 border-t border-surface-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-dim">
          Reviewed personally · No automated sales sequence
        </p>
        <button
          type="submit"
          disabled={status === "sending"}
          className="btn-primary btn-sweep min-h-[52px] w-full justify-center sm:w-auto disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Submit Project Brief"}
          {status !== "sending" && <span aria-hidden="true">→</span>}
        </button>
      </div>
    </form>
  );
}
