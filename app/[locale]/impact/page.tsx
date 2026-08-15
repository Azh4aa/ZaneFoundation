import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { makePageMetadata } from "@/lib/metadata";
import { isLocale } from "@/lib/site";

const title = { en: "Our approach to impact", ku: "ڕوانگەمان بۆ کاریگەری" };
const description = { en: "How Zane Foundation understands meaningful change for people, families and communities.", ku: "چۆنیەتی تێگەیشتنی فاوندەیشنی زەنێ لە گۆڕانی بەواتا بۆ تاک، خێزان و کۆمەڵگا." };
export function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> { return makePageMetadata(params, title, description, "/impact"); }

export default async function ImpactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params; if (!isLocale(raw)) notFound(); const locale = raw; const isKu = locale === "ku";
  const meanings = [
    [isKu ? "هەڵبژاردن" : "Choice", isKu ? "کەسەکە دەنگی لەو بڕیارانەدا هەبێت کە پەیوەندییان بە ژیانی خۆیەوە هەیە." : "People have a voice in decisions about their own lives."],
    [isKu ? "دەستگەیشتن" : "Access", isKu ? "زانیاری، پشتگیری و شوێنەکان بە ئاسانی بۆ هەمووان بەردەست بن." : "Information, support and places are easier to reach and use."],
    [isKu ? "بەشداری" : "Participation", isKu ? "خوێندن، کار، چالاکی و ژیانی کۆمەڵایەتی بەردەست بن." : "Education, work, activities and community life are open to everyone."],
    [isKu ? "تێگەیشتن" : "Understanding", isKu ? "کۆمەڵگا کەسان بە توانا، ماف و کەسایەتیی خۆیانەوە بناسێت." : "Communities see people through their abilities, rights and individuality."],
  ];

  return <>
    <PageHero eyebrow={isKu ? "کاریگەری" : "Our approach to impact"} title={isKu ? "گۆڕانی ڕاستەقینە لە ژیانی ڕۆژانەدا دیار دەبێت." : <>Meaningful change<br /><em>shows up in daily life.</em></>} intro={<p>{isKu ? "کاریگەری لای زەنێ بە ژمارەی چالاکی ناپێورێت؛ بەوە دەپێورێت کە کەسەکە هەڵبژاردن، دەستگەیشتن و بەشداریی زیاتر هەبێت." : "For Zane, impact is not simply activity. It is whether people experience more choice, better access and fuller participation."}</p>} aside={<p>{isKu ? "ئەزموونی کەسان و خێزانەکانیان، لەگەڵ بەڵگە و تێبینی، نیشانمان دەدات چی سوودی هەیە." : "The experience of people and families, together with evidence and feedback, tells us what is working."}</p>} />

    <section className="section-pad"><div className="shell"><SectionHeading eyebrow={isKu ? "کاریگەری چییە" : "What progress means"} title={isKu ? "ژیانێک بە دەرفەت، پەیوەندی و شکۆی زیاتر." : "A life with more opportunity, connection and dignity."} /><div className="impact-meaning-grid">{meanings.map(([h,p],i) => <article key={h}><span>0{i+1}</span><h3>{h}</h3><p>{p}</p></article>)}</div></div></section>

    <section className="impact-ecosystem section-pad section-ink"><div className="shell"><SectionHeading inverse eyebrow={isKu ? "گۆڕان کاری هەمووانە" : "Change is shared"} title={isKu ? "گشتگیری بە هەوڵی یەک کەس یان یەک ڕێکخراو دروست نابێت." : "Inclusion is built across the whole community."} /><div className="ecosystem-grid">{[
      [isKu ? "تاک" : "The person", isKu ? "ماف، ئارەزوو و تواناکانی تاک لە ناوەندی کارەکەدان." : "The person’s rights, preferences and strengths stay at the centre."],
      [isKu ? "خێزان" : "Family", isKu ? "خێزان زانیاری، پشتگیری و دەرفەتی بڕیاردانی هەیە." : "Families have reliable information, support and room to decide."],
      [isKu ? "خزمەتگوزاری و قوتابخانە" : "Services & schools", isKu ? "پسپۆڕ و مامۆستا شێوازی کارکردنی گشتگیر بەکار دەهێنن." : "Professionals and educators make inclusive practice real."],
      [isKu ? "کۆمەڵگا" : "Community", isKu ? "یاسا، ڕێکخراو و تێڕوانین کۆسپەکان کەم دەکەنەوە." : "Institutions, policies and attitudes remove barriers."],
    ].map(([h,p],i) => <article key={h}><span>0{i+1}</span><h3>{h}</h3><p>{p}</p></article>)}</div></div></section>

    <section className="section-pad"><div className="shell impact-learning-grid"><div><p className="eyebrow">{isKu ? "فێربوون و لێپرسراوێتی" : "Learning and accountability"}</p><h2>{isKu ? "گوێ دەگرین، پاراستن دەکەین، فێردەبین و بە ڕوونی ڕادەگەیەنین." : "Listen. Protect. Improve. Report clearly."}</h2></div><div className="impact-learning-list">{[
      [isKu ? "تێبینیی ڕاستەوخۆ" : "Direct feedback", isKu ? "تاک و خێزان دەبێت بتوانن بە ئاسانی بڵێن چی باشە و چی پێویستی بە گۆڕان هەیە." : "People and families need simple ways to say what works and what must change."],
      [isKu ? "پاراستن و ڕەزامەندی" : "Safeguarding and consent", isKu ? "هیچ ژمارە یان چیرۆکێک لە سەلامەتی و شکۆی مرۆڤ گرنگتر نییە." : "No data point or story is more important than safety and dignity."],
      [isKu ? "بەڵگە و ئەزموونی مرۆڤ" : "Evidence with humanity", isKu ? "زانیاری یارمەتیمان دەدات بڕیاری باشتر بدەین؛ بەڵام دەنگی خەڵک هەمیشە دەبێت ببیسترێت." : "Data should inform decisions without replacing human experience."],
      [isKu ? "ڕاپۆرتی گشتی" : "Public reporting", isKu ? "ئەنجام و وانە فێربووەکان بە زمانێکی ڕوون بڵاودەکەینەوە." : "Results and lessons will be shared in clear public language."],
    ].map(([h,p],i) => <article key={h}><span>0{i+1}</span><div><h3>{h}</h3><p>{p}</p></div></article>)}</div></div></section>

    <section className="center-cta section-pad section-sand"><div className="shell"><h2>{isKu ? "متمانە بنەمای کاریگەریی بەردەوامە." : "Lasting impact depends on trust."}</h2><p>{isKu ? "بزانە زەنێ چۆن بەڕێوەبردن، پاراستن و لێپرسراوێتی جێبەجێ دەکات." : "See how Zane approaches governance, safeguarding and public accountability."}</p><Link className="button button--dark" href={`/${locale}/transparency`}>{isKu ? "بەڕێوەبردن و متمانە" : "Governance and trust"}</Link></div></section>
  </>;
}
