import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import storiesJson from "@/content/stories.json";
import type { Story } from "@/components/StoryCard";
import { isLocale, locales, site } from "@/lib/site";

const stories = storiesJson as Story[];
export function generateStaticParams() { return locales.flatMap((locale) => stories.map((story) => ({ locale, slug: story.slug }))); }
export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> { const { locale, slug } = await params; if (!isLocale(locale)) return {}; const story = stories.find((item) => item.slug === slug); if (!story) return {}; return { title: story.title[locale], description: story.excerpt[locale], alternates: { canonical: `${site.url}/${locale}/stories/${slug}`, languages: { en: `${site.url}/en/stories/${slug}`, ku: `${site.url}/ku/stories/${slug}` } } }; }

export default async function StoryPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: raw, slug } = await params; if (!isLocale(raw)) notFound(); const locale = raw; const isKu = locale === "ku"; const story = stories.find((item) => item.slug === slug); if (!story) notFound();
  return <article className="article-page"><header className="article-header"><div className="shell article-header__inner"><Link className="article-back" href={`/${locale}/stories`}>← {isKu ? "تێڕوانین و ڕێنمایی" : "Ideas & guidance"}</Link><p className="eyebrow eyebrow--gold">{story.kind[locale]}</p><h1>{story.title[locale]}</h1><p className="article-dek">{story.excerpt[locale]}</p><div className="article-meta"><span>{story.readTime[locale]}</span><span>{story.date}</span></div></div></header><div className="shell article-layout"><aside><p>{isKu ? "لە زەنێ" : "From Zane"}</p><span>{isKu ? "تێڕوانین و ڕێنمایی بۆ کۆمەڵگایەکی گشتگیرتر." : "Perspectives and guidance for a more inclusive community."}</span></aside><div className="article-body">{story.sections.map((section) => <section key={section.heading.en}><h2>{section.heading[locale]}</h2>{section.body[locale].map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}</div></div><footer className="article-footer"><div className="shell"><p>{isKu ? "دواتر چی بخوێنمەوە؟" : "Continue reading"}</p><Link href={`/${locale}/stories`}>{isKu ? "هەموو بابەتەکان" : "Explore all articles"} ↗</Link></div></footer></article>;
}
