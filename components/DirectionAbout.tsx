import type { Direction, Service } from "@/config/content";

type AboutProps = {
  direction: Direction;
  services: Service[];
  sectionIndex: string;
};

export function DirectionAbout({ direction, services, sectionIndex }: AboutProps) {
  return (
    <section id="about" className="bg-concrete-950 text-concrete-50">
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr]">
          {/* Left: narrative */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-concrete-500">
                /{sectionIndex}
              </span>
              <span className="h-px w-12 bg-concrete-700" />
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-concrete-500">
                О направлении
              </span>
            </div>

            <h2 className="font-display text-4xl font-900 uppercase leading-none tracking-tight md:text-6xl">
              {direction.title}
              <br />
              <span className="text-signal">от проекта</span>
              <br />
              до сдачи
            </h2>

            <div className="mt-10 max-w-xl space-y-6 font-sans text-base leading-relaxed text-concrete-300">
              <p>{direction.description}</p>
              <p>
                Работаем на Петербургском рынке с{" "}
                {"2009"} года. Накопили солидный опыт и приобрели знания,
                помогающие предлагать клиентам услуги на высшем уровне.
              </p>
            </div>
          </div>

          {/* Right: capability card */}
          <div className="border border-concrete-800 bg-concrete-900 p-8 md:p-10">
            <div className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-signal">
              Направления работ
            </div>
            <ul className="space-y-6">
              {services.map((service) => (
                <li
                  key={service.id}
                  className="border-b border-concrete-800 pb-6 last:border-0"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-sm text-concrete-500">
                      {service.index}
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-700 uppercase tracking-tight">
                        {service.title}
                      </h3>
                      <p className="mt-2 font-sans text-sm leading-relaxed text-concrete-400">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
