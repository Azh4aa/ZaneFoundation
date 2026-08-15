import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { makePageMetadata } from "@/lib/metadata";
import { isLocale, site, tx } from "@/lib/site";

const title = { en: "Contact", ku: "پەیوەندی" };
const description = { en: "Contact Zane Foundation in Sulaymaniyah, Kurdistan Region of Iraq.", ku: "پەیوەندی بە فاوندەیشنی زەنێ لە سلێمانی، هەرێمی کوردستانی عێراق." };
export function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> { return makePageMetadata(params, title, description, "/contact"); }

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params; if (!isLocale(raw)) notFound(); const locale = raw; const isKu = locale === "ku";
  const contacts = [
    [isKu ? "پرسیاری گشتی و میدیا" : "General & media", site.email, isKu ? "بۆ پرسیاری گشتی، میدیا و زانیاریی ماڵپەڕ." : "General enquiries, media and website information."],
    [isKu ? "هاوبەشی" : "Partnerships", site.partnershipsEmail, isKu ? "بۆ پشتگیر، ڕێکخراو، کۆمپانیا و هاوبەشیی تەکنیکی." : "For funders, institutions, companies and technical partners."],
    [isKu ? "خۆبەخشی" : "Volunteering", site.volunteerEmail, isKu ? "بۆ پرسیار دەربارەی تۆڕی خۆبەخشان." : "Questions about the volunteer network."],
    [isKu ? "هەلی کار" : "Careers", site.careersEmail, isKu ? "بۆ ڕۆڵە بڵاوکراوەکان و هەلی داهاتوو." : "Published roles and future opportunities."],
  ];

  return <>
    <PageHero eyebrow={isKu ? "پەیوەندی" : "Contact"} title={isKu ? "پەیوەندیی دروست، بە ناونیشانی دروست." : <>One organization.<br /><em>The right point of contact.</em></>} intro={<p>{isKu ? "بەپێی جۆری پرسیار، ناونیشانی پەیوەندیدار هەڵبژێرە تا پەیامەکەت بگاتە تیمی دروست." : "Choose the address that matches your enquiry so it reaches the right part of the team."}</p>} aside={<p>{isKu ? "تکایە زانیاریی تەندروستی یان کەسیی هەستیار بە ئیمەیڵ مەبنێرە. ئەم ماڵپەڕە خزمەتگوزاریی فریاکەوتن نییە." : "Please do not send medical or sensitive personal information by email. This website is not an emergency service."}</p>} />
    <section className="section-pad contact-directory-section"><div className="shell contact-directory">{contacts.map(([label,email,note], index) => <article key={email}><span>0{index+1}</span><p>{label}</p><a href={`mailto:${email}`}>{email}</a><small>{note}</small></article>)}</div></section>
    <section className="contact-location"><div className="shell contact-location__grid"><div><p className="eyebrow eyebrow--gold">{isKu ? "شوێن" : "Location"}</p><h2>{tx(site.location, locale)}</h2></div><div><p>{isKu ? "سەردان تەنها بە کاتی پێشوەختە. بۆ ڕێکخستنی دیدار، ئیمەیڵی گشتی بەکاربهێنە." : "Visits are by appointment. Use the general email address to arrange a meeting."}</p><Link className="button button--gold" href={`mailto:${site.email}`}>{isKu ? "داوای دیدار" : "Arrange a meeting"}</Link></div></div></section>
  </>;
}
