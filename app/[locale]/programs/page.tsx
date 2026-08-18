import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { makePageMetadata } from "@/lib/metadata";
import { isLocale, programData, tx } from "@/lib/site";

const title = { en: "Our work", ku: "کارەکانمان" };
const description = { en: "How Zane Foundation supports early development, families, inclusive education and public understanding.", ku: "چۆنیەتی کارکردنی فاوندەیشنی زەنێ لە بواری گەشەی زوو، خێزان، پەروەردەی گشتگیر و تێگەیشتنی کۆمەڵگا." };
export function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> { return makePageMetadata(params, title, description, "/programs"); }

export default async function ProgramsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;
  const isKu = locale === "ku";
  const details = [
    {
      audience: isKu ? "منداڵان، گەنجان و خێزانەکانیان" : "Children, young people and their families",
      actions: isKu ? ["ڕێنمایی بۆ دۆزینەوەی پشتگیریی گونجاو", "هاوکاری لەگەڵ پسپۆڕانی شیاو", "سەرنج لەسەر تواناکان و پێداویستیی تاکەکەسی"] : ["Guidance toward appropriate support", "Collaboration with qualified professionals", "Attention to individual strengths and needs"],
    },
    {
      audience: isKu ? "دایک و باوک، خزمەکان و چاودێران" : "Parents, relatives and caregivers",
      actions: isKu ? ["زانیاریی ڕوون و سەرچاوەدار", "ڕێنمایی بۆ هەنگاوی داهاتوو", "پەیوەستکردنی خێزان بە سەرچاوە و کۆمەڵگا"] : ["Clear, sourced information", "Guidance on practical next steps", "Connections to resources and community"],
    },
    {
      audience: isKu ? "قوتابخانە، مامۆستا و خێزان" : "Schools, teachers and families",
      actions: isKu ? ["ڕێنماییی کرداری بۆ پۆلی گشتگیر", "هاوکاری لەنێوان قوتابخانە و خێزان", "بەرزکردنەوەی چاوەڕوانی بۆ هەموو فێرخوازێک"] : ["Practical guidance for inclusive classrooms", "Stronger school–family collaboration", "High expectations for every learner"],
    },
    {
      audience: isKu ? "میدیا، ڕێکخراو، کۆمپانیا و کۆمەڵگا" : "Media, institutions, companies and communities",
      actions: isKu ? ["زمان و نوێنەرایەتیی بەڕێز", "هۆشیاری لەسەر ماف و بەشداری", "پشتیوانی بۆ ژینگەی گشتگیر"] : ["Respectful language and representation", "Awareness of rights and participation", "Support for more inclusive environments"],
    },
  ];

  return <>
    <PageHero
      eyebrow={isKu ? "کارەکانمان" : "Our work"}
      title={isKu ? "پشتگیریی دروست لە ژیانی ڕۆژانەدا." : <>Practical support.<br /><em>Everyday inclusion.</em></>}
      intro={<p>{isKu ? "کارەکانی زەنێ تاک، خێزان، قوتابخانە و کۆمەڵگا دەگرێتەوە؛ بۆ فراوانکردنی دەرفەت و بەشداری." : "Zane’s work spans individual, family, school and community life to expand opportunity and participation."}</p>}
      aside={<p>{isKu ? "هەموو کەسێک بە شێوەی خۆی فێردەبێت و گەشە دەکات. شێوازی پشتگیری دەبێت لەگەڵ کەسەکە بگونجێت." : "Every person learns and develops differently. Support must fit the person."}</p>}
    />

    <section className="editorial-image-section"><div className="shell"><figure className="editorial-figure"><div className="editorial-figure__media"><Image src="/images/editorial/inclusive-classroom.jpg" alt={isKu ? "منداڵێکی کوردی خاوەن سندرۆمی داون لەگەڵ هاوپۆلەکانی لە چالاکییەکی فێربووندا بەشدارە." : "A Kurdish child with Down syndrome takes part in a classroom activity alongside classmates."} fill sizes="(max-width: 900px) 100vw, 1240px" /></div><figcaption><span>{isKu ? "پەروەردەی گشتگیر" : "Inclusive education"}</span><p>{isKu ? "بەشداریی ناو پۆل لە ئامادەبوون زیاترە؛ منداڵ دەبێت فێربێت، هەڵبژێرێت و لەگەڵ هاوپۆلەکانی کار بکات." : "Classroom inclusion is more than attendance: a child learns, makes choices and works alongside classmates."}</p></figcaption></figure></div></section>

    <section className="program-detail-section section-pad"><div className="shell program-detail-list">{programData.map((program, index) => <article className="program-detail" id={program.id} key={program.id}>
      <div className="program-detail__head"><p>{program.number}</p><div><span>{tx(program.stage, locale)}</span><h2>{tx(program.title, locale)}</h2></div></div>
      <div className="program-detail__body"><div><h3>{isKu ? "سەرنجی سەرەکی" : "Primary focus"}</h3><p>{tx(program.summary, locale)}</p><h3>{isKu ? "بۆچی گرنگە" : "Why it matters"}</h3><p>{tx(program.outcome, locale)}</p></div><div className="program-detail__deliverables"><h3>{isKu ? "بۆ کێیە" : "Who it is for"}</h3><p>{details[index].audience}</p><h3>{isKu ? "پێکهاتەی کار" : "What it includes"}</h3><ul>{details[index].actions.map((item) => <li key={item}>{item}</li>)}</ul></div></div>
    </article>)}</div></section>

    <section className="delivery-section section-pad section-sand"><div className="shell"><SectionHeading eyebrow={isKu ? "پێوەری جێبەجێکردن" : "Delivery standards"} title={isKu ? "ڕێز، پاراستن و کوالێتی لە هەموو پەیوەندییەکدا." : "Respect, safeguarding and quality in every interaction."} /><div className="standards-grid">{[
      [isKu ? "سەرەتا گوێ دەگرین" : "Listen first", isKu ? "پێداویستی و هەڵبژاردنی کەسەکە و خێزانەکەی ئاراستەی کارەکە دیاری دەکات." : "The person’s and family’s priorities shape the relationship."],
      [isKu ? "پسپۆڕی" : "Qualified practice", isKu ? "ڕێنمایی و خزمەتگوزاری لەگەڵ کەسانی شیاو و بە پێوەری ڕوون ئەنجام دەدرێت." : "Guidance and support are connected to qualified people and clear standards."],
      [isKu ? "پاراستن" : "Safeguarding", isKu ? "سەلامەتی، ڕەزامەندی و نهێنی لە هەموو کارێکدا لە پێشەوەن." : "Safety, consent and privacy come before publicity or convenience."],
      [isKu ? "فێربوون" : "Keep learning", isKu ? "تێبینی و ئەزموونی کۆمەڵگا شێوازی کارکردنمان باشتر دەکات." : "Feedback and community experience improve the way we work."],
    ].map(([h,p], i) => <article key={h}><span>0{i+1}</span><h3>{h}</h3><p>{p}</p></article>)}</div><div className="center-action"><Link className="button button--dark" href={`/${locale}/contact`}>{isKu ? "پەیوەندی بکە" : "Talk to Zane"}</Link></div></div></section>
  </>;
}
