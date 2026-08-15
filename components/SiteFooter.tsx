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
          <p>{isKu ? "بۆ ماف، دەرفەت و بەشداریی تەواوی کەسانی خاوەن سندرۆمی داون و کەمتواناییی هزری." : "For the rights, opportunity and full participation of people with Down syndrome and intellectual disabilities."}</p>
          <p className="footer-location">{tx(site.location, locale)}</p>
        </div>
        <div>
          <p className="footer-label">{isKu ? "زەنێ" : "Zane"}</p>
          <nav className="footer-links" aria-label={isKu ? "ڕێنیشاندەری خوارەوە" : "Footer navigation"}>
            {navItems.slice(0, 2).map((item) => <Link key={item.href} href={`/${locale}${item.href}`}>{tx(item.label, locale)}</Link>)}
            <Link href={`/${locale}/impact`}>{isKu ? "چوارچێوەی کاریگەری" : "Impact framework"}</Link>
            <Link href={`/${locale}/stories`}>{isKu ? "تێڕوانین و هەواڵ" : "Ideas & news"}</Link>
            <Link href={`/${locale}/resources`}>{isKu ? "سەرچاوەی خێزان" : "Family resources"}</Link>
          </nav>
        </div>
        <div>
          <p className="footer-label">{isKu ? "بەشداربە" : "Take part"}</p>
          <nav className="footer-links">
            <Link href={`/${locale}/get-involved#volunteer`}>{isKu ? "خۆبەخش بە" : "Volunteer"}</Link>
            <Link href={`/${locale}/careers`}>{isKu ? "هەلی کار" : "Careers"}</Link>
            <Link href={`/${locale}/partner`}>{isKu ? "هاوبەشی دامەزراوەیی" : "Institutional partnership"}</Link>
            <Link href={`/${locale}/contact`}>{isKu ? "پەیوەندی" : "Contact"}</Link>
          </nav>
        </div>
        <div>
          <p className="footer-label">{isKu ? "متمانە و زانیاری" : "Trust & information"}</p>
          <nav className="footer-links">
            <Link href={`/${locale}/transparency`}>{isKu ? "ڕوونکردنەوە" : "Transparency"}</Link>
            <Link href={`/${locale}/policies/safeguarding`}>{isKu ? "پاراستن" : "Safeguarding"}</Link>
            <Link href={`/${locale}/policies/complaints`}>{isKu ? "سکاڵا و فیدباک" : "Complaints & feedback"}</Link>
            <Link href={`/${locale}/policies/privacy`}>{isKu ? "پاراستنی زانیاری" : "Privacy"}</Link>
            <Link href={`/${locale}/policies/accessibility`}>{isKu ? "دەستگەیشتن" : "Accessibility"}</Link>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </nav>
        </div>
      </div>
      <div className="shell footer-bottom">
        <p>© {new Date().getFullYear()} Zane Foundation</p>
        <p>{isKu ? `${site.registrationNumber} · ڕێکخراوێکی سەربەخۆ و قازانجنەویست` : `${site.registrationNumber} · Independent and not-for-profit`}</p>
      </div>
    </footer>
  );
}
