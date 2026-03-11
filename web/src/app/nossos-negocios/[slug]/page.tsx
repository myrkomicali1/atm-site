import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Mail, Phone, ChevronDown, Shield, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { businessAreas, getBusinessArea } from "@/lib/data/businesses";
import { businessFaqs } from "@/lib/data/faqs";
import { serviceSchema, faqSchema } from "@/lib/schemas";
import { PageIntro } from "@/components/layout/PageIntro";
import { Container, Eyebrow, Panel, Section } from "@/components/site/primitives";
import { FAQSection } from "@/components/content/FAQSection";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return businessAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = getBusinessArea(slug);
  if (!area) return { title: "Nao encontrado" };

  return {
    title: `${area.name} – Engenharia Industrial`,
    description: area.description,
    alternates: {
      canonical: `/nossos-negocios/${slug}`,
    },
  };
}

export default async function BusinessPage({ params }: Props) {
  const { slug } = await params;
  const area = getBusinessArea(slug);
  if (!area) notFound();

  const schema = serviceSchema({
    name: area.name,
    description: area.description,
    url: `/nossos-negocios/${slug}`,
    features: area.services,
  });

  const faqs = businessFaqs[slug] ?? [];
  const faqJsonLd = faqs.length > 0 ? faqSchema(faqs) : null;

  return (
    <main>
      <script id={`schema-service-${slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {faqJsonLd ? (
        <script id={`schema-faq-${slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      ) : null}

      <PageIntro
        tag="Divisao"
        title={area.name}
        subtitle={area.shortDescription}
        breadcrumbs={[
          { label: "Nossos Negocios", href: "/nossos-negocios" },
          { label: area.name },
        ]}
      />

      <Section>
        <Container className="grid gap-8 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-8">
            <Panel className="space-y-4">
              <h2 className="mono-label">Contexto tecnico</h2>
              <p className="text-zinc-600">{area.description}</p>
            </Panel>

            {/* Lista de servicos — markup semantico ol/li (Item 20) */}
            <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white">
              <h2 className="border-b border-zinc-200 px-5 py-3 text-xs uppercase tracking-[0.14em] text-zinc-500 font-normal">Servicos e solucoes</h2>
              <ol className="divide-y divide-zinc-200 list-none">
                {area.services.map((item, idx) => (
                  <li key={item} className="grid gap-2 px-5 py-4 md:grid-cols-[48px_1fr] md:items-center">
                    <span className="font-mono text-xs text-zinc-500" aria-hidden="true">{String(idx + 1).padStart(2, "0")}</span>
                    <span className="text-sm text-zinc-700">{item}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Parceiros tecnologicos */}
            {area.partners && area.partners.length > 0 ? (
              <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white">
                <h2 className="border-b border-zinc-200 px-5 py-3 text-xs uppercase tracking-[0.14em] text-zinc-500 font-normal">
                  Parceiros tecnologicos
                </h2>
                <div className="flex flex-wrap gap-2 p-5">
                  {area.partners.map((partner) => (
                    <Badge
                      key={partner}
                      variant="outline"
                      className="rounded-lg border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-medium text-zinc-700"
                    >
                      {partner}
                    </Badge>
                  ))}
                </div>
                <div className="border-t border-zinc-100 px-5 py-3">
                  <p className="text-xs text-zinc-500">
                    Trabalhamos com os principais fabricantes globais, garantindo compatibilidade e suporte tecnico de primeiro nivel.
                  </p>
                </div>
              </div>
            ) : null}

            {/* FAQ — Perguntas Frequentes */}
            {faqs.length > 0 ? (
              <FAQSection
                items={faqs}
                title="Perguntas frequentes"
                standalone={false}
              />
            ) : null}
          </div>

          <aside className="space-y-6 lg:col-span-4">
            <Panel className="space-y-3">
              <h2 className="mono-label">Indicadores da divisao</h2>
              {area.metrics.map((metric) => (
                <div key={metric.label} className="rounded-lg border border-zinc-200 bg-zinc-50 px-4 py-3">
                  <div className="text-xs uppercase tracking-[0.14em] text-zinc-500">{metric.label}</div>
                  <div className="font-display text-2xl font-bold text-zinc-900">{metric.value}</div>
                </div>
              ))}
            </Panel>

            <Panel className="space-y-4">
              <h3 className="font-display text-xl font-bold text-zinc-900">Abrir estudo de escopo</h3>
              <Button asChild className="w-full rounded-full font-semibold">
                <Link href="/contato/solicitacao-de-orcamento">
                  Solicitar proposta tecnica <ArrowRight className="size-4" />
                </Link>
              </Button>

              {/* Trust indicators */}
              <div className="space-y-2 border-t border-zinc-100 pt-4">
                <div className="flex items-center gap-2 text-xs text-zinc-500">
                  <Clock className="size-3.5 text-emerald-500" />
                  <span>Resposta em ate 48h uteis</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-500">
                  <Shield className="size-3.5 text-emerald-500" />
                  <span>Seus dados sao confidenciais</span>
                </div>
              </div>

              <div className="space-y-2 border-t border-zinc-100 pt-4">
                <a
                  href="https://wa.me/5516996465516"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2.5 text-sm font-semibold text-emerald-700 transition-colors hover:bg-emerald-100"
                >
                  <MessageCircle className="size-4" /> Falar via WhatsApp
                </a>
                <a href="tel:+551635134000" className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900">
                  <Phone className="size-4 text-primary" /> (16) 3513-4000
                </a>
                <a href="mailto:comercial@authomathika.com.br" className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900">
                  <Mail className="size-4 text-primary" /> comercial@authomathika.com.br
                </a>
              </div>
            </Panel>
          </aside>
        </Container>
      </Section>
    </main>
  );
}
