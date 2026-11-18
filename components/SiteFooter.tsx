import Link from "next/link";
import { EmailLink } from "@/components/EmailLink";
import { Logo } from "@/components/Logo";
import { site, type Locale } from "@/lib/site";

export function SiteFooter({ locale }: { locale: Locale }) {
  const isKu = locale === "ku";
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="site-footer__main">
          <div className="footer-identity">
            <Logo locale={locale} />
            <EmailLink />
          </div>
          <nav aria-label={isKu ? "پەڕەکانی زەنێ" : "Organization"}>
            <Link href={`/${locale}/partner`}>{isKu ? "هاوکاری لەگەڵ زەنێ" : "Partnerships"}</Link>
            <Link href={`/${locale}/transparency`}>{isKu ? "زانیاریی تۆمارکردن" : "Registration"}</Link>
            <Link href={`/${locale}/stories`}>{isKu ? "وتارەکان" : "Articles"}</Link>
            <Link href={`/${locale}/contact`}>{isKu ? "پەیوەندی" : "Contact"}</Link>
          </nav>
          <nav className="social-links" aria-label={isKu ? "تۆڕە کۆمەڵایەتییەکان" : "Social media"}>
            {Object.entries(site.social).map(([network, href]) => (
              <a key={network} href={href}><span lang="en" dir="ltr">{network}</span><span aria-hidden="true">↗</span></a>
            ))}
          </nav>
        </div>
        <div className="site-footer__bottom">
          <p>© <bdi>{new Date().getFullYear()}</bdi> {site.localName[locale]}</p>
          <nav aria-label={isKu ? "مافی بەکارهێنەران" : "Website policies"}>
            <Link href={`/${locale}/policies/privacy`}>{isKu ? "پاراستنی زانیاریی کەسی" : "Privacy"}</Link>
            <Link href={`/${locale}/policies/safeguarding`}>{isKu ? "سەلامەتیی تاکەکان" : "Safeguarding"}</Link>
            <Link href={`/${locale}/policies/complaints`}>{isKu ? "سکاڵا و پێشنیار" : "Complaints and feedback"}</Link>
            <Link href={`/${locale}/policies/accessibility`}>{isKu ? "ئاسانکارییەکانی ماڵپەڕ" : "Accessibility"}</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
