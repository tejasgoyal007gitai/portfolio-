import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getProjectBySlug, getRelatedProjects, projects } from "@/data/projects";
import { FadeIn } from "@/components/ui/fade-in";
import { Pill } from "@/components/ui/section-heading";
import { ProjectCard } from "@/components/sections/project-card";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Tejas Goyal`,
    description: project.problem,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const related = getRelatedProjects(project, 2);

  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pt-16 pb-12">
        <FadeIn>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--ink)] mb-8"
          >
            <ArrowLeft size={14} /> All projects
          </Link>
          <p className="font-mono-num text-xs uppercase tracking-[0.18em] text-[var(--accent)] mb-4">
            {project.category} · {project.timeline}
          </p>
          <h1 className="font-display text-4xl sm:text-5xl mb-4 leading-tight">
            {project.title}
          </h1>
          <p className="text-[var(--muted)] text-lg">{project.role}</p>
        </FadeIn>
      </section>

      <div className="mx-auto max-w-5xl px-6 aspect-[16/7] rounded-2xl bg-[var(--accent-soft)] mb-16 flex items-center justify-center">
        <span className="font-display text-7xl text-[var(--accent)]/25">
          {project.title.slice(0, 2).toUpperCase()}
        </span>
      </div>

      {/* Overview / narrative */}
      <section className="mx-auto max-w-3xl px-6 pb-20 space-y-14">
        <FadeIn>
          <div>
            <p className="font-mono-num text-xs uppercase tracking-[0.18em] text-[var(--accent)] mb-3">
              Problem
            </p>
            <p className="text-lg leading-relaxed">{project.problem}</p>
          </div>
        </FadeIn>

        {project.research && (
          <FadeIn>
            <div>
              <p className="font-mono-num text-xs uppercase tracking-[0.18em] text-[var(--accent)] mb-3">
                Research
              </p>
              <p className="text-lg leading-relaxed">{project.research}</p>
            </div>
          </FadeIn>
        )}

        <FadeIn>
          <div>
            <p className="font-mono-num text-xs uppercase tracking-[0.18em] text-[var(--accent)] mb-3">
              Approach
            </p>
            <p className="text-lg leading-relaxed">{project.approach}</p>
          </div>
        </FadeIn>

        <FadeIn>
          <div>
            <p className="font-mono-num text-xs uppercase tracking-[0.18em] text-[var(--accent)] mb-3">
              Solution
            </p>
            <p className="text-lg leading-relaxed">{project.solution}</p>
          </div>
        </FadeIn>

        <FadeIn>
          <div>
            <p className="font-mono-num text-xs uppercase tracking-[0.18em] text-[var(--accent)] mb-4">
              Results
            </p>
            <ul className="space-y-3">
              {project.results.map((r) => (
                <li key={r} className="flex gap-3 text-lg">
                  <span className="text-[var(--accent)]">—</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        {project.reflection && (
          <FadeIn>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
              <p className="font-mono-num text-xs uppercase tracking-[0.18em] text-[var(--accent)] mb-3">
                Reflection
              </p>
              <p className="text-lg leading-relaxed italic">{project.reflection}</p>
            </div>
          </FadeIn>
        )}

        <FadeIn>
          <div>
            <p className="font-mono-num text-xs uppercase tracking-[0.18em] text-[var(--accent)] mb-4">
              Skills
            </p>
            <div className="flex flex-wrap gap-2">
              {project.skills.map((s) => (
                <Pill key={s}>{s}</Pill>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Related projects */}
      {related.length > 0 && (
        <section className="mx-auto max-w-5xl px-6 pb-24 border-t border-[var(--border)] pt-16">
          <p className="font-mono-num text-xs uppercase tracking-[0.18em] text-[var(--accent)] mb-8">
            Related Projects
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {related.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm mt-10 text-[var(--accent)]"
          >
            View all projects <ArrowUpRight size={14} />
          </Link>
        </section>
      )}
    </div>
  );
}
