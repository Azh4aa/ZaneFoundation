"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/site";

export function LanguageSwitch({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const target = locale === "en" ? "ku" : "en";
  const targetPath = pathname.replace(/^\/(en|ku)(?=\/|$)/, `/${target}`);
  const english = target === "en";
  return (
    <Link className="language-switch" href={targetPath || `/${target}`} lang={english ? "en" : "ckb"}
      hrefLang={english ? "en" : "ckb"} dir={english ? "ltr" : "rtl"} aria-label={english ? "Read in English" : "بە کوردی بخوێننەوە"}>
      {english ? "English" : "کوردی"}
    </Link>
  );
}
