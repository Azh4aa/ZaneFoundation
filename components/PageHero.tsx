import type { ReactNode } from "react";

export function PageHero({ title, intro }: { title: ReactNode; intro?: ReactNode }) {
  return (
    <header className="page-hero shell">
      <h1>{title}</h1>
      {intro && <div className="page-hero__intro">{intro}</div>}
    </header>
  );
}
