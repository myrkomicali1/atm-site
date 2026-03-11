import type { Metadata } from "next";
import { PageIntro } from "@/components/layout/PageIntro";
import { Container, Section } from "@/components/site/primitives";
import { ProposalForm } from "./ProposalForm";

export const metadata: Metadata = {
  title: "Solicitar Proposta Tecnica",
  description:
    "Solicite uma proposta tecnica personalizada para seu projeto de automacao, eletrica, energias renovaveis ou montagem eletromecanica.",
  alternates: { canonical: "/contato/solicitacao-de-orcamento" },
};

export default function OrcamentoPage() {
  return (
    <main>
      <PageIntro
        tag="Pre-proposta"
        title="Solicitar Proposta Tecnica"
        subtitle="Preencha as informacoes abaixo para receber um retorno da nossa engenharia comercial com escopo e estimativa."
        breadcrumbs={[
          { label: "Contato", href: "/contato" },
          { label: "Proposta Tecnica" },
        ]}
      />

      <Section>
        <Container className="max-w-3xl">
          <ProposalForm />
        </Container>
      </Section>
    </main>
  );
}
