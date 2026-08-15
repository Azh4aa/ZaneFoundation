import Link from "next/link";
import type { Locale } from "@/lib/site";

type Section = { title: string; paragraphs?: string[]; items?: string[] };

export function PolicyPage({ locale, eyebrow, title, intro, status, sections, email }: { locale: Locale; eyebrow: string; title: string; intro: string; status: string; sections: Section[]; email: string }) {
  const isKu = locale === "ku";
  return <article className="policy-page">
    <header className="policy-hero"><div className="shell policy-hero__grid"><div><p className="eyebrow eyebrow--gold">{eyebrow}</p><h1>{title}</h1></div><div><p>{intro}</p><span>{status}</span></div></div></header>
    <div className="shell policy-layout"><aside><p>{isKu ? "ناوەڕۆکی لاپەڕە" : "On this page"}</p><nav>{sections.map((section, index) => <a key={section.title} href={`#policy-${index + 1}`}>{String(index + 1).padStart(2, "0")} · {section.title}</a>)}</nav><Link href={`/${locale}/contact`}>{isKu ? "پەیوەندی بە زەنێ" : "Contact Zane"} ↗</Link></aside><div className="policy-content">{sections.map((section, index) => <section id={`policy-${index + 1}`} key={section.title}><span>{String(index + 1).padStart(2, "0")}</span><h2>{section.title}</h2>{section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}{section.items ? <ul>{section.items.map((item) => <li key={item}>{item}</li>)}</ul> : null}</section>)}<div className="policy-contact"><p>{isKu ? "پرسیار یان تێبینییەکت هەیە؟" : "Questions or feedback?"}</p><a href={`mailto:${email}`}>{email}</a></div></div></div>
  </article>;
}
