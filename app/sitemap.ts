import type { MetadataRoute } from "next";
import storiesJson from "@/content/stories.json";
import { locales, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/programs", "/impact", "/stories", "/transparency", "/partner", "/get-involved", "/careers", "/resources", "/contact", "/policies/privacy", "/policies/safeguarding", "/policies/accessibility", "/policies/complaints"];
  const staticEntries = locales.flatMap((locale) => pages.map((path) => ({ url: `${site.url}/${locale}${path}`, lastModified: new Date(), changeFrequency: path === "" ? "weekly" as const : "monthly" as const, priority: path === "" ? 1 : 0.75 })));
  const storyEntries = locales.flatMap((locale) => storiesJson.map((story) => ({ url: `${site.url}/${locale}/stories/${story.slug}`, lastModified: new Date(story.date), changeFrequency: "yearly" as const, priority: 0.6 })));
  return [...staticEntries, ...storyEntries];
}
