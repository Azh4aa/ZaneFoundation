import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { makePageMetadata } from "@/lib/metadata";
import { inclusionTopics, isLocale } from "@/lib/site";

const title = { en: "Our focus", ku: "خوێندن و کار" };
const description = {
  en: "How families, teachers and employers can make it easier for people with Down syndrome and intellectual disabilities to participate in everyday life.",
  ku: "خێزان، مامۆستا و خاوەنکار چۆن دەتوانن یارمەتیی کەسانی خاوەن سندرۆمی داون و کەمتواناییی هزری بدەن لە ژیانی ڕۆژانەدا بەشدار بن؟",
};

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return makePageMetadata(params, title, description, "/programs");
}

export default async function FocusPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const isKu = locale === "ku";
  return (
    <>
      <PageHero title={isKu ? "خوێندن، کار و ژیانی ڕۆژانە" : "Education, work and everyday life"} intro={<p>{description[locale]}</p>} />
      <div className="shell topic-list">
        {inclusionTopics.map((topic) => (
          <section key={topic.id} id={topic.id}>
            <h2>{topic.title[locale]}</h2>
            <div><p>{topic.summary[locale]}</p><p>{topic.detail[locale]}</p></div>
          </section>
        ))}
        <Link className="text-link" href={`/${locale}/resources`}>{isKu ? "سەرچاوە بۆ خێزانەکان" : "Resources for families"}<span className="arrow" aria-hidden="true">→</span></Link>
      </div>
    </>
  );
}
