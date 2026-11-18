"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { site, type Locale } from "@/lib/site";

type Playback = "poster" | "playing" | "paused" | "unavailable";

export function HomeFilm({ locale }: { locale: Locale }) {
  const isKu = locale === "ku";
  const film = useRef<HTMLVideoElement>(null);
  const toggle = useRef<(() => void) | null>(null);
  const [playback, setPlayback] = useState<Playback>("poster");

  useEffect(() => {
    const video = film.current;
    if (!video) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const small = window.matchMedia("(max-width: 720px)");
    const webm = "/film/workshop.webm";
    const mp4 = small.matches ? "/film/workshop-mobile.mp4" : "/film/workshop-wide.mp4";
    let source = video.canPlayType("video/mp4") ? mp4 : webm;
    let inView = !("IntersectionObserver" in window);
    let preference: boolean | undefined;
    let blocked = false;
    let disposed = false;

    function sync() {
      if (!video || disposed) return;
      if (!inView || document.hidden || !(preference ?? !motion.matches)) {
        video.pause();
        return;
      }
      if (blocked) return;
      video.muted = true;
      video.defaultMuted = true;
      if (video.getAttribute("src") !== source) video.src = source;
      if (video.paused) {
        video.play().catch((error: DOMException) => {
          if (!disposed && error.name === "NotAllowedError") blocked = true;
        });
      }
    }

    function changePreference() {
      preference = undefined;
      sync();
    }

    function onSourceError() {
      if (source !== webm && video?.canPlayType("video/webm")) {
        source = webm;
        sync();
      } else {
        setPlayback("unavailable");
      }
    }

    toggle.current = () => {
      preference = video.paused;
      blocked = false;
      sync();
    };
    const observer = "IntersectionObserver" in window
      ? new IntersectionObserver(([entry]) => { inView = entry.isIntersecting; sync(); })
      : null;
    observer?.observe(video);
    video.addEventListener("error", onSourceError);
    motion.addEventListener("change", changePreference);
    document.addEventListener("visibilitychange", sync);
    sync();
    return () => {
      disposed = true;
      toggle.current = null;
      observer?.disconnect();
      motion.removeEventListener("change", changePreference);
      document.removeEventListener("visibilitychange", sync);
      video.removeEventListener("error", onSourceError);
      video.pause();
    };
  }, []);

  const playing = playback === "playing";
  const control = isKu ? (playing ? "وەستاندنی ڤیدیۆ" : "پەخشی ڤیدیۆ") : (playing ? "Pause film" : "Play film");
  return (
    <section className="film-hero" aria-labelledby="cover-title" data-playback={playback}>
      <div className="film-hero__media">
        <div className="film-hero__scene">
          <picture>
            <source media="(max-width: 720px)" srcSet="/images/workshop-mobile-poster.webp" />
            <Image src="/images/workshop-poster.webp" fill unoptimized loading="eager" fetchPriority="high"
              alt={isKu ? "منداڵان و مامۆستایەک لە دەوری مێزێک خەریکی وێنەکێشانن." : "Children and a teacher painting around a table."} />
          </picture>
          <video id="homepage-film" ref={film} muted playsInline loop preload="none" aria-hidden="true"
            onPlaying={() => setPlayback("playing")}
            onPause={() => setPlayback((current) => current === "playing" ? "paused" : current)} />
        </div>
      </div>
      <div className="film-hero__content shell">
        <div className="film-hero__copy">
          <h1 id="cover-title"><span>{site.localName[locale]}</span></h1>
          <p>
            {isKu ? "داکۆکی لە مافی خوێندن و کارکردنی کەسانی خاوەن سندرۆمی داون و کەمتواناییی هزری دەکەین." : "We advocate for the right of people with Down syndrome and intellectual disabilities to study and work alongside their peers."}
            <small className="film-hero__launch">{isKu ? "زەنێ بەم زووانە دەست بە کار دەکات." : "Zane Organization will launch soon."}</small>
          </p>
          <Link className="button button--gold" href={`/${locale}/about`}>{isKu ? "دەربارەی زەنێ" : "About Zane"}<span className="arrow" aria-hidden="true">→</span></Link>
        </div>
        {playback !== "unavailable" && (
          <button className="film-control" type="button" aria-controls="homepage-film" onClick={() => toggle.current?.()}>
            <span className={playing ? "film-icon film-icon--pause" : "film-icon film-icon--play"} aria-hidden="true" />{control}
          </button>
        )}
        <noscript><style>{".film-control{display:none}"}</style></noscript>
      </div>
    </section>
  );
}
