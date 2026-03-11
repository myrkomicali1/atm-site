import type { Metadata } from "next";
import { company } from "@/lib/data/company";
import { PageIntro } from "@/components/layout/PageIntro";
import { Container, Eyebrow, Panel, Section } from "@/components/site/primitives";

export const metadata: Metadata = {
  title: "Institucional",
  description: "Conheça a Authomathika – engenharia integradora desde 1999.",
  alternates: {
    canonical: "/empresa/institucional",
  },
};

const diferencials = [
  "Equipe multidisciplinar de engenharia e campo",
  "Parceria estratégica TOMSA DESTIL (Espanha)",
  "Gestão digital de serviços com rastreabilidade",
  "Metrologia RBC com laboratórios fixos e móveis",
  "Frota própria e operação nacional",
  "Conformidade com normas críticas de segurança",
];

export default function InstitucionalPage() {
  return (
    <main>
      <PageIntro
        tag="Empresa"
        title="Institucional"
        subtitle="Histórico, posicionamento e diferenciais operacionais da Authomathika."
        breadcrumbs={[
          { label: "Empresa", href: "/empresa" },
          { label: "Institucional" },
        ]}
      />

      <Section>
        <Container className="grid gap-8 lg:grid-cols-12">
          <article className="space-y-5 lg:col-span-8">
            <Panel className="space-y-4">
              <Eyebrow>Quem somos</Eyebrow>
              <p className="text-zinc-600">Fundada em 1999 em Sertãozinho/SP, a Authomathika atua como integradora de engenharia para sistemas elétricos, automação e implantação industrial.</p>
              <p className="text-zinc-600">Com atuação multissetorial, nossa operação combina projeto, execução e manutenção com compromisso contratual de alta previsibilidade.</p>
              <p className="text-zinc-600">A empresa é reconhecida por clareza técnica, ética de entrega e capacidade de escalar projetos complexos em diferentes ambientes industriais.</p>
            </Panel>

            <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white">
              <div className="border-b border-zinc-200 px-5 py-3 text-xs uppercase tracking-[0.14em] text-zinc-500">Diferenciais</div>
              <div className="divide-y divide-zinc-200">
                {diferencials.map((item, idx) => (
                  <div key={item} className="grid gap-2 px-5 py-4 md:grid-cols-[48px_1fr] md:items-center">
                    <span className="font-mono text-xs text-zinc-500">{String(idx + 1).padStart(2, "0")}</span>
                    <span className="text-sm text-zinc-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <aside className="space-y-6 lg:col-span-4">
            <Panel className="space-y-2">
              <Eyebrow>Dados corporativos</Eyebrow>
              <p className="text-sm text-zinc-600"><strong className="text-zinc-900">Fundação:</strong> 1999</p>
              <p className="text-sm text-zinc-600"><strong className="text-zinc-900">Presidente:</strong> {company.president}</p>
              <p className="text-sm text-zinc-600"><strong className="text-zinc-900">Telefone:</strong> {company.phone}</p>
              <p className="text-sm text-zinc-600"><strong className="text-zinc-900">CNPJ:</strong> {company.cnpj}</p>
            </Panel>

            <Panel className="space-y-3">
              <Eyebrow>Conformidades</Eyebrow>
              <div className="flex flex-wrap gap-2">
                {[...company.certifications, "RBC", "ERP TOTVS"].map((item) => (
                  <span key={item} className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-primary">
                    {item}
                  </span>
                ))}
              </div>
            </Panel>
          </aside>
        </Container>
      </Section>
    </main>
  );
}
