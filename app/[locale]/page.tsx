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
      label: isKu ? "بۆ خێزانەکان" : "For families",
      title: isKu ? "زانیاریی ڕوون و ڕێنماییی کرداری" : "Clear information and guidance",
      href: `/${locale}/resources`,
    },
    {
      label: isKu ? "بۆ قوتابخانە و پسپۆڕان" : "For schools & professionals",
      title: isKu ? "پێکەوە کار بکەین بۆ گشتگیری" : "Work together for inclusion",
      href: `/${locale}/programs`,
    },
    {
      label: isKu ? "بۆ پشتیوانان" : "For supporters",
      title: isKu ? "کات، شارەزایی یان پشتگیریت بەشدار بکە" : "Give time, expertise or support",
      href: `/${locale}/get-involved`,
    },
  ];

  return (
    <>
      <section className="clarity-hero">
        <div className="shell clarity-hero__grid">
          <div className="clarity-hero__copy">
            <p className="eyebrow">{isKu ? "توانا · شکۆ · دەرفەت" : "Potential · Dignity · Possibility"}</p>
            <h1>
              {isKu ? (
                <>هەموو کەسێک شایەنی <em>دەرفەتی گەشە کردنە.</em></>
              ) : (
                <>Everyone deserves <em>the opportunity to grow.</em></>
              )}
            </h1>
            <p className="clarity-hero__intro">
              {isKu
                ? "فاوندەیشنی زەنێ کار دەکات بۆ ئەوەی کەسانی خاوەن سندرۆمی داون پشتگیری بکرێن، بەشدار بن و بڕیار لەسەر ژیانی خۆیان بدەن؛ لە ماڵەوە تا قوتابخانە و کار و کۆمەڵگا."
                : "Zane Foundation works so people with Down syndrome are supported, included and able to shape their own lives—at home, at school, at work and in the community."}
            </p>
            <div className="clarity-hero__actions">
              <Link className="button button--dark" href={`/${locale}/programs`}>
                {isKu ? "بزانە چۆن کار دەکەین" : "See what we do"}<span aria-hidden="true">↗</span>
              </Link>
              <Link className="quiet-link" href={`/${locale}/resources`}>
                {isKu ? "سەرچاوەی خێزان" : "Family resources"}<span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <aside className="clarity-hero__field" aria-label={isKu ? "بەهاکانی زەنێ" : "Zane values"}>
            <Image src="/brand/zane-mark-v2.png" alt="" width={360} height={380} priority />
            <blockquote>{isKu ? "گشتگیری خەڵات نییە؛ مافە." : "Inclusion is not a gift. It is a right."}</blockquote>
            <p>{isKu ? "لە عێراق ڕەگمان داکوتاوە · بەڕووی هەموو دەرفەتێکدا کراوەین" : "ROOTED IN IRAQ · OPEN TO EVERY POSSIBILITY"}</p>
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
            <h2>{isKu ? "پشتگیری لەو شوێنانەی ژیان تێیاندا بەڕێوەدەچێت." : "Support where life happens."}</h2>
          </div>
          <p>
            {isKu
              ? "لە یەکەم ساڵەکانی گەشەکردنەوە تا قوتابخانە و کۆمەڵگا، لە توانا، پێداویستی و هەڵبژاردنی هەموو کەسێک دەست پێدەکەین."
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
              ? "ژیانێکی باش بەوە ناپێورێت کە کەسێک چەند لە پێوەرە باوەکان دەچێت؛ بە هەڵبژاردن، پشتگیری، پەیوەندی و دەرفەتی بەشداری پێکدێت."
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
            <h2>{isKu ? "ڕێز لە هەموو بڕیارێکدا." : "Respect in every decision."}</h2>
          </div>
          <div className="standard-list">
            <p>{isKu ? "سەلامەتی و پاراستن هەمیشە لە پێشەوەن" : "Safety and safeguarding come first"}</p>
            <p>{isKu ? "چیرۆک و وێنە تەنها بە ڕەزامەندی بڵاودەکرێنەوە" : "Stories and images are shared only with consent"}</p>
            <p>{isKu ? "تەنها ئەنجامی پشتڕاستکراو بڵاودەکەینەوە" : "We publish only what can be verified"}</p>
          </div>
          <Link className="quiet-link" href={`/${locale}/transparency`}>
            {isKu ? "بەڕێوەبردن و متمانە" : "Governance and trust"}<span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="home-invitation">
        <div className="shell home-invitation__grid">
          <div>
            <p className="eyebrow eyebrow--gold">{isKu ? "بەشدار بە" : "Take part"}</p>
            <h2>{isKu ? "تۆش دەتوانیت بەشێک بیت لەم کارە." : "There is a place for you in this work."}</h2>
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
