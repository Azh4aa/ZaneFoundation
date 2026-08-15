import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, intro, aside }: { eyebrow: string; title: ReactNode; intro: ReactNode; aside?: ReactNode }) {
  return (
    <section className="page-hero">
      <div className="shell page-hero__grid">
        <div>
          <p className="eyebrow eyebrow--gold">{eyebrow}</p>
          <h1>{title}</h1>
        </div>
        <div className="page-hero__intro">
          <div>{intro}</div>
          {aside ? <div className="page-hero__aside">{aside}</div> : null}
        </div>
      </div>
    </section>
  );
}

