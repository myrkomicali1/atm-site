import type { Metadata } from "next";
import { User, Linkedin } from "lucide-react";
import { PageIntro } from "@/components/layout/PageIntro";
import { Container, Panel, Section, Eyebrow } from "@/components/site/primitives";
import { presidentMessage, teamMembers } from "@/lib/data/team";

export const metadata: Metadata = {
  title: "Nossa Equipe",
  description:
    "Conheça a liderança da Authomathika. Mais de 27 anos de experiência em engenharia integradora de sistemas elétricos e automação.",
  alternates: {
    canonical: "/empresa/nossa-equipe",
  },
};

export default function NossaEquipePage() {
  return (
    <main>
      <PageIntro
        tag="Pessoas"
        title="Nossa Equipe"
        subtitle="Por trás de cada projeto entregue, existe uma equipe comprometida com excelência técnica e segurança."
        breadcrumbs={[
          { label: "Empresa", href: "/empresa" },
          { label: "Nossa Equipe" },
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
                    alt={`Foto de ${presidentMessage.name}, ${presidentMessage.role} da Authomathika`}
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
                  <div className="text-xs text-zinc-500">{presidentMessage.role}</div>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-4">
                <Eyebrow>Mensagem da Presidência</Eyebrow>
                <blockquote className="text-base leading-relaxed text-zinc-600">
                  &ldquo;{presidentMessage.message}&rdquo;
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
            <Eyebrow>Liderança</Eyebrow>
            <h2 className="section-heading-sm mt-4 text-zinc-900">
              Equipe de gestão
            </h2>
            <p className="mt-3 text-base text-zinc-600">
              Profissionais com décadas de experiência nos setores sucroenergético, fertilizantes, energia e infraestrutura.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <Panel key={member.name} className="flex flex-col items-center gap-3 text-center">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={`Foto de ${member.name}, ${member.role}`}
                    className="size-24 rounded-xl object-cover"
                  />
                ) : (
                  <div className="flex size-24 items-center justify-center rounded-xl bg-zinc-100">
                    <User className="size-10 text-zinc-300" />
                  </div>
                )}
                <div>
                  <div className="font-display text-sm font-bold text-zinc-900">
                    {member.name}
                  </div>
                  <div className="text-xs text-zinc-500">{member.role}</div>
                </div>
                {member.linkedin ? (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-zinc-400 transition-colors hover:text-primary"
                    aria-label={`LinkedIn de ${member.name}`}
                  >
                    <Linkedin className="size-3.5" /> LinkedIn
                  </a>
                ) : null}
              </Panel>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
