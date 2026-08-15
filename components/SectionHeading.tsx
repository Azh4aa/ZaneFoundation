import type { ReactNode } from "react";

export function SectionHeading({ eyebrow, title, text, inverse = false }: { eyebrow: string; title: ReactNode; text?: ReactNode; inverse?: boolean }) {
  return (
    <div className={`section-heading${inverse ? " section-heading--inverse" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text ? <div className="section-heading__text">{text}</div> : null}
    </div>
  );
}

