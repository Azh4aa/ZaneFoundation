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
    [isKu ? "هاوبەشی" : "Partnerships", site.partnershipsEmail, isKu ? "بۆ ڕێکخراو، کۆمپانیا، زانکۆ و هاوبەشیی تەکنیکی." : "For institutions, companies, universities and technical partners."],
    [isKu ? "خۆبەخشی" : "Volunteering", site.volunteerEmail, isKu ? "بۆ پرسیار دەربارەی تۆڕی خۆبەخشان." : "Questions about the volunteer network."],
    [isKu ? "هەلی کار" : "Careers", site.careersEmail, isKu ? "بۆ ڕۆڵە بڵاوکراوەکان و هەلی داهاتوو." : "Published roles and future opportunities."],
  ];

  return <>
    <PageHero eyebrow={isKu ? "پەیوەندی" : "Contact"} title={isKu ? "ڕێگای دروستی پەیوەندی هەڵبژێرە." : <>Choose the right<br /><em>point of contact.</em></>} intro={<p>{isKu ? "ناونیشانەکان بەپێی جۆری پرسیار دابەش کراون، تا پەیامەکەت ڕاستەوخۆ بگاتە بەشی پەیوەندیدار." : "Addresses are organized by enquiry type so your message reaches the relevant part of the team."}</p>} aside={<p>{isKu ? "زانیاریی تەندروستی یان کەسیی هەستیار بە ئیمەیڵ مەبنێرە. ئەم ماڵپەڕە خزمەتگوزاریی فریاکەوتن نییە." : "Do not send medical or sensitive personal information by email. This website is not an emergency service."}</p>} />
    <section className="section-pad contact-directory-section"><div className="shell contact-directory">{contacts.map(([label,email,note], index) => <article key={email}><span>0{index+1}</span><p>{label}</p><a href={`mailto:${email}`}>{email}</a><small>{note}</small></article>)}</div></section>
    <section className="contact-location"><div className="shell contact-location__grid"><div><p className="eyebrow eyebrow--gold">{isKu ? "نووسینگە" : "Office"}</p><h2>{tx(site.location, locale)}</h2><p>{tx(site.officeAddress, locale) || tx(site.officeNote, locale)}</p></div><div className="office-details"><dl><div><dt>{isKu ? "دیدار" : "Meetings"}</dt><dd>{tx(site.workingHours, locale)}</dd></div>{site.phone ? <div><dt>{isKu ? "تەلەفۆن" : "Phone"}</dt><dd><a href={`tel:${site.phone}`}>{site.phone}</a></dd></div> : null}<div><dt>{isKu ? "ئیمەیڵ" : "Email"}</dt><dd><a href={`mailto:${site.email}`}>{site.email}</a></dd></div></dl><div className="office-actions"><Link className="button button--gold" href={`mailto:${site.email}`}>{isKu ? "داوای دیدار" : "Arrange a meeting"}</Link>{site.mapUrl ? <a className="quiet-link quiet-link--light" href={site.mapUrl} target="_blank" rel="noreferrer">{isKu ? "کردنەوەی نەخشە" : "Open map"} ↗</a> : null}</div></div></div></section>
  </>;
}
