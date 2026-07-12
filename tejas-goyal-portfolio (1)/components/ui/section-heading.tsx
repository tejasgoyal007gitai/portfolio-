import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("mb-12", align === "center" && "text-center mx-auto max-w-2xl")}>
      {eyebrow && (
        <p className="font-mono-num text-xs uppercase tracking-[0.18em] text-[var(--accent)] mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl sm:text-4xl mb-4">{title}</h2>
      {description && (
        <p className="text-[var(--muted)] text-base leading-relaxed">{description}</p>
      )}
    </div>
  );
}

export function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-[var(--accent-soft)] text-[var(--ink)] px-3 py-1 text-xs font-medium">
      {children}
    </span>
  );
}
