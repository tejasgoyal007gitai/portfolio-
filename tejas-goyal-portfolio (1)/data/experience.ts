export interface Experience {
  slug: string;
  organization: string;
  role: string;
  duration: string;
  description: string;
  outcomes: string[];
  skills: string[];
}

// Add future internships here — each entry is fully self-contained.
export const experiences: Experience[] = [
  {
    slug: "snapmoment",
    organization: "SnapMoment",
    role: "Founder & Operator",
    duration: "2024",
    description:
      "Launched and ran a zero-investment photography service, designing a same-day delivery model to win bookings against slower, established competitors.",
    outcomes: [
      "Generated ₹3.2K revenue and ₹2.8K profit within 7 days",
      "Achieved 75% booking conversion using SCAMPER and JTBD frameworks",
    ],
    skills: ["Operations", "Pricing", "Customer Acquisition", "Service Design"],
  },
  {
    slug: "media-team-cegc",
    organization: "CEGC (Media Team)",
    role: "Social Media Manager",
    duration: "2023 – 2024",
    description:
      "Managed the official social media presence for CEGC, producing posts and stories to promote government-owned events to a broad public audience.",
    outcomes: [
      "Reached 14.3M views across campaigns",
      "Grew engagement through analytics-driven strategy and real-time interaction",
    ],
    skills: ["Social Media Strategy", "Content Analytics", "Community Engagement"],
  },
];
