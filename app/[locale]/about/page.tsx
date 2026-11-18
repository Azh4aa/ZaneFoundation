import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { makePageMetadata } from "@/lib/metadata";
import { isLocale, site } from "@/lib/site";

const title = { en: "About Zane", ku: "دەربارەی زەنێ" };

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return makePageMetadata(params, title, site.description, "/about");
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const isKu = locale === "ku";
  return (
    <>
      <PageHero title={title[locale]} intro={<p>{isKu ? "زەنێ بۆ داکۆکی لە مافەکانی ئەو کەسانە دامەزراوە کە سندرۆمی داون یان کەمتواناییی هزرییان هەیە. بنکەکەمان لە سلێمانییە." : "Zane is an organization in Sulaymaniyah, in the Kurdistan Region of Iraq. We were founded to advocate for people with Down syndrome and intellectual disabilities."}</p>} />
      <div className="shell topic-list">
        <section>
          <h2>{isKu ? "بۆچی زەنێ دامەزرا؟" : "Why was Zane founded?"}</h2>
          <div>
            <p>{isKu ? "کاتێک باس لە خوێندن یان کاری کەسێک دەکرێت، زۆرجار پرسیارەکان لە خێزانەکەی دەکرێن. لە زەنێ پێمان وایە خۆی دەبێت ڕای هەبێت لەو بڕیارانەی کە پەیوەندییان بە ژیانی ئەوەوە هەیە." : "When someone is choosing a school or a job, questions are often directed to their family. The person most affected has a right to speak for themselves and to get the support they need to do so."}</p>
            <p>{isKu ? "بۆ منداڵێک، ئەمە لەوانەیە هەڵبژاردنی یارییەک بێت لەگەڵ هاوپۆلەکانی. بۆ کەسێکی گەورەش، هەلی ئەوەیە کارێک تاقی بکاتەوە کە خۆی حەزی لێیە." : "For a child, that can mean choosing a game with classmates. For an adult, it can mean getting to try a job they are interested in."}</p>
          </div>
        </section>
        <section>
          <h2>{isKu ? "تۆمارکردنی ڕێکخراوەکە" : "Registration"}</h2>
          <div>
            <p>{isKu ? "زەنێ لە هەرێمی کوردستان وەک ڕێکخراوێکی ناحکومی تۆمار کراوە." : "Zane is registered with the Kurdistan Regional Government’s Directorate of NGOs."}</p>
            <Link className="text-link" href={`/${locale}/transparency`}>{isKu ? "زانیاریی بڕوانامەی تۆمارکردن" : "Registration details"}<span className="arrow" aria-hidden="true">→</span></Link>
          </div>
        </section>
        <section id="photography" className="photo-credits">
          <h2>{isKu ? "وێنە و ڤیدیۆکان" : "Photography and film"}</h2>
          <div>
            <p>{isKu ? "ڤیدیۆ و وێنەی وانەی وێنەکێشان، " : "Painting workshop footage and stills by "}<a href="https://www.pexels.com/video/woman-teaching-a-girl-to-paint-7898522/" dir="ltr" lang="en">cottonbro studio</a>.</p>
            <p>{isKu ? "وێنەکانی ئەنتۆنی شکرابا لە دایکێک و کچەکەی، " : "Family photographs by Antoni Shkraba, "}<a href="https://www.pexels.com/photo/mother-and-daughter-painting-together-6288114/">{isKu ? "وێنەکێشان" : "painting together"}</a>{isKu ? " و " : " and "}<a href="https://www.pexels.com/photo/a-woman-and-girl-playing-together-6288088/">{isKu ? "یاری لەسەر مێز" : "playing at the table"}</a>.</p>
            <p><a href="https://www.pexels.com/license/">{isKu ? "مۆڵەتی بەکارهێنانی وێنە و ڤیدیۆکانی Pexels" : "Pexels photo and video license"}</a></p>
          </div>
        </section>
      </div>
    </>
  );
}
