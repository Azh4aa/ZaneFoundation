import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { makePageMetadata } from "@/lib/metadata";
import { isLocale, programData, tx } from "@/lib/site";

const title = { en: "Programs", ku: "پرۆگرامەکان" };
const description = { en: "Zane Foundation’s planned programs for early support, families, inclusive education and public advocacy.", ku: "پرۆگرامە پلانکراوەکانی زەنێ بۆ پشتگیری زوو، خێزان، پەروەردەی گشتگیر و داکۆکی گشتی." };
export function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> { return makePageMetadata(params, title, description, "/programs"); }

export default async function ProgramsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;
  const isKu = locale === "ku";
  const details = [
    { deliverables: isKu ? ["پێوەری ڕوونی شایستەبوون", "تۆڕی دابینکەری شیاو", "پلانی تاکەکەسی و بەدواداچوون"] : ["Clear eligibility criteria", "A qualified provider network", "Individual plans and follow-up"], measure: isKu ? "کاتژمێری دابینکراو، خێزانی بەشدار، گۆڕانی تێبینیکراو و ڕازیبوون." : "Hours delivered, families reached, observed change and satisfaction." },
    { deliverables: isKu ? ["وەڵامدانەوەی چەندزمانی", "بەنکی زانیاری پشتڕاستکراو", "پرۆتۆکۆلی پاراستن و ڕەوانەکردن"] : ["Multilingual response", "Verified knowledge base", "Safeguarding and referral protocols"], measure: isKu ? "ژمارە و جۆری پرسیار، کاتی وەڵامدانەوە، کوالێتی ڕەوانەکردن و فیدباک." : "Enquiry volume and type, response time, referral quality and feedback." },
    { deliverables: isKu ? ["مۆدیولی ڕاهێنانی مامۆستا", "کۆچی کلاسی تاقیکاری", "پشتگیری و ڕاوێژکاریی دوای ڕاهێنان"] : ["Teacher training modules", "Pilot classroom cohort", "Post-training coaching and support"], measure: isKu ? "مامۆستای ڕاهێنراو، پراکتیسی گۆڕاو، بەشداری خوێندکار و فیدباکی خێزان." : "Teachers trained, practice change, learner participation and family feedback." },
    { deliverables: isKu ? ["چیرۆکی بە ڕەزامەندی", "هاوبەشی میدیا و دامەزراوە", "ڕاپرسی پێش و دوای کەمپەین"] : ["Consented storytelling", "Media and institutional partnerships", "Pre- and post-campaign polling"], measure: isKu ? "دەستگەیشتن، کوالێتی نوێنەرایەتی و گۆڕان لە تێڕوانینی گشتی." : "Reach, representation quality and shifts in public attitudes." },
  ];

  return <>
    <PageHero eyebrow={isKu ? "پرۆگرامە ستراتیژییەکان" : "Strategic programs"} title={isKu ? "لە کاتی پێویستدا، پشتگیریی دروست." : <>The right support.<br /><em>At the moment it matters.</em></>} intro={<p>{isKu ? "هەر پرۆگرامێک بۆ بۆشاییەکی دیاریکراو درووستکراوە، بە دەرئەنجامی ڕوون، چاودێری و گەشەپێدانی قۆناغ بە قۆناغ." : "Each program is built around a defined gap, a clear outcome, ongoing measurement and staged growth."}</p>} aside={<p>{isKu ? "پرۆگرامەکان لە قۆناغی دیزاین و فەندکردندان. هیچ خزمەتگوزارییەک بەردەست نیشان نادرێت تا کاتێک بەڕاستی دەست پێدەکات." : "Programs are in design and funding stages. No service is presented as available until it has actually launched."}</p>} />
    <section className="program-detail-section section-pad"><div className="shell program-detail-list">{programData.map((program, index) => <article className="program-detail" id={program.id} key={program.id}><div className="program-detail__head"><p>{program.number}</p><div><span>{tx(program.stage, locale)}</span><h2>{tx(program.title, locale)}</h2></div></div><div className="program-detail__body"><div><h3>{isKu ? "وەڵامەکە" : "The response"}</h3><p>{tx(program.summary, locale)}</p><h3>{isKu ? "گۆڕانی مەبەست" : "Intended change"}</h3><p>{tx(program.outcome, locale)}</p></div><div className="program-detail__deliverables"><h3>{isKu ? "پێکهاتەی سەرەکی" : "Core building blocks"}</h3><ul>{details[index].deliverables.map((item) => <li key={item}>{item}</li>)}</ul><h3>{isKu ? "چۆن دەپێوردرێت" : "How it will be measured"}</h3><p>{details[index].measure}</p></div></div></article>)}</div></section>
    <section className="delivery-section section-pad section-sand"><div className="shell"><SectionHeading eyebrow={isKu ? "ستانداردی جێبەجێکردن" : "Delivery standards"} title={isKu ? "خێرایی بێ کوالێتی، پێشکەوتن نییە." : "Speed without quality is not progress."} /><div className="standards-grid">{[
      [isKu ? "پسپۆڕی شیاو" : "Qualified expertise", isKu ? "هەر خزمەتگوزارییەک لەلایەن کەسانی شیاوەوە دیزاین یان جێبەجێ دەکرێت." : "Every service is designed or delivered by appropriately qualified people."],
      [isKu ? "پاراستنی یەکەم" : "Safeguarding first", isKu ? "هیچ چیرۆک، وێنە یان داتایەک بەبێ ڕەزامەندی و پێداچوونەوە بڵاوناكرێتەوە." : "No story, image or data is published without consent and safeguarding review."],
      [isKu ? "داتای کەم و پێویست" : "Minimum necessary data", isKu ? "تەنها ئەو زانیارییە کۆدەکرێتەوە کە بۆ خزمەت و فێربوون پێویستە." : "Only the information needed for service and learning is collected."],
      [isKu ? "فیدباکی خێزان" : "Family feedback", isKu ? "کوالێتی لە تەنیشت ژمارەدا بە ئەزموونی خێزان هەڵدەسەنگێندرێت." : "Quality is judged through family experience alongside program numbers."],
    ].map(([h,p], i) => <article key={h}><span>0{i+1}</span><h3>{h}</h3><p>{p}</p></article>)}</div><div className="center-action"><Link className="button button--dark" href={`/${locale}/partner`}>{isKu ? "فەندی پرۆگرامێک بکە" : "Fund a program pathway"}</Link></div></div></section>
  </>;
}

