import Link from "next/link";
import { LanguageSwitch } from "@/components/LanguageSwitch";
import { Logo } from "@/components/Logo";
import { navItems, site, tx, type Locale } from "@/lib/site";

export function SiteHeader({ locale }: { locale: Locale }) {
  return (
    <header className="site-header">
      <div className="utility-bar">
        <div className="shell utility-bar__inner">
          <p><span className="status-dot" />{tx(site.registrationStatus, locale)}</p>
          <div><span>{tx(site.location, locale)}</span><LanguageSwitch locale={locale} /></div>
        </div>
      </div>
      <div className="site-header__inner shell">
        <Logo locale={locale} />
        <nav className="desktop-nav" aria-label={locale === "en" ? "Primary navigation" : "ڕێنیشاندەری سەرەکی"}>
          {navItems.map((item) => (
            <Link key={item.href} href={`/${locale}${item.href}`}>{tx(item.label, locale)}</Link>
          ))}
        </nav>
        <div className="header-actions">
          <Link className="button button--small button--dark" href={`/${locale}/partner`}>
            {locale === "en" ? "For partners" : "بۆ هاوبەشان"}<span aria-hidden="true">↗</span>
          </Link>
          <details className="mobile-menu">
            <summary aria-label={locale === "en" ? "Open menu" : "کردنەوەی لیست"}><span /><span /></summary>
            <div className="mobile-menu__panel">
              <nav aria-label={locale === "en" ? "Mobile navigation" : "ڕێنیشاندەری مۆبایل"}>
                {navItems.map((item) => (
                  <Link key={item.href} href={`/${locale}${item.href}`}>{tx(item.label, locale)}</Link>
                ))}
                <Link href={`/${locale}/resources`}>{locale === "en" ? "Family resources" : "سەرچاوەی خێزان"}</Link>
                <Link href={`/${locale}/impact`}>{locale === "en" ? "Impact framework" : "چوارچێوەی کاریگەری"}</Link>
                <Link href={`/${locale}/transparency`}>{locale === "en" ? "Transparency" : "ڕوونکردنەوە"}</Link>
                <Link href={`/${locale}/contact`}>{locale === "en" ? "Contact" : "پەیوەندی"}</Link>
              </nav>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
