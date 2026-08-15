import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { makePageMetadata } from "@/lib/metadata";
import { isLocale, site } from "@/lib/site";

const title = { en: "Partner with us", ku: "ببە بە هاوبەش" };
const description = { en: "Partnership pathways for funders, companies, experts and institutions building Zane Foundation.", ku: "ڕێگاکانی هاوبەشی بۆ فەندەر، کۆمپانیا، پسپۆڕ و دامەزراوە بۆ بنیاتنانی زەنێ." };
export function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> { return makePageMetadata(params, title, description, "/partner"); }

export default async function PartnerPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params; if (!isLocale(raw)) notFound(); const locale = raw; const isKu = locale === "ku";
  return <>
    <PageHero eyebrow={isKu ? "هاوبەشی" : "Partnership"} title={isKu ? "تەنها فەندی پرۆژەیەک مەکە. دامەزراوەیەک بنیاد بنێ." : <>Do more than fund a project.<br /><em>Help build an institution.</em></>} intro={<p>{isKu ? "زەنێ لە قۆناغێکدایە کە هاوبەشی دروست دەتوانێت نەک تەنها خزمەتگوزاری، بەڵکو کوالێتی، بەڕێوەبردن و بەردەوامی درووست بکات." : "Zane is at the stage where the right partnership can shape not only services, but the quality, governance and durability of the institution behind them."}</p>} aside={<p>{isKu ? "هاوبەشی لەگەڵ گفتوگۆی پشکنین، ئامانجی هاوبەش و چارچێوەی ڕاپۆرتدان دەست پێدەکات." : "Every partnership begins with due diligence, shared outcomes and an agreed reporting framework."}</p>} />
    <section className="section-pad"><div className="shell"><SectionHeading eyebrow={isKu ? "ڕێگاکانی بەشداری" : "Ways to engage"} title={isKu ? "هاوبەشی بەپێی ئەو کاریگەرییەی دەتەوێت دروستی بکەیت." : "A partnership shaped around the change you want to make."} /><div className="partner-paths">{[
      ["01", isKu ? "هاوبەشی دامەزرێنەر" : "Founding partner", isKu ? "پشتگیری بناغەی یاسایی، بەڕێوەبردن، سیستەمی دارایی، پاراستن و تیمی سەرەکی." : "Support the legal, governance, finance, safeguarding and core-team foundations."],
      ["02", isKu ? "فەندەری پرۆگرام" : "Program funder", isKu ? "فەندکردنی هەنگاوەکانی سەرەتا، هێڵی خێزان، پۆلەکەم یان کەمپەینی هۆشیاری." : "Fund Early Steps, the Family Resource Line, My Classroom or the awareness campaign."],
      ["03", isKu ? "هاوبەشی تەکنیکی" : "Technical partner", isKu ? "پێشکەشکردنی پسپۆڕی لە چارەسەری، پەروەردە، M&E، پاراستن، یاسا یان دارایی." : "Contribute expertise in therapy, education, M&E, safeguarding, legal or finance."],
      ["04", isKu ? "هاوبەشی کۆمپانیا" : "Corporate partner", isKu ? "سپۆنسەرکردن، خۆبەخشی کارمەند، خزمەتگوزاری پیشەیی و دەرفەتی گشتگیر." : "Combine sponsorship, employee engagement, pro-bono expertise and inclusive opportunity."],
    ].map(([n,h,p]) => <article key={n}><span>{n}</span><h3>{h}</h3><p>{p}</p></article>)}</div></div></section>
    <section className="partner-expect section-pad section-ink"><div className="shell partner-expect__grid"><div><SectionHeading inverse eyebrow={isKu ? "ئەوەی هاوبەش وەریدەگرێت" : "What a serious partner receives"} title={isKu ? "ڕوونی لە پێش بڕیار. بەڵگە لە دوای وەبەرهێنان." : "Clarity before commitment. Evidence after investment."} /></div><ul>{[
      isKu ? "کۆنسێپت نۆت و بودجەی ورد" : "A clear concept note and detailed budget",
      isKu ? "چوارچێوەی دەرئەنجام و نیشانەکان" : "Results framework and agreed indicators",
      isKu ? "پاکێجی بەڕێوەبردن و پشکنین" : "Governance and due-diligence pack",
      isKu ? "خشتەی ڕاپۆرتدان و پەیوەندی" : "Reporting and communication calendar",
      isKu ? "ڕێککەوتنی پاراستن، داتا و چیرۆکگێڕی" : "Safeguarding, data and storytelling agreements",
      isKu ? "ڕاپۆرتی پێشکەوتن، دارایی و فێربوون" : "Progress, financial and learning reports",
    ].map((item) => <li key={item}>{item}</li>)}</ul></div></section>
    <section className="partner-brief section-pad"><div className="shell partner-brief__grid"><div><p className="eyebrow">{isKu ? "یەکەم گفتوگۆ" : "The first conversation"}</p><h2>{isKu ? "پێمان بڵێ کێیت و چ گۆڕانێک گرنگە بۆت." : "Tell us who you are and what change matters to you."}</h2></div><div><p>{isKu ? "ناوی دامەزراوە، جۆری هاوبەشی، بوار یان بەرنامەی جێی سەرنج، سنووری بودجە و خشتەی کاتی خۆتان لە ئیمەیڵێکدا بنێرن. ئێمە بە پاکێجی پەیوەندیدار و هەنگاوی داهاتوو وەڵام دەدەینەوە." : "Email your organization, partnership interest, program focus, indicative budget range and timeline. We will respond with the relevant pack and a proposed next step."}</p><a className="button button--dark" href={`mailto:${site.partnershipsEmail}?subject=Partnership%20inquiry%20%E2%80%94%20Zane%20Foundation`}>{site.partnershipsEmail}</a><Link className="text-link" href={`/${locale}/transparency`}>{isKu ? "پێش گفتوگۆ ڕوونکردنەوە ببینە" : "Review transparency first"}<span>↗</span></Link></div></div></section>
  </>;
}
