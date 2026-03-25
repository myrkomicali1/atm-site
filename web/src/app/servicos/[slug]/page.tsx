import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getServicePage, servicePages } from "@/lib/data/services";
import { serviceSchema } from "@/lib/schemas";
import { PageIntro } from "@/components/layout/PageIntro";
import { Container, Eyebrow, Panel, Section } from "@/components/site/primitives";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicePages.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServicePage(slug);
  if (!service) return { title: "Não encontrado" };

  return {
    title: `${service.name} – Serviços Industriais`,
    description: service.description,
    alternates: {
      canonical: `/servicos/${slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServicePage(slug);
  if (!service) notFound();

  const schema = serviceSchema({
    name: service.name,
    description: service.description,
    url: `/servicos/${slug}`,
    features: service.features,
  });

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <PageIntro
        tag="Serviço"
        title={service.name}
        subtitle={service.shortDescription}
        breadcrumbs={[
          { label: "Serviços", href: "/servicos" },
          { label: service.name },
        ]}
      />

      <Section>
        <Container className="grid gap-8 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-8">
            <Panel className="space-y-3">
              <Eyebrow>Escopo</Eyebrow>
              <p className="text-zinc-600">{service.description}</p>
            </Panel>

            <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white">
              <div className="border-b border-zinc-200 px-5 py-3 text-xs uppercase tracking-[0.14em] text-zinc-500">Entregáveis</div>
              <div className="divide-y divide-zinc-200">
                {service.features.map((item, idx) => (
                  <div key={item} className="grid gap-2 px-5 py-4 md:grid-cols-[48px_1fr] md:items-center">
                    <span className="font-mono text-xs text-zinc-500">{String(idx + 1).padStart(2, "0")}</span>
                    <span className="text-sm text-zinc-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-6 lg:col-span-4">
            {service.certifications?.length ? (
              <Panel className="space-y-3">
                <Eyebrow>Certificações</Eyebrow>
                <div className="flex flex-wrap gap-2">
                  {service.certifications.map((item) => (
                    <span key={item} className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-primary">
                      {item}
                    </span>
                  ))}
                </div>
              </Panel>
            ) : null}

            <Panel className="space-y-4">
              <h3 className="font-display text-xl font-bold text-zinc-900">Falar com especialista</h3>
              <Button asChild className="w-full rounded-full font-semibold">
                <Link href="/contato/fale-conosco">
                  Abrir atendimento <ArrowRight className="size-4" />
                </Link>
              </Button>
              <a href="tel:+551635134000" className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900">
                <Phone className="size-4 text-primary" /> (16) 3513-4000
              </a>
              <a href="mailto:comercial@authomathika.com.br" className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900">
                <Mail className="size-4 text-primary" /> comercial@authomathika.com.br
              </a>
            </Panel>

            <Panel className="space-y-3">
              <Eyebrow>Outros serviços</Eyebrow>
              {servicePages
                .filter((item) => item.slug !== slug)
                .slice(0, 4)
                .map((item) => (
                  <Link key={item.slug} href={`/servicos/${item.slug}`} className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900">
                    <ArrowRight className="size-3 text-primary" /> {item.name}
                  </Link>
                ))}
            </Panel>
          </aside>
        </Container>
      </Section>
    </main>
  );
}
