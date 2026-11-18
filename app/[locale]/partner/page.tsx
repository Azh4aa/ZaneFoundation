import Link from "next/link";
import { notFound } from "next/navigation";
import { EmailLink } from "@/components/EmailLink";
import { PageHero } from "@/components/PageHero";
import { makePageMetadata } from "@/lib/metadata";
import { isLocale } from "@/lib/site";

const title = { en: "Working with Zane", ku: "هاوکاری لەگەڵ زەنێ" };
const description = {
  en: "For schools, employers, organizations and funders interested in education and employment for people with Down syndrome and intellectual disabilities in Kurdistan.",
  ku: "بۆ ئەو قوتابخانە، کۆمپانیا و دامەزراوانەی دەیانەوێت لە بواری خوێندن و هەلی کاردا لەگەڵ زەنێ هاوکاری بکەن.",
};

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return makePageMetadata(params, title, description, "/partner");
}

export default async function PartnershipsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const isKu = locale === "ku";
  return (
    <>
      <PageHero title={title[locale]} intro={<p>{isKu ? "قوتابخانە دەتوانێت شێوازی وانەگوتنەوە بگۆڕێت. خاوەنکار دەتوانێت دەرفەتی تاقیکردنەوەی کارێک بدات بە داواکارێک. دڵمان دەوێت لەو کەسانە ببیستین کە لە شوێنی کاری خۆیان دەرفەتێکی وا دەبینن." : "Schools decide how lessons are taught. Employers decide how candidates are assessed. We welcome conversations with people who can change either of those things, and with institutions willing to finance that work."}</p>} />
      <div className="shell topic-list">
        <section>
          <h2>{isKu ? "پێشنیاری هاوکاری" : "Propose a collaboration"}</h2>
          <div>
            <p>{isKu ? "لە ئیمەیڵەکەتاندا کورتەیەک لەبارەی دامەزراوەکەتان و بیرۆکەکەتان بنووسن. ئەگەر شوێن، شارەزا یان بودجەیەکتان بۆ کارەکە لەبەرچاوە، باسی بکەن." : "Email a short introduction to your institution and the change you have in mind. Tell us what you could contribute, whether that is a venue, staff time, expertise or funding."}</p>
            <EmailLink />
          </div>
        </section>
        <section>
          <h2>{isKu ? "بەڵگەنامەکانی زەنێ" : "Institutional enquiries"}</h2>
          <div>
            <p>{isKu ? "ئەگەر دامەزراوەکەتان بۆ پێداچوونەوە پێویستی بە بڕوانامەی تۆمارکردنی زەنێ هەیە، لە هەمان ئیمەیڵدا داوای بکەن." : "If your institution needs Zane’s registration documents for its review, mention that in your email."}</p>
            <Link className="text-link" href={`/${locale}/transparency`}>{isKu ? "زانیاریی تۆمارکردن" : "Registration details"}<span className="arrow" aria-hidden="true">→</span></Link>
          </div>
        </section>
      </div>
    </>
  );
}
