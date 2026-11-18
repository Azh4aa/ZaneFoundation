import Link from "next/link";
import { notFound } from "next/navigation";
import { GuideReader } from "@/components/GuideReader";
import { HomeFilm } from "@/components/HomeFilm";
import { Reveal } from "@/components/Reveal";
import { isLocale } from "@/lib/site";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const isKu = locale === "ku";
  return (
    <>
      <HomeFilm locale={locale} />
      <GuideReader locale={locale} />
      <section className="partner-band" aria-labelledby="partnership-title">
        <Reveal className="partner-band__inner shell">
          <h2 id="partnership-title">{isKu ? "هاوکاری لەگەڵ زەنێ" : "Working with Zane"}</h2>
          <div>
            <p>{isKu ? "ئەگەر لە قوتابخانە، کۆمپانیا یان ڕێکخراوێک کار دەکەن و بیرۆکەیەکتان بۆ خوێندن یان هەلی کار هەیە، بۆمان بنووسن." : "If your school, business or organization has an idea for making education or employment more accessible in Kurdistan, we’d like to hear it."}</p>
            <Link className="text-link" href={`/${locale}/partner`}>{isKu ? "ڕێگاکانی هاوکاری" : "Partnerships"}<span className="arrow" aria-hidden="true">→</span></Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
