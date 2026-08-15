import type { Metadata } from "next";
import { notFound } from "next/navigation";
import storiesJson from "@/content/stories.json";
import { PageHero } from "@/components/PageHero";
import { StoryCard, type Story } from "@/components/StoryCard";
import { makePageMetadata } from "@/lib/metadata";
import { isLocale } from "@/lib/site";

const title = { en: "Ideas, guidance & news", ku: "تێڕوانین، ڕێنمایی و هەواڵ" };
const description = { en: "Perspectives, family guidance, public education and news from Zane Foundation.", ku: "تێڕوانین، ڕێنماییی خێزان، هۆشیاریی گشتی و هەواڵی فاوندەیشنی زەنێ." };
export function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> { return makePageMetadata(params, title, description, "/stories"); }

export default async function StoriesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params; if (!isLocale(raw)) notFound(); const locale = raw; const isKu = locale === "ku"; const stories = storiesJson as Story[];
  return <><PageHero eyebrow={isKu ? "تێڕوانین، ڕێنمایی و هەواڵ" : "Ideas, guidance & news"} title={isKu ? "زانیاریی بەسوود، بە زمانێکی بەڕێز." : <>Useful ideas.<br /><em>Respectful language.</em></>} intro={<p>{isKu ? "تێڕوانین لەسەر گشتگیری، ڕێنمایی بۆ خێزان و بابەتی هۆشیاریی گشتی لە زەنێ." : "Perspectives on inclusion, practical family guidance and public-awareness articles from Zane."}</p>} aside={<p>{isKu ? "چیرۆکی کەسی تەنها بە ڕەزامەندیی ئاگادارانە و پێداچوونەوەی پاراستن بڵاودەکرێتەوە." : "Personal accounts are only published with informed consent and safeguarding review."}</p>} /><section className="section-pad section-sand"><div className="shell story-grid story-grid--archive">{stories.map((story) => <StoryCard key={story.slug} story={story} locale={locale} />)}</div></section></>;
}
