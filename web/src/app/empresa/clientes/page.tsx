import type { Metadata } from "next";
import { clients, sectors } from "@/lib/data/company";
import { PageIntro } from "@/components/layout/PageIntro";
import { Container, Eyebrow, Panel, Section } from "@/components/site/primitives";

export const metadata: Metadata = {
  title: "Clientes",
  description: "Empresas líderes que confiam na Authomathika há mais de 25 anos.",
  alternates: {
    canonical: "/empresa/clientes",
  },
};

export default function ClientesPage() {
  return (
    <main>
      <PageIntro
        tag="Relações de mercado"
        title="Clientes e Parceiros"
        subtitle="Base de relacionamento construída em projetos críticos de engenharia industrial."
        breadcrumbs={[
          { label: "Empresa", href: "/empresa" },
          { label: "Clientes" },
        ]}
      />

      <Section>
        <Container className="space-y-7">
          <Eyebrow>Clientes de referência</Eyebrow>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {clients.map((client) => (
              <div key={client} className="rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm font-semibold uppercase tracking-wide text-zinc-700">
                {client}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-y border-zinc-200 bg-zinc-100/70">
        <Container className="space-y-7">
          <Eyebrow>Setores atendidos</Eyebrow>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {sectors.map((sector) => (
              <Panel key={sector.name} className="space-y-2">
                <h2 className="font-display text-xl font-bold text-zinc-900">{sector.name}</h2>
                <p className="text-sm text-zinc-600">{sector.description}</p>
              </Panel>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
