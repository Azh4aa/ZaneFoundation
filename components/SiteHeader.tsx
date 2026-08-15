import Link from "next/link";
import { LanguageSwitch } from "@/components/LanguageSwitch";
import { Logo } from "@/components/Logo";
import { navItems, tx, type Locale } from "@/lib/site";

export function SiteHeader({ locale }: { locale: Locale }) {
  return (
    <header className="site-header">
      <div className="site-header__inner shell">
        <Logo locale={locale} />
        <nav className="desktop-nav" aria-label={locale === "en" ? "Primary navigation" : "ڕێنیشاندەری سەرەکی"}>
          {navItems.map((item) => (
            <Link key={item.href} href={`/${locale}${item.href}`}>{tx(item.label, locale)}</Link>
          ))}
        </nav>
        <div className="header-actions">
          <LanguageSwitch locale={locale} />
          <Link className="button button--small button--dark" href={`/${locale}/partner`}>
            {locale === "en" ? "Partner with us" : "ببە بە هاوبەش"}
          </Link>
          <details className="mobile-menu">
            <summary aria-label={locale === "en" ? "Open menu" : "کردنەوەی لیست"}><span /><span /></summary>
            <div className="mobile-menu__panel">
              <nav aria-label={locale === "en" ? "Mobile navigation" : "ڕێنیشاندەری مۆبایل"}>
                {navItems.map((item) => (
                  <Link key={item.href} href={`/${locale}${item.href}`}>{tx(item.label, locale)}</Link>
                ))}
                <Link href={`/${locale}/resources`}>{locale === "en" ? "Family resources" : "سەرچاوەی خێزان"}</Link>
                <Link href={`/${locale}/contact`}>{locale === "en" ? "Contact" : "پەیوەندی"}</Link>
              </nav>
              <LanguageSwitch locale={locale} />
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}

