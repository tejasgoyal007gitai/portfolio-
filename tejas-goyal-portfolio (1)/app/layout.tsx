import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { profile } from "@/data/profile";

// NOTE: this build sandbox has no network access to Google Fonts, so
// typography falls back to a curated system-font stack defined via CSS
// custom properties in globals.css (--font-fraunces / --font-inter /
// --font-mono-plex). See FONTS.md for the next/font/google snippet to
// restore the real Fraunces + Inter + IBM Plex Mono faces once deployed
// somewhere with normal internet access (e.g. Vercel).

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.tagline}`,
  description: profile.hero.subhead,
  metadataBase: new URL("https://tejasgoyal.example.com"),
  openGraph: {
    title: `${profile.name} — ${profile.tagline}`,
    description: profile.hero.subhead,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.tagline}`,
    description: profile.hero.subhead,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-4 focus:left-4 focus:bg-[var(--accent)] focus:text-white focus:px-4 focus:py-2 focus:rounded-md"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
