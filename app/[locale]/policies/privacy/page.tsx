import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PolicyPage } from "@/components/PolicyPage";
import { makePageMetadata } from "@/lib/metadata";
import { isLocale, site } from "@/lib/site";

const title = { en: "Privacy notice", ku: "ئاگادارکردنەوەی پاراستنی زانیاری" };
const description = { en: "How Zane Foundation handles information submitted through this website.", ku: "چۆنیەتی مامەڵەکردنی فاوندەیشنی زەنێ لەگەڵ زانیاریی نێردراو بە ماڵپەڕ." };
export function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> { return makePageMetadata(params, title, description, "/policies/privacy"); }

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params; if (!isLocale(raw)) notFound(); const isKu = raw === "ku";
  const sections = isKu ? [
    { title: "چی کۆدەکەینەوە", paragraphs: ["کاتێک تۆماری خۆبەخشی یان کار پڕدەکەیتەوە، ناو، ئیمەیڵ، ژمارەی مۆبایل، شار، بواری حەز، ئەزموون و ئەو زانیارییەی خۆت دەینووسیت کۆدەکەینەوە. تکایە زانیاریی تەندروستی یان هەستیاری کەسی مەنووسە."] },
    { title: "بۆچی بەکاری دەهێنین", items: ["پێداچوونەوەی حەز و گونجاوی دەرفەت", "پەیوەندیکردن دەربارەی هەنگاوی داهاتوو", "پاراستنی تۆماری کارگێڕی و پاراستن", "باشترکردنی ڕێکاری دامەزراندن و خۆبەخشی"] },
    { title: "ناردن و هەڵگرتن", paragraphs: ["تۆمارەکان بە ڕێگەی سیستەمی ئیمەیڵی پارێزراو بۆ تیمی دیاریکراوی زەنێ دەنێردرێن. زانیاری بە کۆمپانیا بۆ بازاڕگەری نافرۆشرێت. دەستگەیشتن سنووردار دەبێت بەو کەسانەی پێویستیان پێیەتی."] },
    { title: "ماوە و مافەکانت", paragraphs: ["زانیاریی حەزپیشاندان بە شێوەی بنەڕەتی تا ١٢ مانگ هەڵدەگیرێت، مەگەر یاسا یان پێداویستیی پاراستن ماوەیەکی تر بخوازێت. دەتوانیت داوای بینین، چاککردنەوە یان سڕینەوەی زانیارییەکانت بکەیت."] },
  ] : [
    { title: "Information we collect", paragraphs: ["When you submit a volunteer or career form, we collect your name, email, optional phone number, city, area of interest, experience and anything you choose to write. Do not submit health information or other sensitive personal data through these forms."] },
    { title: "Why we use it", items: ["Review interest and suitability for opportunities", "Contact you about an appropriate next step", "Maintain necessary operational and safeguarding records", "Improve recruitment and volunteer processes"] },
    { title: "Delivery and access", paragraphs: ["Form submissions are sent through a secure email delivery service to designated Zane team members. Information is not sold or shared for third-party marketing. Access should be limited to people who need it for the stated purpose."] },
    { title: "Retention and your rights", paragraphs: ["Expressions of interest are normally retained for up to 12 months unless law or a safeguarding need requires a different period. You may ask to access, correct or delete the personal information Zane holds about you."] },
  ];
  return <PolicyPage locale={raw} eyebrow={isKu ? "پاراستنی زانیاری" : "Privacy"} title={title[raw]} intro={description[raw]} status={isKu ? "ئاگادارکردنەوەی کاتیی ماڵپەڕ · پێداچوونەوە پێش دەستپێکی فەرمی" : "Interim website notice · to be reviewed before formal launch"} sections={sections} email={site.privacyEmail} />;
}
