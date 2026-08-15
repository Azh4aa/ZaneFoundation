import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale, programData, tx } from "@/lib/site";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale;
  const isKu = locale === "ku";

  const paths = [
    {
      label: isKu ? "بۆ خێزان" : "For families",
      title: isKu ? "زانیاری و ڕێنماییی ڕوون" : "Clear information and guidance",
      href: `/${locale}/resources`,
    },
    {
      label: isKu ? "بۆ قوتابخانە و پسپۆڕان" : "For schools & professionals",
      title: isKu ? "هاوکاری بۆ گشتگیری" : "Work together for inclusion",
      href: `/${locale}/programs`,
    },
    {
      label: isKu ? "بۆ پشتیوانان" : "For supporters",
      title: isKu ? "کات و شارەزاییت بەشدار بکە" : "Give time, expertise or support",
      href: `/${locale}/get-involved`,
    },
  ];

  return (
    <>
      <section className="clarity-hero">
        <div className="shell clarity-hero__grid">
          <div className="clarity-hero__copy">
            <p className="eyebrow">{isKu ? "داون سیندرۆم · کوردستان" : "Down syndrome · Kurdistan"}</p>
            <h1>
              {isKu ? (
                <>هەر کەسێک شایەنی <em>دەرفەتی گەشەکردنە.</em></>
              ) : (
                <>Every person deserves <em>room to grow.</em></>
              )}
            </h1>
            <p className="clarity-hero__intro">
              {isKu
                ? "زەنێ لەگەڵ کەسانی خاوەن داون سیندرۆم، خێزان، قوتابخانە و کۆمەڵگا کار دەکات؛ بۆ ئەوەی پشتگیری بە ئاسانی بگات و بەشداری ببێتە بەشێکی ئاسایی ژیان."
                : "Zane works with people with Down syndrome, their families, schools and communities—so support is easier to find and belonging becomes part of everyday life."}
            </p>
            <div className="clarity-hero__actions">
              <Link className="button button--dark" href={`/${locale}/programs`}>
                {isKu ? "کارەکانمان ببینە" : "See what we do"}<span aria-hidden="true">↗</span>
              </Link>
              <Link className="quiet-link" href={`/${locale}/resources`}>
                {isKu ? "سەرچاوەی خێزان" : "Family resources"}<span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <aside className="clarity-hero__field" aria-label={isKu ? "بەهاکانی زەنێ" : "Zane values"}>
            <Image src="/brand/zane-mark.png" alt="" width={280} height={330} priority />
            <blockquote>{isKu ? "بەشداری زیادە نییە؛ مافە." : "Belonging is not an extra. It is a right."}</blockquote>
            <p>{isKu ? "ماف · دەرفەت · بەشداری" : "RIGHTS · OPPORTUNITY · BELONGING"}</p>
          </aside>
        </div>
      </section>

      <nav className="audience-paths" aria-label={isKu ? "ڕێگای دەستپێکردن" : "Choose where to begin"}>
        <div className="shell audience-paths__grid">
          {paths.map((path, index) => (
            <Link href={path.href} key={path.href}>
              <span>0{index + 1}</span>
              <div><small>{path.label}</small><strong>{path.title}</strong></div>
              <b aria-hidden="true">↗</b>
            </Link>
          ))}
        </div>
      </nav>

      <section className="home-work section-pad">
        <div className="shell home-work__intro">
          <div>
            <p className="eyebrow">{isKu ? "کارەکانمان" : "Our work"}</p>
            <h2>{isKu ? "پشتگیری لە چوار شوێنی گرنگی ژیاندا." : "Support where life happens."}</h2>
          </div>
          <p>
            {isKu
              ? "لە یەکەم هەنگاوەکانی گەشەوە تا پۆل و کۆمەڵگا، کارەکانمان لەسەر نیاز و توانای تاک دادەمەزرێن."
              : "From early development to the classroom and the wider community, our work begins with each person’s strengths, needs and choices."}
          </p>
        </div>

        <div className="work-index">
          {programData.map((program) => (
            <Link href={`/${locale}/programs#${program.id}`} key={program.id}>
              <span>{program.number}</span>
              <h3>{tx(program.title, locale)}</h3>
              <p>{tx(program.summary, locale)}</p>
              <b aria-hidden="true">↗</b>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-belief">
        <div className="shell home-belief__grid">
          <p className="eyebrow eyebrow--gold">{isKu ? "باوەڕمان" : "What we believe"}</p>
          <blockquote>
            {isKu
              ? "ژیانێکی باش بەوە ناپێورێت کە کەسێک تا چەند لەگەڵ پێوەرێک دەگونجێت؛ بە هەڵبژاردن، پشتگیری، پەیوەندی و دەرفەتی بەشداری دروست دەبێت."
              : "A good life is not measured by how closely someone fits a standard. It is shaped by choice, support, relationships and the chance to take part."}
          </blockquote>
          <Link className="quiet-link quiet-link--light" href={`/${locale}/about`}>
            {isKu ? "دەربارەی زەنێ" : "About Zane"}<span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="home-standard section-pad">
        <div className="shell home-standard__grid">
          <div>
            <p className="eyebrow">{isKu ? "بەڵێنمان" : "Our standard"}</p>
            <h2>{isKu ? "ڕێز لە هەر بڕیارێکدا." : "Respect in every decision."}</h2>
          </div>
          <div className="standard-list">
            <p>{isKu ? "سەلامەتی و پاراستن پێش هەموو شتێک" : "Safety and safeguarding come first"}</p>
            <p>{isKu ? "زمان و نوێنەرایەتی بە ڕەزامەندی" : "Language and representation require consent"}</p>
            <p>{isKu ? "بەڵێن و ئەنجام بە ڕوونی جیادەکرێنەوە" : "Promises and verified results stay distinct"}</p>
          </div>
          <Link className="quiet-link" href={`/${locale}/transparency`}>
            {isKu ? "بەڕێوەبردن و متمانە" : "Governance and trust"}<span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="home-invitation">
        <div className="shell home-invitation__grid">
          <div>
            <p className="eyebrow eyebrow--gold">{isKu ? "بەشداربە" : "Take part"}</p>
            <h2>{isKu ? "لەو کارەدا شوێنێک بۆ تۆ هەیە." : "There is a place for you in this work."}</h2>
          </div>
          <div className="invitation-links">
            <Link href={`/${locale}/get-involved#volunteer`}>{isKu ? "خۆبەخش بە" : "Volunteer"}<span>↗</span></Link>
            <Link href={`/${locale}/careers`}>{isKu ? "هەلی کار" : "Careers"}<span>↗</span></Link>
            <Link href={`/${locale}/partner`}>{isKu ? "ببە بە هاوبەش" : "Partner with Zane"}<span>↗</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
