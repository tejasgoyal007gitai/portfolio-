export interface Achievement {
  title: string;
  organization: string;
  year: string;
  description: string;
}

export const achievements: Achievement[] = [
  {
    title: "3rd Rank — SDG Hackathon",
    organization: "AuReCell (Biotech Venture)",
    year: "2024",
    description:
      "Co-developed a bacterial-bioremediation venture for sustainable gold recovery; designed the business model, operations, GTM strategy, financials, and 18-month roadmap for a panel-ready pitch.",
  },
  {
    title: "Equity Research Report — Infosys",
    organization: "Independent Financial Analysis",
    year: "2024",
    description:
      "Analyzed 5 years of Infosys financials — revenue, profitability, and key ratios — and prepared an Excel-based equity research report using fundamental analysis techniques.",
  },
  {
    title: "1st Place, Business Acumen Olympiad",
    organization: "School & International Level",
    year: "2024",
    description:
      "Earned 1st place at school level while ranking among the top 1000 internationally in business acumen.",
  },
  {
    title: "Quantitative Olympiad — 3rd → 1st",
    organization: "School Level",
    year: "Dec 2023 – Dec 2024",
    description:
      "Secured 3rd place in December 2023 and topped with 1st place the following December, demonstrating strong quantitative skills.",
  },
];

export interface ExtraCurricular {
  title: string;
  description: string;
}

export const extraCurriculars: ExtraCurricular[] = [
  {
    title: "Performing Arts",
    description:
      "State-level title winner (Gujarat) for 3 consecutive years; theater performer with multiple district awards.",
  },
  {
    title: "Sports",
    description:
      "Karate practitioner (Brown Belt, 3 years); high school basketball team member (2 years).",
  },
];
