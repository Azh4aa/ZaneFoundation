import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import storiesJson from "@/content/stories.json";
import { SectionHeading } from "@/components/SectionHeading";
import { StoryCard, type Story } from "@/components/StoryCard";
import { isLocale, programData, proposedTargets, site, tx, values } from "@/lib/site";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale;
  const isKu = locale === "ku";
  const stories = storiesJson as Story[];

  return (
    <>
      <section className="home-hero">
        <div className="home-hero__halo" aria-hidden="true" />
        <div className="shell home-hero__topline">
          <p>{isKu ? "سلێمانی · هەرێمی کوردستان · عێراق" : "SULAYMANIYAH · KURDISTAN REGION · IRAQ"}</p>
          <p>{isKu ? "لەسەر بنەمای ماف · بەڕێوەچوون بە بەڵگە" : "RIGHTS-LED · EVIDENCE-GUIDED"}</p>
        </div>
        <div className="shell home-hero__grid">
          <div className="home-hero__copy">
            <p className="eyebrow eyebrow--gold">{isKu ? "فاوندەیشنی زەنێ" : "Zane Foundation"}</p>
            <h1>{isKu ? "توانا دەستپێکە، نەک ئیستسنا." : <>Potential is the <em>starting point.</em></>}</h1>
            <p className="home-hero__intro">
              {isKu
                ? "کار دەکەین بۆ داهاتوویەک کە تێیدا کەسانی داون سیندرۆم و کەم توانایی ژیری بە تەواوی ببینرێن، پشتگیری بکرێن و دەرفەتی گەشەکردنیان هەبێت."
                : "We are building a future in which people with Down syndrome and intellectual disabilities are seen in full, supported with excellence and free to thrive."}
            </p>
            <div className="hero-actions">
              <Link className="button button--gold" href={`/${locale}/programs`}>{isKu ? "پرۆگرامەکان ببینە" : "Explore our programs"}</Link>
              <Link className="button button--ghost-light" href={`/${locale}/partner`}>{isKu ? "ببە بە هاوبەش" : "Build this with us"}</Link>
            </div>
          </div>
          <div className="home-hero__mark-wrap" aria-hidden="true">
            <span className="home-hero__ring home-hero__ring--one" />
            <span className="home-hero__ring home-hero__ring--two" />
            <Image src="/brand/zane-mark.png" alt="" width={500} height={520} priority />
          </div>
        </div>
        <div className="shell home-hero__foot">
          <p>{isKu ? "شکۆ زمانمانە." : "Dignity is our language."}</p>
          <p>{isKu ? "گشتگیری کردارمانە." : "Inclusion is our action."}</p>
          <span aria-hidden="true">↓</span>
        </div>
      </section>

      <section className="origin-section section-pad">
        <div className="shell origin-grid">
          <div>
            <p className="eyebrow">{isKu ? "چیرۆکێکی کەسی، وەڵامێکی گشتی" : "A personal story. A public answer."}</p>
            <blockquote>
              {isKu
                ? "ئەمە تەنها ئامانجێک نییە؛ بەڵێنێکە بە کچەکەم و هەموو منداڵانی هاوشێوەی ئەو."
                : "This is more than an ambition. It is a promise to my daughter—and to every child whose future should be larger than the barriers before them."}
            </blockquote>
            <p className="quote-credit">{isKu ? "— بێگەرد محمد، دایک، خزمەتکاری کۆمەڵگا و چالاکوان" : "— Begard Mohammed, mother, community servant and advocate"}</p>
          </div>
          <div className="origin-copy">
            <p>{isKu
              ? "زەنێ لە ئەزموونی دە ساڵەی خێزانێکەوە سەری هەڵداوە: گەڕان بەدوای چارەسەری ئاخاوتن، شەڕ بۆ فێربوونی گشتگیر و ئاواتێکی نەبڕاو بۆ کۆمەڵگایەک کە توانا پێش سنوور ببینێت."
              : "Zane grew from ten years of lived experience: the search for speech support, the struggle for inclusive learning and the unbroken hope for a community that sees ability before limitation."}</p>
            <p>{isKu
              ? "ئەو ئەزموونە ئێستا دەبێتە ڕێکخراوێکی پرۆفیشناڵ، بەرپرس و پێوانەکراو، بۆ ئەوەی هیچ خێزانێک ئەم گەشتە بە تەنها نەکات."
              : "That experience is becoming a professional, accountable and measurable organization so no family has to navigate the same journey alone."}</p>
            <Link className="text-link" href={`/${locale}/about`}>{isKu ? "چیرۆک و ئامانجمان" : "Our story and purpose"}<span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className="programs-home section-pad section-ink">
        <div className="shell">
          <SectionHeading
            inverse
            eyebrow={isKu ? "چوار وەڵامی کرداری" : "Four practical responses"}
            title={isKu ? "ئەو بۆشاییانە پڕدەکەینەوە کە خێزانەکان هەموو ڕۆژێک هەستیان پێ دەکەن." : "Closing the gaps families feel every day."}
            text={isKu ? "پرۆگرامەکانمان لە ئەزموونی خێزان و ستانداردی پسپۆڕانەوە دیزاین دەکرێن، بە دەرئەنجامی دیاریکراو و ڕاپۆرتی ڕوون." : "Our programs are designed from family experience and qualified practice, with defined outcomes and transparent reporting."}
          />
          <div className="program-list">
            {programData.map((program) => (
              <article className="program-row" key={program.id}>
                <p className="program-row__number">{program.number}</p>
                <div><p className="program-row__stage">{tx(program.stage, locale)}</p><h3>{tx(program.title, locale)}</h3></div>
                <p>{tx(program.summary, locale)}</p>
                <Link aria-label={`${isKu ? "زیاتر" : "Learn more"}: ${tx(program.title, locale)}`} href={`/${locale}/programs#${program.id}`}>↗</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="response-section section-pad">
        <div className="shell">
          <SectionHeading
            eyebrow={isKu ? "لە واقیعەوە بۆ وەڵام" : "From reality to response"}
            title={isKu ? "پێداویستییەکە قووڵە. وەڵامەکەمان کردارییە." : "The need is structural. Our response is practical."}
          />
          <div className="response-grid">
            {[
              [isKu ? "دەستگەیشتن قورس و گرانە" : "Support is hard to access and expensive", isKu ? "فەندی چارەسەری بە پێوەری ڕوون و دابینکەری شیاو." : "A therapy fund with clear criteria and qualified providers."],
              [isKu ? "زانیاری پەرش و جێی گومانە" : "Information is fragmented and uncertain", isKu ? "هێڵێکی چەندزمانی بۆ ڕێنمایی پشتڕاستکراو و ڕەوانەکردنی دروست." : "A multilingual line for verified guidance and responsible referrals."],
              [isKu ? "قوتابخانەکان ئامادە نین" : "Schools are underprepared", isKu ? "ڕاهێنانی مامۆستا و پشتگیریی کرداری ناو پۆل." : "Teacher training and practical classroom support."],
              [isKu ? "کۆمەڵگا سنوور دەبینێت" : "Society sees limitation first", isKu ? "کەمپەینێکی ماف-تەوەر بۆ نوێنەرایەتی دروست و چاوەڕوانی بەرز." : "Rights-led campaigns for accurate representation and higher expectations."],
            ].map(([challenge, response], index) => (
              <article className="response-card" key={challenge}>
                <p className="response-card__index">0{index + 1}</p><h3>{challenge}</h3><div className="response-card__rule" /><p>{response}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="targets-section section-pad">
        <div className="shell targets-grid">
          <div>
            <p className="eyebrow eyebrow--gold">{isKu ? "تارگێتی پێشنیازکراوی ساڵی یەکەم" : "Proposed year-one targets"}</p>
            <h2>{isKu ? "پێشکەوتنێک کە دەتوانرێت ببینرێت، بپێورێت و لێی فێرببین." : "Progress we can see, measure and learn from."}</h2>
            <p>{isKu ? "ئەم ژمارانە تارگێتی پلانن، نەک دەستکەوتی ڕابردوو. ئەنجامی پشتڕاستکراو دوای دەستپێکردنی خزمەتگوزارییەکان بڵاودەکەینەوە." : "These figures are planning targets—not past achievements. Verified results will be published after services begin."}</p>
            <Link className="button button--ghost-light" href={`/${locale}/impact`}>{isKu ? "چوارچێوەی کاریگەری" : "See the impact framework"}</Link>
          </div>
          <div className="target-list">
            {proposedTargets.map((target) => <div className="target-item" key={target.value}><strong>{target.value}</strong><span>{tx(target.label, locale)}</span></div>)}
          </div>
        </div>
      </section>

      <section className="values-section section-pad">
        <div className="shell">
          <SectionHeading eyebrow={isKu ? "چۆن کار دەکەین" : "How we work"} title={isKu ? "متمانە بە هەڵسوکەوت درووست دەبێت." : "Trust is built in the way we work."} />
          <div className="values-grid">
            {values.map((value, index) => <article className="value-card" key={value.title.en}><p>0{index + 1}</p><h3>{tx(value.title, locale)}</h3><span>{tx(value.text, locale)}</span></article>)}
          </div>
        </div>
      </section>

      <section className="stories-home section-pad section-sand">
        <div className="shell">
          <div className="section-title-row">
            <SectionHeading eyebrow={isKu ? "چیرۆک و فێربوون" : "Stories & learning"} title={isKu ? "کاری جدی، بە دەنگێکی مرۆیی." : "Serious work, told with a human voice."} />
            <Link className="text-link" href={`/${locale}/stories`}>{isKu ? "هەموو نووسراوەکان" : "View all notes"}<span aria-hidden="true">↗</span></Link>
          </div>
          <div className="story-grid">{stories.map((story) => <StoryCard key={story.slug} story={story} locale={locale} />)}</div>
        </div>
      </section>

      <section className="partner-cta">
        <div className="shell partner-cta__grid">
          <div><p className="eyebrow eyebrow--gold">{isKu ? "بانگهێشت بۆ هاوبەشی" : "An invitation to partnership"}</p><h2>{isKu ? "بناغەیەک درووست بکەین کە چەند نەوەیەک بەردەوام بێت." : "Build the foundation that can outlast a generation."}</h2></div>
          <div><p>{isKu ? "هاوبەشیی دارایی، تەکنیکی و دامەزراوەیی دەگەڕێین کە کوالێتی، بەرپرسیارێتی و مافی مرۆڤ بە هەمان جدییەتی ئێمە ببینن." : "We are seeking financial, technical and institutional partners who take quality, accountability and human rights as seriously as we do."}</p><div className="hero-actions"><Link className="button button--gold" href={`/${locale}/partner`}>{isKu ? "ڕێگاکانی هاوبەشی" : "Partnership pathways"}</Link><a className="button button--ghost-light" href={`mailto:${site.email}`}>{isKu ? "پەیوەندی ڕاستەوخۆ" : "Contact us directly"}</a></div></div>
        </div>
      </section>
    </>
  );
}
