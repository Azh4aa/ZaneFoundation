import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PolicyPage } from "@/components/PolicyPage";
import { makePageMetadata } from "@/lib/metadata";
import { isLocale, site } from "@/lib/site";

const title = { en: "Accessibility statement", ku: "بەیاننامەی دەستگەیشتن" };
const description = { en: "Zane Foundation’s commitment to an accessible, understandable website.", ku: "پابەندبوونی فاوندەیشنی زەنێ بە ماڵپەڕێکی دەستپێگەیشتوو و ئاسان بۆ تێگەیشتن." };
export function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> { return makePageMetadata(params, title, description, "/policies/accessibility"); }

export default async function AccessibilityPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params; if (!isLocale(raw)) notFound(); const isKu = raw === "ku";
  const sections = isKu ? [
    { title: "ئامانجمان", paragraphs: ["ئامانجمان ئەوەیە ماڵپەڕەکە بە کیبۆرد، خوێنەری شاشە و گەورەکردنی دەق بەکاربهێنرێت و کۆنتراستی ڕەنگ و پێکهاتەی ناوەڕۆک ڕوون بێت."] },
    { title: "ئەوەی جێبەجێ کراوە", items: ["زمان و ئاراستەی دەق بۆ کوردی و ئینگلیزی", "ناونیشان و نیشانەی فۆڕم", "ڕێگای بازدان بۆ ناوەڕۆکی سەرەکی", "دیاریبوونی فوکەسی کیبۆرد", "جوڵەی سنووردار بۆ بەکارهێنەرانی کەمکردنەوەی جوڵە"] },
    { title: "سنوورە ئێستاکان", paragraphs: ["هەندێک بەڵگەنامەی داهاتوو لەوانەیە PDF بن و پێویستی بە پشکنینی دەستگەیشتن هەبێت. وەرگێڕانی کوردی دەبێت پێش بڵاوکردنەوەی فەرمی لەلایەن نووسەری زمانی کوردی پێداچوونەوەی بۆ بکرێت."] },
    { title: "کێشەیەکت بینی؟", paragraphs: ["ناوی لاپەڕە، ئەو شتەی نەتوانیت بەکاری بهێنیت و تەکنەلۆژیی یارمەتیدەرەکەت بنێرە. هەوڵ دەدەین وەشانی جێگرەوە دابین بکەین و کێشەکە چاک بکەینەوە."] },
  ] : [
    { title: "Our aim", paragraphs: ["The site is designed to support keyboard navigation, screen readers and text enlargement, with visible focus, meaningful structure and sufficient color contrast."] },
    { title: "Measures included", items: ["Correct language and text direction for Kurdish and English", "Structured headings and labelled form controls", "A skip link to the main content", "Visible keyboard focus", "Reduced motion support for users who request it"] },
    { title: "Known limitations", paragraphs: ["Future documents may be published as PDFs and will need an accessibility review. Kurdish copy should receive final review by a professional Kurdish-language editor before the formal public launch."] },
    { title: "Report a barrier", paragraphs: ["Tell us the page, the task you could not complete and any assistive technology you use. We will aim to provide an alternative format and correct the underlying issue."] },
  ];
  return <PolicyPage locale={raw} eyebrow={isKu ? "دەستگەیشتن" : "Accessibility"} title={title[raw]} intro={description[raw]} status={isKu ? "بەیاننامەی کاتی · پشکنینی فەرمی پێش دەستپێک" : "Interim statement · formal audit planned before launch"} sections={sections} email={site.email} />;
}
