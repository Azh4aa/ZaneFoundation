import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { makePageMetadata } from "@/lib/metadata";
import { isLocale, site, tx } from "@/lib/site";

const title = { en: "Contact", ku: "پەیوەندی" };
const description = { en: "Contact Zane Foundation in Sulaymaniyah, Kurdistan Region of Iraq.", ku: "پەیوەندی بە فاوندەیشنی زەنێ لە سلێمانی، هەرێمی کوردستانی عێراق." };
export function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> { return makePageMetadata(params, title, description, "/contact"); }

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params; if (!isLocale(raw)) notFound(); const locale = raw; const isKu = locale === "ku";
  return <><PageHero eyebrow={isKu ? "پەیوەندی" : "Contact"} title={isKu ? "گفتوگۆی دروست لێرەوە دەست پێدەکات." : <>The right conversation<br /><em>starts here.</em></>} intro={<p>{isKu ? "بۆ هاوبەشی، پسپۆڕی، ڕاگەیاندن یان پرسیاری گشتی ڕاستەوخۆ ئیمەیڵمان بۆ بنێرە." : "For partnerships, technical expertise, media or general enquiries, email us directly."}</p>} aside={<p>{isKu ? "هێڵی خێزان هێشتا دەستی بە کار نەکردووە؛ تکایە زانیاری تەندروستی یان کەسیی هەستیار بە ئیمەیڵ مەبنێرە." : "The family line has not launched; please do not email sensitive health or personal information."}</p>} /><section className="contact-section section-pad"><div className="shell contact-grid"><div className="contact-card"><p className="eyebrow">{isKu ? "ئیمەیڵ" : "Email"}</p><a href={`mailto:${site.email}`}>{site.email}</a><p>{isKu ? "لە ٣ ڕۆژی کاری دا وەڵامدانەوە ئامانجە، کاتێک تیمەکە بە تەواوی کار دەکات." : "A three-business-day response target will apply once the core team is fully operational."}</p></div><div className="contact-card"><p className="eyebrow">{isKu ? "شوێن" : "Location"}</p><h2>{tx(site.location, locale)}</h2><p>{isKu ? "ناونیشانی سەردان دوای پشتڕاستکردنەوە و دانانی سیاسەتی پاراستن بڵاودەکرێتەوە." : "A visit address will be published after verification and safeguarding arrangements are in place."}</p></div><div className="contact-brief"><p className="eyebrow eyebrow--gold">{isKu ? "بۆ وەڵامێکی خێراتر" : "For a useful first reply"}</p><h2>{isKu ? "ئیمەیڵەکەت ئەمانە لەخۆ بگرێت" : "Include these details in your note"}</h2><ol><li>{isKu ? "ناو و دامەزراوە" : "Your name and organization"}</li><li>{isKu ? "جۆری پەیوەندی یان هاوبەشی" : "The enquiry or partnership type"}</li><li>{isKu ? "بوار یان پرۆگرامی جێی سەرنج" : "Area or program of interest"}</li><li>{isKu ? "خشتەی کات و هەنگاوی داهاتووی پێشنیازکراو" : "Timeline and your suggested next step"}</li></ol><a className="button button--gold" href={`mailto:${site.email}?subject=Zane%20Foundation%20inquiry`}>{isKu ? "ئیمەیڵ بنێرە" : "Write to Zane"}</a></div></div></section></>;
}

