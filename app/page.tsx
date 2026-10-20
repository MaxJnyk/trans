import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Ticker } from "@/components/Ticker";
import { Contacts, Footer } from "@/components/Contacts";
import { DIRECTIONS, COMPANY, HOME_TICKER } from "@/config/content";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col">
        {/* Hero — split layout: construction left, transport right */}
        <section className="relative bg-concrete-950 text-concrete-50">
          <div className="absolute inset-0 bg-blueprint-dark opacity-30" />

          {/* Two photo columns */}
          <div className="absolute inset-0 grid grid-cols-2">
            {/* Left: construction */}
            <div className="relative overflow-hidden border-r border-concrete-800">
              <Image
                src={`${DIRECTIONS[0].imageDir}/${DIRECTIONS[0].heroImage}`}
                alt="Строительство — Транс Строй СПб"
                fill
                priority
                sizes="50vw"
                className="object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-concrete-950 via-concrete-950/60 to-transparent" />
            </div>
            {/* Right: transport */}
            <div className="relative overflow-hidden">
              <Image
                src={`${DIRECTIONS[1].imageDir}/${DIRECTIONS[1].heroImage}`}
                alt="Перевозки — Транс Строй СПб"
                fill
                priority
                sizes="50vw"
                className="object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-concrete-950 via-concrete-950/60 to-transparent" />
            </div>
          </div>

          <div className="relative mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
            <div className="mb-8 flex items-center gap-3">
              <span className="hazard-stripes h-4 w-16" />
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-signal">
                {COMPANY.name} · с {COMPANY.foundedYear}
              </span>
            </div>

            <h1 className="font-display text-5xl font-900 uppercase leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
              Транс Строй
              <br />
              <span className="text-signal">СПб</span>
            </h1>

            <p className="mt-8 max-w-xl font-sans text-lg leading-relaxed text-concrete-300 md:text-xl">
              {COMPANY.fullName}. Два направления: строительство и перевозки
              негабаритных грузов. Работаем с {COMPANY.foundedYear} года.
            </p>

            {/* Direction labels under photos */}
            <div className="mt-20 grid grid-cols-2 gap-px border-t border-concrete-800 bg-concrete-800">
              {DIRECTIONS.map((dir) => (
                <Link
                  key={dir.slug}
                  href={`/${dir.slug}`}
                  className="group flex items-center justify-between bg-concrete-950 px-5 py-5 transition-colors hover:bg-concrete-900 md:px-8 md:py-6"
                >
                  <div>
                    <div className="font-mono text-[0.7rem] uppercase tracking-widest text-concrete-500">
                      /{dir.index}
                    </div>
                    <div className="mt-1 font-display text-2xl font-800 uppercase tracking-tight text-concrete-50 md:text-3xl">
                      {dir.title}
                    </div>
                    <div className="mt-1 font-mono text-[0.65rem] uppercase tracking-widest text-signal">
                      {dir.geo}
                    </div>
                  </div>
                  <span className="font-display text-2xl text-signal transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Ticker items={HOME_TICKER} />

        <Contacts />
      </main>
      <Footer />
    </>
  );
}
