import { notFound } from "next/navigation";
import { PolicyPage } from "@/components/PolicyPage";
import { makePageMetadata } from "@/lib/metadata";
import { isLocale } from "@/lib/site";

const title = { en: "Privacy", ku: "پاراستنی زانیاریی کەسی" };
const intro = {
  en: "You can read every page on this website without opening an account or giving us your name.",
  ku: "دەتوانن هەموو پەڕەکانی ماڵپەڕەکە بخوێننەوە. پێویست ناکات هەژمار دروست بکەن یان ناوی خۆتان بنووسن.",
};
const body = [
  {
    en: "The company hosting the website may process technical information, such as an IP address, when it delivers a page. Links to other websites and social media take you to services with their own privacy policies.",
    ku: "ئەو کۆمپانیایەی ماڵپەڕەکە بەڕێوە دەبات لەوانەیە لە کاتی کردنەوەی پەڕەیەکدا زانیاریی تەکنیکی وەربگرێت، وەک ناونیشانی ئای‌پی. ماڵپەڕ و تۆڕە کۆمەڵایەتییەکانی تر کە بەستەریان لێرە هەیە، هەریەکەیان سیاسەتی خۆی هەیە بۆ پاراستنی زانیاریی کەسی.",
  },
  {
    en: "If you email Zane, we receive your address and the information you choose to send. A general description is enough for a first enquiry. If you have a question about information you have shared, write to us here.",
    ku: "کاتێک ئیمەیڵمان بۆ دەنێرن، ناونیشانی ئیمەیڵەکەتان و ئەو زانیارییانەمان پێ دەگات کە خۆتان دەینووسن. بۆ یەکەم پەیوەندی، باسێکی کورت بەسە. ئەگەر پرسیارتان لەسەر زانیارییەکانی خۆتان هەیە، بۆمان بنووسن.",
  },
];

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return makePageMetadata(params, title, intro, "/policies/privacy");
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <PolicyPage locale={locale} title={title} intro={intro} body={body} />;
}
