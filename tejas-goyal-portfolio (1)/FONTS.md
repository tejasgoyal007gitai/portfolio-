# Restoring the intended fonts (Fraunces / Inter / IBM Plex Mono)

This build was assembled in a sandbox with no network access to Google
Fonts, so `app/layout.tsx` currently ships a system-font fallback stack
(defined in `app/globals.css`) that approximates the intended pairing.

Once you deploy somewhere with normal internet access (Vercel, Netlify,
your own server), restore the real webfonts like this:

1. In `app/layout.tsx`, add back:

```tsx
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "soft"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono-plex",
  display: "swap",
});
```

2. Add the variable classes back to the `<body>` tag:

```tsx
<body className={`${fraunces.variable} ${inter.variable} ${plexMono.variable} antialiased`}>
```

3. In `app/globals.css`, delete the three fallback declarations
   (`--font-fraunces`, `--font-inter`, `--font-mono-plex`) from `:root` —
   `next/font` will inject the real ones automatically, and everything
   else (the `@theme inline` mapping, all Tailwind classes) stays exactly
   the same.

No other file needs to change — every component reads fonts through the
`font-display` / `font-body` / `font-mono` design tokens, not hardcoded
font names.
