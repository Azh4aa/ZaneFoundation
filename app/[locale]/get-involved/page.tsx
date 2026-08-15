import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { OpportunityForm } from "@/components/OpportunityForm";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { makePageMetadata } from "@/lib/metadata";
import { isLocale, site } from "@/lib/site";

const title = { en: "Get involved", ku: "بەشداربە" };
const description = { en: "Volunteer, contribute professional expertise or build an institutional partnership with Zane Foundation.", ku: "وەک خۆبەخش، پسپۆڕ یان هاوبەشی دامەزراوەیی لەگەڵ فاوندەیشنی زەنێ بەشداربە." };
export function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> { return makePageMetadata(params, title, description, "/get-involved"); }

export default async function GetInvolvedPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;
  const isKu = locale === "ku";

  return <>
    <PageHero
      eyebrow={isKu ? "بەشداربە" : "Get involved"}
      title={isKu ? "کات، شارەزایی و دەنگت گرنگە." : <>Your time. Your expertise.<br /><em>A stronger institution.</em></>}
      intro={<p>{isKu ? "زەنێ تۆڕێک لە خۆبەخش، پسپۆڕ، دامەزراوە و کۆمپانیا دروست دەکات کە بە ماف و بەشداریی تەواو پابەندن." : "Zane is building a network of volunteers, professionals, institutions and companies committed to rights and full participation."}</p>}
      aside={<p>{isKu ? "هەموو ڕۆڵە پەیوەندیدارەکان بە پشکنینی پاراستن و ڕێنماییی ڕوون دەست پێدەکەن." : "Every role involving people or sensitive information begins with appropriate safeguarding checks and clear supervision."}</p>}
    />

    <section className="section-pad involvement-paths-section"><div className="shell"><SectionHeading eyebrow={isKu ? "ڕێگاکانی بەشداری" : "Ways to contribute"} title={isKu ? "ڕۆڵێک هەڵبژێرە کە لەگەڵ تواناکانت دەگونجێت." : "Choose the contribution that fits your capacity."} /><div className="involvement-paths">
      {[
        ["01", isKu ? "خۆبەخشی گشتی" : "Community volunteering", isKu ? "پشتگیریی چالاکی، ڕووداو، کارگێڕی، ناوەڕۆک و پەیوەندی لەژێر سەرپەرشتیی تیمدا." : "Support activities, events, administration, content and outreach under team supervision."],
        ["02", isKu ? "تۆڕی پسپۆڕان" : "Professional network", isKu ? "شارەزایی لە تەندروستی، پەروەردە، یاسا، دارایی، داتا، پاراستن یان ڕاگەیاندن بەشدار بکە." : "Contribute expertise in health, education, law, finance, data, safeguarding or communications."],
        ["03", isKu ? "خۆبەخشی کۆمپانیا" : "Corporate volunteering", isKu ? "تیمی کارمەندانت بۆ پرۆژەی دیاریکراو، ڕاهێنان یان خزمەتگوزاریی پیشەیی کۆبکەرەوە." : "Mobilize employee teams around defined projects, training or pro-bono professional services."],
        ["04", isKu ? "دەنگ و داکۆکی" : "Voice and advocacy", isKu ? "یارمەتی بدە زمان و نوێنەرایەتیی دروست بڵاوببێتەوە و کۆمەڵگا زیاتر تێبگات." : "Help expand accurate language, respectful representation and public understanding."],
      ].map(([n,h,p]) => <article key={n}><span>{n}</span><h3>{h}</h3><p>{p}</p></article>)}
    </div></div></section>

    <section className="volunteer-expectations section-pad section-ink"><div className="shell volunteer-expectations__grid"><div><p className="eyebrow eyebrow--gold">{isKu ? "پێش دەستپێکردن" : "Before any placement"}</p><h2>{isKu ? "خۆبەخشی دەبێت پارێزراو، ڕێکخراو و سوودبەخش بێت." : "Volunteering should be safe, organized and useful."}</h2></div><ol>
      <li><span>01</span><p>{isKu ? "پێداچوونەوەی حەز و تواناکان" : "Review of interests and relevant skills"}</p></li>
      <li><span>02</span><p>{isKu ? "پشکنینی گونجاوی پاراستن بەپێی ڕۆڵ" : "Role-appropriate safeguarding screening"}</p></li>
      <li><span>03</span><p>{isKu ? "ڕۆڵ، کات و سەرپەرشتیی نووسراو" : "A written role, time commitment and supervisor"}</p></li>
      <li><span>04</span><p>{isKu ? "ڕاهێنان، فیدباک و کۆتاییی ڕوون" : "Induction, feedback and a clear close-out"}</p></li>
    </ol></div></section>

    <section className="form-section section-pad" id="volunteer"><div className="shell form-section__grid"><div className="form-section__intro"><p className="eyebrow">{isKu ? "تۆماری حەز" : "Expression of interest"}</p><h2>{isKu ? "ئامادەیت بەشداربیت؟" : "Ready to step forward?"}</h2><p>{isKu ? "ئەم تۆمارە داواکاریی ڕۆڵێکی دیاریکراو نییە. زانیارییەکانت لە تۆڕی خۆبەخشاندا تۆمار دەکرێت و کاتێک دەرفەتێکی گونجاو هەبوو پەیوەندیت پێوە دەکرێت." : "This is not an application for a guaranteed placement. It adds your details to the volunteer network so the team can contact you when a suitable role is available."}</p><a className="text-link" href={`mailto:${site.volunteerEmail}`}>{site.volunteerEmail}<span>↗</span></a></div><OpportunityForm locale={locale} kind="volunteer" /></div></section>

    <section className="career-crosslink"><div className="shell career-crosslink__inner"><div><p>{isKu ? "بەدوای ڕۆڵێکی پیشەیی بە مووچەیت؟" : "Looking for a professional paid role?"}</p><h2>{isKu ? "هەلی کار و تۆماری حەز ببینە." : "Visit careers and register your interest."}</h2></div><Link className="button button--gold" href={`/${locale}/careers`}>{isKu ? "هەلی کار" : "Explore careers"}</Link></div></section>
  </>;
}
