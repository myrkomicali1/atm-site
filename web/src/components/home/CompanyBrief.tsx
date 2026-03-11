import { ArrowRight } from "lucide-react";
import { clients, company } from "@/lib/data/company";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

const pillarKeys = [
  "gestaoIntegrada",
  "iaDados",
  "iso9001",
  "nr10Nr35",
  "lgpdNr1",
  "diasSemAcidentes",
] as const;

export async function CompanyBrief() {
  const t = await getTranslations("company");
  const tc = await getTranslations("common");

  return (
    <section className="relative overflow-hidden bg-zinc-950 py-16 md:py-24">
      <div className="page-grid-dark pointer-events-none absolute inset-0 opacity-50" />
      <div className="pointer-events-none absolute right-0 top-0 size-[500px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* ── Left: company story ── */}
          <AnimateOnScroll variant="fade-left">
          <div>
            <p className="mono-label-muted mb-6">{t("tag")}</p>
            <h2 className="mb-6 font-display text-[clamp(2rem,3vw,2.75rem)] font-bold leading-tight tracking-tight text-white">
              {t("heading", { founded: company.founded })}
            </h2>
            <p className="mb-8 text-base leading-relaxed text-zinc-400">
              {t("description")}
            </p>

            {/* Credentials grid */}
            <div className="mb-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {pillarKeys.map((key) => (
                <div
                  key={key}
                  className="rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-4"
                >
                  <div className="font-display text-sm font-bold text-white">{t(`pillars.${key}.title`)}</div>
                  <div className="mt-0.5 text-xs text-zinc-500">{t(`pillars.${key}.sub`)}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Button asChild className="rounded-full font-semibold">
                <Link href="/empresa/institucional">
                  {tc("conhecerEmpresa")} <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="rounded-full border border-zinc-700 font-semibold text-zinc-300 hover:border-zinc-600 hover:bg-zinc-900 hover:text-white"
              >
                <Link href="/empresa/linha-do-tempo">{tc("linhaDoTempo")}</Link>
              </Button>
            </div>
          </div>
          </AnimateOnScroll>

          {/* ── Right: client grid ── */}
          <AnimateOnScroll variant="fade-right" delay={200}>
          <div>
            <p className="mono-label-muted mb-3">{t("clientesTag")}</p>
            <p className="mb-6 text-xs text-zinc-500">{t("clientesDesc", { count: clients.length })}</p>
            <div className="grid grid-cols-3 gap-2">
              {clients.map((client) => (
                <div
                  key={client}
                  className="flex items-center justify-center rounded-xl border border-zinc-800/80 bg-zinc-900/40 px-3 py-4 text-center text-xs font-medium text-zinc-400 transition-all hover:border-zinc-700 hover:bg-zinc-800/60 hover:text-zinc-200"
                >
                  {client}
                </div>
              ))}
            </div>
            <Link
              href="/empresa/clientes"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-zinc-500 transition-colors hover:text-zinc-300"
            >
              {tc("verTodosClientes")} <ArrowRight className="size-4" />
            </Link>
          </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
