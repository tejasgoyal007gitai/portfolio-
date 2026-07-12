import { FadeIn } from "@/components/ui/fade-in";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-16 pb-12 sm:pt-24 sm:pb-16">
      <FadeIn>
        <p className="font-mono-num text-xs uppercase tracking-[0.18em] text-[var(--accent)] mb-4">
          {eyebrow}
        </p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl max-w-3xl leading-[1.08] mb-6">
          {title}
        </h1>
        {description && (
          <p className="text-[var(--muted)] text-lg max-w-xl leading-relaxed">{description}</p>
        )}
      </FadeIn>
    </section>
  );
}
