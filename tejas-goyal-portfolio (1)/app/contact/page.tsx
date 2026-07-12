import type { Metadata } from "next";
import { Mail, Download, ArrowUpRight } from "lucide-react";
import { LinkedinIcon } from "@/components/ui/linkedin-icon";
import { PageHero } from "@/components/sections/page-hero";
import { FadeIn } from "@/components/ui/fade-in";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact — Tejas Goyal",
  description: profile.contactCta,
};

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: profile.linkedin,
  },
  {
    icon: Download,
    label: "Resume",
    value: "Download PDF",
    href: profile.resumeFile,
  },
];

export default function ContactPage() {
  return (
    <div>
      <PageHero eyebrow="Contact" title={profile.contactCta} />

      <section className="mx-auto max-w-3xl px-6 pb-32">
        <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] divide-y divide-[var(--border)]">
          {channels.map((channel, i) => (
            <FadeIn key={channel.label} delay={i * 0.06}>
              <a
                href={channel.href}
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center justify-between p-6 hover:bg-[var(--accent-soft)] transition-colors first:rounded-t-2xl last:rounded-b-2xl"
              >
                <div className="flex items-center gap-4">
                  <span className="flex items-center justify-center h-10 w-10 rounded-full bg-[var(--accent-soft)] text-[var(--accent)]">
                    <channel.icon size={16} />
                  </span>
                  <div>
                    <p className="text-xs text-[var(--muted)]">{channel.label}</p>
                    <p className="text-sm font-medium">{channel.value}</p>
                  </div>
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-[var(--muted)] group-hover:text-[var(--accent)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                />
              </a>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
