"use client";

import { useState } from "react";
import { profile } from "@/data/profile";

export function Footer() {
  const [brewing, setBrewing] = useState(false);

  return (
    <footer className="border-t border-[var(--border)] mt-24">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--muted)]">
        <p>© 2026 {profile.name}</p>
        <button
          onMouseEnter={() => setBrewing(true)}
          onMouseLeave={() => setBrewing(false)}
          className="cursor-default select-none"
        >
          Built with curiosity and countless cups of coffee
          <span className="inline-block ml-1 transition-transform duration-500" style={{ transform: brewing ? "rotate(-8deg)" : "none" }}>
            ☕
          </span>
        </button>
      </div>
    </footer>
  );
}
