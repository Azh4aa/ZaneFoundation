import type { Metadata } from "next";
import { isLocale, site, type LocalizedText } from "@/lib/site";

export async function makePageMetadata(
  params: Promise<{ locale: string }>,
  title: LocalizedText,
  description: LocalizedText,
  path: string,
): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const canonical = `${site.url}/${locale}${path}`;
  const other = locale === "en" ? "ku" : "en";
  return {
    title: title[locale],
    description: description[locale],
    alternates: {
      canonical,
      languages: {
        [locale]: canonical,
        [other]: `${site.url}/${other}${path}`,
      },
    },
    openGraph: { title: title[locale], description: description[locale], url: canonical },
  };
}

