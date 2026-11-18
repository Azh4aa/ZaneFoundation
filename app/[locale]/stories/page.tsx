import { notFound } from "next/navigation";
import stories from "@/content/stories.json";
import { PageHero } from "@/components/PageHero";
import { StoryCard } from "@/components/StoryCard";
import { makePageMetadata } from "@/lib/metadata";
import { isLocale } from "@/lib/site";

const title = { en: "Articles", ku: "وتارەکان" };
const description = { en: "Short reads for families and teachers on school, appointments and everyday conversation.", ku: "بابەتی کورت بۆ خێزان و مامۆستایان لەبارەی قوتابخانە، چاوپێکەوتن و گفتوگۆی ڕۆژانەوە." };

export function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  return makePageMetadata(params, title, description, "/stories");
}

export default async function ArticlesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return (
    <>
      <PageHero title={title[locale]} intro={<p>{description[locale]}</p>} />
      <div className="shell story-grid">{stories.map((story) => <StoryCard key={story.slug} story={story} locale={locale} />)}</div>
    </>
  );
}
