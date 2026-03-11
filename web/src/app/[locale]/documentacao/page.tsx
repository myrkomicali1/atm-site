import type { Metadata } from "next";
import { Shield, Award, FileCheck, Building2, FileText, Download, Clock, CheckCircle2 } from "lucide-react";
import { PageIntro } from "@/components/layout/PageIntro";
import { Container, Panel, Section, Eyebrow } from "@/components/site/primitives";
import { company } from "@/lib/data/company";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("pages.documentation");
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: "/documentacao",
    },
  };
}

const certIcons = [Award, Shield, Shield, FileCheck];

export default async function DocumentacaoPage() {
  const t = await getTranslations("pages.documentation");

  const certifications = [0, 1, 2, 3].map((i) => ({
    name: t(`certifications.${i}.name`),
    description: t(`certifications.${i}.description`),
    icon: certIcons[i],
    status: t("statusActive"),
  }));

  const safetyIndicators = [0, 1, 2].map((i) => ({
    value: t(`safetyIndicators.${i}.value`),
    label: t(`safetyIndicators.${i}.label`),
    description: t(`safetyIndicators.${i}.description`),
  }));

  const technicalMaterials = [0, 1, 2, 3].map((i) => ({
    title: t(`materials.${i}.title`),
    description: t(`materials.${i}.description`),
    format: "PDF",
    available: false,
  }));

  return (
    <main>
      <PageIntro
        tag={t("tag")}
        title={t("title")}
        subtitle={t("subtitle")}
        breadcrumbs={[{ label: t("breadcrumb") }]}
      />

      {/* Certificações */}
      <Section>
        <Container>
          <div className="mb-10 max-w-2xl">
            <Eyebrow>{t("certificationsTag")}</Eyebrow>
            <h2 className="section-heading-sm mt-4 text-zinc-900">
              {t("certificationsHeading")}
            </h2>
            <p className="mt-3 text-base text-zinc-600">
              {t("certificationsDescription")}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {certifications.map((cert) => (
              <Panel key={cert.name} className="flex gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/5">
                  <cert.icon className="size-6 text-primary" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-display text-base font-bold text-zinc-900">{cert.name}</h3>
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-700">
                      <CheckCircle2 className="size-3" /> {cert.status}
                    </span>
                  </div>
                  <p className="text-sm text-zinc-600">{cert.description}</p>
                </div>
              </Panel>
            ))}
          </div>
        </Container>
      </Section>

      {/* Indicadores de segurança */}
      <Section className="bg-zinc-950">
        <Container>
          <div className="mb-10 max-w-2xl">
            <p className="mono-label-muted mb-4">{t("safetyTag")}</p>
            <h2 className="section-heading-sm text-white">
              {t("safetyHeading")}
            </h2>
            <p className="mt-3 text-base text-zinc-400">
              {t("safetyDescription")}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {safetyIndicators.map((indicator) => (
              <div
                key={indicator.label}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6"
              >
                <div className="font-display text-3xl font-bold text-white">{indicator.value}</div>
                <div className="mt-1 text-sm font-semibold text-zinc-300">{indicator.label}</div>
                <p className="mt-2 text-xs text-zinc-500">{indicator.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Dados cadastrais */}
      <Section>
        <Container>
          <div className="mb-10 max-w-2xl">
            <Eyebrow>{t("registrationTag")}</Eyebrow>
            <h2 className="section-heading-sm mt-4 text-zinc-900">
              {t("registrationHeading")}
            </h2>
          </div>

          <Panel className="max-w-2xl">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Building2 className="mt-0.5 size-4 shrink-0 text-primary" />
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-zinc-500">{t("labelRazaoSocial")}</p>
                  <p className="text-sm font-semibold text-zinc-900">Authomathika Engenharia Ltda</p>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-zinc-500">{t("labelCnpj")}</p>
                  <p className="text-sm font-semibold text-zinc-900">{company.cnpj}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-zinc-500">{t("labelFundacao")}</p>
                  <p className="text-sm font-semibold text-zinc-900">{company.founded}</p>
                </div>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-zinc-500">{t("labelEndereco")}</p>
                <p className="text-sm font-semibold text-zinc-900">{company.address}</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-zinc-500">{t("labelTelefone")}</p>
                  <p className="text-sm font-semibold text-zinc-900">{company.phone}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-zinc-500">{t("labelEmailComercial")}</p>
                  <p className="text-sm font-semibold text-zinc-900">{company.email.comercial}</p>
                </div>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-zinc-500">{t("labelConformidade")}</p>
                <p className="text-sm font-semibold text-zinc-900">{company.compliance.join(", ")}</p>
              </div>
            </div>
          </Panel>
        </Container>
      </Section>

      {/* Materiais técnicos */}
      <Section className="bg-zinc-50">
        <Container>
          <div className="mb-10 max-w-2xl">
            <Eyebrow>{t("downloadsTag")}</Eyebrow>
            <h2 className="section-heading-sm mt-4 text-zinc-900">
              {t("downloadsHeading")}
            </h2>
            <p className="mt-3 text-base text-zinc-600">
              {t("downloadsDescription")}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {technicalMaterials.map((material) => (
              <Panel key={material.title} className="flex items-start gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-zinc-100">
                  <FileText className="size-5 text-zinc-400" />
                </div>
                <div className="flex-1 space-y-1">
                  <h3 className="font-display text-sm font-bold text-zinc-900">{material.title}</h3>
                  <p className="text-xs text-zinc-600">{material.description}</p>
                  {material.available ? (
                    <button className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline">
                      <Download className="size-3" /> {t("downloadBtn")} {material.format}
                    </button>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-xs text-zinc-400">
                      <Clock className="size-3" /> {t("comingSoon")}
                    </span>
                  )}
                </div>
              </Panel>
            ))}
          </div>

          {/* TODO: Adicionar formulário para solicitar documentos adicionais quando backend estiver pronto */}
        </Container>
      </Section>
    </main>
  );
}
