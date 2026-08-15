import Link from "next/link";
import { Logo } from "@/components/Logo";
import { navItems, site, tx, type Locale } from "@/lib/site";

export function SiteFooter({ locale }: { locale: Locale }) {
  const isKu = locale === "ku";
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-intro">
          <Logo locale={locale} inverse />
          <p>{isKu ? "شکۆ زمانمانە. گشتگیری کردارمانە." : "Dignity is our language. Inclusion is our action."}</p>
          <p className="footer-location">{tx(site.location, locale)}</p>
        </div>
        <div>
          <p className="footer-label">{isKu ? "بگەڕێ" : "Explore"}</p>
          <nav className="footer-links" aria-label={isKu ? "ڕێنیشاندەری خوارەوە" : "Footer navigation"}>
            {navItems.slice(0, 4).map((item) => <Link key={item.href} href={`/${locale}${item.href}`}>{tx(item.label, locale)}</Link>)}
            <Link href={`/${locale}/resources`}>{isKu ? "سەرچاوەی خێزان" : "Family resources"}</Link>
          </nav>
        </div>
        <div>
          <p className="footer-label">{isKu ? "متمانە و هاوبەشی" : "Trust & partnership"}</p>
          <nav className="footer-links">
            <Link href={`/${locale}/transparency`}>{isKu ? "ڕوونکردنەوە" : "Transparency"}</Link>
            <Link href={`/${locale}/partner`}>{isKu ? "ببە بە هاوبەش" : "Partner with us"}</Link>
            <Link href={`/${locale}/contact`}>{isKu ? "پەیوەندی" : "Contact"}</Link>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </nav>
        </div>
      </div>
      <div className="shell footer-bottom">
        <p>© {new Date().getFullYear()} Zane Foundation</p>
        <p>{isKu ? "ڕێکخراوێکی مەدەنی، سەربەخۆ، ناحیزبی و نائایینی" : "Independent · non-partisan · non-religious · not-for-profit"}</p>
      </div>
    </footer>
  );
}

