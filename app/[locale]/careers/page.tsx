import type { Metadata } from "next";
import { notFound } from "next/navigation";
import opportunitiesJson from "@/content/opportunities.json";
import { OpportunityForm } from "@/components/OpportunityForm";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { makePageMetadata } from "@/lib/metadata";
import { isLocale, site } from "@/lib/site";

type Opportunity = { slug: string; title: { en: string; ku: string }; type: { en: string; ku: string }; location: { en: string; ku: string }; deadline: string; summary: { en: string; ku: string } };
const title = { en: "Careers", ku: "هەلی کار" };
const description = { en: "Employment opportunities and career expressions of interest at Zane Foundation.", ku: "هەلی کار و تۆماری حەزی کارکردن لە فاوندەیشنی زەنێ." };
export function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> { return makePageMetadata(params, title, description, "/careers"); }

export default async function CareersPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;
  const isKu = locale === "ku";
  const opportunities = opportunitiesJson as Opportunity[];

  return <>
    <PageHero
      eyebrow={isKu ? "هەلی کار" : "Careers at Zane"}
      title={isKu ? "کاری باش، بە وریایی ئەنجامدراو." : <>Good work,<br /><em>done with care.</em></>}
      intro={<p>{isKu ? "زەنێ بەدوای کەسانێکدا دەگەڕێت کە شارەزایی خۆیان دەزانن، بە ڕێز کار دەکەن و لە کۆمەڵگا گوێ دەگرن." : "Zane looks for people who know their craft, treat others with respect and listen to the community around them."}</p>}
      aside={<p>{isKu ? "هەموو دامەزراندنێک بە ڕێکاری ڕوون، پێوەری شایستەیی و پشکنینی پاراستن ئەنجام دەدرێت." : "All recruitment will use published criteria, a documented selection process and role-appropriate safeguarding checks."}</p>}
    />

    <section className="section-pad openings-section"><div className="shell"><SectionHeading eyebrow={isKu ? "ڕۆڵە کراوەکان" : "Open positions"} title={isKu ? "هەر هەلی کارێک بە مەرج و کۆتا ڕۆژی خۆی لێرە بڵاودەکرێتەوە." : "Open roles appear here with responsibilities, terms and deadlines."} />
      {opportunities.length ? <div className="openings-list">{opportunities.map((role) => <article key={role.slug}><div><span>{role.type[locale]}</span><span>{role.location[locale]}</span></div><h3>{role.title[locale]}</h3><p>{role.summary[locale]}</p><strong>{isKu ? "کۆتا ڕۆژ" : "Deadline"}: {role.deadline}</strong></article>)}</div> : <div className="empty-state"><span>00</span><div><h3>{isKu ? "لە ئێستادا هیچ ڕۆڵێک کراوە نییە." : "There are no open positions at the moment."}</h3><p>{isKu ? "دەتوانیت لە خوارەوە حەز و ئەزموونت تۆمار بکەیت بۆ ئەوەی لە هەلی گونجاوی داهاتوو ئاگادار بکرێیتەوە." : "You can register your experience below to be considered when an appropriate opportunity is published."}</p></div></div>}
    </div></section>

    <section className="work-principles section-pad section-sand"><div className="shell"><SectionHeading eyebrow={isKu ? "کولتوری کار" : "Working at Zane"} title={isKu ? "کاری باش پێویستی بە شوێنی کارێکی تەندروست هەیە." : "Good work needs a healthy workplace."} /><div className="work-principles__grid">{[
      [isKu ? "شایستەیی و دادپەروەری" : "Merit and fairness", isKu ? "پێوەری ڕۆڵ پێش کورتکردنەوەی لیست ڕوون دەبێت." : "Selection criteria are defined before shortlisting begins."],
      [isKu ? "پاراستن و ڕێز" : "Safeguarding and respect", isKu ? "پاراستنی کەسان و سنووری پیشەیی بەشێکە لە هەر ڕۆڵێک." : "Protection, dignity and professional boundaries belong in every role."],
      [isKu ? "فێربوون و بەڵگە" : "Learning and evidence", isKu ? "بڕیار بە داتا، فیدباک و پێداچوونەوە باشتر دەکرێت." : "Decisions improve through data, feedback and reflective practice."],
      [isKu ? "دەرفەتی یەکسان" : "Equal opportunity", isKu ? "کەمتوانایی، ڕەگەز، ئایین یان بنەچە نابێت ببێتە کۆسپ." : "Disability, gender, faith or background must not become a barrier."],
    ].map(([h,p],i) => <article key={h}><span>0{i+1}</span><h3>{h}</h3><p>{p}</p></article>)}</div></div></section>

    <section className="form-section section-pad"><div className="shell form-section__grid"><div className="form-section__intro"><p className="eyebrow">{isKu ? "هەلی داهاتوو" : "Future opportunities"}</p><h2>{isKu ? "لە پەیوەندیدا بین." : "Stay in touch."}</h2><p>{isKu ? "دەتوانیت ئەزموون و بواری شارەزاییت بنێریت. ئەمە داواکاریی کار نییە؛ هەر هەلی کارێکی داهاتوو مەرج و ڕێکاری خۆی هەیە." : "You can share your experience and area of expertise. This is not a job application; every future vacancy will have its own requirements and selection process."}</p><a className="text-link" href={`mailto:${site.careersEmail}`}>{site.careersEmail}<span>↗</span></a></div><OpportunityForm locale={locale} kind="career" /></div></section>
  </>;
}
