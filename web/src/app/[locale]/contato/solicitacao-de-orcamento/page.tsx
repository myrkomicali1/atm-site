import { getTranslations } from "next-intl/server";
import { PageIntro } from "@/components/layout/PageIntro";
import { Container, Section } from "@/components/site/primitives";
import { ProposalForm } from "./ProposalForm";

export async function generateMetadata() {
  const t = await getTranslations("pages.orcamento");
  return {
    title: t("title"),
    description: t("description"),
    alternates: { canonical: "/contato/solicitacao-de-orcamento" },
  };
}

export default async function OrcamentoPage() {
  const t = await getTranslations("pages.orcamento");

  return (
    <main>
      <PageIntro
        tag={t("tag")}
        title={t("pageTitle")}
        subtitle={t("subtitle")}
        breadcrumbs={[
          { label: t("breadcrumbContato"), href: "/contato" },
          { label: t("breadcrumbOrcamento") },
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
