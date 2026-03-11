import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { clients, company } from "@/lib/data/company";
import { Button } from "@/components/ui/button";

const pillars = [
  { title: "Gestão Integrada", sub: "Escopo, prazo e custo sob controle" },
  { title: "IA & Dados", sub: "Gestão inteligente e automação" },
  { title: "ISO 9001", sub: "Certificação de qualidade" },
  { title: "NR-10 / NR-35", sub: "Segurança comprovada" },
  { title: "TOTVS ERP", sub: "Rastreabilidade de ponta a ponta" },
  { title: "2.000+ dias", sub: "Sem acidentes de trabalho" },
];

export function CompanyBrief() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 py-24">
      <div className="page-grid-dark pointer-events-none absolute inset-0 opacity-50" />
      <div className="pointer-events-none absolute right-0 top-0 size-[500px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* ── Left: company story ── */}
          <div>
            <p className="mono-label-muted mb-6">Nossa história</p>
            <h2 className="mb-6 font-display text-[clamp(2rem,3vw,2.75rem)] font-bold leading-tight tracking-tight text-white">
              Desde {company.founded}, integrando engenharia e gestão de projetos industriais.
            </h2>
            <p className="mb-8 text-base leading-relaxed text-zinc-400">
              208 projetos executados em 12 setores industriais. A Authomathika assume
              responsabilidade integral — do diagnóstico ao comissionamento — com a mesma
              metodologia de gestão que entrega prazo, segurança e documentação impecável.
              Hoje, inteligência artificial e análise de dados transformam a gestão administrativa
              e operacional dos nossos clientes.
            </p>

            {/* Credentials grid */}
            <div className="mb-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {pillars.map((p) => (
                <div
                  key={p.title}
                  className="rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-4"
                >
                  <div className="font-display text-sm font-bold text-white">{p.title}</div>
                  <div className="mt-0.5 text-xs text-zinc-500">{p.sub}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Button asChild className="rounded-full font-semibold">
                <Link href="/empresa/institucional">
                  Conhecer a empresa <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="rounded-full border border-zinc-700 font-semibold text-zinc-300 hover:border-zinc-600 hover:bg-zinc-900 hover:text-white"
              >
                <Link href="/empresa/linha-do-tempo">Linha do tempo</Link>
              </Button>
            </div>
          </div>

          {/* ── Right: client grid ── */}
          {/* TODO: Substituir nomes por logos SVG/PNG em grayscale quando disponiveis.
              Implementar hover para colorir o logo (filter: grayscale(0)).
              Manter fallback de texto para clientes sem logo. */}
          <div>
            <p className="mono-label-muted mb-3">Clientes de referencia</p>
            <p className="mb-6 text-xs text-zinc-500">{clients.length}+ clientes de referencia em 12 setores industriais</p>
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
              Ver todos os clientes <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
