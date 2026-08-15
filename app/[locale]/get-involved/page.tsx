import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { OpportunityForm } from "@/components/OpportunityForm";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { makePageMetadata } from "@/lib/metadata";
import { isLocale, site } from "@/lib/site";

const title = { en: "Get involved", ku: "بەشدار بە" };
const description = { en: "Volunteer, share professional expertise or support Zane Foundation through a partnership.", ku: "وەک خۆبەخش، پسپۆڕ یان هاوبەش لەگەڵ فاوندەیشنی زەنێ بەشدار بە." };
export function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> { return makePageMetadata(params, title, description, "/get-involved"); }

export default async function GetInvolvedPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;
  const isKu = locale === "ku";

  return <>
    <PageHero
      eyebrow={isKu ? "بەشدار بە" : "Get involved"}
      title={isKu ? "بە تواناکانت بەشدار بە." : <>Bring what<br /><em>you can.</em></>}
      intro={<p>{isKu ? "زەنێ خۆبەخش، پسپۆڕ، ڕێکخراو و کۆمپانیا کۆدەکاتەوە؛ ئەو کەسانەی باوەڕیان بە ماف و بەشداریی تەواو هەیە." : "Zane is building a network of volunteers, professionals, institutions and companies committed to rights and full participation."}</p>}
      aside={<p>{isKu ? "هەموو ڕۆڵێک کە پەیوەندی بە خەڵک یان زانیاریی هەستیارەوە هەبێت، بە پشکنینی پاراستن و سەرپەرشتیی ڕوون دەست پێدەکات." : "Every role involving people or sensitive information begins with appropriate safeguarding checks and clear supervision."}</p>}
    />

    <section className="section-pad involvement-paths-section"><div className="shell"><SectionHeading eyebrow={isKu ? "ڕێگاکانی بەشداری" : "Ways to contribute"} title={isKu ? "ڕێگایەک هەڵبژێرە کە لەگەڵ کات و شارەزاییت دەگونجێت." : "Choose what fits your time and skills."} /><div className="involvement-paths">
      {[
        ["01", isKu ? "خۆبەخشیی کۆمەڵایەتی" : "Community volunteering", isKu ? "لەژێر سەرپەرشتیی تیمدا یارمەتیی چالاکی، ڕووداو، کارگێڕی، ناوەڕۆک و پەیوەندی بدە." : "Support activities, events, administration, content and outreach under team supervision."],
        ["02", isKu ? "تۆڕی پسپۆڕان" : "Professional network", isKu ? "شارەزایی لە تەندروستی، پەروەردە، یاسا، دارایی، زانیاری، پاراستن یان ڕاگەیاندن بەشدار بکە." : "Contribute expertise in health, education, law, finance, data, safeguarding or communications."],
        ["03", isKu ? "خۆبەخشی کۆمپانیا" : "Corporate volunteering", isKu ? "تیمی کارمەندانت بۆ پرۆژەی دیاریکراو، ڕاهێنان یان خزمەتگوزاریی پیشەیی کۆبکەرەوە." : "Mobilize employee teams around defined projects, training or pro-bono professional services."],
        ["04", isKu ? "دەنگ و داکۆکی" : "Voice and advocacy", isKu ? "یارمەتی بدە زمان و نوێنەرایەتیی دروست بڵاوببێتەوە و کۆمەڵگا زیاتر تێبگات." : "Help expand accurate language, respectful representation and public understanding."],
      ].map(([n,h,p]) => <article key={n}><span>{n}</span><h3>{h}</h3><p>{p}</p></article>)}
    </div></div></section>

    <section className="volunteer-expectations section-pad section-ink"><div className="shell volunteer-expectations__grid"><div><p className="eyebrow eyebrow--gold">{isKu ? "پێش دەستپێکردن" : "Before any placement"}</p><h2>{isKu ? "خۆبەخشی دەبێت پارێزراو، ڕێکخراو و سوودبەخش بێت." : "Volunteering should be safe, organized and useful."}</h2></div><ol>
      <li><span>01</span><p>{isKu ? "پێداچوونەوەی حەز و تواناکان" : "Review of interests and relevant skills"}</p></li>
      <li><span>02</span><p>{isKu ? "پشکنینی گونجاوی پاراستن بەپێی ڕۆڵ" : "Role-appropriate safeguarding screening"}</p></li>
      <li><span>03</span><p>{isKu ? "ڕۆڵ، کات و سەرپەرشتیی نووسراو" : "A written role, time commitment and supervisor"}</p></li>
      <li><span>04</span><p>{isKu ? "ڕاهێنان، تێبینی و کۆتاییی ڕوون" : "Induction, feedback and a clear close-out"}</p></li>
    </ol></div></section>

    <section className="form-section section-pad" id="volunteer"><div className="shell form-section__grid"><div className="form-section__intro"><p className="eyebrow">{isKu ? "خۆبەخشی" : "Volunteer interest"}</p><h2>{isKu ? "دەتەوێت یارمەتی بدەیت؟" : "Want to help?"}</h2><p>{isKu ? "کەمێک دەربارەی خۆت پێمان بڵێ. کاتێک ڕۆڵێکی گونجاو بە کات و تواناکانت هەبوو، تیمەکەمان پەیوەندیت پێوە دەکات." : "Tell us a little about yourself. When a role matches your time and skills, the team can get in touch."}</p><a className="text-link" href={`mailto:${site.volunteerEmail}`}>{site.volunteerEmail}<span>↗</span></a></div><OpportunityForm locale={locale} kind="volunteer" /></div></section>

    <section className="career-crosslink"><div className="shell career-crosslink__inner"><div><p>{isKu ? "ئایا بەدوای کارێکی پیشەیی بە مووچەدا دەگەڕێیت؟" : "Looking for a professional paid role?"}</p><h2>{isKu ? "هەلی کارەکان ببینە و زانیاریی خۆت بنێرە." : "Visit careers and register your interest."}</h2></div><Link className="button button--gold" href={`/${locale}/careers`}>{isKu ? "هەلی کار" : "Explore careers"}</Link></div></section>
  </>;
}
