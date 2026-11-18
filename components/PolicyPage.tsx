import { EmailLink } from "@/components/EmailLink";
import { PageHero } from "@/components/PageHero";
import type { Locale, LocalizedText } from "@/lib/site";

export function PolicyPage({ locale, title, intro, body }: {
  locale: Locale;
  title: LocalizedText;
  intro: LocalizedText;
  body: LocalizedText[];
}) {
  return (
    <>
      <PageHero title={title[locale]} intro={<p>{intro[locale]}</p>} />
      <div className="shell policy-copy">
        {body.map((paragraph) => <p key={paragraph.en}>{paragraph[locale]}</p>)}
        <EmailLink />
      </div>
    </>
  );
}
