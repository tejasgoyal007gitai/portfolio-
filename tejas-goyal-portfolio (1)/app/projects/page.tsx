import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { FadeIn } from "@/components/ui/fade-in";
import { ProjectCard } from "@/components/sections/project-card";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects — Tejas Goyal",
  description: "Ventures, case studies, and live projects — updated continuously.",
};

export default function ProjectsPage() {
  return (
    <div>
      <PageHero
        eyebrow="Projects"
        title="Small bets, run like real businesses"
        description="Each card below is a self-contained venture — priced, launched, and measured. New case studies are added here as they happen, with no change to the layout."
      />

      <section className="mx-auto max-w-6xl px-6 pb-24 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <FadeIn key={project.slug} delay={(i % 3) * 0.08}>
            <ProjectCard project={project} index={i} />
          </FadeIn>
        ))}
      </section>
    </div>
  );
}
