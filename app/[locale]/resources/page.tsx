import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { makePageMetadata } from "@/lib/metadata";
import { isLocale } from "@/lib/site";

const title = { en: "For families", ku: "بۆ خێزانەکان" };
const description = {
  en: "Questions to take to a school meeting or appointment, and further reading on disability rights.",
  ku: "چەند پرسیارێک بۆ چاوپێکەوتن لەگەڵ مامۆستا یان پسپۆڕ، لەگەڵ سەرچاوە بۆ خوێندنەوە لەبارەی مافەکانەوە.",
};
const questions = [
  { en: "What does my child enjoy doing here? When is it harder for them to join in?", ku: "منداڵەکەم لێرە حەز لە چ کارێک دەکات؟ کەی بەشداریکردنی بۆ قورسە؟" },
  { en: "What has helped so far? Is there something we can try together at home?", ku: "تا ئێستا چی یارمەتیی داوە؟ ئێمە لە ماڵەوە چی لەگەڵی تاقی بکەینەوە؟" },
  { en: "Whom can I contact with a question, and when should we meet again?", ku: "ئەگەر پرسیارم هەبوو پەیوەندی بە کێوە بکەم؟ کەی جارێکی تر یەکتر ببینینەوە؟" },
];
const references = [
  {
    title: { en: "Convention on the Rights of Persons with Disabilities (PDF)", ku: "پەیماننامەی مافەکانی کەسانی خاوەن کەمتوانایی (PDF)" },
    publisher: { en: "United Nations", ku: "نەتەوە یەکگرتووەکان" },
    href: "https://treaties.un.org/doc/Publication/CTC/Ch_IV_15.pdf#page=33",
  },
  {
    title: { en: "Global report on children with developmental disabilities", ku: "ڕاپۆرتی جیهانی لەبارەی ئەو منداڵانەی لە گەشەکردندا کەمتوانایییان هەیە" },
    publisher: { en: "WHO and UNICEF", ku: "ڕێکخراوی جیهانیی تەندروستی و یونیسێف" },
    href: "https://www.unicef.org/documents/global-report-children-developmental-disabilities",
  },
];

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return makePageMetadata(params, title, description, "/resources");
}

export default async function ResourcesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const isKu = locale === "ku";
  return (
    <>
      <PageHero title={title[locale]} intro={<p>{isKu ? "پێش دیدار لەگەڵ مامۆستا یان پسپۆڕ، ئەو شتانە بنووسنەوە کە منداڵەکەتان حەزی لێیانە یان بۆی قورسن. ئەم پرسیارانە دەتوانن یارمەتیتان بدەن دەست بە گفتوگۆکە بکەن." : "Before you meet a teacher or specialist, make a note of what your child enjoys and what they find difficult. These questions can help you start the conversation."}</p>} />
      <div className="shell topic-list">
        <section>
          <h2>{isKu ? "لە کاتی چاوپێکەوتندا" : "At the meeting"}</h2>
          <div>
            <ul className="questions">{questions.map((q) => <li key={q.en}>{q[locale]}</li>)}</ul>
            <Link className="text-link" href={`/${locale}/stories/early-support-begins-with-listening`}>{isKu ? "ئامادەکاری بۆ یەکەم چاوپێکەوتن" : "Preparing for a first appointment"}<span className="arrow" aria-hidden="true">→</span></Link>
          </div>
        </section>
        <section>
          <h2>{isKu ? "بۆ خوێندنەوەی زیاتر" : "Further reading"}</h2>
          <ul className="reference-list">
            {references.map((ref) => (
              <li key={ref.href}><small>{ref.publisher[locale]}{isKu ? " · بە ئینگلیزی" : ""}</small><a href={ref.href}>{ref.title[locale]} <span aria-hidden="true">↗</span></a></li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
