import { Quote, Star } from "lucide-react";
import {
  testimonials,
  getFeaturedTestimonials,
  type Testimonial,
} from "@/lib/data/testimonials";
import { Container, Eyebrow, Section } from "@/components/site/primitives";

const SITE_URL = "https://www.authomathika.com.br";

function reviewSchema(items: Testimonial[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    review: items.map((item) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: item.name,
        jobTitle: item.role,
      },
      reviewBody: item.quote,
      reviewRating: {
        "@type": "Rating",
        ratingValue: item.rating,
        bestRating: 5,
      },
      publisher: {
        "@type": "Organization",
        name: item.company,
      },
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue:
        items.reduce((sum, t) => sum + t.rating, 0) / items.length,
      reviewCount: items.length,
      bestRating: 5,
    },
  };
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} de 5 estrelas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`size-3.5 ${i < rating ? "fill-amber-400 text-amber-400" : "text-zinc-300"}`}
        />
      ))}
    </div>
  );
}

interface TestimonialsProps {
  /** Show only featured testimonials (default: true) */
  featuredOnly?: boolean;
  /** Filter by sector slug */
  sector?: string;
  /** Custom title */
  title?: string;
  /** Custom subtitle */
  subtitle?: string;
}

export function Testimonials({
  featuredOnly = true,
  sector,
  title,
  subtitle,
}: TestimonialsProps = {}) {
  let items: Testimonial[];

  if (sector) {
    items = testimonials.filter((t) => t.sector === sector);
  } else if (featuredOnly) {
    items = getFeaturedTestimonials();
  } else {
    items = testimonials;
  }

  if (items.length === 0) return null;

  const schema = reviewSchema(items);

  return (
    <Section className="bg-zinc-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <Container>
        <div className="mb-12 max-w-2xl">
          <Eyebrow>Depoimentos</Eyebrow>
          <h2 className="section-heading-sm mt-4 text-zinc-900">
            {title ?? "Confiança construída em mais de 200 projetos"}
          </h2>
          <p className="mt-3 text-base text-zinc-600">
            {subtitle ??
              "Parceiros de longa data compartilham suas experiências com a Authomathika."}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {items.map((item) => (
            <article
              key={item.id}
              className="panel-surface p-6 md:p-8 hover-lift"
            >
              <Quote className="size-8 text-primary/20" aria-hidden="true" />

              <blockquote className="mt-4 text-sm leading-relaxed text-zinc-600">
                &ldquo;{item.quote}&rdquo;
              </blockquote>

              {item.result ? (
                <div className="mt-4">
                  <span className="inline-block rounded-full bg-primary/8 px-3 py-1 text-xs font-semibold text-primary">
                    {item.result}
                  </span>
                </div>
              ) : null}

              <div className="mt-6 flex items-center justify-between border-t border-zinc-100 pt-4">
                <div>
                  <div className="font-display text-sm font-bold text-zinc-900">
                    {item.name}
                  </div>
                  <div className="text-xs text-zinc-500">
                    {item.role} &mdash; {item.company}
                  </div>
                </div>
                <StarRating rating={item.rating} />
              </div>

              <div className="mt-2">
                <span className="inline-block rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-0.5 text-[10px] uppercase tracking-[0.14em] text-zinc-500">
                  {item.sector}
                </span>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
