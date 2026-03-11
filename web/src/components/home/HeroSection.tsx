import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { businessAreas } from "@/lib/data/businesses";
import { company } from "@/lib/data/company";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-zinc-950">
      <div className="page-grid-dark pointer-events-none absolute inset-0 opacity-60" />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute -left-40 top-0 size-[700px] rounded-full bg-primary/8 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 size-[500px] rounded-full bg-zinc-800/50 blur-[120px]" />

      <div className="relative z-10 flex min-h-svh flex-col">
        {/* ── Main content grid ── */}
        <div className="flex flex-1 flex-col lg:grid lg:grid-cols-[1fr_360px]">
          {/* Left: typographic headline */}
          <div className="flex flex-col justify-end border-zinc-800/50 px-5 pb-12 pt-28 sm:px-8 lg:border-r lg:px-16 lg:pb-16 lg:pt-32">
            <div className="max-w-3xl">
              {/* Tag line */}
              <div className="mb-10 flex items-center gap-3">
                <div className="h-px w-8 bg-primary" />
                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-500">
                  Engenharia integradora desde {company.founded}
                </span>
              </div>

              {/* Benefit-centered headline */}
              <h1 className="mb-8 font-display font-bold leading-[0.95] tracking-[-0.04em]">
                <span className="block text-[clamp(2.75rem,6.5vw,5.5rem)] text-zinc-200">
                  Um parceiro.
                </span>
                <span className="block text-[clamp(2.75rem,6.5vw,5.5rem)] text-zinc-200">
                  Responsabilidade
                </span>
                <span className="block text-[clamp(2.75rem,6.5vw,5.5rem)] text-primary">
                  de ponta a ponta.
                </span>
              </h1>

              <p className="mb-10 max-w-lg text-lg leading-relaxed text-zinc-400">
                Elétrica, automação, montagem, EPC e inteligência de dados —
                integrados em um único contrato. 25 anos de gestão de projetos
                industriais em mais de 12 setores. Entrega no prazo, sem acidentes,
                sem retrabalho.
              </p>

              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-full px-7 font-semibold"
                >
                  <Link href="/contato/solicitacao-de-orcamento">
                    Solicitar proposta <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="ghost"
                  className="h-12 rounded-full border border-zinc-700 px-7 font-semibold text-zinc-300 hover:border-zinc-600 hover:bg-zinc-900 hover:text-white"
                >
                  <Link href="#setores">
                    Encontre sua solução <ArrowUpRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Right: vertical stats sidebar (desktop only) */}
          <div className="hidden flex-col border-l border-zinc-800/50 pt-28 lg:flex">
            {[
              { value: "25+", unit: "anos", label: "de mercado" },
              { value: "42.027", unit: "", label: "equipamentos atendidos" },
              { value: "336", unit: "MW", label: "energia solar instalada" },
              { value: "208", unit: "", label: "projetos de montagem" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-1 flex-col justify-center border-b border-zinc-800/50 px-8 last:border-0"
              >
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-4xl font-bold leading-none text-white">
                    {item.value}
                  </span>
                  {item.unit ? (
                    <span className="font-display text-xl font-semibold text-primary">
                      {item.unit}
                    </span>
                  ) : null}
                </div>
                <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Business areas strip — anchored to hero bottom ── */}
        <div className="border-t border-zinc-800/60">
          <div className="flex overflow-x-auto">
            {businessAreas.map((area, i) => (
              <Link
                key={area.slug}
                href={`/nossos-negocios/${area.slug}`}
                className="group flex-none border-r border-zinc-800/60 px-6 py-4 transition-colors hover:bg-zinc-900 last:border-r-0"
              >
                <div className="flex items-center gap-3 whitespace-nowrap">
                  <span className="font-mono text-[10px] text-zinc-600">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-medium text-zinc-400 transition-colors group-hover:text-zinc-100">
                    {area.name}
                  </span>
                  <ArrowUpRight className="size-3 text-zinc-600 opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
