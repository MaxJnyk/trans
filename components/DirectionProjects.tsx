import type { Project } from "@/config/content";

type ProjectsProps = {
  projects: Project[];
  sectionIndex: string;
};

const CATEGORY_COLORS: Record<string, string> = {
  Благоустройство: "bg-signal text-concrete-950",
  "Инженерные сети": "bg-concrete-50 text-concrete-950",
  "Земляные работы": "bg-flag text-concrete-50",
  Негабарит: "bg-signal text-concrete-950",
  Спецтехника: "bg-concrete-50 text-concrete-950",
  Маршруты: "bg-flag text-concrete-50",
};

export function DirectionProjects({ projects, sectionIndex }: ProjectsProps) {
  return (
    <section id="projects" className="bg-concrete-100">
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-concrete-500">
                /{sectionIndex}
              </span>
              <span className="h-px w-12 bg-concrete-400" />
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-concrete-500">
                Объекты
              </span>
            </div>
            <h2 className="font-display text-4xl font-900 uppercase leading-none tracking-tight text-concrete-950 md:text-6xl">
              Выполненные
              <br />
              работы
            </h2>
          </div>
          <p className="max-w-md font-sans text-base leading-relaxed text-concrete-600">
            От дворовых территорий до промышленных объектов.
          </p>
        </div>

        {/* Projects list */}
        <div className="border-t border-concrete-400">
          {projects.map((project, i) => (
            <article
              key={project.id}
              className="group grid grid-cols-1 gap-3 border-b border-concrete-400 py-6 transition-colors hover:bg-concrete-200 md:grid-cols-[60px_1fr_200px_140px] md:items-center md:gap-6 md:py-5"
            >
              <div className="font-mono text-sm text-concrete-500">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="font-display text-lg font-700 leading-tight tracking-tight text-concrete-950 md:text-xl">
                  {project.title}
                </h3>
                <p className="mt-1 font-sans text-sm leading-relaxed text-concrete-600">
                  {project.description}
                </p>
              </div>
              <div className="font-mono text-xs uppercase tracking-wider text-concrete-500">
                {project.client}
              </div>
              <div>
                <span
                  className={`inline-block px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-widest ${
                    CATEGORY_COLORS[project.category] ??
                    "bg-concrete-300 text-concrete-950"
                  }`}
                >
                  {project.category}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
