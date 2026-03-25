import Image from "next/image";
import { company, works } from "@/lib/data/company";
import { getTranslations } from "next-intl/server";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

export async function ProofBento() {
  const t = await getTranslations("proof");
  const tWorks = await getTranslations("worksData");
  const featured = works[0]; // Costa Rica — flagship project

  const featuredType = tWorks.has("0.type") ? tWorks("0.type") : featured.type;
  const featuredCategory = tWorks.has("0.category") ? tWorks("0.category") : featured.category;
  const featuredDescription = tWorks.has("0.description") ? tWorks("0.description") : featured.description;
  const featuredAltText = tWorks.has("0.altText") ? tWorks("0.altText") : featured.title;

  return (
    <section className="bg-zinc-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <AnimateOnScroll>
        <div className="mb-10">
          <p className="mono-label mb-3">{t("tag")}</p>
          <h2 className="section-heading-sm text-zinc-900">{t("heading")}</h2>
        </div>
        </AnimateOnScroll>

        {/* Bento grid: 12 cols, 2 auto rows */}
        <AnimateOnScroll delay={150}>
        <div
          className="grid grid-cols-1 gap-4 md:grid-cols-12"
          style={{ gridAutoRows: "minmax(200px, auto)" }}
        >
          {/* ── Featured project — 7 cols × 2 rows ── */}
          <div className="group relative overflow-hidden rounded-2xl md:col-span-7 md:row-span-2">
            <Image
              src={featured.image}
              alt={featuredAltText}
              fill
              sizes="(max-width: 768px) 100vw, 58vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <div className="mb-2 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
                {featuredType} — {featuredCategory}
              </div>
              <h3 className="font-display text-2xl font-bold text-white">{featured.title}</h3>
              <p className="mt-1 text-sm text-zinc-300">{featuredDescription}</p>
            </div>
          </div>

          {/* ── Stat: Equipamentos — 3 cols × 1 row ── */}
          <div className="flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-6 md:col-span-3">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-600">
              {t("equipamentosAtendidos")}
            </p>
            <div>
              <div className="font-display text-5xl font-bold leading-none tracking-tight text-zinc-900">
                42<span className="text-2xl font-semibold text-zinc-300">.027</span>
              </div>
              <p className="mt-2 text-sm text-zinc-600">{t("atendimentosTecnicos")}</p>
            </div>
          </div>

          {/* ── Stat: Solar — 5 cols × 1 row (primary color) ── */}
          <div className="flex flex-col justify-between rounded-2xl bg-primary p-6 md:col-span-5">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-red-200">
              {t("energiaSolarInstalada")}
            </p>
            <div>
              <div className="font-display text-5xl font-bold leading-none tracking-tight text-white">
                892 <span className="text-2xl font-semibold text-red-200">MW</span>
              </div>
              <p className="mt-2 text-sm text-red-100">{t("emParquesFotovoltaicos")}</p>
            </div>
          </div>
        </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
