import type { Metadata } from "next";
import { Mail, MapPin, MessageSquare, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PageIntro } from "@/components/layout/PageIntro";
import { Container, Panel, Section } from "@/components/site/primitives";

export const metadata: Metadata = { title: "Falar com Especialista", alternates: { canonical: "/contato/fale-conosco" } };

const channels = [
  { Icon: Phone, title: "Telefone", value: "(16) 3513-4000", details: "Atendimento comercial" },
  { Icon: Mail, title: "E-mail", value: "comercial@authomathika.com.br", details: "Solicitações técnicas" },
  { Icon: MessageSquare, title: "SAC", value: "sac.atm@authomathika.com.br", details: "Atendimento ao cliente" },
  { Icon: MapPin, title: "Endereço", value: "Sertãozinho - SP", details: "R. Ivone Fernandes Bernardi, 504" },
];

export default function FaleConoscoPage() {
  return (
    <main>
      <PageIntro
        tag="Atendimento"
        title="Falar com Especialista"
        subtitle="Canal direto para duvidas tecnicas, suporte e relacionamento comercial."
        breadcrumbs={[
          { label: "Contato", href: "/contato" },
          { label: "Falar com Especialista" },
        ]}
      />

      <Section>
        <Container className="grid gap-8 lg:grid-cols-12">
          <Panel className="space-y-3 lg:col-span-5">
            {channels.map((item) => (
              <div key={item.title} className="flex items-start gap-3 rounded-xl border border-zinc-200 bg-zinc-50 p-4">
                <item.Icon className="mt-0.5 size-4 text-primary" />
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-zinc-500">{item.title}</p>
                  <p className="text-sm font-semibold text-zinc-900">{item.value}</p>
                  <p className="text-xs text-zinc-600">{item.details}</p>
                </div>
              </div>
            ))}
          </Panel>

          <Panel className="lg:col-span-7">
            <form className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2"><Label htmlFor="nome">Nome</Label><Input id="nome" className="h-11" /></div>
                <div className="space-y-2"><Label htmlFor="email">E-mail</Label><Input id="email" type="email" className="h-11" /></div>
              </div>
              <div className="space-y-2"><Label htmlFor="assunto">Assunto</Label><Input id="assunto" className="h-11" /></div>
              <div className="space-y-2"><Label htmlFor="mensagem">Mensagem</Label><Textarea id="mensagem" className="min-h-[140px]" /></div>
              <Button type="submit" className="w-full rounded-full font-semibold">Enviar mensagem</Button>
            </form>
          </Panel>
        </Container>
      </Section>
    </main>
  );
}
