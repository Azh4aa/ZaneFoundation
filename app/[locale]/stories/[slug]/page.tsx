import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import stories from "@/content/stories.json";
import { pageMetadata } from "@/lib/metadata";
import { isLocale } from "@/lib/site";

export function generateStaticParams() {
  return stories.map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const story = stories.find((item) => item.slug === slug);
  if (!isLocale(locale) || !story) return {};
  return pageMetadata(locale, story.title[locale], story.excerpt[locale], `/stories/${slug}`);
}

export default async function Article({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const story = stories.find((item) => item.slug === slug);
  if (!isLocale(locale) || !story) notFound();
  return (
    <article className="shell">
      <header className="article-header">
        <Link className="article-back" href={`/${locale}/stories`}>{locale === "ku" ? "هەموو وتارەکان" : "All articles"}</Link>
        <h1>{story.title[locale]}</h1>
        <p className="article-dek">{story.excerpt[locale]}</p>
      </header>
      <div className="article-layout article-body">
        {story.sections.map((section) => (
          <section key={section.heading.en}>
            <h2>{section.heading[locale]}</h2>
            {section.body[locale].map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </section>
        ))}
      </div>
    </article>
  );
}
