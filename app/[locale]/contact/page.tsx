import { notFound } from "next/navigation";
import { EmailLink } from "@/components/EmailLink";
import { PageHero } from "@/components/PageHero";
import { makePageMetadata } from "@/lib/metadata";
import { isLocale, site } from "@/lib/site";

const title = { en: "Contact Zane", ku: "پەیوەندی بە زەنێ" };
const description = { en: "Email Zane Organization in Sulaymaniyah or follow its official social profiles.", ku: "ئیمەیڵ و هەژمارە فەرمییەکانی ڕێکخراوی زەنێ لە سلێمانی." };

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return makePageMetadata(params, title, description, "/contact");
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const isKu = locale === "ku";
  return (
    <>
      <PageHero title={title[locale]} />
      <div className="shell topic-list">
        <section id="institutional-inquiries">
          <h2>{isKu ? "ئیمەیڵ" : "Email"}</h2>
          <div>
            <p>{isKu ? "بۆ پرسیار، پێشنیاری هاوکاری یان داواکردنی بەڵگەنامەکانی ڕێکخراوەکە، بۆمان بنووسن." : "Write to us with questions, a partnership proposal or a request for registration documents."}</p>
            <EmailLink />
          </div>
        </section>
        <section>
          <h2>{isKu ? "هەواڵەکانی زەنێ" : "Follow Zane"}</h2>
          <div className="social-directory">
            {Object.entries(site.social).map(([network, href]) => <a className="text-link" key={network} href={href}><bdi lang="en">{network}</bdi><span aria-hidden="true">↗</span></a>)}
          </div>
        </section>
      </div>
    </>
  );
}
