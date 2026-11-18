export type Locale = "en" | "ku";
export type LocalizedText = Record<Locale, string>;

export const locales: Locale[] = ["en", "ku"];

export const site = {
  name: "Zane Organization",
  localName: { en: "Zane Organization", ku: "ڕێکخراوی زەنێ" },
  description: {
    en: "Based in Sulaymaniyah, Zane advocates for the right of people with Down syndrome and intellectual disabilities to study, work and make decisions about their own lives.",
    ku: "زەنێ ڕێکخراوێکە لە سلێمانی. داکۆکی لە مافی کەسانی خاوەن سندرۆمی داون و کەمتواناییی هزری دەکات بۆ خوێندن، کارکردن و بڕیاردان لەسەر ژیانی خۆیان.",
  },
  email: "info@zanefoundation.org",
  url: process.env.SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000"),
  location: { en: "Sulaymaniyah, Kurdistan Region of Iraq", ku: "سلێمانی، هەرێمی کوردستان، عێراق" },
  registration: {
    authority: {
      en: "Kurdistan Regional Government, Directorate of NGOs",
      ku: "حکومەتی هەرێمی کوردستان، فەرمانگەی ڕێکخراوە ناحکومییەکان",
    },
    url: { en: "https://gov.krd/dngo-en/", ku: "https://gov.krd/dngo/" },
    date: { en: "16 September 2026", ku: "١٦ی ئەیلوولی ٢٠٢٦" },
    dateTime: "2026-09-16",
  },
  social: {
    LinkedIn: "https://www.linkedin.com/company/zane-organization/",
    Facebook: "https://www.facebook.com/profile.php?id=61595047065509&sk=followers",
    Instagram: "https://www.instagram.com/zaneorg.krd/",
  },
};

export const navItems = [
  { href: "/about", label: { en: "About Zane", ku: "دەربارەی زەنێ" } },
  { href: "/programs", label: { en: "Our focus", ku: "خوێندن و کار" } },
  { href: "/resources", label: { en: "Family resources", ku: "بۆ خێزانەکان" } },
] as const;

export const inclusionTopics = [
  {
    id: "my-classroom",
    title: { en: "At school", ku: "لە قوتابخانە" },
    summary: {
      en: "A pupil can be in the room and still miss the lesson. A teacher might use a picture to explain a task or give the pupil more time to answer.",
      ku: "هەندێک جار قوتابی لە پۆلدایە، بەڵام وانەکەی بۆ ڕوون نییە. مامۆستا دەتوانێت بە وێنە مەبەستەکەی بگەیەنێت یان کاتی زیاتری پێ بدات بۆ وەڵامدانەوە.",
    },
    detail: {
      en: "For group work, give each pupil a part. Ask the pupil which part they want to try, then check that they can use the materials the group has been given.",
      ku: "کاتێک قوتابییەکان بە گرووپ کار دەکەن، با هەر یەکەیان ئەرکێکی هەبێت. لە قوتابییەکە بپرسن حەز دەکات چی بکات و پێویستی بە چییە بۆ ئەو کارە.",
    },
  },
  {
    id: "early-steps",
    title: { en: "The early years", ku: "ساڵانی یەکەمی منداڵی" },
    summary: {
      en: "A child might ask for a favourite toy with a word, a look or a gesture. Knowing how they ask helps the adults around them understand what they want.",
      ku: "منداڵێک بۆ داواکردنی یارییەکی دڵخواز لەوانەیە وشەیەک بڵێت یان بە دەست ئاماژە بکات. کە گەورەکان ئەو ئاماژانە بناسن، ئاسانتر لە مەبەستی منداڵەکە تێدەگەن.",
    },
    detail: {
      en: "At an appointment, describe something your child likes doing at home. A familiar game or routine gives you and the specialist a starting point for talking about support.",
      ku: "لە چاوپێکەوتن لەگەڵ پسپۆڕدا، باسی شتێک بکەن کە منداڵەکەتان لە ماڵەوە بە خۆشییەوە دەیکات. یارییەکی ئاشنا دەتوانێت ببێتە سەرەتای گفتوگۆ لەسەر ئەو یارمەتییەی پێویستیەتی.",
    },
  },
  {
    id: "family-line",
    title: { en: "Questions families ask", ku: "پرسیارەکانی خێزان" },
    summary: {
      en: "After a meeting, a family should know whom to call, what to try at home and when to meet again. It is reasonable to ask for that in writing.",
      ku: "باشە خێزان لە کۆتایی چاوپێکەوتنەکەدا بزانێت لە ماڵەوە چی تاقی بکاتەوە، پرسیاری هەبوو پەیوەندی بە کێوە بکات و کەی دووبارە یەکتر دەبیننەوە.",
    },
    detail: {
      en: "Ask for unfamiliar words to be explained in the language you use at home. If a decision concerns your child, give them time to say or show what they think.",
      ku: "ئەگەر وشەیەکتان بۆ ڕوون نەبوو، داوا بکەن بەو زمانە بۆتانی ڕوون بکەنەوە کە لە ماڵەوە قسەی پێ دەکەن. لە بڕیارێکدا کە پەیوەندی بە منداڵەکەتانەوە هەیە، کاتی پێ بدەن بۆ ئەوەی ڕای خۆی بڵێت یان بە ئاماژە بیگەیەنێت.",
    },
  },
  {
    id: "more-alike",
    title: { en: "At work", ku: "لە شوێنی کار" },
    summary: {
      en: "A job description should tell applicants what they will actually do. A chance to demonstrate a task can show an employer something an interview misses.",
      ku: "لە ڕاگەیاندنی هەلی کاردا با ڕوون بێت کارەکە چییە. هەندێک جار داواکار بە ئەنجامدانی خودی کارەکە باشتر دەتوانێت توانای خۆی پیشان بدات.",
    },
    detail: {
      en: "Before someone starts, explain the hours, the pay and who can answer questions on shift. Ask the worker how they prefer to learn a new task.",
      ku: "پێش دەستبەکاربوون، کاتژمێرەکانی کار و مووچەکە ڕوون بکەنەوە. لە کارمەندەکە بپرسن بە چ شێوازێک ئاسانتر فێری کارێکی نوێ دەبێت و پێی بڵێن بۆ پرسیارەکانی پەیوەندی بە کێوە بکات.",
    },
  },
];

export function isLocale(value: string): value is Locale {
  return value === "en" || value === "ku";
}
