import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { Pill } from "@/components/ui/section-heading";

export function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block rounded-2xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-24px_rgba(0,0,0,0.15)]"
    >
      <div className="aspect-[4/3] w-full bg-[var(--accent-soft)] flex items-center justify-center relative overflow-hidden">
        <span className="font-display text-6xl text-[var(--accent)]/25">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="p-6">
        <p className="font-mono-num text-xs uppercase tracking-wide text-[var(--accent)] mb-2">
          {project.category}
        </p>
        <h3 className="font-display text-xl mb-2 flex items-center gap-1.5">
          {project.title}
          <ArrowUpRight
            size={16}
            className="opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300 text-[var(--accent)]"
          />
        </h3>
        <p className="text-sm text-[var(--muted)] leading-relaxed mb-4 line-clamp-2">
          {project.problem}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.skills.slice(0, 3).map((skill) => (
            <Pill key={skill}>{skill}</Pill>
          ))}
        </div>
      </div>
    </Link>
  );
}
