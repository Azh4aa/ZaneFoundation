import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { makePageMetadata } from "@/lib/metadata";
import { isLocale, site, tx } from "@/lib/site";

const title = { en: "Governance & trust", ku: "بەڕێوەبردن و متمانە" };
const description = { en: "The public governance, safeguarding and accountability commitments of Zane Foundation.", ku: "پابەندبوونە گشتییەکانی فاوندەیشنی زەنێ لە بەڕێوەبردن، پاراستن و لێپرسراوێتی." };
export function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> { return makePageMetadata(params, title, description, "/transparency"); }

export default async function TransparencyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params; if (!isLocale(raw)) notFound(); const locale = raw; const isKu = locale === "ku";
  const commitments = [
    [isKu ? "چاودێریی سەربەخۆ" : "Independent oversight", isKu ? "چاودێریی ڕێکخراوەکە لە جێبەجێکردنی ڕۆژانە جیادەکرێتەوە." : "Organizational oversight is kept distinct from day-to-day delivery."],
    [isKu ? "پاراستنی کەسان" : "Safeguarding", isKu ? "سەلامەتی، شکۆ و ڕەزامەندی لە هەر بڕیارێکدا پێشینەن." : "Safety, dignity and consent come before publicity or convenience."],
    [isKu ? "بەرپرسیاریی دارایی" : "Financial responsibility", isKu ? "سەرچاوەکان بە مەبەستی دیاریکراو و بە چاودێری بەکار دەهێنرێن." : "Resources are used for their stated purpose with appropriate oversight."],
    [isKu ? "گوێگرتن و وەڵامدانەوە" : "Listening and response", isKu ? "تێبینی و سکاڵا بە ڕێز، بە نهێنی و لە ڕێگەی ڕێکارێکی ڕوونەوە بەدواداچوونیان بۆ دەکرێت." : "Feedback and complaints are handled respectfully, confidentially and through a clear route."],
  ];

  return <>
    <PageHero eyebrow={isKu ? "بەڕێوەبردن و متمانە" : "Governance & trust"} title={isKu ? "متمانە دەبێت ئاسان بپشکنرێت." : <>Trust should be<br /><em>easy to check.</em></>} intro={<p>{isKu ? "زەنێ لەبەردەم ئەو کەسانەی خزمەتیان دەکات، خێزان، هاوبەش و کۆمەڵگا بەرپرسیارە." : "Zane is accountable to the people it serves, their families, its partners and the wider community."}</p>} aside={<p>{isKu ? "لێرە ڕێگای پاراستن، تایبەتمەندی، سکاڵا و دەستگەیشتن دەدۆزیتەوە." : "This page brings together safeguarding, privacy, complaints and accessibility information."}</p>} />

    <section className="section-pad"><div className="shell"><SectionHeading eyebrow={isKu ? "بەڵێنەکانمان" : "What you can expect"} title={isKu ? "بەڵێن تەنها ئەو کاتە واتای هەیە کە لە کرداردا دیار بێت." : "A commitment only matters when it shapes the work."} /><div className="trust-commitments">{commitments.map(([h,p],i) => <article key={h}><span>0{i+1}</span><h3>{h}</h3><p>{p}</p></article>)}</div></div></section>

    <section className="legal-profile-section section-pad section-ink"><div className="shell legal-profile-grid"><div><p className="eyebrow eyebrow--gold">{isKu ? "زانیاریی زەنێ" : "About the organization"}</p><h2>{isKu ? "زانیاریی بنەڕەتی لە یەک شوێندا." : "Basic information, in one place."}</h2></div><dl>
      <div><dt>{isKu ? "ناوی یاسایی" : "Legal name"}</dt><dd>{tx(site.legalName, locale)}</dd></div>
      <div><dt>{isKu ? "شوێنی سەرەکی" : "Based in"}</dt><dd>{tx(site.location, locale)}</dd></div>
      <div><dt>{isKu ? "ژمارەی تۆمار" : "Registration number"}</dt><dd>{site.registrationNumber}</dd></div>
      <div><dt>{isKu ? "ئیمەیڵی گشتی" : "Public contact"}</dt><dd><a href={`mailto:${site.email}`}>{site.email}</a></dd></div>
    </dl></div></section>

    <section className="section-pad section-sand"><div className="shell"><SectionHeading eyebrow={isKu ? "سیاسەت و ڕێگای پەیوەندی" : "Policies and reporting routes"} title={isKu ? "زانیاریی ڕوون بۆ ماف و بەرپرسیارێتی." : "Clear routes for rights and responsibility."} /><div className="policy-link-grid">{[
      ["/policies/safeguarding", isKu ? "پاراستن" : "Safeguarding", isKu ? "پابەندبوون بە پاراستنی منداڵ و گەورەی لە مەترسیدا." : "Protecting children and adults at risk."],
      ["/policies/privacy", isKu ? "پاراستنی زانیاری" : "Privacy", isKu ? "چۆنیەتی کۆکردنەوە و بەکارهێنانی زانیاری." : "How information submitted through the site is handled."],
      ["/policies/complaints", isKu ? "سکاڵا و تێبینی" : "Complaints & feedback", isKu ? "ڕێگای گەیاندنی نیگەرانی یان تێبینی." : "How to raise a concern or share feedback."],
      ["/policies/accessibility", isKu ? "دەستگەیشتن" : "Accessibility", isKu ? "پابەندبوون بە ماڵپەڕ و زانیاریی دەستپێگەیشتوو." : "Our commitment to accessible information."],
    ].map(([href,h,p],i) => <Link href={`/${locale}${href}`} key={href}><span>0{i+1}</span><h3>{h}</h3><p>{p}</p><b>↗</b></Link>)}</div></div></section>

    <section className="center-cta section-pad"><div className="shell"><h2>{isKu ? "پرسیارێکت هەیە؟" : "Need organizational information?"}</h2><p>{isKu ? "بۆ پرسیاری تۆمار، بەڕێوەبردن یان هاوبەشی، ڕاستەوخۆ پەیوەندیمان پێوە بکە." : "For registration, governance or partnership enquiries, contact us directly."}</p><Link className="button button--dark" href={`/${locale}/contact`}>{isKu ? "پەیوەندی" : "Contact Zane"}</Link></div></section>
  </>;
}
