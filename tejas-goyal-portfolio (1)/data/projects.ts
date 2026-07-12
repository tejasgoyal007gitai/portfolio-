// ============================================================================
// PROJECT DATA
// To add a new project in the future: duplicate ONE object below, fill it in,
// and give it a unique `slug`. The project card grid and the /projects/[slug]
// detail page are both generated automatically from this array — no other
// code needs to change.
// ============================================================================

export interface Project {
  slug: string;
  title: string;
  category: string;
  timeline: string;
  role: string;
  coverImage: string; // path under /public, or a gradient placeholder id
  problem: string;
  research?: string;
  approach: string;
  solution: string;
  results: string[];
  reflection?: string;
  skills: string[];
  links?: { label: string; href: string }[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "snapmoment",
    title: "SnapMoment",
    category: "Venture · Services",
    timeline: "2024 · 7 days",
    role: "Founder & Sole Operator",
    coverImage: "/images/projects/placeholder-01.svg",
    problem:
      "Local event photography was slow to deliver and expensive to start — most providers required equipment investment and took days to hand over edited photos.",
    approach:
      "Applied SCAMPER and Jobs-to-be-Done thinking to strip the offering down to what customers actually valued: fast turnaround, not studio polish.",
    solution:
      "Launched a zero-investment photography service built around a same-day delivery model, using borrowed equipment and a streamlined editing workflow to beat competitors on speed.",
    results: [
      "₹3.2K revenue and ₹2.8K profit generated in 7 days",
      "75% booking conversion rate",
    ],
    reflection:
      "Speed was a stronger differentiator than quality in this market — a lesson that shaped how I evaluate every venture since.",
    skills: ["Service Design", "Pricing", "Operations", "Customer Acquisition"],
    featured: true,
  },
  {
    slug: "sdg-hackathon-aurecell",
    title: "AuReCell",
    category: "Venture · Biotech / Sustainability",
    timeline: "2024",
    role: "Co-Founder, Business Strategy",
    coverImage: "/images/projects/placeholder-02.svg",
    problem:
      "Traditional gold recovery methods are environmentally destructive, creating demand for a sustainable, bio-based alternative that could also be commercially viable.",
    research:
      "Studied bacterial bioremediation as a recovery mechanism and mapped the venture against SDG-aligned funding and go-to-market pathways.",
    approach:
      "Built the full business case alongside the technical co-founders: business model, operations plan, GTM strategy, and an 18-month roadmap.",
    solution:
      "Designed a bacterial-bioremediation venture for sustainable gold recovery, with supporting financials suitable for a panel pitch.",
    results: ["3rd Rank at the SDG Hackathon", "Panel-ready 18-month roadmap and financial model delivered"],
    skills: ["Business Modelling", "GTM Strategy", "Financial Planning", "Pitching"],
    featured: true,
  },
  {
    slug: "online-chess-tournament",
    title: "Online Blitz Chess Tournament",
    category: "Venture · Events",
    timeline: "2024",
    role: "Founder & Organizer",
    coverImage: "/images/projects/placeholder-03.svg",
    problem:
      "Running a paid tournament with real payouts on a limited seed budget, without an existing platform or audience.",
    approach:
      "Set up UPI-based registration and payouts, then ran targeted marketing campaigns to reach participants across multiple states.",
    solution:
      "Built and ran a self-service online blitz chess tournament from scratch, handling registration, payments, and promotion independently.",
    results: [
      "3× revenue and 20% ROI generated",
      "12 participants attracted across four states",
    ],
    skills: ["Event Operations", "Marketing Campaigns", "Payments", "Budgeting"],
    featured: true,
  },
  {
    slug: "exhibition-stall",
    title: "Price Precision Game Stall",
    category: "Venture · Retail Experience",
    timeline: "School Exhibition",
    role: "Founder, Sole Operator",
    coverImage: "/images/projects/placeholder-04.svg",
    problem:
      "Designing an exhibition stall that could turn a profit independently, without prior retail or event-design experience.",
    approach:
      "Planned, sourced, and handcrafted the stall personally, designing reward thresholds to balance engagement with margin.",
    solution:
      "Launched and operated a price-precision game stall, independently handling sourcing, build, and day-of operations.",
    results: ["₹10K revenue generated independently"],
    skills: ["Event Design", "Operations", "Budgeting", "Procurement"],
  },
  {
    slug: "recycled-stool",
    title: "Recycled Community Stool",
    category: "Sustainability",
    timeline: "Live Project",
    role: "Designer & Builder",
    coverImage: "/images/projects/placeholder-05.svg",
    problem: "Street-collected plastic waste needed a practical, durable reuse pathway for community spaces.",
    approach: "Sourced 16 upcycled bottles and designed a build method sturdy enough for repeated community use.",
    solution: "Built a durable recycled stool from street-collected plastic waste for sustainable community use.",
    results: ["Functional, reusable furniture piece delivered from waste materials"],
    skills: ["Sustainability", "Resourcefulness", "Hands-on Building"],
  },
  {
    slug: "greenhouse-prototype",
    title: "Eco-Friendly Greenhouse Prototype",
    category: "Sustainability",
    timeline: "Live Project",
    role: "Designer & Builder",
    coverImage: "/images/projects/placeholder-06.svg",
    problem: "Small-scale growers need low-cost, sustainable climate control without access to industrial systems.",
    approach: "Designed around local materials and battery-powered automation to keep the build cheap and off-grid.",
    solution: "Developed a working greenhouse prototype using local materials and battery-powered automation.",
    results: ["Functional low-cost prototype demonstrating off-grid automation"],
    skills: ["Sustainability", "Prototyping", "Automation Basics"],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(limit = 3) {
  const featured = projects.filter((p) => p.featured);
  return (featured.length ? featured : projects).slice(0, limit);
}

export function getRelatedProjects(current: Project, limit = 2) {
  return projects
    .filter((p) => p.slug !== current.slug && p.category === current.category)
    .slice(0, limit)
    .concat(
      projects.filter((p) => p.slug !== current.slug && p.category !== current.category)
    )
    .slice(0, limit);
}
