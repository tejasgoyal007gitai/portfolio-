import Link from "next/link";
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

interface BaseProps {
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  children: React.ReactNode;
}

const variantStyles = {
  primary: "bg-[var(--ink)] text-[var(--bg)] hover:opacity-85",
  secondary:
    "border border-[var(--border)] text-[var(--ink)] hover:border-[var(--accent)] hover:text-[var(--accent)]",
  ghost: "text-[var(--ink)] hover:text-[var(--accent)]",
};

export function LinkButton({
  href,
  variant = "primary",
  className,
  children,
  ...props
}: BaseProps & { href: string } & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: BaseProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
