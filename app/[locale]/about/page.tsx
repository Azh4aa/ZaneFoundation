import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { makePageMetadata } from "@/lib/metadata";
import { isLocale, site, tx, values } from "@/lib/site";

const title = { en: "About", ku: "دەربارە" };
const description = { en: "The lived experience, mission, values and governance model behind Zane Foundation.", ku: "ئەزموونی ژیاو، پەیام، بەها و مۆدێلی بەڕێوەبردنی فاوندەیشنی زەنێ." };

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
        title={isKu ? "لە ئەزموونەوە. بە ستانداردێکی بەرز." : <>Born from experience.<br /><em>Built to a higher standard.</em></>}
        intro={<p>{isKu ? "فاوندەیشنی زەنێ وەڵامێکی ڕێکخراوە بە کۆسپەکانێک کە خێزانێک بۆ ماوەی دە ساڵ بە چاوی خۆی بینیویەتی—و هەزاران خێزانی تر هەموو ڕۆژێک ڕووبەڕووی دەبنەوە." : "Zane Foundation is a disciplined response to barriers one family has witnessed for a decade—and thousands of other families face every day."}</p>}
        aside={<p>{isKu ? "ناوەندی سەرەکی: " : "Based in "}<strong>{tx(site.location, locale)}</strong></p>}
      />

      <section className="section-pad">
        <div className="shell narrative-grid">
          <div className="narrative-sticky"><p className="eyebrow">{isKu ? "لە دایکێکەوە" : "From a mother"}</p><h2>{isKu ? "خۆشەویستی کە بوو بە سیستەم." : "Love, made systematic."}</h2></div>
          <div className="prose-large">
            <p>{isKu ? "ماوەی دە ساڵە ژیان لەگەڵ زەنێ، کچەکەی دامەزرێنەرەکەمان، خێزانەکەی فێری کردووە کە خۆشەویستی زۆر پێویستە—بەڵام بە تەنها بەس نییە. خێزان پێویستی بە پسپۆڕی شیاو، زانیاریی ڕاست، قوتابخانەی ئامادە و کۆمەڵگایەک هەیە کە چاوەڕوانی گەورەی هەبێت." : "Ten years of life with Zane, our founder’s daughter, taught her family that love is essential—but love should not have to do the work of a system. Families also need qualified professionals, reliable information, prepared schools and a society willing to expect more."}</p>
            <p>{isKu ? "ئەم فاوندەیشنە ئەو ئەزموونە کەسییە وەک بنچینە بەکاردەهێنێت، نەک وەک جێگرەوەی بەڵگە. کارەکان بە دەنگی خێزان ڕێنمایی دەکرێن، بە پسپۆڕی دیزاین دەکرێن و بە داتا هەڵدەسەنگێندرێن." : "The foundation treats that lived experience as a starting point, not a substitute for evidence. Work will be guided by families, designed with qualified expertise and evaluated with data."}</p>
            <blockquote>{isKu ? "سەپاندنی «بەڵێ»ە—بەڵێ بۆ پشتگیری، بەڵێ بۆ بەشداری، بەڵێ بۆ داهاتوویەکی سەربەخۆ." : "It is the insistence of yes: yes to support, yes to participation, yes to a future with agency."}</blockquote>
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
          <SectionHeading eyebrow={isKu ? "بەها ستراتیژییەکان" : "Strategic values"} title={isKu ? "بەڵێنەکانمان لە شێوازی کارکردنماندا دیارن." : "Our promises are visible in our practice."} />
          <div className="values-grid">{values.map((value, index) => <article className="value-card" key={value.title.en}><p>0{index + 1}</p><h3>{tx(value.title, locale)}</h3><span>{tx(value.text, locale)}</span></article>)}</div>
        </div>
      </section>

      <section className="governance-section section-pad section-sand">
        <div className="shell">
          <SectionHeading eyebrow={isKu ? "بەڕێوەبردن" : "Governance"} title={isKu ? "چاودێری ستراتیژی. جێبەجێکردنی پیشەیی. لێپرسراوێتی ڕوون." : "Strategic oversight. Professional execution. Clear accountability."} text={isKu ? "پەیرەوی ناوخۆ پەیکەرێکی سێ ئاستی دادەنێت بۆ جیاکردنەوەی چاودێری، بڕیاردان و جێبەجێکردنی ڕۆژانە." : "The internal bylaws define a three-level structure that separates oversight, decision-making and daily delivery."} />
          <div className="governance-flow">
            {[
              [isKu ? "دەستەی گشتی" : "General Assembly", isKu ? "بەرزترین دەسەڵات؛ پەسەندکردنی پلان، بودجە، ڕاپۆرت و هەڵبژاردنی سەرکردایەتی." : "Highest authority; approves plans, budgets and reports, and elects leadership."],
              [isKu ? "دەستەی باوەڕپێکراوان" : "Board of Trustees", isKu ? "چاودێری کار، دارایی و پابەندی بە پەیرەوی ناوخۆ؛ پێشکەشکردنی ڕاوێژ و پێشنیار." : "Oversees performance, finance and bylaw compliance; provides advice and proposals."],
              [isKu ? "دەستەی بەڕێوەبردن" : "Management Board", isKu ? "بەڕێوەبردنی پرۆژە، کارگێڕی، پەیوەندی، دارایی، یاسا و ڕاهێنان." : "Manages programs, operations, communications, finance, legal affairs and training."],
            ].map(([heading, body], index) => <article key={heading}><span>0{index + 1}</span><h3>{heading}</h3><p>{body}</p></article>)}
          </div>
          <div className="governance-note"><p>{isKu ? "پەیرەوی ناوخۆی کوردی بەردەستە. وەشانی ئینگلیزی و پڕۆفایلی بۆرد پێش هاوبەشی دامەزراوەیی بۆ پشکنین ئامادە دەکرێن." : "The Kurdish bylaws are available. An English translation and confirmed board profiles will be prepared for institutional due diligence."}</p><Link className="text-link" href={`/${locale}/transparency`}>{isKu ? "ڕێگای ڕوونکردنەوە ببینە" : "View the transparency roadmap"}<span aria-hidden="true">↗</span></Link></div>
        </div>
      </section>
    </>
  );
}

