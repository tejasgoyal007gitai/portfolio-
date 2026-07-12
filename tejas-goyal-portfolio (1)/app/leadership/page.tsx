import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { FadeIn } from "@/components/ui/fade-in";
import { leadershipRoles } from "@/data/leadership";

export const metadata: Metadata = {
  title: "Leadership & Positions of Responsibility — Tejas Goyal",
  description: "Teams and events Tejas Goyal has led beyond the classroom.",
};

export default function LeadershipPage() {
  return (
    <div>
      <PageHero
        eyebrow="Leadership & Positions of Responsibility"
        title="Leading beyond the classroom"
        description="Committees, tournaments, and productions I've been trusted to run — each with its own scale and its own lessons."
      />

      <section className="mx-auto max-w-6xl px-6 pb-24 grid md:grid-cols-2 gap-6">
        {leadershipRoles.map((role, i) => (
          <FadeIn key={role.slug} delay={i * 0.08}>
            <div className="h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 flex flex-col transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_-28px_rgba(0,0,0,0.15)]">
              <p className="font-mono-num text-xs text-[var(--muted)] mb-2">{role.duration}</p>
              <h3 className="font-display text-2xl mb-1">{role.title}</h3>
              <p className="text-[var(--accent)] text-sm font-medium mb-6">{role.organization}</p>

              <dl className="space-y-4 text-sm flex-1">
                <div>
                  <dt className="text-[var(--muted)] text-xs mb-1">Responsibility</dt>
                  <dd>{role.responsibility}</dd>
                </div>
                <div>
                  <dt className="text-[var(--muted)] text-xs mb-1">Scale</dt>
                  <dd>{role.scale}</dd>
                </div>
                <div>
                  <dt className="text-[var(--muted)] text-xs mb-1">Impact</dt>
                  <dd>{role.impact}</dd>
                </div>
                <div className="pt-3 border-t border-[var(--border)]">
                  <dt className="text-[var(--muted)] text-xs mb-1">Learnings</dt>
                  <dd className="text-[var(--ink)]">{role.learnings}</dd>
                </div>
              </dl>
            </div>
          </FadeIn>
        ))}
      </section>
    </div>
  );
}
