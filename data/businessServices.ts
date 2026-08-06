// data/businessServices.ts
import { LayoutDashboard, Headset, TrendingUp, LucideIcon } from "lucide-react";

export interface BusinessService {
  slug: string;
  title: string;
  headline: string;
  subheadline: string;
  icon: LucideIcon;
}

export const businessServices: BusinessService[] = [
  {
    slug: "web-design",
    title: "Web Design & Development",
    headline: "Let's design your website.",
    subheadline: "Tell us about your project and we'll get back to you with a custom quote within 24 hours.",
    icon: LayoutDashboard,
  },
  {
    slug: "customer-care",
    title: "Customer Care Services",
    headline: "Let's improve your customer care experience.",
    subheadline: "Tell us about your support needs and we'll put together a plan that fits your business.",
    icon: Headset,
  },
  {
    slug: "seo",
    title: "SEO Optimisation",
    headline: "Let's optimise your website's visibility.",
    subheadline: "Tell us about your website and goals, and we'll audit your SEO opportunity.",
    icon: TrendingUp,
  },
];

export function getBusinessServiceBySlug(slug: string) {
  return businessServices.find((s) => s.slug === slug);
}