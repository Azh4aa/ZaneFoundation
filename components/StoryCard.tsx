import Link from "next/link";
import type { Locale, LocalizedText } from "@/lib/site";

export type Story = {
  slug: string;
  date: string;
  kind: LocalizedText;
  title: LocalizedText;
  excerpt: LocalizedText;
  readTime: LocalizedText;
  sections: Array<{ heading: LocalizedText; body: Record<Locale, string[]> }>;
};

export function StoryCard({ story, locale }: { story: Story; locale: Locale }) {
  return (
    <article className="story-card">
      <div className="story-card__meta"><span>{story.kind[locale]}</span><span>{story.readTime[locale]}</span></div>
      <h3><Link href={`/${locale}/stories/${story.slug}`}>{story.title[locale]}</Link></h3>
      <p>{story.excerpt[locale]}</p>
      <Link className="text-link" href={`/${locale}/stories/${story.slug}`}>
        {locale === "en" ? "Read the article" : "بابەتەکە بخوێنەوە"}<span aria-hidden="true">↗</span>
      </Link>
    </article>
  );
}
