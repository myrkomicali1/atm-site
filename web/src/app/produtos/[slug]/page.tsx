import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getProduct, products } from "@/lib/data/products";
import { productSchema } from "@/lib/schemas";
import { PageIntro } from "@/components/layout/PageIntro";
import { Container, Eyebrow, Panel, Section } from "@/components/site/primitives";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Não encontrado" };

  return {
    title: `${product.name} – ${product.shortDescription}`,
    description: product.description,
    alternates: {
      canonical: `/produtos/${slug}`,
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const schema = productSchema({
    name: product.name,
    description: product.description,
    url: `/produtos/${slug}`,
    specs: product.specs,
    badge: product.badge,
  });

  return (
    <main>
      <script id={`schema-product-${slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <PageIntro
        tag="Produto"
        title={product.name}
        subtitle={product.shortDescription}
        breadcrumbs={[
          { label: "Produtos", href: "/produtos" },
          { label: product.name },
        ]}
      />

      <Section>
        <Container className="grid gap-8 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-8">
            <Panel className="space-y-3">
              <Eyebrow>Aplicação</Eyebrow>
              <p className="text-zinc-600">{product.description}</p>
              {product.badge ? <span className="w-fit rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-primary">{product.badge}</span> : null}
            </Panel>

            <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white">
              <div className="border-b border-zinc-200 px-5 py-3 text-xs uppercase tracking-[0.14em] text-zinc-500">Características principais</div>
              <div className="divide-y divide-zinc-200">
                {product.features.map((feature, idx) => (
                  <div key={feature} className="grid gap-2 px-5 py-4 md:grid-cols-[48px_1fr] md:items-center">
                    <span className="font-mono text-xs text-zinc-500">{String(idx + 1).padStart(2, "0")}</span>
                    <span className="text-sm text-zinc-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {product.specs ? (
              <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white">
                <div className="border-b border-zinc-200 px-5 py-3 text-xs uppercase tracking-[0.14em] text-zinc-500">Especificações</div>
                <div className="divide-y divide-zinc-200">
                  {Object.entries(product.specs).map(([label, value]) => (
                    <div key={label} className="flex items-center justify-between gap-4 px-5 py-4">
                      <span className="text-xs uppercase tracking-[0.14em] text-zinc-500">{label}</span>
                      <span className="text-sm font-semibold text-zinc-900">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          <aside className="space-y-6 lg:col-span-4">
            <Panel className="space-y-4">
              <h3 className="font-display text-xl font-bold text-zinc-900">Solicitar avaliação técnica</h3>
              <Button asChild className="w-full rounded-full font-semibold">
                <Link href="/contato/solicitacao-de-orcamento">
                  Abrir solicitação <ArrowRight className="size-4" />
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
              <Eyebrow>Outros produtos</Eyebrow>
              {products
                .filter((item) => item.slug !== slug)
                .slice(0, 5)
                .map((item) => (
                  <Link key={item.slug} href={`/produtos/${item.slug}`} className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900">
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
