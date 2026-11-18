import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found shell">
      <h1>This page could not be found.</h1>
      <p lang="ckb" dir="rtl">ئەم پەڕەیە نەدۆزرایەوە.</p>
      <div className="actions">
        <Link className="button" href="/en">Zane Organization</Link>
        <Link className="text-link" href="/ku" lang="ckb" dir="rtl">ڕێکخراوی زەنێ</Link>
      </div>
    </div>
  );
}
