export type Locale = "en" | "ku";

export type LocalizedText = Record<Locale, string>;

export const locales: Locale[] = ["en", "ku"];

export const site = {
  name: "Zane Foundation",
  legalName: {
    en: "Zane Organization for the Advocacy of People with Down Syndrome and Intellectual Disabilities",
    ku: "ڕێکخراوی زەنێ بۆ بەرگری لە کەسانی داون سیندرۆم و کەم توانایی ژیری",
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
  { href: "/get-involved", label: { en: "Get involved", ku: "بەشداربە" } },
];

export const programData = [
  {
    id: "early-steps",
    number: "01",
    title: { en: "Early Steps", ku: "هەنگاوەکانی سەرەتا" },
    stage: { en: "Early support", ku: "پشتگیریی زوو" },
    summary: {
      en: "Expanding access to qualified speech, occupational and physical support during the years when timely help matters most.",
      ku: "فراوانکردنی دەستگەیشتن بە پشتگیریی پسپۆڕانەی ئاخاوتن، پیشەیی و جەستەیی لەو قۆناغەی کە یارمەتیی بەوەخت زۆرترین گرنگی هەیە.",
    },
    outcome: {
      en: "Children receive timely, individualized support and families can see and understand progress.",
      ku: "منداڵان لە کاتی گونجاودا پشتگیری تاکەکەسی وەردەگرن و خێزانەکان دەتوانن پێشکەوتن ببینن و تێی بگەن.",
    },
  },
  {
    id: "family-line",
    number: "02",
    title: { en: "Family Guidance", ku: "ڕێنماییی خێزان" },
    stage: { en: "Family guidance", ku: "ڕێنماییی خێزان" },
    summary: {
      en: "Clear, multilingual guidance that helps families understand options, find reliable information and choose practical next steps.",
      ku: "ڕێنماییی ڕوون و چەندزمانی بۆ تێگەیشتن لە هەڵبژاردەکان، دۆزینەوەی زانیاریی باوەڕپێکراو و دیاریکردنی هەنگاوی داهاتوو.",
    },
    outcome: {
      en: "Families feel less isolated and make informed decisions without navigating the system alone.",
      ku: "خێزانەکان کەمتر هەست بە دابڕان دەکەن و بە زانیارییەوە بڕیار دەدەن، بەبێ ئەوەی بە تەنها لە سیستەمەکەدا بگەڕێن.",
    },
  },
  {
    id: "my-classroom",
    number: "03",
    title: { en: "My Classroom", ku: "پۆلەکەم" },
    stage: { en: "Inclusive education", ku: "پەروەردەی گشتگیر" },
    summary: {
      en: "Practical teacher training and school support designed to turn inclusion from a promise into an everyday classroom practice.",
      ku: "ڕاهێنانی کرداری مامۆستایان و پشتگیری قوتابخانەکان بۆ ئەوەی گشتگیری لە بەڵێنێکەوە ببێتە پراکتیسی ڕۆژانەی ناو پۆل.",
    },
    outcome: {
      en: "More schools are prepared to welcome, teach and support learners with different needs.",
      ku: "قوتابخانەی زیاتر ئامادە دەبن بۆ پێشوازی، فێرکردن و پشتگیری فێرخوازانی خاوەن پێداویستی جیاواز.",
    },
  },
  {
    id: "more-alike",
    number: "04",
    title: { en: "More Alike Than Different", ku: "لێکچوونمان زیاترە لە جیاوازیمان" },
    stage: { en: "Public understanding", ku: "تێگەیشتنی کۆمەڵگا" },
    summary: {
      en: "A rights-led public campaign that replaces pity and stigma with accurate representation, expectation and belonging.",
      ku: "کەمپەینێکی گشتی لەسەر بنەمای ماف کە بەزەیی و نیشاندانی هەڵە بە نوێنەرایەتی دروست، چاوەڕوانی و سەربەخۆیی دەگۆڕێت.",
    },
    outcome: {
      en: "Public language and attitudes move from limitation toward potential, rights and full participation.",
      ku: "زمان و تێڕوانینی گشتی لە سنووردانانەوە بەرەو توانا، ماف و بەشداری تەواو دەگۆڕێت.",
    },
  },
] as const;

export const values = [
  {
    title: { en: "Dignity, individually", ku: "شکۆی تاکەکەسی" },
    text: {
      en: "We work with the whole person—not a diagnosis, a stereotype or a generic service pathway.",
      ku: "لەگەڵ مرۆڤەکە بە تەواوی کار دەکەین؛ نەک تەنها دەستنیشانکردن، وێنەی هەڵە یان ڕێڕەوێکی گشتی خزمەتگوزاری.",
    },
  },
  {
    title: { en: "Excellence as a duty", ku: "نایابی وەک ئەرک" },
    text: {
      en: "Quality, evidence and qualified practice are obligations when families place their trust in us.",
      ku: "کوالێتی، بەڵگە و پراکتیسی پسپۆڕانە ئەرکن کاتێک خێزانەکان متمانەمان پێ دەکەن.",
    },
  },
  {
    title: { en: "Partnership from the ground up", ku: "هاوبەشی لە بناغەوە" },
    text: {
      en: "Families, people with disabilities, schools, providers and public institutions shape the response together.",
      ku: "خێزان، کەسانی خاوەن کەمئەندامی، قوتابخانە، دابینکەر و دامەزراوە گشتییەکان پێکەوە وەڵامەکە درووست دەکەن.",
    },
  },
  {
    title: { en: "Detailed accountability", ku: "لێپرسراوێتی ورد" },
    text: {
      en: "We distinguish ambition from evidence, publish what we can verify and report both progress and difficulty.",
      ku: "جیاوازی لەنێوان ئامانج و بەڵگەدا دەکەین، ئەوەی پشتڕاستە بڵاودەکەینەوە و پێشکەوتن و ئاستەنگ هەردووکیان ڕادەگەیەنین.",
    },
  },
] as const;

export function isLocale(value: string): value is Locale {
  return value === "en" || value === "ku";
}

export function tx(text: LocalizedText, locale: Locale): string {
  return text[locale];
}
