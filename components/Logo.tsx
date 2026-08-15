import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/site";

export function Logo({ locale, inverse = false }: { locale: Locale; inverse?: boolean }) {
  return (
    <Link className={`brand-lockup${inverse ? " brand-lockup--inverse" : ""}`} href={`/${locale}`} aria-label="Zane Foundation home">
      <span className="brand-lockup__mark-frame"><Image className="brand-lockup__mark" src="/brand/zane-mark-v2.png" alt="" width={76} height={80} /></span>
      <span className="brand-lockup__type">
        <span className="brand-lockup__name">ZANE</span>
        <span className="brand-lockup__foundation">FOUNDATION</span>
      </span>
    </Link>
  );
}
