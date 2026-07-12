import { LinkButton } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-32 text-center">
      <p className="font-mono-num text-xs uppercase tracking-[0.18em] text-[var(--accent)] mb-4">
        Entry not found
      </p>
      <h1 className="font-display text-4xl mb-4">This page hasn&apos;t been written yet.</h1>
      <p className="text-[var(--muted)] mb-8">
        The page you&apos;re looking for doesn&apos;t exist — or hasn&apos;t been added yet.
      </p>
      <LinkButton href="/" variant="primary">
        Back to home
      </LinkButton>
    </div>
  );
}
