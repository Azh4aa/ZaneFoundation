"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/site";

export function LanguageSwitch({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const target = locale === "en" ? "ku" : "en";
  const targetPath = pathname.replace(/^\/(en|ku)(?=\/|$)/, `/${target}`);

  return (
    <Link className="language-switch" href={targetPath || `/${target}`} lang={target} dir={target === "ku" ? "rtl" : "ltr"}>
      {locale === "en" ? "کوردی" : "English"}
    </Link>
  );
}

