export interface Leadership {
  slug: string;
  title: string;
  organization: string;
  duration: string;
  responsibility: string;
  scale: string;
  impact: string;
  learnings: string;
}

export const leadershipRoles: Leadership[] = [
  {
    slug: "esports-admin",
    title: "E-Sports Admin",
    organization: "4-Day Global Esports Tournament",
    duration: "2024",
    responsibility:
      "Managed logistics, scheduling, and player coordination across a multi-day global tournament.",
    scale: "4-day event, international player base",
    impact:
      "Ensured seamless flow of events and technical support amid heavy competition demand.",
    learnings: "Real-time coordination under time pressure; stakeholder management at scale.",
  },
  {
    slug: "student-incharge",
    title: "Student Incharge",
    organization: "School Cultural Events",
    duration: "2022 – 2024",
    responsibility:
      "Managed 25 students from rehearsals through live performance, coordinating schedules, props, and execution.",
    scale: "25-member cast, multi-week rehearsal cycles",
    impact: "Delivered seamless performances through tight budget and logistics management.",
    learnings: "People management, budget discipline, cross-functional coordination.",
  },
  {
    slug: "cultural-head",
    title: "Cultural Head",
    organization: "School Cultural Committee",
    duration: "3 years (Head for 1 year)",
    responsibility:
      "Spearheaded cultural programming, orchestrating themes and leading dance initiatives across the committee.",
    scale: "20+ events coordinated over 3 years",
    impact: "Choreographed performances and managed execution end-to-end as committee head.",
    learnings: "Creative direction paired with operational ownership over multiple years.",
  },
];
