import type { Metadata } from "next";
import { notFound } from "next/navigation";
import storiesJson from "@/content/stories.json";
import { PageHero } from "@/components/PageHero";
import { StoryCard, type Story } from "@/components/StoryCard";
import { makePageMetadata } from "@/lib/metadata";
import { isLocale } from "@/lib/site";

const title = { en: "News & insight", ku: "هەواڵ و تێڕوانین" };
const description = { en: "Institutional briefs, program updates and public learning from Zane Foundation.", ku: "پوختەی دامەزراوەیی، نوێکاریی بەرنامە و فێربوونی گشتیی فاوندەیشنی زەنێ." };
export function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> { return makePageMetadata(params, title, description, "/stories"); }

export default async function StoriesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params; if (!isLocale(raw)) notFound(); const locale = raw; const isKu = locale === "ku"; const stories = storiesJson as Story[];
  return <><PageHero eyebrow={isKu ? "هەواڵ و تێڕوانین" : "News & insight"} title={isKu ? "کارەکانمان بە ڕوونی تۆمار دەکەین." : <>Work in public.<br /><em>Learning on record.</em></>} intro={<p>{isKu ? "لێرە پوختەی دامەزراوەیی، نوێکاریی بەرنامە، ڕاپۆرت و وانە فێربووەکان بڵاودەکەینەوە." : "This is where Zane publishes institutional briefs, program updates, reports and lessons from delivery."}</p>} aside={<p>{isKu ? "چیرۆکی کەسی تەنها بە ڕەزامەندیی ئاگادارانە و پێداچوونەوەی پاراستن بڵاودەکرێتەوە." : "Personal accounts will only be published with informed consent and safeguarding review."}</p>} /><section className="section-pad section-sand"><div className="shell story-grid story-grid--archive">{stories.map((story) => <StoryCard key={story.slug} story={story} locale={locale} />)}</div></section></>;
}
