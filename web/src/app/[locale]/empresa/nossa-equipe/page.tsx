import { getTranslations } from "next-intl/server";
import { User, Linkedin } from "lucide-react";
import { PageIntro } from "@/components/layout/PageIntro";
import { Container, Panel, Section, Eyebrow } from "@/components/site/primitives";
import { presidentMessage, teamMembers } from "@/lib/data/team";

export async function generateMetadata() {
  const t = await getTranslations("pages.equipe");
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: "/empresa/nossa-equipe",
    },
  };
}

export default async function NossaEquipePage() {
  const t = await getTranslations("pages.equipe");

  return (
    <main>
      <PageIntro
        tag={t("tag")}
        title={t("pageTitle")}
        subtitle={t("subtitle")}
        breadcrumbs={[
          { label: t("breadcrumbEmpresa"), href: "/empresa" },
          { label: t("breadcrumbEquipe") },
        ]}
      />

      {/* Mensagem do presidente */}
      <Section>
        <Container className="max-w-5xl">
          <Panel className="overflow-hidden">
            <div className="grid gap-8 md:grid-cols-[200px_1fr] md:items-start">
              {/* Photo placeholder */}
              <div className="flex flex-col items-center gap-3">
                {presidentMessage.image ? (
                  <img
                    src={presidentMessage.image}
                    alt={t("fotoAlt", { name: presidentMessage.name, role: t("presidentRole") })}
                    className="size-40 rounded-2xl object-cover"
                  />
                ) : (
                  <div className="flex size-40 items-center justify-center rounded-2xl bg-zinc-100">
                    <User className="size-16 text-zinc-300" />
                  </div>
                )}
                <div className="text-center">
                  <div className="font-display text-sm font-bold text-zinc-900">
                    {presidentMessage.name}
                  </div>
                  <div className="text-xs text-zinc-500">{t("presidentRole")}</div>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-4">
                <Eyebrow>{t("mensagemPresidencia")}</Eyebrow>
                <blockquote className="text-base leading-relaxed text-zinc-600">
                  &ldquo;{t("presidentMessage")}&rdquo;
                </blockquote>
              </div>
            </div>
          </Panel>
        </Container>
      </Section>

      {/* Grid de lideranca */}
      <Section className="bg-zinc-50">
        <Container>
          <div className="mb-12 max-w-2xl">
            <Eyebrow>{t("lideranca")}</Eyebrow>
            <h2 className="section-heading-sm mt-4 text-zinc-900">
              {t("equipeGestao")}
            </h2>
            <p className="mt-3 text-base text-zinc-600">
              {t("equipeGestaoDesc")}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, i) => {
              const memberName = i === 0 ? member.name : t(`member${i}Name`);
              const memberRole = t(`member${i}Role`);

              return (
                <Panel key={member.name} className="flex flex-col items-center gap-3 text-center">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={t("memberFotoAlt", { name: memberName, role: memberRole })}
                      className="size-24 rounded-xl object-cover"
                    />
                  ) : (
                    <div className="flex size-24 items-center justify-center rounded-xl bg-zinc-100">
                      <User className="size-10 text-zinc-300" />
                    </div>
                  )}
                  <div>
                    <div className="font-display text-sm font-bold text-zinc-900">
                      {memberName}
                    </div>
                    <div className="text-xs text-zinc-500">{memberRole}</div>
                  </div>
                  {member.linkedin ? (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-zinc-400 transition-colors hover:text-primary"
                      aria-label={t("linkedinAlt", { name: memberName })}
                    >
                      <Linkedin className="size-3.5" /> LinkedIn
                    </a>
                  ) : null}
                </Panel>
              );
            })}
          </div>
        </Container>
      </Section>
    </main>
  );
}
