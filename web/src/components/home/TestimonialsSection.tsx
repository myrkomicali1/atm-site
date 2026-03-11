"use client";

import { Quote } from "lucide-react";
import { EmblaCarousel } from "@/components/ui/carousel-embla";
import { Container, Eyebrow, Section } from "@/components/site/primitives";
import { Badge } from "@/components/ui/badge";
import { testimonials, type Testimonial } from "@/lib/data/testimonials";

interface TestimonialsSectionProps {
  /** Filter testimonials by sector slug */
  sector?: string;
  /** Override default title */
  title?: string;
  /** Override default subtitle */
  subtitle?: string;
  className?: string;
}

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <article className="panel-surface flex h-full flex-col p-6 md:p-8">
      <Quote className="size-8 text-primary/20" aria-hidden="true" />

      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-zinc-600">
        &ldquo;{item.quote}&rdquo;
      </blockquote>

      {item.result ? (
        <div className="mt-4">
          <Badge variant="outline" className="border-emerald-200 bg-emerald-50 text-emerald-700 text-xs">
            {item.result}
          </Badge>
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
        <span className="inline-block rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-0.5 text-[10px] uppercase tracking-[0.14em] text-zinc-500">
          {item.sector}
        </span>
      </div>
    </article>
  );
}

export function TestimonialsSection({
  sector,
  title = "Confianca construida em mais de 200 projetos",
  subtitle = "Parceiros de longa data compartilham suas experiencias com a Authomathika.",
  className,
}: TestimonialsSectionProps) {
  const filtered = sector
    ? testimonials.filter((t) => t.sector === sector)
    : testimonials;

  if (filtered.length === 0) return null;

  return (
    <Section className={className}>
      <Container>
        <div className="mb-12 max-w-2xl">
          <Eyebrow>Depoimentos</Eyebrow>
          <h2 className="section-heading-sm mt-4 text-zinc-900">{title}</h2>
          <p className="mt-3 text-base text-zinc-600">{subtitle}</p>
        </div>

        <EmblaCarousel
          loop
          autoplay={6000}
          align="start"
          slideClass="basis-full md:basis-1/2 lg:basis-1/3"
        >
          {filtered.map((item) => (
            <TestimonialCard key={item.id} item={item} />
          ))}
        </EmblaCarousel>
      </Container>
    </Section>
  );
}
