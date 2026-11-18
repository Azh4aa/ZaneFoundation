import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import "../brand-v2.css";
import "../home.css";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { pageMetadata } from "@/lib/metadata";
import { isLocale, locales, site } from "@/lib/site";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  themeColor: "#F6F3E7",
  colorScheme: "light",
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const name = site.localName[locale];
  return {
    ...pageMetadata(locale, name, site.description[locale]),
    metadataBase: new URL(site.url),
    title: { default: name, template: `%s | ${name}` },
    applicationName: site.name,
    twitter: { card: "summary_large_image", images: ["/og.png"] },
  };
}

export default async function LocaleLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const isKu = locale === "ku";

  return (
    <html lang={isKu ? "ckb" : "en"} dir={isKu ? "rtl" : "ltr"}>
      <head>
        {isKu && <link rel="preload" href="/fonts/unisirwan-montserrat-regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />}
      </head>
      <body className={isKu ? "locale-ku" : "locale-en"}>
        <a className="skip-link" href="#main">{isKu ? "بچنە سەر ناوەڕۆک" : "Skip to content"}</a>
        <SiteHeader locale={locale} />
        <main id="main">{children}</main>
        <SiteFooter locale={locale} />
      </body>
    </html>
  );
}
