import { site } from "@/lib/site";

export function EmailLink({ className = "email-link" }: { className?: string }) {
  return <a className={className} href={`mailto:${site.email}`}><bdi dir="ltr" lang="en">{site.email}</bdi></a>;
}
