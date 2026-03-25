import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { company } from "@/lib/data/company";
import { PageIntro } from "@/components/layout/PageIntro";
import { Container, Panel, Section } from "@/components/site/primitives";

export const metadata: Metadata = {
  title: "Trabalhe Conosco",
  description:
    "Faça parte da equipe Authomathika. Vagas em engenharia elétrica, automação industrial e montagem eletromecânica em Sertãozinho/SP.",
  alternates: {
    canonical: "/trabalhe-conosco",
  },
};

const pillars = ["Foco em resultado", "Ambiente colaborativo", "Tecnologia aplicada", "Crescimento profissional"];

export default function TrabalheConoscoPage() {
  return (
    <main>
      <PageIntro
        tag="Carreiras"
        title="Trabalhe Conosco"
        subtitle="Faça parte de uma equipe de engenharia orientada a execução e evolução técnica contínua."
        breadcrumbs={[{ label: "Trabalhe Conosco" }]}
      />

      <Section>
        <Container className="grid gap-8 lg:grid-cols-12">
          <Panel className="space-y-4 lg:col-span-7">
            <h2 className="font-display text-3xl font-bold text-zinc-900">Por que construir carreira aqui</h2>
            <p className="text-zinc-600">Projetos de alta complexidade, cultura técnica forte e ambiente com autonomia responsável.</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {pillars.map((pillar) => (
                <div key={pillar} className="rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-700">
                  {pillar}
                </div>
              ))}
            </div>
          </Panel>

          <Panel className="space-y-4 lg:col-span-5">
            <h3 className="font-display text-2xl font-bold text-zinc-900">Vagas via Gupy</h3>
            <p className="text-sm text-zinc-600">Acompanhe oportunidades abertas e candidate-se na nossa plataforma oficial de recrutamento.</p>
            <Button asChild className="w-full rounded-full font-semibold">
              <a href={company.gupy} target="_blank" rel="noopener noreferrer">
                Ver vagas disponíveis <ArrowUpRight className="size-4" />
              </a>
            </Button>
          </Panel>
        </Container>
      </Section>
    </main>
  );
}
