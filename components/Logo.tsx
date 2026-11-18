import Image from "next/image";
import Link from "next/link";
import { type Locale } from "@/lib/site";

export function Logo({ locale }: { locale: Locale }) {
  return (
    <Link
      className="brand-lockup"
      href={`/${locale}`}
      aria-label={locale === "ku" ? "ڕێکخراوی زەنێ، سەرەکی" : "Zane Organization home"}
    >
      <Image src="/brand/zane-mark-v2.png" alt="" width={40} height={42} />
      <span className="brand-lockup__type" lang="en" dir="ltr">
        <span className="brand-lockup__name">ZANE</span>
        <span className="brand-lockup__organization">ORGANIZATION</span>
      </span>
    </Link>
  );
}
