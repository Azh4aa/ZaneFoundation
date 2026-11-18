import { notFound } from "next/navigation";
import { PolicyPage } from "@/components/PolicyPage";
import { makePageMetadata } from "@/lib/metadata";
import { isLocale } from "@/lib/site";

const title = { en: "Complaints and feedback", ku: "سکاڵا و پێشنیار" };
const intro = {
  en: "If something Zane has said or done concerns you, you can write to us directly. Suggestions are welcome at the same address.",
  ku: "ئەگەر ڕەخنە یان سکاڵایەکتان لە کارێک یان وتەیەکی زەنێ هەیە، دەتوانن ڕاستەوخۆ بۆمان بنووسن. پێشنیارەکانیشتان بە هەمان ئیمەیڵ بنێرن.",
};
const body = [
  {
    en: "Tell us briefly what happened and how you would like us to contact you. For a sensitive matter, ask for a private conversation before sending any documents or identifying another person.",
    ku: "بە کورتی بنووسن چی ڕوویداوە و چۆن پەیوەندیتان پێوە بکەین. ئەگەر بابەتەکە هەستیارە، پێش ناردنی بەڵگەنامە یان ناوی کەسێکی تر، داوای گفتوگۆیەکی تایبەت بکەن.",
  },
];

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return makePageMetadata(params, title, intro, "/policies/complaints");
}

export default async function ComplaintsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <PolicyPage locale={locale} title={title} intro={intro} body={body} />;
}
