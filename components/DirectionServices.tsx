import type { Service } from "@/config/content";

type ServicesProps = {
  services: Service[];
  sectionIndex: string;
};

export function DirectionServices({ services, sectionIndex }: ServicesProps) {
  return (
    <section id="services" className="bg-concrete-50 bg-blueprint">
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
        {/* Section header */}
        <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-concrete-500">
                /{sectionIndex}
              </span>
              <span className="h-px w-12 bg-concrete-400" />
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-concrete-500">
                Услуги
              </span>
            </div>
            <h2 className="font-display text-4xl font-900 uppercase leading-none tracking-tight text-concrete-950 md:text-6xl">
              Что мы делаем
            </h2>
          </div>
          <p className="max-w-md font-sans text-base leading-relaxed text-concrete-600">
            Полный цикл работ — от проектирования до сдачи объекта.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid gap-px bg-concrete-300 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.id}
              id={service.id}
              className="group flex flex-col bg-concrete-50 p-8 transition-colors hover:bg-concrete-950 hover:text-concrete-50 md:p-10"
            >
              {/* Index */}
              <div className="mb-8 flex items-center justify-between">
                <span className="font-display text-6xl font-900 text-concrete-200 transition-colors group-hover:text-signal md:text-7xl">
                  {service.index}
                </span>
                <span className="font-mono text-xs uppercase tracking-widest text-concrete-400 transition-colors group-hover:text-concrete-500">
                  {service.short}
                </span>
              </div>

              {/* Title */}
              <h3 className="mb-5 font-display text-2xl font-800 uppercase leading-tight tracking-tight">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mb-8 font-sans text-sm leading-relaxed text-concrete-600 transition-colors group-hover:text-concrete-300">
                {service.description}
              </p>

              {/* Bullets */}
              <ul className="mt-auto space-y-3 border-t border-concrete-300 pt-6 transition-colors group-hover:border-concrete-700">
                {service.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-3 font-mono text-xs leading-relaxed text-concrete-700 transition-colors group-hover:text-concrete-300"
                  >
                    <span className="mt-1 h-2 w-2 flex-shrink-0 bg-signal" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
