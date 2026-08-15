export type Locale = "en" | "ku";

export type LocalizedText = Record<Locale, string>;

export const locales: Locale[] = ["en", "ku"];

export const site = {
  name: "Zane Foundation",
  legalName: {
    en: "Zane Organization for the Advocacy of People with Down Syndrome and Intellectual Disabilities",
    ku: "ڕێکخراوی زەنێ بۆ داکۆکیکردن لە مافی کەسانی خاوەن سندرۆمی داون و کەمتواناییی هزری",
  },
  email: "hello@zanefoundation.org",
  partnershipsEmail: "partnerships@zanefoundation.org",
  volunteerEmail: "volunteer@zanefoundation.org",
  careersEmail: "careers@zanefoundation.org",
  privacyEmail: "privacy@zanefoundation.org",
  safeguardingEmail: "safeguarding@zanefoundation.org",
  complaintsEmail: "feedback@zanefoundation.org",
  url: "https://zanefoundation.org",
  registrationNumber: "REGISTRATION PENDING",
  location: {
    en: "Sulaymaniyah, Kurdistan Region of Iraq",
    ku: "سلێمانی، هەرێمی کوردستانی عێراق",
  },
};

export const navItems: Array<{ href: string; label: LocalizedText }> = [
  { href: "/about", label: { en: "About", ku: "دەربارە" } },
  { href: "/programs", label: { en: "Our work", ku: "کارەکانمان" } },
  { href: "/resources", label: { en: "Resources", ku: "سەرچاوەکان" } },
  { href: "/get-involved", label: { en: "Get involved", ku: "بەشدار بە" } },
];

export const programData = [
  {
    id: "early-steps",
    number: "01",
    title: { en: "Early Steps", ku: "هەنگاوەکانی سەرەتا" },
    stage: { en: "Early support", ku: "پشتگیریی زوو" },
    summary: {
      en: "Expanding access to qualified speech, occupational and physical support during the years when timely help matters most.",
      ku: "یارمەتیدانی منداڵان لە ساڵانی سەرەتای ژیاندا، بۆ دەستگەیشتن بە پشتگیریی ئاخاوتن، پیشەیی و جەستەیی لە کاتی گونجاودا.",
    },
    outcome: {
      en: "Children receive timely, individualized support and families can see and understand progress.",
      ku: "منداڵەکە پشتگیریی گونجاوی خۆی وەردەگرێت و خێزانەکەش لە پێشکەوتنەکانی تێدەگات.",
    },
  },
  {
    id: "family-line",
    number: "02",
    title: { en: "Family Guidance", ku: "ڕێنماییی خێزان" },
    stage: { en: "Family guidance", ku: "ڕێنماییی خێزان" },
    summary: {
      en: "Clear, multilingual guidance that helps families understand options, find reliable information and choose practical next steps.",
      ku: "ڕێنماییی ڕوون و بە زمانێکی ئاسان، بۆ ئەوەی خێزانەکان زانیاریی دروست بدۆزنەوە و بزانن هەنگاوی داهاتوو چییە.",
    },
    outcome: {
      en: "Families feel less isolated and make informed decisions without navigating the system alone.",
      ku: "خێزانەکان هەست ناکەن بە تەنها ماونەتەوە و بە زانیاریی دروستەوە بڕیار دەدەن.",
    },
  },
  {
    id: "my-classroom",
    number: "03",
    title: { en: "My Classroom", ku: "پۆلەکەم" },
    stage: { en: "Inclusive education", ku: "پەروەردەی گشتگیر" },
    summary: {
      en: "Practical teacher training and school support designed to turn inclusion from a promise into an everyday classroom practice.",
      ku: "ڕاهێنان و پشتگیریی کرداری بۆ مامۆستا و قوتابخانە، تا هەموو منداڵێک بتوانێت لە پۆلدا فێربێت و بەشدار بێت.",
    },
    outcome: {
      en: "More schools are prepared to welcome, teach and support learners with different needs.",
      ku: "قوتابخانەکان باشتر ئامادە دەبن بۆ پێشوازی و فێرکردنی منداڵانی خاوەن پێداویستیی جیاواز.",
    },
  },
  {
    id: "more-alike",
    number: "04",
    title: { en: "More Alike Than Different", ku: "لێکچوونمان لە جیاوازیمان زیاترە" },
    stage: { en: "Public understanding", ku: "تێگەیشتنی کۆمەڵگا" },
    summary: {
      en: "A rights-led public campaign that replaces pity and stigma with accurate representation, expectation and belonging.",
      ku: "کەمپەینێک بۆ گۆڕینی تێڕوانینی کۆمەڵگا؛ لە بەزەیی و پێشداوەریی هەڵەوە بۆ ڕێزگرتن لە ماف، توانا و کەسایەتیی تاک.",
    },
    outcome: {
      en: "Public language and attitudes move from limitation toward potential, rights and full participation.",
      ku: "زمان و تێڕوانینی کۆمەڵگا دەگۆڕێت، تا کەسان بە تواناکان و مافەکانیان بناسرێن.",
    },
  },
] as const;

export const values = [
  {
    title: { en: "Dignity", ku: "شکۆ" },
    text: {
      en: "Every person deserves respect, choice and the opportunity to take part.",
      ku: "هەموو کەسێک شایەنی ڕێز، هەڵبژاردن و دەرفەتی بەشدارییە.",
    },
  },
  {
    title: { en: "Empowerment", ku: "بەهێزکردن" },
    text: {
      en: "We begin with strengths and help people build confidence, choice and independence.",
      ku: "لە تواناکانی تاک دەست پێدەکەین و یارمەتی دەدەین متمانە بە خۆ، هەڵبژاردن و سەربەخۆیی بەهێز بکرێت.",
    },
  },
  {
    title: { en: "Compassion", ku: "هاوسۆزی" },
    text: {
      en: "We listen with kindness and take time to understand each person and family.",
      ku: "بە میهرەبانی گوێ دەگرین و کات دەدەین بۆ تێگەیشتن لە هەلومەرجی هەموو تاک و خێزانێک.",
    },
  },
  {
    title: { en: "Excellence", ku: "کوالێتیی بەرز" },
    text: {
      en: "We hold our work to high standards and keep learning how to do it better.",
      ku: "کارەکانمان بە پێوەری بەرز ئەنجام دەدەین و بەردەوام فێردەبین چۆن باشتر بین.",
    },
  },
  {
    title: { en: "Inclusion", ku: "گشتگیری" },
    text: {
      en: "We work so every person has a place, a voice and a genuine chance to belong.",
      ku: "کار دەکەین بۆ ئەوەی هەموو کەسێک شوێن، دەنگ و دەرفەتی ڕاستەقینەی بەشداریی هەبێت.",
    },
  },
] as const;

export function isLocale(value: string): value is Locale {
  return value === "en" || value === "ku";
}

export function tx(text: LocalizedText, locale: Locale): string {
  return text[locale];
}
