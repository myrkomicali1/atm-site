import type { Metadata } from "next";
import { visionPillars } from "@/lib/data/company";
import { PageIntro } from "@/components/layout/PageIntro";
import { Container, Eyebrow, Panel, Section } from "@/components/site/primitives";

export const metadata: Metadata = {
  title: "Visão Corporativa",
  description:
    "Conheça os princípios e valores que guiam a Authomathika há mais de 25 anos: compromisso com o cliente, segurança, qualidade ISO 9001 e transparência.",
  alternates: {
    canonical: "/empresa/visao-corporativa",
  },
};

export default function VisaoCorporativaPage() {
  return (
    <main>
      <PageIntro
        tag="Direcionamento"
        title="Visão Corporativa"
        subtitle="Princípios que orientam decisões técnicas, contratuais e relacionais da Authomathika."
        breadcrumbs={[
          { label: "Empresa", href: "/empresa" },
          { label: "Visão Corporativa" },
        ]}
      />

      <Section>
        <Container className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            {visionPillars.map((pillar) => (
              <Panel key={pillar.title} className="space-y-3">
                <Eyebrow>{pillar.title}</Eyebrow>
                <p className="text-sm text-zinc-600">{pillar.description}</p>
              </Panel>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-y border-zinc-200 bg-zinc-100/70">
        <Container className="max-w-4xl text-center">
          <p className="font-display text-3xl font-bold leading-tight text-zinc-900 md:text-5xl">
            &ldquo;Reconhecidos pela forma responsável e clara de cumprir contratos, sempre dentro da ética e do profissionalismo.&rdquo;
          </p>
        </Container>
      </Section>
    </main>
  );
}
