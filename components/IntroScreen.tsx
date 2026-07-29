"use client";

import { useEffect, useState } from "react";

const bootLines = [
  { text: "> Initializing MSK AI Solutions v1.0...", delay: 400 },
  { text: "> Loading automation modules...", delay: 900 },
  { text: "> Deploying AI agents...", delay: 1400 },
  { text: "  System ready.", delay: 2000 },
  { text: "", delay: 2500 },
  { text: "  Welcome, I'm Musthak M.", delay: 2800 },
];

const EXIT_AT = 3800;
const FADE_MS = 800;

export default function IntroScreen({ onFinish }: { onFinish: () => void }) {
  const [phase, setPhase] = useState<"entering" | "showing" | "exiting">("entering");
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      onFinish();
      return;
    }

    const t: ReturnType<typeof setTimeout>[] = [];

    t.push(setTimeout(() => setPhase("showing"), 60));
    bootLines.forEach(({ delay }) => {
      t.push(setTimeout(() => setVisible((v) => v + 1), delay));
    });
    t.push(setTimeout(() => setPhase("exiting"), EXIT_AT));
    t.push(setTimeout(onFinish, EXIT_AT + FADE_MS));

    return () => t.forEach(clearTimeout);
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#07070D] transition-all duration-700 ease-out ${
        phase === "entering"
          ? "opacity-0"
          : phase === "exiting"
          ? "opacity-0 scale-[1.02]"
          : "opacity-100"
      }`}
    >
      <div className="font-mono px-6 max-w-sm w-full">
        {bootLines.map((line, i) => {
          const shown = i < visible;
          const isHeading = i === bootLines.length - 1;
          const isReady = i === bootLines.length - 3;
          const isSystem = i <= bootLines.length - 4 && line.text.startsWith(">");

          return (
            <p
              key={i}
              className={`transition-all duration-[400ms] ease-out ${
                shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              } ${
                isHeading
                  ? "text-ink text-lg font-semibold mt-6"
                  : isReady
                  ? "text-[#A78BFA] font-medium"
                  : isSystem
                  ? "text-emerald-400/70"
                  : ""
              } ${!line.text ? "h-4" : "mb-2.5"}`}
            >
              {line.text || " "}
              {shown && isHeading && (
                <span className="text-accent animate-cursor-blink ml-0.5">_</span>
              )}
            </p>
          );
        })}
      </div>
    </div>
  );
}
