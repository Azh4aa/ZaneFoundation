import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { makePageMetadata } from "@/lib/metadata";
import { isLocale, site } from "@/lib/site";

const title = { en: "Partner with us", ku: "ببە بە هاوبەش" };
const description = { en: "Ways for institutions, companies, universities, experts and community organizations to work with Zane Foundation.", ku: "ڕێگاکانی هاوکاریی ڕێکخراو، کۆمپانیا، زانکۆ، پسپۆڕ و دەستە کۆمەڵایەتییەکان لەگەڵ فاوندەیشنی زەنێ." };
export function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> { return makePageMetadata(params, title, description, "/partner"); }

export default async function PartnerPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params; if (!isLocale(raw)) notFound(); const locale = raw; const isKu = locale === "ku";
  return <>
    <PageHero eyebrow={isKu ? "هاوبەشی" : "Partnership"} title={isKu ? "پێکەوە کۆسپەکان لادەبەین." : <>Remove barriers.<br /><em>Work together.</em></>} intro={<p>{isKu ? "هاوبەشی، زانیاری و شارەزایی و سەرچاوەی دروست بۆ ئامانجێکی دیاریکراو لە یەک شوێن کۆدەکاتەوە." : "Partnership brings the right knowledge, people and resources to a defined objective."}</p>} aside={<p>{isKu ? "ئامانج، ڕۆڵی هەردوو لا، ماوەی کار و ڕێکاری پاراستن پێش دەستپێکردن دیاری دەکرێن." : "The objective, responsibilities, duration and safeguarding requirements are defined before work begins."}</p>} />
    <section className="section-pad"><div className="shell"><SectionHeading eyebrow={isKu ? "شێوازەکانی هاوکاری" : "Ways to collaborate"} title={isKu ? "چوار شێوازی دیاریکراوی هاوکاری." : "Four defined forms of collaboration."} /><div className="partner-paths">{[
      ["01", isKu ? "هاوبەشیی بەرنامە" : "Program partnership", isKu ? "پشتیوانی بۆ پشتگیریی زوو، خێزان، پەروەردەی گشتگیر یان هۆشیاریی کۆمەڵگا." : "Support work in early development, family guidance, inclusive education or public understanding."],
      ["02", isKu ? "هاوبەشیی تەکنیکی" : "Technical collaboration", isKu ? "شارەزایی لە تەندروستی، پەروەردە، پاراستن، توێژینەوە، یاسا یان ڕاگەیاندن بەشدار بکە." : "Contribute expertise in health, education, safeguarding, research, law or communications."],
      ["03", isKu ? "هاوبەشیی کۆمپانیا" : "Corporate engagement", isKu ? "خۆبەخشیی کارمەند، خزمەتگوزاریی پیشەیی و ژینگەی کاری گشتگیر بەیەکەوە ببەستەوە." : "Connect employee volunteering, pro-bono expertise and more inclusive workplaces."],
      ["04", isKu ? "هاوبەشیی کۆمەڵگا و میدیا" : "Community & media", isKu ? "یارمەتی بڵاوکردنەوەی زمان، چیرۆک و نوێنەرایەتیی دروست بدە." : "Help expand accurate language, respectful stories and authentic representation."],
    ].map(([n,h,p]) => <article key={n}><span>{n}</span><h3>{h}</h3><p>{p}</p></article>)}</div></div></section>
    <section className="partner-expect section-pad section-ink"><div className="shell partner-expect__grid"><div><SectionHeading inverse eyebrow={isKu ? "مەرجەکانی هاوبەشی" : "Partnership terms"} title={isKu ? "مەرج و بەرپرسیارێتییەکان لە سەرەتاوە دیاری دەکرێن." : "Terms and responsibilities are defined from the start."} /></div><ul>{[
      isKu ? "گفتوگۆ لەسەر ئامانج و بەها هاوبەشەکان" : "A conversation about shared purpose and values",
      isKu ? "ڕوونکردنەوەی ڕۆڵ و بەرپرسیارێتیی هەردوو لا" : "Clear roles and responsibilities on both sides",
      isKu ? "ڕێککەوتن لەسەر پاراستن و بەکارهێنانی زانیاری" : "Agreement on safeguarding and responsible information use",
      isKu ? "پەیوەندی و هەڵسەنگاندنی بەردەوام" : "Regular communication and reflection",
      isKu ? "نوێنەرایەتیی بەڕێز و بە ڕەزامەندی" : "Respectful representation with consent",
      isKu ? "بڵاوکردنەوەی فێربوون و کاریگەریی پشتڕاستکراو" : "Sharing verified learning and impact",
    ].map((item) => <li key={item}>{item}</li>)}</ul></div></section>
    <section className="partner-brief section-pad"><div className="shell partner-brief__grid"><div><p className="eyebrow">{isKu ? "پێشنیاری هاوکاری" : "Partnership proposal"}</p><h2>{isKu ? "ئامانج و بواری هاوکاری دیاری بکەن." : "Define the objective and area of collaboration."}</h2></div><div><p>{isKu ? "ناوی ڕێکخراوەکەتان، بواری کار، ئامانجی هاوبەشی و کەسی پەیوەندی بنێرن. زەنێ پێشنیارەکە بەپێی گونجانی لەگەڵ ئەرک و پێوەرەکانی پاراستن هەڵدەسەنگێنێت." : "Send the organization name, field of work, proposed objective and contact person. Zane reviews proposals against its mission and safeguarding requirements."}</p><a className="button button--dark" href={`mailto:${site.partnershipsEmail}?subject=Partnership%20inquiry%20%E2%80%94%20Zane%20Foundation`}>{site.partnershipsEmail}</a><Link className="text-link" href={`/${locale}/transparency`}>{isKu ? "بەڕێوەبردن و لێپرسراوێتی" : "Governance and accountability"}<span>↗</span></Link></div></div></section>
  </>;
}
