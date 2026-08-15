import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { makePageMetadata } from "@/lib/metadata";
import { isLocale, site } from "@/lib/site";

const title = { en: "Partner with us", ku: "ببە بە هاوبەش" };
const description = { en: "Ways for funders, companies, experts and organizations to work with Zane Foundation.", ku: "ڕێگاکانی کارکردنی فەندەر، کۆمپانیا، پسپۆڕ و ڕێکخراوەکان لەگەڵ فاوندەیشنی زەنێ." };
export function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> { return makePageMetadata(params, title, description, "/partner"); }

export default async function PartnerPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params; if (!isLocale(raw)) notFound(); const locale = raw; const isKu = locale === "ku";
  return <>
    <PageHero eyebrow={isKu ? "هاوبەشی" : "Partnership"} title={isKu ? "بەیەکەوە دەرفەت زیاتر دەکەین." : <>Let’s make access<br /><em>better together.</em></>} intro={<p>{isKu ? "هیچ ڕێکخراوێک بە تەنها ناتوانێت گشتگیری دروست بکات. هاوبەشی زانیاری، شارەزایی و سەرچاوەکان لە شوێنی دروست بەیەکەوە دەبەستێتەوە." : "No organization can build inclusion alone. Partnership brings the right knowledge, people and resources together."}</p>} aside={<p>{isKu ? "لە سەرەتاوە لەسەر ئامانج، ڕۆڵ و پاراستنی کەسان ڕێکدەکەوین." : "We begin by agreeing on the goal, each side’s role and how people will be protected."}</p>} />
    <section className="section-pad"><div className="shell"><SectionHeading eyebrow={isKu ? "ڕێگاکانی بەشداری" : "Ways to engage"} title={isKu ? "هاوبەشی بەپێی ئەو کاریگەرییەی دەتەوێت دروستی بکەیت." : "A partnership shaped around the change you want to make."} /><div className="partner-paths">{[
      ["01", isKu ? "هاوبەشیی بەرنامە" : "Program partnership", isKu ? "پشتیوانی بۆ پشتگیریی زوو، خێزان، پەروەردەی گشتگیر یان هۆشیاریی کۆمەڵگا." : "Support work in early development, family guidance, inclusive education or public understanding."],
      ["02", isKu ? "هاوبەشیی تەکنیکی" : "Technical collaboration", isKu ? "شارەزایی لە تەندروستی، پەروەردە، پاراستن، توێژینەوە، یاسا یان ڕاگەیاندن بەشدار بکە." : "Contribute expertise in health, education, safeguarding, research, law or communications."],
      ["03", isKu ? "هاوبەشیی کۆمپانیا" : "Corporate engagement", isKu ? "خۆبەخشیی کارمەند، خزمەتگوزاریی پیشەیی و ژینگەی کاری گشتگیر بەیەکەوە ببەستەوە." : "Connect employee volunteering, pro-bono expertise and more inclusive workplaces."],
      ["04", isKu ? "هاوبەشیی کۆمەڵگا و میدیا" : "Community & media", isKu ? "یارمەتی بڵاوکردنەوەی زمان، چیرۆک و نوێنەرایەتیی دروست بدە." : "Help expand accurate language, respectful stories and authentic representation."],
    ].map(([n,h,p]) => <article key={n}><span>{n}</span><h3>{h}</h3><p>{p}</p></article>)}</div></div></section>
    <section className="partner-expect section-pad section-ink"><div className="shell partner-expect__grid"><div><SectionHeading inverse eyebrow={isKu ? "شێوازی هاوبەشی" : "How partnership works"} title={isKu ? "لە سەرەتاوە ڕوون و ڕاستگۆ دەبین." : "Clear and honest from the start."} /></div><ul>{[
      isKu ? "گفتوگۆ لەسەر ئامانج و بەها هاوبەشەکان" : "A conversation about shared purpose and values",
      isKu ? "ڕوونکردنەوەی ڕۆڵ و بەرپرسیارێتیی هەردوو لا" : "Clear roles and responsibilities on both sides",
      isKu ? "ڕێککەوتن لەسەر پاراستن و بەکارهێنانی زانیاری" : "Agreement on safeguarding and responsible information use",
      isKu ? "پەیوەندی و هەڵسەنگاندنی بەردەوام" : "Regular communication and reflection",
      isKu ? "نوێنەرایەتیی بەڕێز و بە ڕەزامەندی" : "Respectful representation with consent",
      isKu ? "بڵاوکردنەوەی فێربوون و کاریگەریی پشتڕاستکراو" : "Sharing verified learning and impact",
    ].map((item) => <li key={item}>{item}</li>)}</ul></div></section>
    <section className="partner-brief section-pad"><div className="shell partner-brief__grid"><div><p className="eyebrow">{isKu ? "یەکەم پەیوەندی" : "Start a conversation"}</p><h2>{isKu ? "پێمان بڵێ کێیت و لە چ بوارێکدا هاوبەشی دەبینیت." : "Tell us who you are and where you see common ground."}</h2></div><div><p>{isKu ? "ناوی دامەزراوە، جۆری هاوبەشی و بواری جێی سەرنج بنێرە. تیمی زەنێ بۆ گفتوگۆی یەکەم و هەنگاوی گونجاو پەیوەندیت پێوە دەکات." : "Send your organization, partnership interest and area of focus. The Zane team will follow up for an initial conversation and an appropriate next step."}</p><a className="button button--dark" href={`mailto:${site.partnershipsEmail}?subject=Partnership%20inquiry%20%E2%80%94%20Zane%20Foundation`}>{site.partnershipsEmail}</a><Link className="text-link" href={`/${locale}/transparency`}>{isKu ? "بەڕێوەبردن و متمانە" : "Governance and trust"}<span>↗</span></Link></div></div></section>
  </>;
}
