import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { makePageMetadata } from "@/lib/metadata";
import { isLocale, proposedTargets, tx } from "@/lib/site";

const title = { en: "Impact framework", ku: "چوارچێوەی کاریگەری" };
const description = { en: "How Zane Foundation will define, measure and report responsible progress.", ku: "چۆنیەتی پێناسەکردن، پێوانەکردن و ڕاگەیاندنی پێشکەوتنی بەرپرسانە لەلایەن زەنێ." };
export function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> { return makePageMetadata(params, title, description, "/impact"); }

export default async function ImpactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params; if (!isLocale(raw)) notFound(); const locale = raw; const isKu = locale === "ku";
  return <>
    <PageHero eyebrow={isKu ? "چاودێری و هەڵسەنگاندن" : "Monitoring & evaluation"} title={isKu ? "پێوانەکردنی ئەو گۆڕانەی کە گرنگە." : <>Measure what changes.<br /><em>Report what is true.</em></>} intro={<p>{isKu ? "کاریگەری بە ژمارەی چالاکییەکان تەنها ناپێورێت. دەبێت کوالێتی، ئەزموونی خێزان و گۆڕانی دەرفەتەکانیش ببینرێت." : "Impact is not the number of activities completed. It also has to capture quality, family experience and whether opportunity genuinely expands."}</p>} aside={<p>{isKu ? "ئەم لاپەڕەیە چوارچێوەی پلانکراو نیشان دەدات. داتای دەستکەوت دوای دەستپێکردنی پرۆگرام بڵاودەکرێتەوە." : "This page presents the planned framework. Achievement data will appear after programs launch."}</p>} />
    <section className="section-pad"><div className="shell"><SectionHeading eyebrow={isKu ? "تارگێتی ساڵی یەکەم" : "Year-one planning targets"} title={isKu ? "ئامانجی ڕوون، بەڵام بە ناوی دەستکەوتەوە نا." : "Clear ambition, never disguised as achievement."} /><div className="impact-target-grid">{proposedTargets.map((target) => <article key={target.value}><strong>{target.value}</strong><p>{tx(target.label, locale)}</p><span>{isKu ? "تارگێتی پێشنیازکراو" : "Proposed target"}</span></article>)}</div></div></section>
    <section className="logic-section section-pad section-ink"><div className="shell"><SectionHeading inverse eyebrow={isKu ? "زنجیرەی گۆڕان" : "The results chain"} title={isKu ? "لە سەرچاوەوە بۆ گۆڕانی ژیان." : "From resources to changed lives."} /><div className="logic-flow">{[
      [isKu ? "سەرچاوە" : "Inputs", isKu ? "فەند، پسپۆڕ، هاوبەش و سیستەمی پاراستن" : "Funding, expertise, partnerships and safeguarding systems"],
      [isKu ? "چالاکی" : "Activities", isKu ? "چارەسەری، ڕێنمایی، ڕاهێنان و کەمپەین" : "Therapy, guidance, training and public campaigns"],
      [isKu ? "دەرچوون" : "Outputs", isKu ? "کاتژمێر، خێزان، مامۆستا و دەستگەیشتن" : "Hours, families, teachers and public reach"],
      [isKu ? "دەرئەنجام" : "Outcomes", isKu ? "گەشە، متمانە، گشتگیری و تێڕوانینی گۆڕاو" : "Development, confidence, inclusion and changed attitudes"],
      [isKu ? "کاریگەری" : "Impact", isKu ? "ژیانێکی پڕ دەرفەت، هەڵبژاردن و شکۆ" : "Lives with greater opportunity, choice and dignity"],
    ].map(([h,p], i) => <article key={h}><span>0{i+1}</span><h3>{h}</h3><p>{p}</p></article>)}</div></div></section>
    <section className="section-pad"><div className="shell reporting-grid"><div><SectionHeading eyebrow={isKu ? "ڕاپۆرتدان" : "Reporting discipline"} title={isKu ? "هەر ئاستێک پرسیارێکی جیاواز وەڵام دەداتەوە." : "Each reporting layer answers a different question."} /></div><div className="reporting-list">{[
      [isKu ? "دوو هەفتەجار و مانگانە" : "Fortnightly & monthly", isKu ? "ئایا کارەکان بە سەلامەتی و بەپێی پلان دەڕۆن؟" : "Is delivery safe, timely and on plan?"],
      [isKu ? "چارەکی و شەش مانگە" : "Quarterly & six-month", isKu ? "ئایا بودجە و نیشانەکان پێشکەوتنی پێویست نیشان دەدەن؟" : "Do budgets and indicators show the expected progress?"],
      [isKu ? "ساڵانە" : "Annual", isKu ? "چی گۆڕا، چی فێربووین و چی دەبێت بگۆڕین؟" : "What changed, what did we learn and what must change next?"],
    ].map(([cadence, question]) => <article key={cadence}><p>{cadence}</p><h3>{question}</h3></article>)}</div></div></section>
    <section className="budget-section section-pad section-sand"><div className="shell budget-grid"><div><p className="eyebrow">{isKu ? "پلانی تەرخانکردنی بودجە" : "Planned budget allocation"}</p><h2>{isKu ? "پارە دەبێت ڕێگای خۆی بۆ کاریگەری ڕوون بکات." : "Money should have a visible path to impact."}</h2><p>{isKu ? "ئەم ڕێژانە مۆدێلی پلانی ساڵی یەکەمن و دەبێت بە بودجە و ڕاپۆرتی دارایی پشتڕاست بکرێنەوە." : "These percentages are the year-one planning model and must later be reconciled against budgets and financial reports."}</p></div><div className="budget-visual"><div className="budget-donut" aria-label={isKu ? "٦٥ لە سەد پرۆگرام، ٢٥ لە سەد کارمەند و پسپۆڕ، ١٠ لە سەد کارگێڕی" : "65 percent programs, 25 percent people and expertise, 10 percent administration"}><span>65%</span><small>{isKu ? "پرۆگرام" : "programs"}</small></div><ul><li><span className="key key--program" />65% {isKu ? "خزمەتگوزاری پرۆگرام" : "Program services"}</li><li><span className="key key--people" />25% {isKu ? "کارمەند و پسپۆڕی" : "People & expertise"}</li><li><span className="key key--admin" />10% {isKu ? "کارگێڕی و جێبەجێکردن" : "Administration & operations"}</li></ul></div></div></section>
    <section className="center-cta section-pad"><div className="shell"><h2>{isKu ? "کاریگەری بێ ڕوونکردنەوە، متمانە درووست ناکات." : "Impact without transparency does not build trust."}</h2><p>{isKu ? "ڕێگای بڵاوکردنەوەی بەڵگەنامە، پاراستن و ڕاپۆرتەکانمان ببینە." : "See how governance documents, safeguarding and reports will be published."}</p><Link className="button button--dark" href={`/${locale}/transparency`}>{isKu ? "ڕێگای ڕوونکردنەوە" : "Transparency roadmap"}</Link></div></section>
  </>;
}

