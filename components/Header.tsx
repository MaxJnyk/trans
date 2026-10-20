"use client";

import { useEffect, useState } from "react";
import { NAV_ITEMS, COMPANY } from "@/config/content";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isStroenie = pathname === "/stroenie";
  const isPerevozki = pathname === "/perevozki";
  const isHome = pathname === "/";

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-200 ${
        scrolled
          ? "bg-concrete-950/95 backdrop-blur-sm border-concrete-800"
          : "bg-concrete-950 border-concrete-950"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 md:px-10">
        {/* Logo */}
        <Link href="/" className="group">
          <span className="font-display text-xl font-800 uppercase tracking-tight text-concrete-50 leading-none">
            Транс Строй
            <span className="ml-1 text-signal">СПб</span>
          </span>
        </Link>

        {/* Direction switcher (desktop) */}
        <nav className="hidden items-center gap-1 md:flex">
          <Link
            href="/stroenie"
            className={`px-4 py-2 font-mono text-xs uppercase tracking-widest transition-colors ${
              isStroenie
                ? "bg-signal text-concrete-950"
                : "text-concrete-300 hover:text-signal"
            }`}
          >
            Строительство
          </Link>
          <Link
            href="/perevozki"
            className={`px-4 py-2 font-mono text-xs uppercase tracking-widest transition-colors ${
              isPerevozki
                ? "bg-signal text-concrete-950"
                : "text-concrete-300 hover:text-signal"
            }`}
          >
            Перевозки
          </Link>
        </nav>

        {/* Section nav (desktop) — hidden on home */}
        {!isHome && (
          <nav className="hidden items-center gap-6 lg:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-mono text-xs uppercase tracking-widest text-concrete-300 transition-colors hover:text-signal"
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}

        {/* CTA */}
        <a
          href="#contacts"
          className="hidden bg-signal px-5 py-2.5 font-display text-sm font-700 uppercase tracking-wide text-concrete-950 transition-colors hover:bg-concrete-50 md:inline-block"
        >
          Связаться
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Меню"
        >
          <span
            className={`h-0.5 w-6 bg-concrete-50 transition-transform ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-concrete-50 transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-concrete-50 transition-transform ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="flex flex-col border-t border-concrete-800 bg-concrete-950 px-5 py-4 md:hidden">
          <Link
            href="/stroenie"
            onClick={() => setOpen(false)}
            className={`border-b border-concrete-800 py-3 font-mono text-sm uppercase tracking-widest ${
              isStroenie ? "text-signal" : "text-concrete-300"
            }`}
          >
            Строительство
          </Link>
          <Link
            href="/perevozki"
            onClick={() => setOpen(false)}
            className={`border-b border-concrete-800 py-3 font-mono text-sm uppercase tracking-widest ${
              isPerevozki ? "text-signal" : "text-concrete-300"
            }`}
          >
            Перевозки
          </Link>
          {!isHome &&
            NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-concrete-800 py-3 font-mono text-sm uppercase tracking-widest text-concrete-300"
              >
                {item.label}
              </a>
            ))}
          <a
            href="#contacts"
            onClick={() => setOpen(false)}
            className="mt-4 bg-signal px-5 py-3 text-center font-display text-sm font-700 uppercase text-concrete-950"
          >
            Связаться
          </a>
        </nav>
      )}
    </header>
  );
}
