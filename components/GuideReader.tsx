import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import stories from "@/content/stories.json";
import type { Locale } from "@/lib/site";

const covers = [
  { slug: "early-support-begins-with-listening", image: "family-painting" },
  { slug: "what-inclusion-looks-like-every-day", image: "classroom-painting" },
  { slug: "language-can-open-or-close-doors", image: "table-conversation" },
];

export function GuideReader({ locale }: { locale: Locale }) {
  const isKu = locale === "ku";
  return (
    <section className="guides shell" aria-labelledby="guides-heading">
      <fieldset className="guide-reader">
        <legend className="visually-hidden">{isKu ? "بابەتێک هەڵبژێرن" : "Choose an article topic"}</legend>
        <h2 id="guides-heading">{isKu ? "بۆ خێزان و مامۆستایان" : "For families and teachers"}</h2>
        {covers.map(({ slug, image }, index) => {
          const article = stories.find((story) => story.slug === slug);
          if (!article) return null;
          const id = `guide-${image}`;
          return (
            <Fragment key={slug}>
              <input className="guide-radio visually-hidden" id={id} type="radio" name="featured-article"
                aria-controls={`${id}-article`} defaultChecked={index === 0} />
              <label className="guide-choice" htmlFor={id}>{article.kind[locale]}</label>
              <article className="guide-panel" id={`${id}-article`} aria-labelledby={`${id}-title`}>
                <div className="guide-panel__frame" aria-hidden="true">
                  <div className="guide-panel__picture">
                    <Image src={`/images/${image}.webp`} alt="" fill sizes="(max-width: 720px) 92vw, (max-width: 1450px) 50vw, 640px" />
                  </div>
                </div>
                <div className="guide-panel__text">
                  <h3 id={`${id}-title`}>{article.title[locale]}</h3>
                  <p>{article.excerpt[locale]}</p>
                  <Link className="text-link" href={`/${locale}/stories/${slug}`}>{isKu ? "خوێندنەوەی وتار" : "Read article"}<span className="arrow" aria-hidden="true">→</span></Link>
                </div>
              </article>
            </Fragment>
          );
        })}
      </fieldset>
    </section>
  );
}
