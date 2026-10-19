
import type { MetadataRoute } from "next";
import { subjects } from "@/data/subjects";
import { businessServices } from "@/data/businessServices";

const baseUrl = "https://mentorex.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/about",
    "/programs",
    "/services",
    "/countries",
    "/gallery",
    "/contact",
    "/privacy",
    "/terms",

    // Country-specific tutoring SEO pages
    "/online-tutoring-uk",
    "/online-tutoring-australia",
  ];

  return [
    ...staticPages.map((path) => ({
      url: `${baseUrl}${path || "/"}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.9,
    })),

    ...subjects.map((subject) => ({
      url: `${baseUrl}/programs/${subject.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),

    ...businessServices.map((service) => ({
      url: `${baseUrl}/quote/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
