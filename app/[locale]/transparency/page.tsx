import { notFound } from "next/navigation";
import { EmailLink } from "@/components/EmailLink";
import { PageHero } from "@/components/PageHero";
import { makePageMetadata } from "@/lib/metadata";
import { isLocale, site } from "@/lib/site";

const title = { en: "Registration", ku: "زانیاریی تۆمارکردن" };
const description = {
  en: "Zane is registered as a nongovernmental organization in the Kurdistan Region of Iraq.",
  ku: "زەنێ لە هەرێمی کوردستانی عێراق وەک ڕێکخراوێکی ناحکومی تۆمار کراوە.",
};

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return makePageMetadata(params, title, description, "/transparency");
}

export default async function RegistrationPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const isKu = locale === "ku";
  return (
    <>
      <PageHero title={title[locale]} intro={<p>{description[locale]}</p>} />
      <div className="shell">
        <dl className="facts">
          <div><dt>{isKu ? "لایەنی دەرکەری بڕوانامە" : "Issued by"}</dt><dd><a href={site.registration.url[locale]}>{site.registration.authority[locale]}</a></dd></div>
          <div><dt>{isKu ? "بەرواری بڕوانامە" : "Certificate date"}</dt><dd><time dateTime={site.registration.dateTime}>{site.registration.date[locale]}</time></dd></div>
          <div><dt>{isKu ? "شوێن" : "Location"}</dt><dd>{site.location[locale]}</dd></div>
        </dl>
        <div className="topic-list">
          <section>
            <h2>{isKu ? "داواکردنی بەڵگەنامە" : "Request documentation"}</h2>
            <div><p>{isKu ? "ئەگەر بۆ دامەزراوەکەتان پێویستتان بە بەڵگەنامەی تۆمارکردن هەیە، ناوی دامەزراوەکە و بەڵگەنامەی پێویست لە ئیمەیڵێکدا بۆمان بنووسن." : "For a copy of the registration documents, email us with the name of your institution and the document you need."}</p><EmailLink /></div>
          </section>
        </div>
      </div>
    </>
  );
}
