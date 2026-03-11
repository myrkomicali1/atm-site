import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PageIntro } from "@/components/layout/PageIntro";
import { Container, Panel, Section } from "@/components/site/primitives";

export async function generateMetadata() {
  const t = await getTranslations("pages.fornecedores");
  return {
    title: t("title"),
    alternates: { canonical: "/contato/fornecedores" },
  };
}

export default async function FornecedoresPage() {
  const t = await getTranslations("pages.fornecedores");

  return (
    <main>
      <PageIntro
        tag={t("tag")}
        title={t("pageTitle")}
        subtitle={t("subtitle")}
        breadcrumbs={[
          { label: t("breadcrumbContato"), href: "/contato" },
          { label: t("breadcrumbFornecedores") },
        ]}
      />

      <Section>
        <Container className="max-w-4xl">
          <Panel>
            <form className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2"><Label htmlFor="razao">{t("labelRazaoSocial")}</Label><Input id="razao" className="h-11" /></div>
                <div className="space-y-2"><Label htmlFor="cnpj">{t("labelCnpj")}</Label><Input id="cnpj" className="h-11" /></div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2"><Label htmlFor="contato">{t("labelContato")}</Label><Input id="contato" className="h-11" /></div>
                <div className="space-y-2"><Label htmlFor="email">{t("labelEmail")}</Label><Input id="email" type="email" className="h-11" /></div>
              </div>
              <div className="space-y-2"><Label htmlFor="produtos">{t("labelProdutosServicos")}</Label><Textarea id="produtos" className="min-h-[140px]" /></div>
              <Button type="submit" className="w-full rounded-full font-semibold">{t("enviarCadastro")}</Button>
            </form>
          </Panel>
        </Container>
      </Section>
    </main>
  );
}
