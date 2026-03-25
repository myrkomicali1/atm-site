import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PageIntro } from "@/components/layout/PageIntro";
import { Container, Panel, Section } from "@/components/site/primitives";

export const metadata: Metadata = { title: "Fornecedores", alternates: { canonical: "/contato/fornecedores" } };

export default function FornecedoresPage() {
  return (
    <main>
      <PageIntro
        tag="Supply chain"
        title="Portal de Fornecedores"
        subtitle="Cadastro para fornecedores interessados em atuar com a Authomathika."
        breadcrumbs={[
          { label: "Contato", href: "/contato" },
          { label: "Fornecedores" },
        ]}
      />

      <Section>
        <Container className="max-w-4xl">
          <Panel>
            <form className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2"><Label htmlFor="razao">Razão social</Label><Input id="razao" className="h-11" /></div>
                <div className="space-y-2"><Label htmlFor="cnpj">CNPJ</Label><Input id="cnpj" className="h-11" /></div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2"><Label htmlFor="contato">Contato</Label><Input id="contato" className="h-11" /></div>
                <div className="space-y-2"><Label htmlFor="email">E-mail</Label><Input id="email" type="email" className="h-11" /></div>
              </div>
              <div className="space-y-2"><Label htmlFor="produtos">Produtos/Serviços</Label><Textarea id="produtos" className="min-h-[140px]" /></div>
              <Button type="submit" className="w-full rounded-full font-semibold">Enviar cadastro</Button>
            </form>
          </Panel>
        </Container>
      </Section>
    </main>
  );
}
