import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { FadeIn } from "@/components/ui/fade-in";
import { Pill } from "@/components/ui/section-heading";
import { profile, skills } from "@/data/profile";

export const metadata: Metadata = {
  title: "About — Tejas Goyal",
  description: profile.about.journey,
};

export default function AboutPage() {
  return (
    <div>
      <PageHero eyebrow="About" title={profile.about.heading} />

      <section className="mx-auto max-w-6xl px-6 pb-20 grid lg:grid-cols-[1.4fr_1fr] gap-16">
        {/* Left: narrative */}
        <div className="space-y-10">
          <FadeIn>
            <div>
              <p className="font-mono-num text-xs uppercase tracking-[0.18em] text-[var(--accent)] mb-3">
                Journey
              </p>
              <p className="text-lg leading-relaxed text-[var(--ink)]">
                {profile.about.journey}
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div>
              <p className="font-mono-num text-xs uppercase tracking-[0.18em] text-[var(--accent)] mb-3">
                What drives me
              </p>
              <p className="text-lg leading-relaxed text-[var(--ink)]">
                {profile.about.drives}
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.16}>
            <div>
              <p className="font-mono-num text-xs uppercase tracking-[0.18em] text-[var(--accent)] mb-3">
                Currently learning
              </p>
              <p className="text-lg leading-relaxed text-[var(--ink)]">
                {profile.about.currentlyLearning}
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.24}>
            <div>
              <p className="font-mono-num text-xs uppercase tracking-[0.18em] text-[var(--accent)] mb-4">
                Values
              </p>
              <ul className="space-y-3">
                {profile.about.values.map((value, i) => (
                  <li key={value} className="flex items-baseline gap-3 text-[var(--ink)]">
                    <span className="font-mono-num text-xs text-[var(--muted)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="ledger-rule pb-1 w-full">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>

        {/* Right: quick facts + skills */}
        <div className="space-y-8">
          <FadeIn delay={0.1}>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
              <p className="font-mono-num text-xs uppercase tracking-[0.18em] text-[var(--accent)] mb-5">
                Quick Facts
              </p>
              <dl className="space-y-4">
                {profile.about.quickFacts.map((fact) => (
                  <div key={fact.label} className="flex flex-col gap-0.5 pb-4 border-b border-[var(--border)] last:border-0 last:pb-0">
                    <dt className="text-xs text-[var(--muted)]">{fact.label}</dt>
                    <dd className="text-sm font-medium">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </FadeIn>

          <FadeIn delay={0.18}>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
              <p className="font-mono-num text-xs uppercase tracking-[0.18em] text-[var(--accent)] mb-5">
                Skills Overview
              </p>
              <div className="space-y-5">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <p className="text-xs text-[var(--muted)] mb-2">{category}</p>
                    <div className="flex flex-wrap gap-2">
                      {items.map((item) => (
                        <Pill key={item}>{item}</Pill>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
