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
import Link from "next/link";

const steps = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "Diagnóstico técnico",
    description:
      "Levantamento de campo, análise de riscos e definição de escopo. Entendemos as especificidades da sua planta antes de propor qualquer solução.",
  },
  {
    number: "02",
    icon: Ruler,
    title: "Engenharia e planejamento",
    description:
      "Projeto básico e executivo, cronograma detalhado, EAP e procurement. Gestão de escopo com rastreabilidade via ERP TOTVS.",
  },
  {
    number: "03",
    icon: HardHat,
    title: "Execução integrada",
    description:
      "Elétrica, automação, instrumentação e montagem sob uma única coordenação. 2.000+ dias sem acidentes. NR-10 e NR-35 em cada frente.",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Comissionamento e entrega",
    description:
      "Start-up assistido, as-built completo e documentação técnica impecável. Dashboards de operação com inteligência de dados integrada.",
  },
];

const differentials = [
  {
    icon: Brain,
    title: "Inteligência artificial e dados",
    description:
      "Dashboards de gestão, automação de processos administrativos e inteligência comercial. Transformamos dados em decisões — da operação à diretoria.",
  },
  {
    icon: BarChart3,
    title: "Gestão integrada de projetos",
    description:
      "Controle de escopo, prazo e custo em uma única metodologia — aplicada com o mesmo rigor em usinas sucroenergéticas, mineradoras, parques solares ou qualquer operação industrial.",
  },
  {
    icon: Shield,
    title: "Segurança como premissa",
    description:
      "2.000+ dias sem acidentes de trabalho, certificações NR-10 e NR-35, DDS diário e cultura de segurança que atende os padrões mais rigorosos do mercado.",
  },
];

export function MethodologySection() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 py-24">
      <div className="page-grid-dark pointer-events-none absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute -right-40 top-0 size-[600px] rounded-full bg-primary/6 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <p className="mono-label-muted mb-4">Metodologia de entrega</p>
          <h2 className="mb-5 font-display text-[clamp(2rem,3.5vw,3rem)] font-bold leading-tight tracking-tight text-white">
            Do diagnóstico ao comissionamento.{" "}
            <span className="text-primary">Um único responsável.</span>
          </h2>
          <p className="text-base leading-relaxed text-zinc-400">
            Cada projeto segue a mesma metodologia de gestão integrada que já
            entregou 208 projetos em 12 setores — com cronograma cumprido,
            documentação completa e zero acidentes.
          </p>
        </div>

        {/* Process steps */}
        <div className="mb-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all duration-200 hover:border-zinc-700 hover:bg-zinc-900/80"
            >
              {/* Step number */}
              <div className="mb-5 flex items-start justify-between">
                <span className="font-mono text-[11px] font-medium text-zinc-600">
                  {step.number}
                </span>
                <div className="flex size-10 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-500 transition-colors group-hover:border-primary/30 group-hover:text-primary">
                  <step.icon className="size-5" />
                </div>
              </div>

              <h3 className="mb-2 font-display text-lg font-bold text-white">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-500">
                {step.description}
              </p>

              {/* Connector line (not on last) */}
              {step.number !== "04" ? (
                <div className="absolute -right-2 top-1/2 hidden size-4 -translate-y-1/2 items-center justify-center lg:flex">
                  <div className="h-px w-4 bg-zinc-800" />
                </div>
              ) : null}
            </div>
          ))}
        </div>

        {/* Differentials: IA, Gestão, Segurança */}
        <div className="grid gap-4 md:grid-cols-3">
          {differentials.map((diff) => (
            <div
              key={diff.title}
              className="group rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 transition-all duration-200 hover:border-primary/20 hover:bg-zinc-900/60"
            >
              <div className="mb-4 flex size-12 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-primary transition-colors group-hover:border-primary/30 group-hover:bg-primary/10">
                <diff.icon className="size-6" />
              </div>
              <h3 className="mb-2 font-display text-base font-bold text-white">
                {diff.title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-500">
                {diff.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/nossos-negocios"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-300 transition-all hover:border-zinc-500 hover:bg-zinc-900 hover:text-white"
          >
            Conheça nossas divisões operacionais{" "}
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
