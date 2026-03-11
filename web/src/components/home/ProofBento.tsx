import Image from "next/image";
import { company, works } from "@/lib/data/company";

export function ProofBento() {
  const featured = works[0]; // Costa Rica — flagship project

  return (
    <section className="bg-zinc-50 py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="mb-10">
          <p className="mono-label mb-3">Impacto em números</p>
          <h2 className="section-heading-sm text-zinc-900">Resultados comprovados.</h2>
        </div>

        {/* Bento grid: 12 cols, 2 auto rows */}
        <div
          className="grid grid-cols-1 gap-4 md:grid-cols-12"
          style={{ gridAutoRows: "minmax(200px, auto)" }}
        >
          {/* ── Featured project — 7 cols × 2 rows ── */}
          <div className="group relative overflow-hidden rounded-2xl md:col-span-7 md:row-span-2">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              sizes="(max-width: 768px) 100vw, 58vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <div className="mb-2 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                {featured.type} — {featured.category}
              </div>
              <h3 className="font-display text-2xl font-bold text-white">{featured.title}</h3>
              <p className="mt-1 text-sm text-zinc-300">{featured.description}</p>
            </div>
          </div>

          {/* ── Stat: Equipamentos — 3 cols × 1 row ── */}
          <div className="flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-6 md:col-span-3">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-600">
              Equipamentos atendidos
            </p>
            <div>
              <div className="font-display text-5xl font-bold leading-none tracking-tight text-zinc-900">
                42<span className="text-2xl font-semibold text-zinc-300">.027</span>
              </div>
              <p className="mt-2 text-sm text-zinc-600">atendimentos técnicos especializados</p>
            </div>
          </div>

          {/* ── Stat: Horas — 2 cols × 1 row ── */}
          <div className="flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-6 md:col-span-2">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-600">
              Horas de serviço
            </p>
            <div className="font-display text-4xl font-bold leading-none tracking-tight text-zinc-900">
              297<span className="text-xl font-semibold text-zinc-300">k+</span>
            </div>
          </div>

          {/* ── Stat: Solar — 3 cols × 1 row (primary color) ── */}
          <div className="flex flex-col justify-between rounded-2xl bg-primary p-6 md:col-span-3">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-red-200">
              Energia solar instalada
            </p>
            <div>
              <div className="font-display text-5xl font-bold leading-none tracking-tight text-white">
                336 <span className="text-2xl font-semibold text-red-200">MW</span>
              </div>
              <p className="mt-2 text-sm text-red-100">em 7 parques fotovoltaicos</p>
            </div>
          </div>

          {/* ── Certifications — 2 cols × 1 row ── */}
          <div className="flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-6 md:col-span-2">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-600">
              Certificações
            </p>
            <div className="flex flex-wrap gap-2">
              {company.certifications.map((cert) => (
                <span
                  key={cert}
                  className="inline-block rounded-full border border-zinc-200 px-3 py-1 text-xs font-semibold text-zinc-600"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
