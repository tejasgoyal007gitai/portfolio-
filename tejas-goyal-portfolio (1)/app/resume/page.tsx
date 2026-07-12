import type { Metadata } from "next";
import { Download } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { FadeIn } from "@/components/ui/fade-in";
import { LinkButton } from "@/components/ui/button";
import { Pill } from "@/components/ui/section-heading";
import { profile, skills } from "@/data/profile";
import { education } from "@/data/education";
import { achievements, extraCurriculars } from "@/data/achievements";

export const metadata: Metadata = {
  title: "Resume — Tejas Goyal",
  description: "Download the full resume, plus a quick skills and education snapshot.",
};

export default function ResumePage() {
  return (
    <div>
      <PageHero
        eyebrow="Resume"
        title="Everything on paper, in one place"
        description="The full document, plus a quick-scan snapshot below."
      />

      <section className="mx-auto max-w-6xl px-6 pb-24 grid lg:grid-cols-[1.1fr_1fr] gap-12">
        <FadeIn>
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8">
            <div className="aspect-[8.5/11] w-full rounded-lg border border-[var(--border)] bg-[var(--accent-soft)] flex items-center justify-center mb-6">
              <p className="text-[var(--muted)] text-sm">Resume preview</p>
            </div>
            <LinkButton href={profile.resumeFile} variant="primary" className="w-full justify-center">
              <Download size={15} /> Download Resume (PDF)
            </LinkButton>
          </div>
        </FadeIn>

        <div className="space-y-10">
          <FadeIn delay={0.08}>
            <div>
              <p className="font-mono-num text-xs uppercase tracking-[0.18em] text-[var(--accent)] mb-5">
                Skills Summary
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

          <FadeIn delay={0.16}>
            <div>
              <p className="font-mono-num text-xs uppercase tracking-[0.18em] text-[var(--accent)] mb-5">
                Education Snapshot
              </p>
              <div className="space-y-4">
                {education.map((ed) => (
                  <div
                    key={ed.course}
                    className="flex justify-between items-baseline gap-4 pb-4 border-b border-[var(--border)] last:border-0"
                  >
                    <div>
                      <p className="text-sm font-medium">{ed.course}</p>
                      <p className="text-xs text-[var(--muted)]">{ed.institute}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="font-mono-num text-xs text-[var(--muted)]">{ed.year}</p>
                      <p className="font-mono-num text-xs text-[var(--accent)]">{ed.score}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24 grid md:grid-cols-2 gap-12 border-t border-[var(--border)] pt-16">
        <FadeIn>
          <div>
            <p className="font-mono-num text-xs uppercase tracking-[0.18em] text-[var(--accent)] mb-5">
              Achievements
            </p>
            <div className="space-y-5">
              {achievements.map((a) => (
                <div key={a.title} className="pb-5 border-b border-[var(--border)] last:border-0">
                  <div className="flex justify-between items-baseline gap-3 mb-1">
                    <p className="text-sm font-medium">{a.title}</p>
                    <p className="font-mono-num text-xs text-[var(--muted)] shrink-0">{a.year}</p>
                  </div>
                  <p className="text-xs text-[var(--muted)]">{a.description}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div>
            <p className="font-mono-num text-xs uppercase tracking-[0.18em] text-[var(--accent)] mb-5">
              Extra-Curricular
            </p>
            <div className="space-y-5">
              {extraCurriculars.map((e) => (
                <div key={e.title} className="pb-5 border-b border-[var(--border)] last:border-0">
                  <p className="text-sm font-medium mb-1">{e.title}</p>
                  <p className="text-xs text-[var(--muted)]">{e.description}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
