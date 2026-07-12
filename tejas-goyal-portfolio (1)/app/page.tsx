import Link from "next/link";
import { ArrowUpRight, FileText, Mail } from "lucide-react";
import { LinkedinIcon } from "@/components/ui/linkedin-icon";
import { profile } from "@/data/profile";
import { getFeaturedProjects } from "@/data/projects";
import { LinkButton } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { LedgerStats } from "@/components/sections/ledger-stats";
import { ProjectCard } from "@/components/sections/project-card";
import { SectionHeading } from "@/components/ui/section-heading";

const explore = [
  { href: "/about", label: "About", detail: "The person behind the work" },
  { href: "/experience", label: "Professional Experience", detail: "Where I've operated" },
  { href: "/leadership", label: "Leadership & PORs", detail: "Teams I've led" },
  { href: "/timeline", label: "Timeline", detail: "The full journey, in order" },
];

export default function Home() {
  const featured = getFeaturedProjects(3);

  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-20 sm:pt-28 sm:pb-28">
        <FadeIn>
          <p className="font-mono-num text-xs uppercase tracking-[0.18em] text-[var(--accent)] mb-6">
            {profile.hero.kicker}
          </p>
        </FadeIn>
        <FadeIn delay={0.08}>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl max-w-3xl leading-[1.08] mb-6">
            {profile.hero.headline}
          </h1>
        </FadeIn>
        <FadeIn delay={0.16}>
          <p className="text-[var(--muted)] text-lg max-w-xl leading-relaxed mb-10">
            {profile.hero.subhead}
          </p>
        </FadeIn>
        <FadeIn delay={0.24}>
          <div className="flex flex-wrap items-center gap-4">
            <LinkButton href={profile.resumeFile} variant="primary">
              <FileText size={15} /> View Resume
            </LinkButton>
            <LinkButton href={profile.linkedin} variant="secondary">
              <LinkedinIcon size={15} /> LinkedIn
            </LinkButton>
            <LinkButton href={`mailto:${profile.email}`} variant="ghost">
              <Mail size={15} /> {profile.email}
            </LinkButton>
          </div>
        </FadeIn>
      </section>

      {/* Ledger stats — signature element */}
      <LedgerStats />

      {/* Current focus */}
      <section className="mx-auto max-w-6xl px-6 py-20 grid sm:grid-cols-[1fr_2fr] gap-8 sm:gap-16">
        <FadeIn>
          <p className="font-mono-num text-xs uppercase tracking-[0.18em] text-[var(--accent)]">
            Currently
          </p>
        </FadeIn>
        <FadeIn delay={0.08}>
          <p className="font-display text-2xl sm:text-3xl leading-snug">
            {profile.currentFocus}
          </p>
        </FadeIn>
      </section>

      {/* Featured work */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading
          eyebrow="Featured Work"
          title="A few ventures worth a closer look"
          description="Every project below started as a small, self-funded bet. More case studies land here as they happen."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project, i) => (
            <FadeIn key={project.slug} delay={i * 0.08}>
              <ProjectCard project={project} index={i} />
            </FadeIn>
          ))}
        </div>
        <div className="mt-10">
          <LinkButton href="/projects" variant="secondary">
            View all projects <ArrowUpRight size={15} />
          </LinkButton>
        </div>
      </section>

      {/* Explore other pages */}
      <section className="mx-auto max-w-6xl px-6 py-20 border-t border-[var(--border)]">
        <SectionHeading eyebrow="Explore" title="More of the story" align="left" />
        <div className="grid sm:grid-cols-2 gap-px bg-[var(--border)] rounded-2xl overflow-hidden border border-[var(--border)]">
          {explore.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group bg-[var(--surface)] p-8 flex items-center justify-between transition-colors hover:bg-[var(--accent-soft)]"
            >
              <div>
                <h3 className="font-display text-xl mb-1">{item.label}</h3>
                <p className="text-sm text-[var(--muted)]">{item.detail}</p>
              </div>
              <ArrowUpRight
                size={18}
                className="text-[var(--muted)] group-hover:text-[var(--accent)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
              />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
