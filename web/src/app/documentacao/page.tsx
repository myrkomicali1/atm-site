import type { Metadata } from "next";
import { Shield, Award, FileCheck, Building2, FileText, Download, Clock, CheckCircle2 } from "lucide-react";
import { PageIntro } from "@/components/layout/PageIntro";
import { Container, Panel, Section, Eyebrow } from "@/components/site/primitives";
import { company } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "Documentacao e Certificacoes",
  description:
    "Certificacoes, indicadores de seguranca, dados cadastrais e materiais tecnicos da Authomathika. NR-10, NR-35, RBC.",
  alternates: {
    canonical: "/documentacao",
  },
};

const certifications = [
  {
    name: "SGQ (base ISO 9001)",
    description: "Sistema de gestao da qualidade baseado na norma ISO 9001, garantindo processos padronizados e melhoria continua em todos os projetos.",
    icon: Award,
    status: "Vigente",
  },
  {
    name: "NR-10",
    description: "Conformidade com a Norma Regulamentadora de Seguranca em Instalacoes e Servicos em Eletricidade. Equipe integralmente certificada.",
    icon: Shield,
    status: "Vigente",
  },
  {
    name: "NR-35",
    description: "Conformidade com a Norma Regulamentadora de Trabalho em Altura. Profissionais treinados e equipamentos inspecionados.",
    icon: Shield,
    status: "Vigente",
  },
  {
    name: "RBC – Rede Brasileira de Calibracao",
    description: "Laboratorios fixos e moveis com rastreabilidade INMETRO para calibracao de instrumentos de medicao industrial.",
    icon: FileCheck,
    status: "Vigente",
  },
];

const safetyIndicators = [
  { value: "297.000+", label: "Horas de servico acumuladas", description: "Volume de operacao com historico de seguranca exemplar" },
];

/* TODO: Adicionar links para PDFs reais quando disponiveis */
const technicalMaterials = [
  { title: "Portfolio Institucional", description: "Apresentacao completa da empresa, divisoes e cases de referencia.", format: "PDF", available: false },
  { title: "Catalogo de Produtos", description: "Linha de produtos proprios: SLV-1A, AUTH 300, AUTH 600 e mais.", format: "PDF", available: false },
  { title: "Manual do SGQ", description: "Documentacao do sistema de gestao da qualidade baseado na ISO 9001.", format: "PDF", available: false },
  { title: "Ficha de Pre-Qualificacao", description: "Dados tecnicos e cadastrais para processos de RFP e pre-qualificacao.", format: "PDF", available: false },
];

export default function DocumentacaoPage() {
  return (
    <main>
      <PageIntro
        tag="Pre-qualificacao"
        title="Documentacao e Certificacoes"
        subtitle="Acesso rapido a certificacoes, indicadores de seguranca, dados cadastrais e materiais tecnicos para processos de qualificacao."
        breadcrumbs={[{ label: "Documentacao" }]}
      />

      {/* Certificacoes */}
      <Section>
        <Container>
          <div className="mb-10 max-w-2xl">
            <Eyebrow>Certificacoes</Eyebrow>
            <h2 className="section-heading-sm mt-4 text-zinc-900">
              Qualidade e conformidade comprovadas
            </h2>
            <p className="mt-3 text-base text-zinc-600">
              A Authomathika mantem certificacoes e conformidades regulatorias que garantem a excelencia e seguranca de cada projeto.
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

      {/* Indicadores de seguranca */}
      <Section className="bg-zinc-950">
        <Container>
          <div className="mb-10 max-w-2xl">
            <p className="mono-label-muted mb-4">Seguranca</p>
            <h2 className="section-heading-sm text-white">
              Indicadores de seguranca no trabalho
            </h2>
            <p className="mt-3 text-base text-zinc-400">
              Seguranca nao e meta — e premissa. Cada numero reflete o compromisso da Authomathika com a integridade de seus colaboradores.
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
            <Eyebrow>Dados cadastrais</Eyebrow>
            <h2 className="section-heading-sm mt-4 text-zinc-900">
              Informacoes corporativas
            </h2>
          </div>

          <Panel className="max-w-2xl">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Building2 className="mt-0.5 size-4 shrink-0 text-primary" />
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-zinc-500">Razao Social</p>
                  <p className="text-sm font-semibold text-zinc-900">Authomathika Engenharia Ltda</p>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-zinc-500">CNPJ</p>
                  <p className="text-sm font-semibold text-zinc-900">{company.cnpj}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-zinc-500">Fundacao</p>
                  <p className="text-sm font-semibold text-zinc-900">{company.founded}</p>
                </div>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-zinc-500">Endereco</p>
                <p className="text-sm font-semibold text-zinc-900">{company.address}</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-zinc-500">Telefone</p>
                  <p className="text-sm font-semibold text-zinc-900">{company.phone}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-zinc-500">E-mail Comercial</p>
                  <p className="text-sm font-semibold text-zinc-900">{company.email.comercial}</p>
                </div>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-zinc-500">ERP</p>
                <p className="text-sm font-semibold text-zinc-900">{"TOTVS ERP"}</p>
              </div>
            </div>
          </Panel>
        </Container>
      </Section>

      {/* Materiais tecnicos */}
      <Section className="bg-zinc-50">
        <Container>
          <div className="mb-10 max-w-2xl">
            <Eyebrow>Downloads</Eyebrow>
            <h2 className="section-heading-sm mt-4 text-zinc-900">
              Materiais tecnicos
            </h2>
            <p className="mt-3 text-base text-zinc-600">
              Documentos disponiveis para download. Para materiais adicionais, entre em contato com nosso comercial.
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
                      <Download className="size-3" /> Baixar {material.format}
                    </button>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-xs text-zinc-400">
                      <Clock className="size-3" /> Em breve
                    </span>
                  )}
                </div>
              </Panel>
            ))}
          </div>

          {/* TODO: Adicionar formulario para solicitar documentos adicionais quando backend estiver pronto */}
        </Container>
      </Section>
    </main>
  );
}
