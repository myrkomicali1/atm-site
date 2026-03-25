import type { Metadata } from "next";
import Link from "next/link";
import { FileText, MapPin, MessageSquare, Truck } from "lucide-react";
import { PageIntro } from "@/components/layout/PageIntro";
import { Container, Section } from "@/components/site/primitives";

export const metadata: Metadata = {
  title: "Contato",
  alternates: {
    canonical: "/contato",
  },
};

const options = [
  { title: "Falar com Especialista", description: "Canal direto para atendimento tecnico e comercial.", href: "/contato/fale-conosco", Icon: MessageSquare },
  { title: "Solicitar Proposta Tecnica", description: "Envie o escopo do projeto e receba proposta personalizada.", href: "/contato/solicitacao-de-orcamento", Icon: FileText },
  { title: "Fornecedores", description: "Cadastro para base homologada de parceiros.", href: "/contato/fornecedores", Icon: Truck },
  { title: "Localização", description: "Informações de endereço e atendimento presencial.", href: "/contato/localizacao", Icon: MapPin },
];

export default function ContatoPage() {
  return (
    <main>
      <PageIntro
        tag="Relacionamento"
        title="Contato"
        subtitle="Escolha o fluxo mais adequado para sua demanda."
        breadcrumbs={[{ label: "Contato" }]}
      />

      <Section>
        <Container>
          <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white">
            <div className="divide-y divide-zinc-200">
              {options.map((option, index) => (
                <Link key={option.title} href={option.href} className="group grid gap-4 px-5 py-5 transition hover:bg-zinc-50 md:grid-cols-[56px_1fr] md:items-center">
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
