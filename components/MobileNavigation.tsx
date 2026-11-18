"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { navItems, type Locale } from "@/lib/site";

export function MobileNavigation({ locale }: { locale: Locale }) {
  const isKu = locale === "ku";
  const menu = useRef<HTMLDetailsElement>(null);

  function closeMenu() {
    if (menu.current) menu.current.open = false;
  }

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape" && menu.current?.open) {
        closeMenu();
        menu.current.querySelector("summary")?.focus();
      }
    }
    function onPointer(event: PointerEvent) {
      if (event.target instanceof Node && !menu.current?.contains(event.target)) closeMenu();
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, []);

  return (
    <details className="mobile-menu" ref={menu}>
      <summary aria-label={isKu ? "پێڕستی ماڵپەڕ" : "Website menu"}><span /><span /></summary>
      <nav aria-label={isKu ? "پەڕەکانی ماڵپەڕ" : "Pages"}>
        {navItems.map((item) => (
          <Link key={item.href} href={`/${locale}${item.href}`} onNavigate={closeMenu}>{item.label[locale]}</Link>
        ))}
        <Link href={`/${locale}/partner`} onNavigate={closeMenu}>{isKu ? "هاوکاری لەگەڵ زەنێ" : "Partnerships"}</Link>
        <Link href={`/${locale}/contact`} onNavigate={closeMenu}>{isKu ? "پەیوەندی" : "Contact"}</Link>
      </nav>
    </details>
  );
}
