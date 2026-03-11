import { getTranslations } from "next-intl/server";
import { Clock, Mail, MapPin, Phone, Building2 } from "lucide-react";
import { company } from "@/lib/data/company";
import { PageIntro } from "@/components/layout/PageIntro";
import { Container, Panel, Section } from "@/components/site/primitives";

export async function generateMetadata() {
  const t = await getTranslations("pages.localizacao");
  return {
    title: t("title"),
    description: t("description"),
    alternates: { canonical: "/contato/localizacao" },
  };
}

export default async function LocalizacaoPage() {
  const t = await getTranslations("pages.localizacao");

  const contactInfo = [
    {
      icon: MapPin,
      label: t("labelEndereco"),
      value: company.address,
    },
    {
      icon: Phone,
      label: t("labelTelefone"),
      value: company.phone,
      href: `tel:${company.phone.replace(/\D/g, "")}`,
    },
    {
      icon: Mail,
      label: t("labelEmailComercial"),
      value: company.email.comercial,
      href: `mailto:${company.email.comercial}`,
    },
    {
      icon: Clock,
      label: t("labelHorario"),
      value: t("horarioValue"),
    },
  ];

  return (
    <main>
      <PageIntro
        tag={t("tag")}
        title={t("pageTitle")}
        subtitle={t("subtitle")}
        breadcrumbs={[
          { label: t("breadcrumbContato"), href: "/contato" },
          { label: t("breadcrumbLocalizacao") },
        ]}
      />

      <Section>
        <Container>
          <div className="mx-auto max-w-2xl">
            <Panel className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/5">
                  <Building2 className="size-5 text-primary" />
                </div>
                <div>
                  <h2 className="font-display text-lg font-bold text-zinc-900">
                    Sertãozinho, SP
                  </h2>
                  <p className="text-sm text-zinc-500">{t("sede")}</p>
                </div>
              </div>

              <div className="space-y-3">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <item.icon className="mt-0.5 size-4 shrink-0 text-primary" />
                    <div className="min-w-0">
                      <p className="text-[10px] uppercase tracking-[0.12em] text-zinc-400">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="block truncate text-sm font-medium text-zinc-900 transition-colors hover:text-primary"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-zinc-900">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=-21.1375,-48.0053"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-5 py-2.5 text-sm font-medium text-zinc-700 shadow-sm transition-colors hover:border-primary hover:text-primary"
              >
                <MapPin className="size-4" />
                {t("abrirGoogleMaps")}
              </a>
            </Panel>
          </div>
        </Container>
      </Section>
    </main>
  );
}
