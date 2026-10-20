import Image from "next/image";
import type { Direction, Stat } from "@/config/content";

type HeroProps = {
  direction: Direction;
  stats: Stat[];
};

export function DirectionHero({ direction, stats }: HeroProps) {
  return (
    <section id="top" className="relative bg-concrete-950 text-concrete-50">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={`${direction.imageDir}/${direction.heroImage}`}
          alt={`${direction.title} — Транс Строй СПб`}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-concrete-950 via-concrete-950/80 to-concrete-950/30" />
      </div>

      <div className="absolute inset-0 bg-blueprint-dark opacity-40" />

      <div className="relative mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-32 lg:py-40">
        {/* Direction label */}
        <div className="mb-8 flex items-center gap-3">
          <span className="hazard-stripes h-4 w-16" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-signal">
            /{direction.index} · {direction.short}
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-5xl font-900 uppercase leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
          {direction.title}
        </h1>

        {/* Tagline */}
        <p className="mt-6 font-mono text-sm uppercase tracking-widest text-signal md:text-base">
          {direction.tagline}
        </p>

        {/* Description */}
        <p className="mt-8 max-w-xl font-sans text-lg leading-relaxed text-concrete-300 md:text-xl">
          {direction.description}
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#services"
            className="bg-signal px-8 py-4 font-display text-sm font-700 uppercase tracking-wide text-concrete-950 transition-colors hover:bg-concrete-50"
          >
            Услуги
          </a>
          <a
            href="#projects"
            className="border border-concrete-600 px-8 py-4 font-display text-sm font-700 uppercase tracking-wide text-concrete-50 transition-colors hover:border-signal hover:text-signal"
          >
            Выполненные объекты
          </a>
        </div>

        {/* Stats bar */}
        <div className="mt-20 grid grid-cols-2 gap-px border-t border-concrete-800 bg-concrete-800 md:mt-28 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-concrete-950 px-5 py-6 md:px-6 md:py-8"
            >
              <div className="font-display text-4xl font-900 text-signal md:text-5xl">
                {stat.value}
              </div>
              <div className="mt-2 font-mono text-[0.7rem] uppercase tracking-wider text-concrete-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
