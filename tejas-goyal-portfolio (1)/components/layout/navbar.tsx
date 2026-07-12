"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "./theme-provider";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/leadership", label: "Leadership" },
  { href: "/projects", label: "Projects" },
  { href: "/timeline", label: "Timeline" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- closing the mobile menu on route change is a deliberate sync with the router, not derivable state
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-colors duration-300",
        scrolled
          ? "bg-[var(--bg)]/90 backdrop-blur border-b border-[var(--border)]"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-display text-lg tracking-tight">
          Tejas Goyal
        </Link>

        <div className="hidden md:flex items-center gap-7">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm transition-colors relative pb-1",
                  active ? "text-[var(--ink)]" : "text-[var(--muted)] hover:text-[var(--ink)]"
                )}
              >
                {link.label}
                {active && (
                  <span className="absolute -bottom-[1px] left-0 right-0 h-[1.5px] bg-[var(--accent)]" />
                )}
              </Link>
            );
          })}
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="rounded-full p-2 text-[var(--muted)] hover:text-[var(--ink)] hover:bg-[var(--accent-soft)] transition-colors"
          >
            {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
          </button>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--bg)] px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm",
                pathname === link.href ? "text-[var(--ink)]" : "text-[var(--muted)]"
              )}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 text-sm text-[var(--muted)]"
          >
            {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
            Toggle theme
          </button>
        </div>
      )}
    </header>
  );
}
