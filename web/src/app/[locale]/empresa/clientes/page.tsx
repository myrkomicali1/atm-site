import { getTranslations } from "next-intl/server";
import { clients, sectors } from "@/lib/data/company";
import { PageIntro } from "@/components/layout/PageIntro";
import { Container, Eyebrow, Panel, Section } from "@/components/site/primitives";

export async function generateMetadata() {
  const t = await getTranslations("pages.clientes");
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: "/empresa/clientes",
    },
  };
}

export default async function ClientesPage() {
  const t = await getTranslations("pages.clientes");
  const td = await getTranslations("companyData.sectorList");

  return (
    <main>
      <PageIntro
        tag={t("tag")}
        title={t("pageTitle")}
        subtitle={t("subtitle")}
        breadcrumbs={[
          { label: t("breadcrumbEmpresa"), href: "/empresa" },
          { label: t("breadcrumbClientes") },
        ]}
      />

      <Section>
        <Container className="space-y-7">
          <Eyebrow>{t("clientesDeReferencia")}</Eyebrow>
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
          <Eyebrow>{t("setoresAtendidos")}</Eyebrow>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {sectors.map((sector, i) => (
              <Panel key={sector.icon} className="space-y-2">
                <h2 className="font-display text-xl font-bold text-zinc-900">{td(`${i}.name`)}</h2>
                <p className="text-sm text-zinc-600">{td(`${i}.description`)}</p>
              </Panel>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
