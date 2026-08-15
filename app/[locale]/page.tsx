import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import storiesJson from "@/content/stories.json";
import { SectionHeading } from "@/components/SectionHeading";
import { StoryCard, type Story } from "@/components/StoryCard";
import { isLocale, programData, proposedTargets, site, tx } from "@/lib/site";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale;
  const isKu = locale === "ku";
  const stories = (storiesJson as Story[]).slice(0, 3);

  const principles = [
    [isKu ? "ماف" : "Rights", isKu ? "هەر تاکێک مافی بەشداریی تەواوی هەیە." : "Every person has the right to participate fully."],
    [isKu ? "کوالێتی" : "Quality", isKu ? "خزمەتگوزاری دەبێت پسپۆڕانە و پێوانەکراو بێت." : "Support must be qualified, safe and measurable."],
    [isKu ? "لێپرسراوێتی" : "Accountability", isKu ? "بەڵێن و ئەنجام بە ڕوونی لێک جیادەکەینەوە." : "We separate public ambition from verified results."],
  ];

  return (
    <>
      <section className="manifesto-hero">
        <div className="manifesto-hero__grain" aria-hidden="true" />
        <div className="shell manifesto-hero__grid">
          <div className="manifesto-hero__copy">
            <p className="hero-kicker"><span />{isKu ? "فاوندەیشنی زەنێ · کوردستان" : "Zane Foundation · Kurdistan"}</p>
            <h1>{isKu ? <>ژیانێکی پڕبەها،<br /><em>مافێکی هەمووانە.</em></> : <>A full life is<br /><em>everyone’s right.</em></>}</h1>
            <p className="manifesto-hero__intro">
              {isKu
                ? "کار دەکەین بۆ ئەوەی کەسانی خاوەن سندرۆمی داون و کەمتواناییی هزری لە خوێندن، تەندروستی، کار و ژیانی کۆمەڵایەتیدا بەشداریی تەواویان هەبێت."
                : "We are building the specialist support, public understanding and institutional partnerships people with Down syndrome and intellectual disabilities need to participate fully in society."}
            </p>
            <div className="hero-actions">
              <Link className="button button--gold button--arrow" href={`/${locale}/programs`}>{isKu ? "پرۆگرامەکان" : "Explore the programs"}<span>↗</span></Link>
              <Link className="button button--ghost-light" href={`/${locale}/get-involved`}>{isKu ? "بەشداربە" : "Get involved"}</Link>
            </div>
            <div className="hero-registration">
              <span>{site.registrationNumber}</span>
              <p>{tx(site.registrationStatus, locale)}<br />{tx(site.location, locale)}</p>
            </div>
          </div>

          <div className="manifesto-hero__symbol" aria-label={isKu ? "نیشانی فاوندەیشنی زەنێ" : "Zane Foundation mark"}>
            <div className="symbol-orbit symbol-orbit--outer"><span>{isKu ? "ماف" : "RIGHTS"}</span><span>{isKu ? "دەرفەت" : "OPPORTUNITY"}</span></div>
            <div className="symbol-orbit symbol-orbit--inner" />
            <div className="symbol-core"><Image src="/brand/zane-mark.png" alt="" width={420} height={500} priority /></div>
            <p>{isKu ? "شکۆ · بەشداری · داهاتوو" : "DIGNITY · PARTICIPATION · FUTURE"}</p>
          </div>
        </div>
        <div className="manifesto-marquee" aria-hidden="true">
          <div>{isKu ? "توانا ببینە · گشتگیری بنیاد بنێ · داهاتوو دروست بکە ·" : "SEE POTENTIAL · BUILD INCLUSION · CREATE FUTURES ·"}</div>
        </div>
      </section>

      <section className="institution-intro section-pad">
        <div className="shell institution-intro__grid">
          <div>
            <p className="eyebrow">{isKu ? "بۆچی زەنێ" : "Why Zane"}</p>
            <h2>{isKu ? "بۆشاییەکە گەورەیە. وەڵامەکە دەبێت پسپۆڕانە بێت." : "The gap is serious. The response must be specialist."}</h2>
          </div>
          <div className="institution-intro__body">
            <p>{isKu ? "خێزانەکان لە کوردستان ڕووبەڕووی تێچووی بەرز، زانیاریی پەرش، قوتابخانەی نائامادە و تێڕوانینی هەڵەی کۆمەڵگا دەبنەوە. زەنێ بۆ وەڵامدانەوە بەو بۆشاییانە دادەمەزرێت." : "Families across Kurdistan face high costs, fragmented information, underprepared schools and persistent social stigma. Zane is being established to address those gaps through focused, accountable programs."}</p>
            <p>{isKu ? "ئەمە ماڵپەڕی چالاکییەکی کاتی نییە؛ ناسنامەی دامەزراوەیەکە کە بەڕێوەبردن، پاراستن، داتا و هاوبەشی لە بناغەوە تێیدا دادەنرێت." : "This is not a campaign assembled around a moment. It is an institution being built with governance, safeguarding, data and partnership designed in from the beginning."}</p>
            <Link className="text-link" href={`/${locale}/about`}>{isKu ? "ناسنامە و بەڕێوەبردن" : "Read our institutional profile"}<span>↗</span></Link>
          </div>
          <div className="institution-stamp" aria-label={tx(site.registrationStatus, locale)}>
            <Image src="/brand/zane-mark.png" alt="" width={100} height={120} />
            <strong>{isKu ? "لە قۆناغی تۆمارکردندان" : "IN FORMATION"}</strong>
            <span>SULAYMANIYAH · 2026</span>
          </div>
        </div>
        <div className="shell principle-rail">
          {principles.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}
        </div>
      </section>

      <section className="programs-showcase section-pad">
        <div className="shell">
          <SectionHeading inverse eyebrow={isKu ? "چوار بەرنامەی سەرەکی" : "Four program platforms"} title={isKu ? "لە پشتگیریی زووەوە تا گۆڕینی کۆمەڵگا." : <>From early support<br />to public change.</>} text={isKu ? "هەر بەرنامەیەک وەڵامی بۆشاییەکی دیاریکراوە و بە قۆناغ جێبەجێ دەکرێت." : "Each platform addresses a defined gap and moves from careful design to measured delivery."} />
          <div className="program-bento">
            {programData.map((program, index) => (
              <article className={`program-tile program-tile--${index + 1}`} key={program.id}>
                <div className="program-tile__meta"><span>{program.number}</span><p>{tx(program.stage, locale)}</p></div>
                <h3>{tx(program.title, locale)}</h3>
                <p>{tx(program.summary, locale)}</p>
                <Link href={`/${locale}/programs#${program.id}`} aria-label={`${isKu ? "زیاتر بخوێنەوە" : "Read more"}: ${tx(program.title, locale)}`}><span>{isKu ? "وردەکاری" : "View program"}</span><b>↗</b></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="participation-section section-pad">
        <div className="shell">
          <div className="section-title-row section-title-row--participation">
            <SectionHeading eyebrow={isKu ? "بەشداربە" : "Take part"} title={isKu ? "دامەزراوەی بەهێز بە خەڵکی بەهێز دروست دەبێت." : "Serious institutions are built by people who step forward."} />
            <p>{isKu ? "زانیاریی خۆت تۆمار بکە؛ تیمەکەمان دوای پێداچوونەوە پەیوەندیت پێوە دەکات." : "Choose the path that fits your experience. Every expression of interest is reviewed by the team."}</p>
          </div>
          <div className="participation-grid">
            <Link href={`/${locale}/get-involved#volunteer`} className="participation-card participation-card--gold"><span>01</span><div><p>{isKu ? "بە کات و شارەزاییت" : "Give time and expertise"}</p><h3>{isKu ? "خۆبەخش بە" : "Volunteer"}</h3></div><b>↗</b></Link>
            <Link href={`/${locale}/careers`} className="participation-card participation-card--sage"><span>02</span><div><p>{isKu ? "لەگەڵ تیمەکە گەشە بکە" : "Build the team"}</p><h3>{isKu ? "هەلی کار" : "Careers"}</h3></div><b>↗</b></Link>
            <Link href={`/${locale}/partner`} className="participation-card participation-card--ink"><span>03</span><div><p>{isKu ? "کاریگەریی درێژخایەن دروست بکە" : "Create durable impact"}</p><h3>{isKu ? "هاوبەشی دامەزراوەیی" : "Partner with Zane"}</h3></div><b>↗</b></Link>
          </div>
        </div>
      </section>

      <section className="targets-section section-pad">
        <div className="shell targets-grid">
          <div>
            <p className="eyebrow eyebrow--gold">{isKu ? "تارگێتی پلانی ساڵی یەکەم" : "Year-one planning targets"}</p>
            <h2>{isKu ? "ئامانجەکان بڵاودەکەینەوە. ئەنجامەکان پشتڕاست دەکەینەوە." : "Publish the ambition. Verify the result."}</h2>
            <p>{isKu ? "ئەم ژمارانە تارگێتی پلانن، نەک دەستکەوتی ڕابردوو. دوای دەستپێکردنی بەرنامەکان، داتای ڕاستەقینە بە ڕوونی بڵاودەکرێتەوە." : "These are proposed targets, not past achievements. Once programs launch, verified delivery data will replace projection."}</p>
            <Link className="button button--ghost-light" href={`/${locale}/impact`}>{isKu ? "چۆنیەتی پێوانەکردن" : "How impact will be measured"}</Link>
          </div>
          <div className="target-list">
            {proposedTargets.map((target) => <div className="target-item" key={target.value}><strong>{target.value}</strong><span>{tx(target.label, locale)}</span><small>{isKu ? "تارگێت" : "TARGET"}</small></div>)}
          </div>
        </div>
      </section>

      <section className="trust-section section-pad">
        <div className="shell trust-grid">
          <div className="trust-copy">
            <p className="eyebrow">{isKu ? "ئامادە بۆ پشکنین" : "Built for due diligence"}</p>
            <h2>{isKu ? "متمانە بە دیزاین دروست دەکرێت؛ نەک بە دروشم." : "Authority comes from what an institution is willing to make clear."}</h2>
            <p>{isKu ? "هاوبەشە نێودەوڵەتییەکان پێویستیان بە بەڵگەی ڕێکخراوی هەیە. زەنێ تۆماری بەڕێوەبردن، بودجە، مەترسی، پاراستن و کاریگەری بە قۆناغ بڵاودەکاتەوە." : "International partners need evidence, not performance. Zane’s transparency register tracks governance, registration, budgets, safeguarding, risk and impact reporting as each item is completed."}</p>
            <Link className="button button--dark button--arrow" href={`/${locale}/transparency`}>{isKu ? "تۆماری بەڵگەنامە" : "Open the transparency register"}<span>↗</span></Link>
          </div>
          <div className="trust-matrix">
            {[
              [isKu ? "بەڕێوەبردن" : "Governance", isKu ? "دەستەی گشتی، بۆرد و بەڕێوەبردن" : "Assembly, board and management roles"],
              [isKu ? "دارایی" : "Finance", isKu ? "بودجە، ڕاپۆرت و وردبینی" : "Budgets, reporting and audit pathway"],
              [isKu ? "پاراستن" : "Safeguarding", isKu ? "ڕەزامەندی، سکاڵا و پاراستنی داتا" : "Consent, complaints and data protection"],
              [isKu ? "کاریگەری" : "Impact", isKu ? "دەرچوون، دەرئەنجام و فێربوون" : "Outputs, outcomes and learning"],
            ].map(([h, p], i) => <article key={h}><span>0{i + 1}</span><h3>{h}</h3><p>{p}</p><b>✓</b></article>)}
          </div>
        </div>
      </section>

      <section className="stories-home section-pad section-sand">
        <div className="shell">
          <div className="section-title-row">
            <SectionHeading eyebrow={isKu ? "هەواڵ و تێڕوانین" : "News & insight"} title={isKu ? "بڵاوکردنەوەی کار، فێربوون و پێشکەوتن." : "A public record of work, learning and progress."} />
            <Link className="text-link" href={`/${locale}/stories`}>{isKu ? "هەموو بابەتەکان" : "View all updates"}<span aria-hidden="true">↗</span></Link>
          </div>
          <div className="story-grid">{stories.map((story) => <StoryCard key={story.slug} story={story} locale={locale} />)}</div>
        </div>
      </section>

      <section className="partner-cta">
        <div className="shell partner-cta__grid">
          <div><p className="eyebrow eyebrow--gold">{isKu ? "بۆ دامەزراوە و فەندەرەکان" : "For institutions and funders"}</p><h2>{isKu ? "لەگەڵمان بناغەیەک بنیاد بنێ کە متمانەی لێ بکرێت." : "Help build an institution worth trusting."}</h2></div>
          <div><p>{isKu ? "زەنێ لە قۆناغی دامەزراندندایە و بۆ هاوبەشیی دارایی، تەکنیکی و ستراتیژیی درێژخایەن ئامادەیە." : "Zane is in formation and ready for serious conversations about long-term financial, technical and strategic partnership."}</p><div className="hero-actions"><Link className="button button--gold" href={`/${locale}/partner`}>{isKu ? "ڕێگاکانی هاوبەشی" : "Partnership pathways"}</Link><a className="button button--ghost-light" href={`mailto:${site.partnershipsEmail}`}>{site.partnershipsEmail}</a></div></div>
        </div>
      </section>
    </>
  );
}
