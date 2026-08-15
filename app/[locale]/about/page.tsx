import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { makePageMetadata } from "@/lib/metadata";
import { isLocale, site, tx, values } from "@/lib/site";

const title = { en: "About", ku: "دەربارە" };
const description = { en: "Why Zane Foundation exists, what it believes and how it is governed.", ku: "بۆچی فاوندەیشنی زەنێ هەیە، باوەڕی بە چییە و چۆن بەڕێوەدەبرێت." };

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return makePageMetadata(params, title, description, "/about");
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;
  const isKu = locale === "ku";

  return (
    <>
      <PageHero
        eyebrow={isKu ? "دەربارەی زەنێ" : "About Zane"}
        title={isKu ? "زەنێ بۆچی هەیە؟" : <>Why Zane<br /><em>exists.</em></>}
        intro={<p>{isKu ? "زەنێ ڕێکخراوێکی قازانجنەویستە بۆ داکۆکیکردن لە ماف و فراوانکردنی دەرفەتی کەسانی خاوەن سندرۆمی داون و کەمتواناییی هزری لە کوردستان." : "Zane is a not-for-profit organization advancing the rights and opportunities of people with Down syndrome and intellectual disabilities in Kurdistan."}</p>}
        aside={<p>{isKu ? "ناوەندی سەرەکی: " : "Based in "}<strong>{tx(site.location, locale)}</strong></p>}
      />

      <section className="section-pad">
        <div className="shell narrative-grid">
          <div className="narrative-sticky"><p className="eyebrow">{isKu ? "هۆکاری دامەزراندن" : "The need"}</p><h2>{isKu ? "خێزان نابێت بە تەنها ڕێگا بدۆزێتەوە." : "Families should not have to find their way alone."}</h2></div>
          <div className="prose-large">
            <p>{isKu ? "لە کوردستاندا دەستگەیشتن بە خزمەتگوزاریی گەشەپێدان و ڕاهێنان سنووردار و تێچووبەرزە. زانیاریی پشتڕاستکراو پەرشە، قوتابخانەکان بە شێوەی یەکسان ئامادە نین و زۆر کەس هێشتا بەهۆی تێڕوانینی هەڵەوە لە بەشداریی کۆمەڵایەتی دوور دەخرێنەوە." : "Across Kurdistan, access to developmental services and qualified support is limited and expensive. Reliable guidance is fragmented, schools are unevenly prepared, and social stigma continues to restrict participation."}</p>
            <p>{isKu ? "زەنێ خێزان بە زانیاریی باوەڕپێکراو دەگەیەنێت، لەگەڵ قوتابخانە و پسپۆڕان کار دەکات و خەڵک بۆ گۆڕانی بەردەوام کۆدەکاتەوە." : "Zane connects families with reliable information, works alongside schools and professionals, and brings people together to make inclusion easier in everyday life."}</p>
            <blockquote>{isKu ? "کەسانی خاوەن سندرۆمی داون بەشێکن لە کۆمەڵگا؛ ماف و دەرفەتەکانیان بابەتی خێرخوازی نییە." : "People with Down syndrome are part of society. Their rights and opportunities are not an act of charity."}</blockquote>
          </div>
        </div>
      </section>

      <section className="mission-band">
        <div className="shell mission-grid">
          <article><p className="eyebrow eyebrow--gold">{isKu ? "پەیام" : "Mission"}</p><h2>{isKu ? "بەهێزکردنی کەسانی داون سیندرۆم و کەم توانایی ژیری بۆ گەیشتن بە توانای تەواویان." : "Enable people with Down syndrome and intellectual disabilities to reach their full potential."}</h2><p>{isKu ? "بە دابینکردنی سەرچاوە گرنگەکان، پەروەردەکردنی کۆمەڵگا و داکۆکیکردن لە مافەکان." : "Through essential resources, public education and advocacy for rights."}</p></article>
          <article><p className="eyebrow eyebrow--gold">{isKu ? "دیدگا" : "Vision"}</p><h2>{isKu ? "داهاتوویەک کە تێیدا هەر تاکێک ئەندامێکی بەهادار، ڕێزلێگیراو و خاوەن شکۆ بێت." : "A future where every person is a valued, respected and dignified member of society."}</h2><p>{isKu ? "لەگەڵ دەستگەیشتن بە ژیانێکی پڕ لە دەرفەت، هەڵبژاردن و بەشداری." : "With access to a life rich in opportunity, choice and participation."}</p></article>
        </div>
      </section>

      <section className="values-section section-pad">
        <div className="shell">
          <SectionHeading eyebrow={isKu ? "شێوازی کارمان" : "How we work"} title={isKu ? "بەهاکانمان دەبێت لە کرداردا دیار بن." : "Our values should be easy to see in practice."} />
          <div className="values-grid">{values.map((value, index) => <article className="value-card" key={value.title.en}><p>0{index + 1}</p><h3>{tx(value.title, locale)}</h3><span>{tx(value.text, locale)}</span></article>)}</div>
        </div>
      </section>

      <section className="governance-section section-pad section-sand">
        <div className="shell">
          <SectionHeading eyebrow={isKu ? "بەڕێوەبردن" : "Governance"} title={isKu ? "دەنگی کۆمەڵگا. چاودێریی بەرپرسانە. کاری پیشەیی." : "Community voice. Responsible oversight. Professional practice."} text={isKu ? "بەڕێوەبردنی باش بڕیارەکان ڕوون دەکاتەوە، بەرپرسیارێتی جیادەکاتەوە و مافی ئەو کەسانەی خزمەتیان دەکرێت دەپارێزێت." : "Good governance makes decisions clear, separates responsibilities and protects the rights of the people an organization serves."} />
          <div className="governance-flow">
            {[
              [isKu ? "دەنگی کۆمەڵگا" : "Community voice", isKu ? "ئەزموونی تاک و خێزان ئاراستەی کار و پێشینەکان ڕوون دەکاتەوە." : "The experience of people and families informs priorities and practice."],
              [isKu ? "چاودێری" : "Oversight", isKu ? "چاودێریی سەربەخۆ بەرپرسیارێتی، پاراستن و پابەندبوون بە بەهاکان بەهێز دەکات." : "Independent oversight strengthens accountability, safeguarding and adherence to values."],
              [isKu ? "تیمی پیشەیی" : "Professional team", isKu ? "تیمێکی شیاو بەرنامە، پەیوەندی و کارە ڕۆژانەکان بەڕێوە دەبات." : "A qualified team manages programs, partnerships and daily operations."],
            ].map(([heading, body], index) => <article key={heading}><span>0{index + 1}</span><h3>{heading}</h3><p>{body}</p></article>)}
          </div>
          <div className="governance-note"><p>{isKu ? "زانیاریی ناسنامەی یاسایی، ڕێگاکانی پاراستن، تایبەتمەندی و سکاڵا لە بەشی بەڕێوەبردن و متمانەدا بەردەستن." : "Public legal information and routes for safeguarding, privacy and complaints are available in Governance & Trust."}</p><Link className="text-link" href={`/${locale}/transparency`}>{isKu ? "بەڕێوەبردن و متمانە" : "Governance and trust"}<span aria-hidden="true">↗</span></Link></div>
        </div>
      </section>
    </>
  );
}
