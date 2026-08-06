// data/pricing.ts
export interface GradePriceTier {
  label: string;
  minGrade: number;
  maxGrade: number;
  usd: number;
  aud: number;
  cad: number;
  gbp: number;
}

export const gradePricing: GradePriceTier[] = [
  { label: "Kindergarten - Grade 5", minGrade: 0, maxGrade: 5, usd: 9, aud: 12, cad: 12, gbp: 7 },
  { label: "Grade 6 - Grade 10", minGrade: 6, maxGrade: 10, usd: 10, aud: 13, cad: 13, gbp: 8 },
  { label: "Grade 11 - Grade 12", minGrade: 11, maxGrade: 12, usd: 11, aud: 14, cad: 14, gbp: 9 },
  { label: "University Level", minGrade: 13, maxGrade: 13, usd: 12, aud: 15, cad: 15, gbp: 10 },
];

// Languages and Coding are flat-rate regardless of grade
export const flatRatePricing = { usd: 10, aud: 13, cad: 13, gbp: 8 };
export const flatRateSubjectSlugs = ["languages", "programming"];

export type CurrencyKey = "usd" | "aud" | "cad" | "gbp";

export function getGradeTier(grade: number): GradePriceTier {
  return gradePricing.find((t) => grade >= t.minGrade && grade <= t.maxGrade) || gradePricing[0];
}

export function getPrice(subjectSlug: string, grade: number, currencyKey: CurrencyKey): number {
  if (flatRateSubjectSlugs.includes(subjectSlug)) {
    return flatRatePricing[currencyKey];
  }
  return getGradeTier(grade)[currencyKey];
}

export function getCurrencySymbol(currencyKey: CurrencyKey): string {
  return currencyKey === "gbp" ? "£" : "$";
}