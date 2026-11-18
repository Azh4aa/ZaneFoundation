import { notFound } from "next/navigation";
import { PolicyPage } from "@/components/PolicyPage";
import { makePageMetadata } from "@/lib/metadata";
import { isLocale } from "@/lib/site";

const title = { en: "Safeguarding", ku: "پاراستنی منداڵان و گەورەکان" };
const intro = {
  en: "People decide whether their photograph or story can be shared and where it may appear.",
  ku: "هەر کەسێک بۆ خۆی بڕیار دەدات ئایا ڕازییە وێنە یان چیرۆکەکەی بڵاو بکرێتەوە و لە کوێ بڵاو بکرێتەوە.",
};
const body = [
  {
    en: "Before Zane publishes a personal story, we explain how it will be used and ask for permission. For a child, we involve the child and their parent or guardian.",
    ku: "پێش بڵاوکردنەوەی چیرۆک یان وێنەی کەسێک، بۆی ڕوون دەکەینەوە چۆن بەکار دەهێنرێت و ڕەزامەندیی وەردەگرین. ئەگەر منداڵ بێت، لەگەڵ خۆی و دایک و باوک یان سەرپەرشتەکەی قسە دەکەین.",
  },
  {
    en: "If you are concerned about someone’s safety in connection with Zane, email us to arrange a private conversation. Please leave names and identifying details out of your first message.",
    ku: "ئەگەر لە کارێکی پەیوەست بە زەنێدا نیگەرانی سەلامەتیی کەسێکن، ئیمەیڵمان بۆ بنێرن بۆ ئەوەی بە تایبەتی قسە بکەین. تکایە لە نامەی یەکەمدا ناو یان زانیارییەکی ناسێنەری کەسەکە مەنووسن.",
  },
];

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return makePageMetadata(params, title, intro, "/policies/safeguarding");
}

export default async function SafeguardingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <PolicyPage locale={locale} title={title} intro={intro} body={body} />;
}
