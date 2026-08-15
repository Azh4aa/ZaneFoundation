import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { makePageMetadata } from "@/lib/metadata";
import { isLocale, site, tx } from "@/lib/site";

const title = { en: "Transparency", ku: "ڕوونکردنەوە" };
const description = { en: "Zane Foundation’s governance, reporting, safeguarding and due-diligence publication roadmap.", ku: "نەخشەڕێگای زەنێ بۆ بەڕێوەبردن، ڕاپۆرتدان، پاراستن و بڵاوکردنەوەی بەڵگەنامە." };
export function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> { return makePageMetadata(params, title, description, "/transparency"); }

export default async function TransparencyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params; if (!isLocale(raw)) notFound(); const locale = raw; const isKu = locale === "ku";
  const documents = [
    [isKu ? "پەیرەوی ناوخۆ" : "Internal bylaws", isKu ? "بەردەست بە کوردی" : "Available in Kurdish", isKu ? "وەشانی ئینگلیزی بۆ پشکنینی دامەزراوەیی ئامادە دەکرێت." : "English translation to be prepared for institutional review."],
    [isKu ? "بڕوانامە و زانیاری تۆمار" : "Registration details", isKu ? "لە قۆناغی تۆمارکردندان" : site.registrationNumber, isKu ? `${tx(site.legalName, locale)}. ژمارە، بەروار و دەسەڵاتی تۆمارکردن دوای دەرچوونی بڕوانامە جێگیر دەکرێن.` : `${tx(site.legalName, locale)}. The final number, date and issuing authority will replace this placeholder when the certificate is issued.`],
    [isKu ? "بۆرد و سەرکردایەتی" : "Board & leadership", isKu ? "پڕۆفایلەکان لە ئامادەکردندان" : "Profiles in preparation", isKu ? "ناو، ڕۆڵ، شارەزایی، ماوە و بەرژەوەندییە پەیوەندیدارەکان دەبێت ئاشکرا بن." : "Names, roles, expertise, terms and relevant interests will be disclosed."],
    [isKu ? "سیاسەتی پاراستن" : "Safeguarding policy", isKu ? "پێش دەستپێکی خزمەتگوزاری پێویستە" : "Required before service launch", isKu ? "پاراستنی منداڵ و گەورەی لاواز، ڕەزامەندی، وێنە و ڕێگای سکاڵا لەخۆدەگرێت." : "Will cover child and vulnerable-adult protection, consent, imagery and complaints."],
    [isKu ? "ڕاپۆرتی دارایی" : "Financial reporting", isKu ? "دوای یەکەم ساڵی دارایی" : "After the first financial year", isKu ? "بودجە، خەرجی ڕاستەقینە، سەرچاوەی داهات و وردبینی بڵاودەکرێنەوە." : "Budget, actual spend, income sources and audit status will be published."],
    [isKu ? "ڕاپۆرتی کاریگەری" : "Impact report", isKu ? "دوای یەکەم ساڵی جێبەجێکردن" : "After the first delivery year", isKu ? "دەرچوون، دەرئەنجام، فیدباک، پاراستن و وانە فێربووەکان لەخۆدەگرێت." : "Will include outputs, outcomes, feedback, safeguarding and lessons learned."],
  ];
  return <>
    <PageHero eyebrow={isKu ? "متمانە بە بەڵگە" : "Trust through evidence"} title={isKu ? "ڕوونی بەڵێنێکی دواوە نییە. بناغەی کارە." : <>Transparency is not an afterthought.<br /><em>It is infrastructure.</em></>} intro={<p>{isKu ? "هاوبەش و خێزان مافی ئەوەیان هەیە بزانن کێ بڕیار دەدات، پارە چۆن خەرج دەکرێت، مەترسی چۆن بەڕێوە دەبرێت و کاریگەری چۆن پشتڕاست دەکرێتەوە." : "Partners and families have a right to know who decides, how money moves, how risk is managed and how impact is verified."}</p>} aside={<p>{isKu ? "لە کاتی دامەزراندندا بەڵگەنامەکان بە قۆناغ بڵاودەکرێنەوە. هیچ بەڵگەنامەیەک تا پشتڕاست نەکرێتەوە «تەواو» ناونرێت." : "Documents will be published in stages during formation. Nothing is labelled complete until it is verified."}</p>} />
    <section className="section-pad"><div className="shell"><SectionHeading eyebrow={isKu ? "تۆماری بەڵگەنامە" : "Document register"} title={isKu ? "چی هەیە، چی ئامادە دەکرێت و کەی بڵاودەکرێتەوە." : "What exists, what is being prepared and when it will be public."} /><div className="document-register">{documents.map(([name,status,note], i) => <article key={name}><span className="document-register__number">0{i+1}</span><div><h3>{name}</h3><p>{note}</p></div><span className="status-pill">{status}</span></article>)}</div></div></section>
    <section className="risk-section section-pad section-sand"><div className="shell"><SectionHeading eyebrow={isKu ? "مەترسی و کەمکردنەوە" : "Risk & mitigation"} title={isKu ? "متمانە لەوە دەست پێدەکات کە مەترسی ناوی لێ بنێین." : "Credibility begins by naming risk."} /><div className="risk-grid">{[
      [isKu ? "جێبەجێکردن" : "Delivery", isKu ? "کەمی پسپۆڕی شیاو و ڕێژەی ناهاوسەنگی کوالێتی." : "Limited qualified expertise and uneven service quality.", isKu ? "پەیوەندی زوو، پاداشتی دادپەروەرانە، پێوەری دابینکەر و چاودێری بەردەوام." : "Early relationships, fair compensation, provider standards and ongoing supervision."],
      [isKu ? "دارایی" : "Financial", isKu ? "پشتبەستن بە یەک سەرچاوەی داهات." : "Dependence on a single source of income.", isKu ? "فەندی چەندساڵە، گرانت، هاوبەشی کۆمپانیا و جۆراوجۆرکردنی داهات." : "Multi-year funding, grants, corporate partnerships and income diversification."],
      [isKu ? "ناوبانگ" : "Reputation", isKu ? "بەڵێنی گەورەتر لە توانای جێبەجێکردن یان بەڵگە." : "Promising beyond delivery capacity or available evidence.", isKu ? "چاودێری داتا، ڕاپۆرتی ڕوون، بۆردی سەربەخۆ و جیاکردنەوەی تارگێت لە دەستکەوت." : "Data monitoring, transparent reporting, independent oversight and separating targets from results."],
      [isKu ? "پاراستن" : "Safeguarding", isKu ? "زیان یان بەکارهێنانی نادروستی چیرۆک و زانیاری کەسی." : "Harm or misuse of personal stories and sensitive information.", isKu ? "پشکنینی پێش کار، ڕەزامەندی، کەمکردنەوەی داتا و ڕێگای نهێنی سکاڵا." : "Pre-service checks, consent, data minimisation and confidential complaints routes."],
    ].map(([type,risk,mitigation]) => <article key={type}><p>{type}</p><h3>{risk}</h3><span>{mitigation}</span></article>)}</div></div></section>
    <section className="center-cta section-pad"><div className="shell"><h2>{isKu ? "پشکنینی هاوبەشی؟" : "Preparing a due-diligence review?"}</h2><p>{isKu ? "دەتوانین پاکێجی بەڵگەنامەی بەردەست و لیستی ئەو شتانەی لە ئامادەکردندان بنێرین." : "We can share the available document pack and a clear list of items still in preparation."}</p><Link className="button button--dark" href={`/${locale}/contact`}>{isKu ? "داوای پاکێجی پشکنین بکە" : "Request the partner pack"}</Link></div></section>
  </>;
}
