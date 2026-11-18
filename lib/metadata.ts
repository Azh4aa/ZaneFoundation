import type { Metadata } from "next";
import { isLocale, site, type Locale, type LocalizedText } from "@/lib/site";

export function pageMetadata(locale: Locale, title: string, description: string, path = ""): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}${path}`,
      languages: { en: `/en${path}`, ku: `/ku${path}` },
    },
    openGraph: {
      title: path ? `${title} | ${site.localName[locale]}` : title,
      description,
      url: `/${locale}${path}`,
      type: "website",
      siteName: site.name,
      locale: locale === "ku" ? "ckb_IQ" : "en_US",
      alternateLocale: [locale === "ku" ? "en_US" : "ckb_IQ"],
      images: [{ url: "/og.png", width: 1200, height: 630, alt: site.localName[locale] }],
    },
  };
}

export async function makePageMetadata(
  params: Promise<{ locale: string }>,
  title: LocalizedText,
  description: LocalizedText,
  path: string,
): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return pageMetadata(locale, title[locale], description[locale], path);
}
