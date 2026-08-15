"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/site";

export function LanguageSwitch({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const target = locale === "en" ? "ku" : "en";
  const targetPath = pathname.replace(/^\/(en|ku)(?=\/|$)/, `/${target}`);

  return (
    <div className="language-switch" aria-label={locale === "en" ? "Choose language" : "زمان هەڵبژێرە"}>
      {locale === "en" ? <span aria-current="page">EN</span> : <Link href={targetPath || "/en"} lang="en" dir="ltr">EN</Link>}
      <i aria-hidden="true" />
      {locale === "ku" ? <span aria-current="page">کوردی</span> : <Link href={targetPath || "/ku"} lang="ku" dir="rtl">کوردی</Link>}
    </div>
  );
}
