"use client";

import { FadeIn } from "@/components/ui/fade-in";

const entries = [
  { no: "01", label: "SnapMoment · 7-day revenue", value: "₹3.2K", sub: "₹2.8K profit" },
  { no: "02", label: "CEGC Media Team · reach", value: "14.3M", sub: "views" },
  { no: "03", label: "Chess Tournament · return", value: "3×", sub: "20% ROI" },
  { no: "04", label: "SnapMoment · conversion", value: "75%", sub: "booking rate" },
];

export function LedgerStats() {
  return (
    <div className="border-y border-[var(--border)]">
      <div className="mx-auto max-w-6xl px-6 divide-y divide-[var(--border)] sm:divide-y-0 sm:grid sm:grid-cols-4">
        {entries.map((entry, i) => (
          <FadeIn key={entry.no} delay={i * 0.08}>
            <div className="py-8 sm:px-6 sm:first:pl-0 sm:last:pr-0 sm:border-l sm:first:border-l-0 border-[var(--border)]">
              <p className="font-mono-num text-xs text-[var(--muted)] mb-2">
                Entry {entry.no}
              </p>
              <p className="font-display text-3xl mb-1">{entry.value}</p>
              <p className="text-sm text-[var(--muted)]">{entry.sub}</p>
              <p className="font-mono-num text-[11px] text-[var(--muted)] mt-3 uppercase tracking-wide">
                {entry.label}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
