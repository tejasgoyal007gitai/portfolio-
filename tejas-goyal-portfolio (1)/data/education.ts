export interface EducationEntry {
  year: string;
  course: string;
  institute: string;
  score: string;
  highlights?: string[];
}

export const education: EducationEntry[] = [
  {
    year: "2025 – 28",
    course: "UG in Entrepreneurship",
    institute: "Institute of Venture Building",
    score: "Pursuing",
    highlights: ["Focused on venture building, business modelling, and GTM strategy"],
  },
  {
    year: "2025 – 28",
    course: "BBA, Digital Business & Entrepreneurship",
    institute: "IIM Bangalore",
    score: "Pursuing",
  },
  {
    year: "2025",
    course: "Class XII (CBSE)",
    institute: "Amarchand Singhvi International School",
    score: "91.4%",
  },
  {
    year: "2023",
    course: "Class X (State Board)",
    institute: "St. Xavier's School",
    score: "89.0%",
  },
];
