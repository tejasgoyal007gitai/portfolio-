import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { FadeIn } from "@/components/ui/fade-in";
import { timeline, type TimelineCategory } from "@/data/timeline";

export const metadata: Metadata = {
  title: "Timeline — Tejas Goyal",
  description: "The full journey — education, experience, leadership, and projects, in order.",
};

const categoryColor: Record<TimelineCategory, string> = {
  Education: "text-[var(--accent)]",
  Experience: "text-[var(--ink)]",
  Leadership: "text-[var(--ink)]",
  Project: "text-[var(--ink)]",
  Achievement: "text-[var(--accent)]",
  Goal: "text-[var(--muted)]",
};

export default function TimelinePage() {
  return (
    <div>
      <PageHero
        eyebrow="Timeline"
        title="The journey, entry by entry"
        description="Every line below is a real, dated entry — education, ventures, leadership, and the odd hackathon podium — read top to bottom like a ledger."
      />

      <section className="mx-auto max-w-3xl px-6 pb-24">
        <div className="relative border-l border-[var(--border)] pl-8 space-y-10">
          {timeline.map((entry, i) => (
            <FadeIn key={`${entry.title}-${i}`} delay={Math.min(i * 0.05, 0.4)}>
              <div className="relative">
                <span className="absolute -left-[38px] top-1.5 h-2.5 w-2.5 rounded-full bg-[var(--accent)]" />
                <p className="font-mono-num text-xs text-[var(--muted)] mb-1">{entry.year}</p>
                <p className={`font-mono-num text-[11px] uppercase tracking-wide mb-2 ${categoryColor[entry.category]}`}>
                  {entry.category}
                </p>
                <h3 className="font-display text-xl mb-1.5">{entry.title}</h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">{entry.detail}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
