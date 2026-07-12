export type TimelineCategory =
  | "Education"
  | "Experience"
  | "Leadership"
  | "Project"
  | "Achievement"
  | "Goal";

export interface TimelineEntry {
  date: string; // sort key, e.g. "2025-28", "2024", "2023"
  year: string; // display label
  category: TimelineCategory;
  title: string;
  detail: string;
}

// Ordered newest-first for display; the `date` field is kept for future
// automated sorting if entries are added out of order.
export const timeline: TimelineEntry[] = [
  {
    date: "2028",
    year: "2028 (Goal)",
    category: "Goal",
    title: "Launch a self-funded venture at scale",
    detail: "Move from small, self-funded projects to a venture with external customers and a real team.",
  },
  {
    date: "2025-28",
    year: "2025 – 28",
    category: "Education",
    title: "BBA, Digital Business & Entrepreneurship",
    detail: "IIM Bangalore — pursuing.",
  },
  {
    date: "2025-28",
    year: "2025 – 28",
    category: "Education",
    title: "UG in Entrepreneurship",
    detail: "Institute of Venture Building — pursuing.",
  },
  {
    date: "2024",
    year: "2024",
    category: "Achievement",
    title: "3rd Rank, SDG Hackathon — AuReCell",
    detail: "Co-developed a bacterial-bioremediation venture for sustainable gold recovery.",
  },
  {
    date: "2024",
    year: "2024",
    category: "Experience",
    title: "Founder & Operator, SnapMoment",
    detail: "₹3.2K revenue and ₹2.8K profit in 7 days from a zero-investment photography service.",
  },
  {
    date: "2024",
    year: "2024",
    category: "Project",
    title: "Online Blitz Chess Tournament",
    detail: "3× revenue and 20% ROI with UPI-based registration and payouts.",
  },
  {
    date: "2024",
    year: "2024",
    category: "Leadership",
    title: "E-Sports Admin",
    detail: "Managed logistics and player coordination for a 4-day global esports tournament.",
  },
  {
    date: "2024",
    year: "2024",
    category: "Achievement",
    title: "1st Place, Business Acumen Olympiad",
    detail: "Top 1000 internationally; 1st place at school level.",
  },
  {
    date: "2023-24",
    year: "2023 – 24",
    category: "Experience",
    title: "Media Team, CEGC",
    detail: "Managed official social media, reaching 14.3M views across campaigns.",
  },
  {
    date: "2025",
    year: "2025",
    category: "Education",
    title: "Class XII (CBSE) — 91.4%",
    detail: "Amarchand Singhvi International School.",
  },
  {
    date: "2023",
    year: "2023",
    category: "Education",
    title: "Class X (State Board) — 89.0%",
    detail: "St. Xavier's School.",
  },
];
