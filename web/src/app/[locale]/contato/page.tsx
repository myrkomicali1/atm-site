import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { FileText, MapPin, MessageSquare, Truck } from "lucide-react";
import { PageIntro } from "@/components/layout/PageIntro";
import { Container, Section } from "@/components/site/primitives";

export async function generateMetadata() {
  const t = await getTranslations("pages.contato");
  return {
    title: t("title"),
    alternates: {
      canonical: "/contato",
    },
  };
}

const Icons = [MessageSquare, FileText, Truck, MapPin];
const hrefs = [
  "/contato/fale-conosco",
  "/contato/solicitacao-de-orcamento",
  "/contato/fornecedores",
  "/contato/localizacao",
];

export default async function ContatoPage() {
  const t = await getTranslations("pages.contato");

  const options = Array.from({ length: 4 }, (_, i) => ({
    title: t(`option${i}Title`),
    description: t(`option${i}Desc`),
    href: hrefs[i],
    Icon: Icons[i],
  }));

  return (
    <main>
      <PageIntro
        tag={t("tag")}
        title={t("pageTitle")}
        subtitle={t("subtitle")}
        breadcrumbs={[{ label: t("breadcrumbContato") }]}
      />

      <Section>
        <Container>
          <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white">
            <div className="divide-y divide-zinc-200">
              {options.map((option, index) => (
                <Link key={index} href={option.href} className="group grid gap-4 px-5 py-5 transition hover:bg-zinc-50 md:grid-cols-[56px_1fr] md:items-center">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-zinc-500">{String(index + 1).padStart(2, "0")}</span>
                    <div className="inline-flex size-10 items-center justify-center rounded-lg border border-indigo-200 bg-indigo-50 text-primary">
                      <option.Icon className="size-5" />
                    </div>
                  </div>
                  <div>
                    <h2 className="font-display text-2xl font-bold text-zinc-900">{option.title}</h2>
                    <p className="text-sm text-zinc-600">{option.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
