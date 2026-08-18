import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { makePageMetadata } from "@/lib/metadata";
import { isLocale } from "@/lib/site";

const title = { en: "Measuring progress", ku: "پێوانەکردنی پێشکەوتن" };
const description = { en: "How Zane Foundation defines and measures meaningful change for people, families and communities.", ku: "چۆنیەتی پێناسەکردن و پێوانەکردنی گۆڕان بۆ تاک، خێزان و کۆمەڵگا لەلایەن فاوندەیشنی زەنێوە." };
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
    <PageHero eyebrow={isKu ? "پێوانەکردنی پێشکەوتن" : "Measuring progress"} title={isKu ? "گۆڕان لە ژیانی ڕۆژانەدا دەپێورین." : <>We measure change<br /><em>in daily life.</em></>} intro={<p>{isKu ? "چالاکی بە تەنها کاریگەری نییە. پێشکەوتن بە هەڵبژاردنی زیاتر، دەستگەیشتنی باشتر و بەشداریی تەواوتر دەپێوردرێت." : "Activity alone is not impact. Progress means more choice, better access and fuller participation."}</p>} aside={<p>{isKu ? "چوار بابەت ئاراستەی پێوانەکردنەکانمان دیاری دەکەن: هەڵبژاردن، دەستگەیشتن، بەشداری و تێگەیشتنی کۆمەڵگا." : "Four questions guide measurement: choice, access, participation and public understanding."}</p>} />

    <section className="section-pad"><div className="shell"><SectionHeading eyebrow={isKu ? "کاریگەری چییە" : "What progress means"} title={isKu ? "ژیانێک بە دەرفەت، پەیوەندی و شکۆی زیاتر." : "A life with more opportunity, connection and dignity."} /><div className="impact-meaning-grid">{meanings.map(([h,p],i) => <article key={h}><span>0{i+1}</span><h3>{h}</h3><p>{p}</p></article>)}</div></div></section>

    <section className="editorial-image-section editorial-image-section--ink"><div className="shell"><figure className="editorial-figure editorial-figure--reverse"><div className="editorial-figure__media"><Image src="/images/editorial/community-employment.jpg" alt={isKu ? "گەنجێکی کوردی خاوەن سندرۆمی داون لە کتێبخانەیەکدا کارەکانی ڕێکدەخات." : "A Kurdish young man with Down syndrome organizes work in a bookstore."} fill sizes="(max-width: 900px) 100vw, 1240px" /></div><figcaption><span>{isKu ? "بەشداریی تەواو" : "Full participation"}</span><p>{isKu ? "خوێندن و کار و ژیانی کۆمەڵایەتی بەشە جیاوازەکانی هەمان مافن: مافی بەشداری." : "Education, work and community life are different expressions of the same right: participation."}</p></figcaption></figure></div></section>

    <section className="impact-ecosystem section-pad section-ink"><div className="shell"><SectionHeading inverse eyebrow={isKu ? "گۆڕان کاری هەمووانە" : "Change is shared"} title={isKu ? "گشتگیری بە هەوڵی یەک کەس یان یەک ڕێکخراو دروست نابێت." : "Inclusion is built across the whole community."} /><div className="ecosystem-grid">{[
      [isKu ? "تاک" : "The person", isKu ? "ماف، ئارەزوو و تواناکانی تاک لە ناوەندی کارەکەدان." : "The person’s rights, preferences and strengths stay at the centre."],
      [isKu ? "خێزان" : "Family", isKu ? "خێزان زانیاری، پشتگیری و دەرفەتی بڕیاردانی هەیە." : "Families have reliable information, support and room to decide."],
      [isKu ? "خزمەتگوزاری و قوتابخانە" : "Services & schools", isKu ? "پسپۆڕ و مامۆستا شێوازی کارکردنی گشتگیر بەکار دەهێنن." : "Professionals and educators make inclusive practice real."],
      [isKu ? "کۆمەڵگا" : "Community", isKu ? "یاسا، ڕێکخراو و تێڕوانین کۆسپەکان کەم دەکەنەوە." : "Institutions, policies and attitudes remove barriers."],
    ].map(([h,p],i) => <article key={h}><span>0{i+1}</span><h3>{h}</h3><p>{p}</p></article>)}</div></div></section>

    <section className="section-pad"><div className="shell impact-learning-grid"><div><p className="eyebrow">{isKu ? "بەڵگە و ڕاپۆرت" : "Evidence and reporting"}</p><h2>{isKu ? "چوار بنەما بۆ پێوانەکردن و ڕاپۆرتدان." : "Four rules for measurement and reporting."}</h2></div><div className="impact-learning-list">{[
      [isKu ? "تێبینیی ڕاستەوخۆ" : "Direct feedback", isKu ? "تاک و خێزان دەبێت بتوانن بە ئاسانی بڵێن چی باشە و چی پێویستی بە گۆڕان هەیە." : "People and families need simple ways to say what works and what must change."],
      [isKu ? "پاراستن و ڕەزامەندی" : "Safeguarding and consent", isKu ? "هیچ ژمارە یان چیرۆکێک لە سەلامەتی و شکۆی مرۆڤ گرنگتر نییە." : "No data point or story is more important than safety and dignity."],
      [isKu ? "بەڵگە و ئەزموونی مرۆڤ" : "Evidence with humanity", isKu ? "زانیاری یارمەتیمان دەدات بڕیاری باشتر بدەین؛ بەڵام دەنگی خەڵک هەمیشە دەبێت ببیسترێت." : "Data should inform decisions without replacing human experience."],
      [isKu ? "ڕاپۆرتی گشتی" : "Public reporting", isKu ? "ئەنجام و وانە فێربووەکان بە زمانێکی ڕوون بڵاودەکەینەوە." : "Results and lessons will be shared in clear public language."],
    ].map(([h,p],i) => <article key={h}><span>0{i+1}</span><div><h3>{h}</h3><p>{p}</p></div></article>)}</div></div></section>

    <section className="center-cta section-pad section-sand"><div className="shell"><h2>{isKu ? "بەڕێوەبردن بەشێکە لە جێبەجێکردنی کار." : "Governance is part of program delivery."}</h2><p>{isKu ? "بەرپرسیارێتی، پاراستن و ڕێگاکانی سکاڵا لە یەک بەشی گشتیدا بڵاوکراونەتەوە." : "Responsibilities, safeguarding and complaints routes are published in one public section."}</p><Link className="button button--dark" href={`/${locale}/transparency`}>{isKu ? "بەڕێوەبردن و لێپرسراوێتی" : "Governance and accountability"}</Link></div></section>
  </>;
}
