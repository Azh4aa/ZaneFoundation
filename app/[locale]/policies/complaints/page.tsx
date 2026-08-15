import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PolicyPage } from "@/components/PolicyPage";
import { makePageMetadata } from "@/lib/metadata";
import { isLocale, site } from "@/lib/site";

const title = { en: "Complaints & feedback", ku: "سکاڵا و تێبینی" };
const description = { en: "How to raise a concern, make a complaint or provide feedback to Zane Foundation.", ku: "چۆنیەتی گەیاندنی نیگەرانی، سکاڵا یان تێبینی بە فاوندەیشنی زەنێ." };
export function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> { return makePageMetadata(params, title, description, "/policies/complaints"); }

export default async function ComplaintsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params; if (!isLocale(raw)) notFound(); const isKu = raw === "ku";
  const sections = isKu ? [
    { title: "چی دەتوانیت ڕابگەیەنیت", items: ["هەڵسوکەوتی کارمەند یان خۆبەخش", "کوالێتی یان دادپەروەریی ڕێکارێک", "دەستگەیشتن یان جیاکاری", "بەکارهێنانی نادروستی زانیاری یان وێنە", "هەر نیگەرانییەکی تر دەربارەی کاری زەنێ"] },
    { title: "چۆن بنێریت", paragraphs: ["ڕووداوەکە، بەروار، شوێن و ئەوەی دەتەوێت ڕووبدات بە کورتی بنووسە. دەتوانیت داوا بکەیت ناسنامەت نهێنی بمێنێتەوە تا ئەو ڕادەیەی یاسا و لێکۆڵینەوە ڕێگا بدات."] },
    { title: "وەڵامدانەوە", paragraphs: ["زەنێ وەرگرتنی سکاڵا پشتڕاست دەکاتەوە، کەسی بەرپرس دیاری دەکات و خشتەی کاتی پێداچوونەوە ڕوون دەکاتەوە. ئەنجام و هەنگاوی چاککردنەوە تۆمار دەکرێت."] },
    { title: "نیگەرانیی پاراستن", paragraphs: ["ئەگەر بابەتەکە پەیوەندی بە سەلامەتی منداڵ یان گەورەی لە مەترسیدا هەیە، ڕاستەوخۆ ئیمەیڵی پاراستن بەکاربهێنە. لە مەترسیی دەستبەجێدا پەیوەندی بە خزمەتگوزاریی فریاکەوتنی ناوخۆ بکە."] },
  ] : [
    { title: "What you can raise", items: ["The conduct of a staff member or volunteer", "The quality or fairness of a process", "Accessibility or discrimination", "Misuse of information, images or stories", "Any other concern about Zane’s work"] },
    { title: "How to submit", paragraphs: ["Briefly describe what happened, when and where, and what response you are seeking. You may request confidentiality to the extent permitted by law and a fair review process."] },
    { title: "How Zane responds", paragraphs: ["Zane acknowledges complaints, assigns an appropriate reviewer and explains the review timeline. Findings and corrective actions are documented."] },
    { title: "Safeguarding concerns", paragraphs: ["If the matter concerns the safety of a child or adult at risk, use the dedicated safeguarding address. If someone is in immediate danger, contact the appropriate local emergency service."] },
  ];
  return <PolicyPage locale={raw} eyebrow={isKu ? "گوێگرتن و لێپرسراوێتی" : "Listening and accountability"} title={title[raw]} intro={description[raw]} status={isKu ? "ڕێگای تێبینی و سکاڵا · نوێکراوەی ئاب ٢٠٢٦" : "Public feedback route · updated August 2026"} sections={sections} email={site.complaintsEmail} />;
}
