import { notFound } from "next/navigation";
import { PolicyPage } from "@/components/PolicyPage";
import { makePageMetadata } from "@/lib/metadata";
import { isLocale } from "@/lib/site";

const title = { en: "Website accessibility", ku: "ئاسانکارییەکانی ماڵپەڕ" };
const intro = {
  en: "You can read Zane’s website in Sorani Kurdish or English and move between links using a keyboard. The site follows your device’s reduced-motion setting.",
  ku: "ماڵپەڕەکە بە کوردیی سۆرانی و ئینگلیزی بەردەستە. بە کیبۆردیش دەتوانن لە بەستەرێکەوە بۆ بەستەرێکی تر بچن. ئەگەر لە ئامێرەکەتاندا جووڵەتان کەم کردبێتەوە، ماڵپەڕەکەش ئەو ڕێکخستنە بەکار دەهێنێت.",
};
const body = [
  {
    en: "If a page is difficult to read or use, send us its address and describe the difficulty. You can also ask for its contents in another format.",
    ku: "ئەگەر خوێندنەوە یان بەکارهێنانی پەڕەیەک بۆتان قورس بوو، بەستەرەکەمان بۆ بنێرن و کێشەکە باس بکەن. دەتوانن داوا بکەن ناوەڕۆکی پەڕەکە بە شێوەیەکی تر وەربگرن.",
  },
];

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return makePageMetadata(params, title, intro, "/policies/accessibility");
}

export default async function AccessibilityPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <PolicyPage locale={locale} title={title} intro={intro} body={body} />;
}
