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
    { title: "پێش دەستپێکی خزمەتگوزاری", items: ["پەسەندکردنی سیاسەتی تەواوی پاراستنی منداڵ و گەورەی لە مەترسیدا", "دیاریکردنی بەرپرسی پاراستن و ڕێگای ڕاپۆرتدان", "پشکنینی گونجاوی کارمەند و خۆبەخش بەپێی ڕۆڵ", "ڕاهێنان، کۆدی هەڵسوکەوت و پرۆتۆکۆلی ڕەوانەکردن"] },
    { title: "وێنە، چیرۆک و ڕەزامەندی", paragraphs: ["هیچ وێنە، چیرۆک یان زانیاریی ناساندن بەبێ ڕەزامەندیی ئاگادارانە و پێداچوونەوەی پاراستن بڵاو ناکرێتەوە. ڕەزامەندی دەتوانرێت بکشێندرێتەوە."] },
    { title: "ڕاپۆرتکردنی نیگەرانی", paragraphs: ["ئەگەر نیگەرانییەکی پاراستنت هەیە، بە ئیمەیڵی تایبەت پەیوەندی بکە. ئەم ماڵپەڕە خزمەتگوزاریی فریاکەوتن نییە؛ لە مەترسیی دەستبەجێدا پەیوەندی بە دەسەڵاتی ناوخۆ یان خزمەتگوزاریی فریاکەوتن بکە."] },
  ] : [
    { title: "Our starting principle", paragraphs: ["The safety, dignity and rights of people who engage with Zane come before any program target. Abuse, exploitation, harassment and discrimination are not tolerated."] },
    { title: "Before services launch", items: ["Approve a full child and adult-at-risk safeguarding policy", "Appoint a safeguarding lead and documented reporting route", "Complete role-appropriate checks for staff and volunteers", "Provide induction, a code of conduct and referral protocols"] },
    { title: "Images, stories and consent", paragraphs: ["No identifiable image, story or personal account should be published without informed consent and a safeguarding review. Consent can be withdrawn."] },
    { title: "Reporting a concern", paragraphs: ["Email the dedicated address if you have a safeguarding concern. This website is not an emergency service. If someone is in immediate danger, contact the appropriate local authority or emergency service."] },
  ];
  return <PolicyPage locale={raw} eyebrow={isKu ? "پاراستن" : "Safeguarding"} title={title[raw]} intro={description[raw]} status={isKu ? "پابەندبوونی کاتی · سیاسەتی تەواو پێش خزمەتگوزاری پەسەند دەکرێت" : "Interim commitment · full policy required before service delivery"} sections={sections} email={site.safeguardingEmail} />;
}
