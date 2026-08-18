import Link from "next/link";
import { Logo } from "@/components/Logo";
import { site, tx, type Locale } from "@/lib/site";

export function SiteFooter({ locale }: { locale: Locale }) {
  const isKu = locale === "ku";

  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-intro">
          <Logo locale={locale} inverse />
          <p>{isKu ? "بۆ ژیانێک کە تێیدا هەموو کەسێک بتوانێت گەشە بکات، هەڵبژێرێت و بەشدار بێت." : "For a life where every person can grow, choose and take part."}</p>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </div>

        <div>
          <p className="footer-label">{isKu ? "بەشەکان" : "Explore"}</p>
          <nav className="footer-links" aria-label={isKu ? "ڕێنیشاندەری خوارەوە" : "Footer navigation"}>
            <Link href={`/${locale}/about`}>{isKu ? "دەربارە" : "About"}</Link>
            <Link href={`/${locale}/programs`}>{isKu ? "کارەکانمان" : "Our work"}</Link>
            <Link href={`/${locale}/resources`}>{isKu ? "سەرچاوە" : "Resources"}</Link>
            <Link href={`/${locale}/stories`}>{isKu ? "تێڕوانین و هەواڵ" : "Ideas & news"}</Link>
            <Link href={`/${locale}/contact`}>{isKu ? "پەیوەندی" : "Contact"}</Link>
          </nav>
        </div>

        <div>
          <p className="footer-label">{isKu ? "بەشدار بە" : "Take part"}</p>
          <nav className="footer-links">
            <Link href={`/${locale}/get-involved#volunteer`}>{isKu ? "خۆبەخشی" : "Volunteer"}</Link>
            <Link href={`/${locale}/careers`}>{isKu ? "هەلی کار" : "Careers"}</Link>
            <Link href={`/${locale}/partner`}>{isKu ? "هاوبەشی" : "Partnerships"}</Link>
            <Link href={`/${locale}/transparency`}>{isKu ? "بەڕێوەبردن و لێپرسراوێتی" : "Governance & accountability"}</Link>
          </nav>
        </div>
      </div>

      <div className="shell footer-legal">
        <p>© {new Date().getFullYear()} Zane Foundation · {tx(site.location, locale)}</p>
        <nav aria-label={isKu ? "سیاسەتەکان" : "Policies"}>
          <Link href={`/${locale}/policies/safeguarding`}>{isKu ? "پاراستن" : "Safeguarding"}</Link>
          <Link href={`/${locale}/policies/privacy`}>{isKu ? "پاراستنی زانیاری" : "Privacy"}</Link>
          <Link href={`/${locale}/policies/complaints`}>{isKu ? "سکاڵا" : "Complaints"}</Link>
          <Link href={`/${locale}/policies/accessibility`}>{isKu ? "دەستگەیشتن" : "Accessibility"}</Link>
        </nav>
      </div>
    </footer>
  );
}
