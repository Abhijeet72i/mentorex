// data/countries.ts
export interface CountryInfo {
  slug: string;
  name: string;
  flag: string;
  currency: string;
  currencyKey: "usd" | "aud" | "cad" | "gbp";
  pricePerSession: string;
  timezone: string;
  curriculum: string;
  examBoards: string[];
  popularSubjects: string[];
  highlights: string[];
}

export const countries: CountryInfo[] = [
  {
    slug: "australia",
    name: "Australia",
    flag: "🇦🇺",
    currency: "AUD",
    currencyKey: "aud",
    pricePerSession: "From $12",
    timezone: "AEST / AEDT",
    curriculum: "Aligned with the Australian Curriculum (ACARA)",
    examBoards: ["VCE", "HSC", "QCE"],
    popularSubjects: ["Mathematics", "Science", "English", "Programming"],
    highlights: [
      "Sessions scheduled around AEST/AEDT school hours and after-school slots",
      "Tutors familiar with VCE, HSC, and QCE assessment structures",
      "Support for both metro and regional students",
    ],
  },
  {
    slug: "united-kingdom",
    name: "United Kingdom",
    flag: "🇬🇧",
    currency: "GBP",
    currencyKey: "gbp",
    pricePerSession: "From £7",
    timezone: "GMT / BST",
    curriculum: "Aligned with the UK National Curriculum",
    examBoards: ["GCSE", "A-Level", "IB"],
    popularSubjects: ["Mathematics", "Science", "English", "AI & Machine Learning"],
    highlights: [
      "Sessions scheduled around GMT/BST evenings and weekends",
      "Tutors experienced with GCSE and A-Level exam boards (AQA, Edexcel, OCR)",
      "Additional support for 11+ and university entrance preparation",
    ],
  },
  {
    slug: "united-states",
    name: "United States",
    flag: "🇺🇸",
    currency: "USD",
    currencyKey: "usd",
    pricePerSession: "From $9",
    timezone: "ET / CT / MT / PT",
    curriculum: "Aligned with Common Core and state-specific standards",
    examBoards: ["AP", "SAT", "ACT"],
    popularSubjects: ["Mathematics", "Science", "Programming", "AI & Machine Learning"],
    highlights: [
      "Sessions scheduled across all major US time zones",
      "Tutors experienced with AP coursework and SAT/ACT prep",
      "Support for both public school and homeschool curricula",
    ],
  },
  {
    slug: "canada",
    name: "Canada",
    flag: "🇨🇦",
    currency: "CAD",
    currencyKey: "cad",
    pricePerSession: "From $12",
    timezone: "ET / CT / MT / PT",
    curriculum: "Aligned with provincial curricula (Ontario, BC, and others)",
    examBoards: ["IB", "Provincial Diploma Exams"],
    popularSubjects: ["Mathematics", "Science", "English", "Languages"],
    highlights: [
      "Sessions scheduled around Canadian time zones and school terms",
      "Tutors familiar with provincial curricula and IB requirements",
      "Support for both English and French language learners",
    ],
  },
];

export function getCountryBySlug(slug: string) {
  return countries.find((c) => c.slug === slug);
}