import Link from "next/link";
import { LanguageSwitch } from "@/components/LanguageSwitch";
import { Logo } from "@/components/Logo";
import { MobileNavigation } from "@/components/MobileNavigation";
import { navItems, type Locale } from "@/lib/site";

export function SiteHeader({ locale }: { locale: Locale }) {
  const isKu = locale === "ku";
  return (
    <header className="site-header">
      <div className="site-header__inner shell">
        <Logo locale={locale} />
        <nav className="desktop-nav" aria-label={isKu ? "پێڕستی سەرەکی" : "Main menu"}>
          {navItems.map((item) => (
            <Link key={item.href} href={`/${locale}${item.href}`}>{item.label[locale]}</Link>
          ))}
        </nav>
        <div className="header-actions">
          <LanguageSwitch locale={locale} />
          <Link className="header-partner" href={`/${locale}/partner`}>{isKu ? "هاوکاری لەگەڵ زەنێ" : "Partnerships"}<span className="arrow" aria-hidden="true">→</span></Link>
          <MobileNavigation locale={locale} />
        </div>
      </div>
    </header>
  );
}
