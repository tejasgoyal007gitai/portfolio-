import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { FadeIn } from "@/components/ui/fade-in";
import { Pill } from "@/components/ui/section-heading";
import { experiences } from "@/data/experience";

export const metadata: Metadata = {
  title: "Professional Experience — Tejas Goyal",
  description: "Where Tejas Goyal has operated, built, and delivered results.",
};

export default function ExperiencePage() {
  return (
    <div>
      <PageHero
        eyebrow="Professional Experience"
        title="Practical work, with numbers to show for it"
        description="Every role below combines execution with a measurable outcome — not just a job title."
      />

      <section className="mx-auto max-w-5xl px-6 pb-24 space-y-6">
        {experiences.map((exp, i) => (
          <FadeIn key={exp.slug} delay={i * 0.1}>
            <div
              className={`grid md:grid-cols-[1fr_1.4fr] gap-6 md:gap-12 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 transition-shadow hover:shadow-[0_20px_40px_-28px_rgba(0,0,0,0.15)] ${
                i % 2 === 1 ? "md:[direction:rtl]" : ""
              }`}
            >
              <div className="md:[direction:ltr]">
                <p className="font-mono-num text-xs text-[var(--muted)] mb-2">{exp.duration}</p>
                <h3 className="font-display text-2xl mb-1">{exp.role}</h3>
                <p className="text-[var(--accent)] text-sm font-medium mb-5">{exp.organization}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((s) => (
                    <Pill key={s}>{s}</Pill>
                  ))}
                </div>
              </div>
              <div className="md:[direction:ltr]">
                <p className="text-[var(--ink)] leading-relaxed mb-5">{exp.description}</p>
                <p className="font-mono-num text-xs uppercase tracking-wide text-[var(--muted)] mb-3">
                  Key Outcomes
                </p>
                <ul className="space-y-2">
                  {exp.outcomes.map((outcome) => (
                    <li key={outcome} className="flex gap-3 text-sm">
                      <span className="text-[var(--accent)]">—</span>
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        ))}
      </section>
    </div>
  );
}
