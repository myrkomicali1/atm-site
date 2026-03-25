import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { company } from "@/lib/data/company";
import { PageIntro } from "@/components/layout/PageIntro";
import { Container, Panel, Section } from "@/components/site/primitives";

export const metadata: Metadata = { title: "Localização", alternates: { canonical: "/contato/localizacao" } };

export default function LocalizacaoPage() {
  return (
    <main>
      <PageIntro
        tag="Unidade"
        title="Localização"
        subtitle="Informações da sede e canais de atendimento presencial da Authomathika."
        breadcrumbs={[
          { label: "Contato", href: "/contato" },
          { label: "Localização" },
        ]}
      />

      <Section>
        <Container className="grid gap-8 lg:grid-cols-12">
          <Panel className="space-y-3 lg:col-span-7">
            <p className="inline-flex items-start gap-2 text-sm text-zinc-600"><MapPin className="mt-0.5 size-4 text-primary" /> {company.address}</p>
            <p className="inline-flex items-center gap-2 text-sm text-zinc-600"><Phone className="size-4 text-primary" /> {company.phone}</p>
            <p className="inline-flex items-center gap-2 text-sm text-zinc-600"><Mail className="size-4 text-primary" /> {company.email.comercial}</p>
            <p className="inline-flex items-center gap-2 text-sm text-zinc-600"><Clock className="size-4 text-primary" /> Segunda a sexta, 08h às 18h</p>
          </Panel>

          <Panel className="flex min-h-[260px] flex-col items-center justify-center text-center lg:col-span-5">
            <MapPin className="mb-3 size-8 text-primary" />
            <h2 className="font-display text-2xl font-bold text-zinc-900">Sertãozinho, SP</h2>
            <p className="text-sm text-zinc-600">Rua Ivone Fernandes Bernardi, 504</p>
          </Panel>
        </Container>
      </Section>
    </main>
  );
}
