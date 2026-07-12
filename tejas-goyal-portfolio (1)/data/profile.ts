// ============================================================================
// PROFILE DATA
// This is the single source of truth for all personal information.
// Update this file when your resume changes — every page reads from here.
// ============================================================================

export const profile = {
  name: "Tejas Goyal",
  tagline: "Finance · Business Operations · Strategy",
  location: "Bangalore, India",
  email: "tejasgoyal007@gmail.com",
  phone: "+91 88661 85185",
  linkedin: "https://linkedin.com/in/tejasgoyal", // update with real handle
  github: "", // not used — this profile is business-focused, not dev-focused
  resumeFile: "/resume/Tejas_Goyal_Resume.pdf",

  // Landing / hero
  hero: {
    kicker: "Building ventures, not just resumes",
    headline: "I turn spreadsheets, stalls, and stages into working businesses.",
    subhead:
      "Entrepreneurship student and operator who's launched, priced, and run six ventures with real money on the table — from a same-day photography service to a school exhibition stall — before turning twenty.",
  },

  // About page
  about: {
    heading: "The Person Behind the Work",
    journey:
      "I study entrepreneurship formally — at the Institute of Venture Building and through IIM Bangalore's BBA in Digital Business & Entrepreneurship — but most of what I know came from running things: a photography service with zero investment, an online chess tournament with UPI payouts, a stall built by hand for a school exhibition. Each one forced the same question — will someone actually pay for this — and I've learned to answer it fast, cheaply, and honestly.",
    drives:
      "I'm drawn to the moment a plan meets a customer. Frameworks like SCAMPER and JTBD are useful, but the real signal is always in the first sale, the first booking, the first refund request. I care about operations and numbers as much as ideas — a good venture is a good spreadsheet with a pulse.",
    currentlyLearning:
      "Equity research and financial modelling — I recently built a 5-year analysis of Infosys with Excel-based models, and I'm going deeper into fundamental analysis and valuation.",
    values: [
      "Ship first, refine later",
      "Numbers over narratives",
      "Own the outcome, not just the idea",
      "Small budgets force better decisions",
    ],
    quickFacts: [
      { label: "Based in", value: "Bangalore, India" },
      { label: "Currently studying", value: "Entrepreneurship (IVB) & BBA DBE (IIM Bangalore)" },
      { label: "Interested in", value: "Finance, Strategy, Operations, Marketing" },
      { label: "Currently learning", value: "Equity research & financial modelling" },
      { label: "Ventures run", value: "6, self-operated" },
      { label: "Years of leadership", value: "3+" },
    ],
  },

  // Home page stats strip
  stats: [
    { label: "Positions of Responsibility", value: "5+" },
    { label: "Ventures & Projects", value: "6" },
    { label: "Peak Campaign Reach", value: "14.3M" },
    { label: "Years Leading Teams", value: "3+" },
  ],

  currentFocus:
    "Studying entrepreneurship at IVB & IIM Bangalore while building small, self-funded ventures and going deeper into equity research.",

  contactCta: "Let's build something meaningful together.",
};

export const skills = {
  Business: [
    "Business Modelling",
    "GTM Strategy",
    "Financial Planning",
    "Budgeting",
    "Procurement",
    "Operations",
  ],
  Marketing: [
    "Analytics-Driven Strategy",
    "Social Media Management",
    "Campaign Execution",
    "Positioning",
  ],
  Finance: [
    "Equity Research",
    "Financial Modelling (Excel)",
    "Ratio Analysis",
    "Accounting",
    "Tally (Basic)",
  ],
  Design: ["Audio/Video/Photo Editing", "Event & Stall Design"],
  Technology: ["Excel", "Tally"],
  Tools: ["Excel", "Tally", "UPI-based Payments Tooling", "Canva"],
} as const;

