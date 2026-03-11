import {
  ClipboardCheck,
  Ruler,
  HardHat,
  CheckCircle2,
  ArrowRight,
  Brain,
  BarChart3,
  Shield,
} from "lucide-react";
import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

const stepIcons = [ClipboardCheck, Ruler, HardHat, CheckCircle2];
const stepKeys = ["step01", "step02", "step03", "step04"] as const;

const diffIcons = { ia: Brain, gestao: BarChart3, seguranca: Shield };
const diffKeys = ["ia", "gestao", "seguranca"] as const;

export async function MethodologySection() {
  const t = await getTranslations("methodology");
  const tc = await getTranslations("common");

  return (
    <section className="relative overflow-hidden bg-zinc-950 py-16 md:py-24">
      <div className="page-grid-dark pointer-events-none absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute -right-40 top-0 size-[600px] rounded-full bg-primary/6 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <p className="mono-label-muted mb-4">{t("tag")}</p>
          <h2 className="mb-5 font-display text-[clamp(2rem,3.5vw,3rem)] font-bold leading-tight tracking-tight text-white">
            {t("heading")}{" "}
            <span className="text-primary">{t("headingHighlight")}</span>
          </h2>
          <p className="text-base leading-relaxed text-zinc-400">
            {t("description")}
          </p>
        </div>

        {/* Process steps */}
        <div className="mb-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stepKeys.map((key, i) => {
            const Icon = stepIcons[i];
            const number = t(`steps.${key}.number`);
            return (
              <AnimateOnScroll key={key} delay={i * 100}>
              <div
                className="group relative h-full rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all duration-200 hover:border-zinc-700 hover:bg-zinc-900/80"
              >
                <div className="mb-5 flex items-start justify-between">
                  <span className="font-mono text-[11px] font-medium text-zinc-600">
                    {number}
                  </span>
                  <div className="flex size-10 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-500 transition-colors group-hover:border-primary/30 group-hover:text-primary">
                    <Icon className="size-5" />
                  </div>
                </div>

                <h3 className="mb-2 font-display text-lg font-bold text-white">
                  {t(`steps.${key}.title`)}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-500">
                  {t(`steps.${key}.description`)}
                </p>

                {number !== "04" ? (
                  <div className="absolute -right-2 top-1/2 hidden size-4 -translate-y-1/2 items-center justify-center lg:flex">
                    <div className="h-px w-4 bg-zinc-800" />
                  </div>
                ) : null}
              </div>
              </AnimateOnScroll>
            );
          })}
        </div>

        {/* Differentials: IA, Gestão, Segurança */}
        <div className="grid gap-4 md:grid-cols-3">
          {diffKeys.map((key, idx) => {
            const Icon = diffIcons[key];
            return (
              <AnimateOnScroll key={key} delay={idx * 100}>
              <div
                className="group h-full rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 transition-all duration-200 hover:border-primary/20 hover:bg-zinc-900/60"
              >
                <div className="mb-4 flex size-12 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-primary transition-colors group-hover:border-primary/30 group-hover:bg-primary/10">
                  <Icon className="size-6" />
                </div>
                <h3 className="mb-2 font-display text-base font-bold text-white">
                  {t(`differentials.${key}.title`)}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-500">
                  {t(`differentials.${key}.description`)}
                </p>
              </div>
              </AnimateOnScroll>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/nossos-negocios"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-300 transition-all hover:border-zinc-500 hover:bg-zinc-900 hover:text-white"
          >
            {tc("conhecaNossasDivisoes")}{" "}
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
