import {
  ArrowRight,
  Factory,
  Mountain,
  Sun,
  Droplets,
  Sprout,
  UtensilsCrossed,
  Flame,
  Warehouse,
  TreePine,
  Landmark,
  Fuel,
  Building,
} from "lucide-react";
import { getFeaturedSectors } from "@/lib/data/sectors";
import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

const iconMap: Record<string, React.ElementType> = {
  Factory,
  Mountain,
  Sun,
  Droplets,
  Sprout,
  UtensilsCrossed,
  Flame,
  Warehouse,
  TreePine,
  Landmark,
  Fuel,
  Building,
};

export async function SectorsSection() {
  const t = await getTranslations("sectors");
  const tc = await getTranslations("common");
  const tSec = await getTranslations("sectorNames");
  const featured = getFeaturedSectors();

  return (
    <section id="setores" className="bg-zinc-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <AnimateOnScroll>
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="mono-label mb-3">{t("tag")}</p>
              <h2 className="section-heading-sm text-zinc-900">
                {t("heading")}
              </h2>
              <p className="mt-3 max-w-lg text-base text-zinc-600">
                {t("description")}
              </p>
            </div>
            <Link
              href="/setores"
              className="hidden items-center gap-2 text-sm font-semibold text-zinc-400 transition-colors hover:text-zinc-900 sm:inline-flex"
            >
              {tc("todosOsSetores")} <ArrowRight className="size-4" />
            </Link>
          </div>
        </AnimateOnScroll>

        {/* Featured sector cards */}
        <div className="grid gap-4 md:grid-cols-3">
          {featured.map((sector, idx) => {
            const Icon = iconMap[sector.icon] ?? Factory;
            const primaryMetric = sector.metrics[0];
            const sectorKey = tSec.has(`${sector.slug}.name`) ? sector.slug : null;
            return (
              <AnimateOnScroll key={sector.slug} delay={idx * 100}>
              <Link
                href={`/setores/${sector.slug}`}
                className="group relative flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-200 hover:border-primary/30 hover:shadow-lg hover:shadow-zinc-900/6"
              >
                {/* Icon */}
                <div className="mb-5 flex size-12 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-400 transition-colors group-hover:border-primary/20 group-hover:bg-primary/5 group-hover:text-primary">
                  <Icon className="size-6" />
                </div>

                {/* Content */}
                <h3 className="mb-2 font-display text-xl font-bold text-zinc-900">
                  {sectorKey ? tSec(`${sectorKey}.name`) : sector.name}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-zinc-500">
                  {sectorKey ? tSec(`${sectorKey}.headline`) : sector.headline}
                </p>

                {/* Metric highlight */}
                {primaryMetric ? (
                  <div className="mt-auto border-t border-zinc-100 pt-4">
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-2xl font-bold text-zinc-900">
                        {sectorKey && tSec.has(`${sectorKey}.metric0Value`)
                          ? tSec(`${sectorKey}.metric0Value`)
                          : primaryMetric.value}
                      </span>
                      <span className="text-xs text-zinc-500">
                        {sectorKey && tSec.has(`${sectorKey}.metric0Label`)
                          ? tSec(`${sectorKey}.metric0Label`)
                          : primaryMetric.label}
                      </span>
                    </div>
                  </div>
                ) : null}

                {/* CTA */}
                <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-zinc-400 transition-colors group-hover:text-primary">
                  <span>{tc("verSolucoesParaSetor")}</span>
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </div>
              </Link>
              </AnimateOnScroll>
            );
          })}
        </div>

        {/* Multi-segment CTA */}
        <div className="mt-8 rounded-2xl border border-dashed border-zinc-300 bg-zinc-100/50 px-6 py-5 text-center">
          <p className="text-sm font-medium text-zinc-700">
            {t("naoEncontrouSetor")}{" "}
            <span className="text-zinc-500">
              {t("naoEncontrouSetorDesc")}
            </span>
          </p>
          <Link
            href="/contato/fale-conosco"
            className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
          >
            {tc("falarComEquipeTecnica")} <ArrowRight className="size-4" />
          </Link>
        </div>

        {/* Mobile: view all */}
        <div className="mt-6 flex justify-center sm:hidden">
          <Link
            href="/setores"
            className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-500 hover:text-zinc-900"
          >
            {tc("todosOsSetores")} <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
