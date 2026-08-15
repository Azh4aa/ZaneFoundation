"use client";

import { type FormEvent, useState } from "react";
import type { Locale } from "@/lib/site";

type FormKind = "volunteer" | "career";

export function OpportunityForm({ locale, kind }: { locale: Locale; kind: FormKind }) {
  const isKu = locale === "ku";
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/applications", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...data, kind, locale, consent: data.consent === "on" }),
      });
      const result = await response.json() as { message?: string };
      if (!response.ok) throw new Error(result.message || "Submission failed");
      form.reset();
      setStatus("success");
      setMessage(isKu ? "زانیارییەکانت گەیشت. سوپاس بۆ حەزت بە بەشداری." : "Your details have been received. Thank you for stepping forward.");
    } catch {
      setStatus("error");
      setMessage(isKu ? "ناردن سەرکەوتوو نەبوو. تکایە دووبارە هەوڵ بدەوە یان ڕاستەوخۆ ئیمەیڵ بنێرە." : "The form could not be sent. Please try again or use the direct email shown below.");
    }
  }

  const areas = kind === "volunteer"
    ? [
        ["programs", isKu ? "پشتگیریی بەرنامە" : "Program support"],
        ["professional", isKu ? "پسپۆڕیی پیشەیی" : "Professional expertise"],
        ["events", isKu ? "چالاکی و ڕووداو" : "Events and activities"],
        ["communications", isKu ? "ڕاگەیاندن و ناوەڕۆک" : "Communications and content"],
        ["administration", isKu ? "کارگێڕی و ئۆفیس" : "Administration and office"],
        ["other", isKu ? "بوارێکی تر" : "Another area"],
      ]
    : [
        ["programs", isKu ? "بەرنامە و بەڕێوەبردنی پرۆژە" : "Programs and project management"],
        ["therapy", isKu ? "خزمەتگوزاریی گەشەپێدان" : "Developmental services"],
        ["education", isKu ? "پەروەردە و ڕاهێنان" : "Education and training"],
        ["operations", isKu ? "کارگێڕی، دارایی و یاسا" : "Operations, finance and legal"],
        ["communications", isKu ? "ڕاگەیاندن و داکۆکی" : "Communications and advocacy"],
        ["future", isKu ? "هەلی داهاتوو" : "Future opportunities"],
      ];

  return (
    <form className="opportunity-form" onSubmit={submit}>
      <div className="form-heading">
        <span>{kind === "volunteer" ? "VOL–01" : "CAR–01"}</span>
        <h2>{kind === "volunteer" ? (isKu ? "تۆماری حەزی خۆبەخشی" : "Volunteer expression of interest") : (isKu ? "تۆماری حەزی کارکردن" : "Career expression of interest")}</h2>
        <p>{isKu ? "خانە نیشانکراوەکان پێویستن. زانیاریی تەندروستی یان هەستیاری کەسی مەنووسە." : "Marked fields are required. Do not include medical or other sensitive personal information."}</p>
      </div>

      <div className="form-grid">
        <label><span>{isKu ? "ناوی تەواو" : "Full name"} *</span><input name="name" autoComplete="name" required maxLength={120} /></label>
        <label><span>{isKu ? "ئیمەیڵ" : "Email"} *</span><input name="email" type="email" autoComplete="email" required maxLength={180} /></label>
        <label><span>{isKu ? "ژمارەی مۆبایل" : "Phone number"}</span><input name="phone" type="tel" autoComplete="tel" maxLength={40} /></label>
        <label><span>{isKu ? "شار / ناوچە" : "City / region"} *</span><input name="city" autoComplete="address-level2" required maxLength={100} /></label>
        <label className="form-field--wide"><span>{kind === "volunteer" ? (isKu ? "بواری حەز" : "Area of interest") : (isKu ? "بواری پسپۆڕی" : "Professional area")} *</span><select name="area" required defaultValue=""><option value="" disabled>{isKu ? "هەڵبژێرە" : "Select one"}</option>{areas.map(([value, label]) => <option value={value} key={value}>{label}</option>)}</select></label>
        <label><span>{kind === "volunteer" ? (isKu ? "کاتی بەردەست" : "Availability") : (isKu ? "دۆخی کارکردن" : "Work preference")}</span><select name="availability" defaultValue=""><option value="">{isKu ? "هەڵبژێرە" : "Select one"}</option><option value="part-time">{isKu ? "بەشێک لە کات" : "Part-time"}</option><option value="full-time">{isKu ? "تەواوی کات" : "Full-time"}</option><option value="project">{isKu ? "بەپێی پرۆژە" : "Project-based"}</option><option value="flexible">{isKu ? "گونجاو" : "Flexible"}</option></select></label>
        <label><span>{isKu ? "لینکدئین / پۆرتفۆلیۆ" : "LinkedIn / portfolio"}</span><input name="website" type="url" inputMode="url" placeholder="https://" maxLength={300} /></label>
        <label className="form-field--wide"><span>{kind === "volunteer" ? (isKu ? "چۆن دەتوانیت بەشداربیت؟" : "How would you like to contribute?") : (isKu ? "کورتەیەک دەربارەی ئەزموونت" : "Briefly describe your relevant experience")} *</span><textarea name="message" rows={6} required minLength={40} maxLength={1600} /></label>
        <label className="honeypot" aria-hidden="true"><span>Company website</span><input name="company_website" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <label className="consent-row"><input name="consent" type="checkbox" required /><span>{isKu ? "ڕەزامەندم زەنێ ئەم زانیارییانە بۆ پێداچوونەوە و پەیوەندیکردن بەکاربهێنێت. سیاسەتی پاراستنی زانیاریم خوێندووەتەوە." : "I agree that Zane may use this information to review my interest and contact me. I have read the privacy notice."}</span></label>

      <div className="form-submit-row">
        <button className="button button--gold button--arrow" disabled={status === "sending"} type="submit">{status === "sending" ? (isKu ? "دەنێردرێت..." : "Sending...") : (isKu ? "زانیارییەکان بنێرە" : "Submit expression of interest")}<span>↗</span></button>
        <p aria-live="polite" className={`form-status form-status--${status}`}>{message}</p>
      </div>
    </form>
  );
}
