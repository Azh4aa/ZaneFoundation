import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { isLocale, locales, site } from "@/lib/site";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return {
    description: locale === "en"
      ? "A foundation advancing opportunity, dignity and lifelong support for people with Down syndrome in Kurdistan and Iraq."
      : "فاوندەیشنی زەنێ بۆ پشتیوانی و داکۆکیکردن لە کەسانی خاوەن سندرۆمی داون کار دەکات، بۆ ئەوەی ببنە بەشێکی تەواو و بەهادار لە کۆمەڵگا.",
    alternates: {
      canonical: `${site.url}/${locale}`,
      languages: { en: `${site.url}/en`, ku: `${site.url}/ku` },
    },
  };
}

export default async function LocaleLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <div lang={locale} dir={locale === "ku" ? "rtl" : "ltr"} className={locale === "ku" ? "locale-ku" : "locale-en"}>
      <a className="skip-link" href="#main">{locale === "en" ? "Skip to content" : "بڕۆ بۆ ناوەڕۆک"}</a>
      <SiteHeader locale={locale} />
      <main id="main">{children}</main>
      <SiteFooter locale={locale} />
    </div>
  );
}
