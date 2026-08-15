import Link from "next/link";

export default function NotFound() {
  return <main className="not-found"><p className="eyebrow eyebrow--gold">404</p><h1>This page could not be found.</h1><p>The link may have moved while Zane Foundation is being built.</p><Link className="button button--gold" href="/en">Return home</Link></main>;
}

