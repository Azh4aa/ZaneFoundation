"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  const element = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const target = element.current;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!target || !("IntersectionObserver" in window) || !target.animate) return;
    let animation: Animation | undefined;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      if (motion.matches || target.contains(document.activeElement)) return;
      animation = target.animate(
        [{ opacity: 0.72, transform: "translateY(18px)" }, { opacity: 1, transform: "translateY(0)" }],
        { duration: 650, easing: "cubic-bezier(.2,.75,.25,1)" },
      );
    }, { threshold: 0.08 });
    const cancel = () => animation?.cancel();
    observer.observe(target);
    motion.addEventListener("change", cancel);
    target.addEventListener("focusin", cancel);
    return () => {
      observer.disconnect();
      motion.removeEventListener("change", cancel);
      target.removeEventListener("focusin", cancel);
      cancel();
    };
  }, []);
  return <div ref={element} className={className}>{children}</div>;
}
