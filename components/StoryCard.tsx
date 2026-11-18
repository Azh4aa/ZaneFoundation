import Link from "next/link";
import type { Locale, LocalizedText } from "@/lib/site";

type Story = { slug: string; kind: LocalizedText; title: LocalizedText; excerpt: LocalizedText };

export function StoryCard({ story, locale }: { story: Story; locale: Locale }) {
  return (
    <article className="story-card">
      <small>{story.kind[locale]}</small>
      <h2><Link href={`/${locale}/stories/${story.slug}`}>{story.title[locale]}</Link></h2>
      <p>{story.excerpt[locale]}</p>
    </article>
  );
}
