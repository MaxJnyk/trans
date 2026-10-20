import { COMPANY, NAV_ITEMS } from "@/config/content";

// Build-time constant — avoids dynamic `new Date()` during prerender
const CURRENT_YEAR = 2026;

type ContactsProps = {
  phone?: string;
  contactPerson?: string;
};

export function Contacts({ phone, contactPerson }: ContactsProps = {}) {
  const displayPhone = phone || COMPANY.phone;

  return (
    <section id="contacts" className="bg-signal">
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
          {/* Left: CTA */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-concrete-950/60">
                /05
              </span>
              <span className="h-px w-12 bg-concrete-950/40" />
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-concrete-950/60">
                Контакты
              </span>
            </div>

            <h2 className="font-display text-4xl font-900 uppercase leading-none tracking-tight text-concrete-950 md:text-6xl">
              Готовы
              <br />
              обсудить
              <br />
              проект?
            </h2>

            <p className="mt-8 max-w-md font-sans text-lg leading-relaxed text-concrete-900">
              Свяжитесь с нами для обсуждения работ, составления сметы
              и согласования проекта.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={`tel:${displayPhone.replace(/[^+\d]/g, "")}`}
                className="bg-concrete-950 px-8 py-4 font-display text-sm font-700 uppercase tracking-wide text-concrete-50 transition-colors hover:bg-concrete-800"
              >
                Позвонить
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="border-2 border-concrete-950 px-8 py-4 font-display text-sm font-700 uppercase tracking-wide text-concrete-950 transition-colors hover:bg-concrete-950 hover:text-concrete-50"
              >
                Написать
              </a>
            </div>
          </div>

          {/* Right: contact details */}
          <div className="space-y-px bg-concrete-950/20">
            <ContactRow label="Телефон" value={displayPhone} />
            {contactPerson && (
              <ContactRow label="Контактное лицо" value={contactPerson} />
            )}
            <ContactRow label="Email" value={COMPANY.email} />
            <ContactRow label="Регион работ" value={COMPANY.region} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-signal px-6 py-5">
      <div className="mb-1 font-mono text-[0.7rem] uppercase tracking-widest text-concrete-950/60">
        {label}
      </div>
      <div className="font-display text-lg font-600 text-concrete-950">
        {value}
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-concrete-950 text-concrete-400">
      {/* Requisites block */}
      <div className="border-b border-concrete-800">
        <div className="mx-auto max-w-[1400px] px-5 py-12 md:px-10">
          <div className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-concrete-500">
            Реквизиты
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Requisite label="Полное наименование" value={COMPANY.fullName} />
            <Requisite label="ИНН" value={COMPANY.inn} />
            <Requisite label="Юридический адрес" value={COMPANY.legalAddress} />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-5 py-8 md:flex-row md:items-center md:justify-between md:px-10">
        <div>
          <span className="font-display text-lg font-800 uppercase tracking-tight text-concrete-50">
            Транс Строй <span className="text-signal">СПб</span>
          </span>
        </div>

        <nav className="flex flex-wrap gap-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-xs uppercase tracking-widest text-concrete-500 transition-colors hover:text-signal"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="font-mono text-xs text-concrete-600">
          © {CURRENT_YEAR} {COMPANY.name}
        </div>
      </div>
    </footer>
  );
}

function Requisite({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="mb-1 font-mono text-[0.65rem] uppercase tracking-widest text-concrete-600">
        {label}
      </div>
      <div className="font-sans text-sm leading-relaxed text-concrete-300">
        {value}
      </div>
    </div>
  );
}
