import Link from "next/link";
import { LanguageSwitch } from "@/components/LanguageSwitch";
import { Logo } from "@/components/Logo";
import { navItems, tx, type Locale } from "@/lib/site";

export function SiteHeader({ locale }: { locale: Locale }) {
  const isKu = locale === "ku";

  return (
    <header className="site-header">
      <div className="site-header__inner shell">
        <Logo locale={locale} />
        <nav className="desktop-nav" aria-label={isKu ? "ڕێنیشاندەری سەرەکی" : "Primary navigation"}>
          {navItems.map((item) => (
            <Link key={item.href} href={`/${locale}${item.href}`}>{tx(item.label, locale)}</Link>
          ))}
        </nav>
        <div className="header-actions">
          <LanguageSwitch locale={locale} />
          <Link className="header-contact" href={`/${locale}/contact`}>
            {isKu ? "پەیوەندی" : "Contact"}<span aria-hidden="true">↗</span>
          </Link>
          <details className="mobile-menu">
            <summary aria-label={isKu ? "کردنەوەی لیست" : "Open menu"}><span /><span /></summary>
            <div className="mobile-menu__panel">
              <nav aria-label={isKu ? "ڕێنیشاندەری مۆبایل" : "Mobile navigation"}>
                {navItems.map((item) => (
                  <Link key={item.href} href={`/${locale}${item.href}`}>{tx(item.label, locale)}</Link>
                ))}
                <Link href={`/${locale}/stories`}>{isKu ? "تێڕوانین و هەواڵ" : "Ideas & news"}</Link>
                <Link href={`/${locale}/careers`}>{isKu ? "هەلی کار" : "Careers"}</Link>
                <Link href={`/${locale}/partner`}>{isKu ? "هاوبەشی" : "Partnerships"}</Link>
                <Link href={`/${locale}/transparency`}>{isKu ? "بەڕێوەبردن و لێپرسراوێتی" : "Governance & accountability"}</Link>
                <Link href={`/${locale}/contact`}>{isKu ? "پەیوەندی" : "Contact"}</Link>
              </nav>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
