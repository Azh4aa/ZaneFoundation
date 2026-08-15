import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PolicyPage } from "@/components/PolicyPage";
import { makePageMetadata } from "@/lib/metadata";
import { isLocale, site } from "@/lib/site";

const title = { en: "Safeguarding commitment", ku: "پابەندبوونی پاراستن" };
const description = { en: "Zane Foundation’s public commitment to protecting children and adults at risk.", ku: "پابەندبوونی گشتیی فاوندەیشنی زەنێ بە پاراستنی منداڵان و گەورەی لە مەترسیدا." };
export function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> { return makePageMetadata(params, title, description, "/policies/safeguarding"); }

export default async function SafeguardingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params; if (!isLocale(raw)) notFound(); const isKu = raw === "ku";
  const sections = isKu ? [
    { title: "بنەمای کار", paragraphs: ["سەلامەتی، شکۆ و مافی ئەو کەسانەی زەنێ لەگەڵیان کار دەکات لە هەر ئامانجێکی بەرنامەیی پێشترە. زیان، چەوساندنەوە، بەکارهێنان یان جیاکاری قبوڵ ناکرێت."] },
    { title: "پاراستن لە کرداردا", items: ["ڕێگای ڕوون بۆ ڕاپۆرتکردنی نیگەرانی", "بەرپرسیاریی دیاریکراو بۆ بەدواداچوون", "پشکنینی گونجاوی کارمەند و خۆبەخش بەپێی ڕۆڵ", "ڕاهێنان، کۆدی هەڵسوکەوت و ڕەوانەکردنی بەرپرسانە"] },
    { title: "وێنە، چیرۆک و ڕەزامەندی", paragraphs: ["هیچ وێنە، چیرۆک یان زانیاریی ناساندن بەبێ ڕەزامەندیی ئاگادارانە و پێداچوونەوەی پاراستن بڵاو ناکرێتەوە. ڕەزامەندی دەتوانرێت بکشێندرێتەوە."] },
    { title: "ڕاپۆرتکردنی نیگەرانی", paragraphs: ["ئەگەر نیگەرانییەکی پاراستنت هەیە، بە ئیمەیڵی تایبەت پەیوەندی بکە. ئەم ماڵپەڕە خزمەتگوزاریی فریاکەوتن نییە؛ لە مەترسیی دەستبەجێدا پەیوەندی بە دەسەڵاتی ناوخۆ یان خزمەتگوزاریی فریاکەوتن بکە."] },
  ] : [
    { title: "Our starting principle", paragraphs: ["The safety, dignity and rights of people who engage with Zane come before any program target. Abuse, exploitation, harassment and discrimination are not tolerated."] },
    { title: "Safeguarding in practice", items: ["A clear route for reporting concerns", "Named responsibility for appropriate follow-up", "Role-appropriate checks for staff and volunteers", "Induction, a code of conduct and responsible referral"] },
    { title: "Images, stories and consent", paragraphs: ["No identifiable image, story or personal account should be published without informed consent and a safeguarding review. Consent can be withdrawn."] },
    { title: "Reporting a concern", paragraphs: ["Email the dedicated address if you have a safeguarding concern. This website is not an emergency service. If someone is in immediate danger, contact the appropriate local authority or emergency service."] },
  ];
  return <PolicyPage locale={raw} eyebrow={isKu ? "پاراستن" : "Safeguarding"} title={title[raw]} intro={description[raw]} status={isKu ? "پابەندبوونی گشتی · نوێکراوەی ئاب ٢٠٢٦" : "Public safeguarding commitment · updated August 2026"} sections={sections} email={site.safeguardingEmail} />;
}
