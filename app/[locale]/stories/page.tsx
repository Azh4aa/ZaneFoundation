import type { Metadata } from "next";
import { notFound } from "next/navigation";
import storiesJson from "@/content/stories.json";
import { PageHero } from "@/components/PageHero";
import { StoryCard, type Story } from "@/components/StoryCard";
import { makePageMetadata } from "@/lib/metadata";
import { isLocale } from "@/lib/site";

const title = { en: "Stories & learning", ku: "چیرۆک و فێربوون" };
const description = { en: "Founding notes, program learning and future consented stories from Zane Foundation.", ku: "تێبینی دامەزراندن، فێربوونی پرۆگرام و چیرۆکی داهاتووی بە ڕەزامەندی لە زەنێ." };
export function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> { return makePageMetadata(params, title, description, "/stories"); }

export default async function StoriesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params; if (!isLocale(raw)) notFound(); const locale = raw; const isKu = locale === "ku"; const stories = storiesJson as Story[];
  return <><PageHero eyebrow={isKu ? "چیرۆک و فێربوون" : "Stories & learning"} title={isKu ? "مرۆڤ لە ناوەندی کارەکەدا. بەڵگە لە ناوەندی چیرۆکەکەدا." : <>People at the centre.<br /><em>Evidence in the story.</em></>} intro={<p>{isKu ? "لێرە چیرۆکی دامەزراندن، یادداشتی فێربوون، نوێکاری پرۆگرام و—کاتێک کار دەست پێدەکات—چیرۆکی بە ڕەزامەندی بڵاودەکەینەوە." : "This is where we publish founding notes, learning briefs, program updates and—once delivery begins—carefully consented stories."}</p>} aside={<p>{isKu ? "هەر چیرۆکی تاکەکەسی پێویستی بە ڕەزامەندی ئاگادارانە و پێداچوونەوەی پاراستن هەیە." : "Every personal story requires informed consent and a safeguarding review."}</p>} /><section className="section-pad section-sand"><div className="shell story-grid story-grid--archive">{stories.map((story) => <StoryCard key={story.slug} story={story} locale={locale} />)}</div></section></>;
}

