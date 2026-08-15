import type { Metadata } from "next";
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
      actions: isKu ? ["زانیاریی ڕوون و باوەڕپێکراو", "ڕێنمایی بۆ هەنگاوی داهاتوو", "پەیوەستکردنی خێزان بە سەرچاوە و کۆمەڵگا"] : ["Clear, reliable information", "Guidance on practical next steps", "Connections to resources and community"],
    },
    {
      audience: isKu ? "قوتابخانە، مامۆستا و خێزان" : "Schools, teachers and families",
      actions: isKu ? ["ڕێنماییی کرداری بۆ پۆلی گشتگیر", "هاوکاری لەنێوان قوتابخانە و خێزان", "بەرزکردنەوەی چاوەڕوانی بۆ هەر فێرخوازێک"] : ["Practical guidance for inclusive classrooms", "Stronger school–family collaboration", "High expectations for every learner"],
    },
    {
      audience: isKu ? "میدیا، دامەزراوە، کۆمپانیا و کۆمەڵگا" : "Media, institutions, companies and communities",
      actions: isKu ? ["زمان و نوێنەرایەتیی بەڕێز", "هۆشیاری لەسەر ماف و بەشداری", "پشتیوانی بۆ ژینگەی گشتگیر"] : ["Respectful language and representation", "Awareness of rights and participation", "Support for more inclusive environments"],
    },
  ];

  return <>
    <PageHero
      eyebrow={isKu ? "کارەکانمان" : "Our work"}
      title={isKu ? "پشتگیریی دروست، لە ژیانی ڕۆژانەدا." : <>Practical support.<br /><em>Everyday inclusion.</em></>}
      intro={<p>{isKu ? "زەنێ لەگەڵ تاک، خێزان، قوتابخانە و کۆمەڵگا کار دەکات بۆ ئەوەی دەرفەت و بەشداری فراوانتر بێت." : "Zane works across individual, family, school and community life to expand opportunity and participation."}</p>}
      aside={<p>{isKu ? "هەر کەسێک بە شێوەی خۆی فێردەبێت، گەشە دەکات و بەشدار دەبێت. پشتگیریی باش لە گوێگرتن دەست پێدەکات." : "Every person learns, develops and participates differently. Good support begins by listening."}</p>}
    />

    <section className="program-detail-section section-pad"><div className="shell program-detail-list">{programData.map((program, index) => <article className="program-detail" id={program.id} key={program.id}>
      <div className="program-detail__head"><p>{program.number}</p><div><span>{tx(program.stage, locale)}</span><h2>{tx(program.title, locale)}</h2></div></div>
      <div className="program-detail__body"><div><h3>{isKu ? "ئەم بوارە چی دەکات" : "What this area does"}</h3><p>{tx(program.summary, locale)}</p><h3>{isKu ? "بۆچی گرنگە" : "Why it matters"}</h3><p>{tx(program.outcome, locale)}</p></div><div className="program-detail__deliverables"><h3>{isKu ? "بۆ کێیە" : "Who it is for"}</h3><p>{details[index].audience}</p><h3>{isKu ? "چی لەخۆدەگرێت" : "What it includes"}</h3><ul>{details[index].actions.map((item) => <li key={item}>{item}</li>)}</ul></div></div>
    </article>)}</div></section>

    <section className="delivery-section section-pad section-sand"><div className="shell"><SectionHeading eyebrow={isKu ? "پێوەری کار" : "How we work"} title={isKu ? "ڕێز، پاراستن و کوالێتی لە هەر پەیوەندییەکدا." : "Respect, safeguarding and quality in every interaction."} /><div className="standards-grid">{[
      [isKu ? "گوێگرتن" : "Listen first", isKu ? "پێداویستی و هەڵبژاردنی تاک و خێزان بنەمای پەیوەندییەکەیە." : "The person’s and family’s priorities shape the relationship."],
      [isKu ? "پسپۆڕی" : "Qualified practice", isKu ? "ڕێنمایی و خزمەتگوزاری لەگەڵ کەسانی شیاو و بە پێوەری ڕوون ئەنجام دەدرێت." : "Guidance and support are connected to qualified people and clear standards."],
      [isKu ? "پاراستن" : "Safeguarding", isKu ? "سەلامەتی، ڕەزامەندی و نهێنی لە هەر کارێکدا پێشینەن." : "Safety, consent and privacy come before publicity or convenience."],
      [isKu ? "فێربوون" : "Keep learning", isKu ? "فیدباک و ئەزموونی کۆمەڵگا شێوازی کارکردنمان باشتر دەکات." : "Feedback and community experience improve the way we work."],
    ].map(([h,p], i) => <article key={h}><span>0{i+1}</span><h3>{h}</h3><p>{p}</p></article>)}</div><div className="center-action"><Link className="button button--dark" href={`/${locale}/contact`}>{isKu ? "پەیوەندی بکە" : "Talk to Zane"}</Link></div></div></section>
  </>;
}
