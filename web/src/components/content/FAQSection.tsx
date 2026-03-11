"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container, Eyebrow, Section } from "@/components/site/primitives";
import { cn } from "@/lib/utils";

export interface FAQSectionItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  items: FAQSectionItem[];
  title?: string;
  subtitle?: string;
  /** If true, renders as a standalone section with Container wrapper */
  standalone?: boolean;
  className?: string;
}

/**
 * Reusable FAQ component using Shadcn Accordion.
 *
 * JSON-LD schema should be injected in the parent page using
 * `faqSchema()` from `@/lib/schemas` for SEO purposes.
 * This component handles the visual rendering only.
 */
export function FAQSection({
  items,
  title = "Perguntas frequentes",
  subtitle,
  standalone = true,
  className,
}: FAQSectionProps) {
  if (items.length === 0) return null;

  const content = (
    <div className={cn(!standalone && className)}>
      {standalone ? (
        <div className="mb-10 max-w-2xl">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="section-heading-sm mt-4 text-zinc-900">{title}</h2>
          {subtitle ? (
            <p className="mt-3 text-base text-zinc-600">{subtitle}</p>
          ) : null}
        </div>
      ) : null}

      <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
        {!standalone ? (
          <h2 className="border-b border-zinc-200 px-5 py-3 text-xs uppercase tracking-[0.14em] text-zinc-500 font-normal">
            {title}
          </h2>
        ) : null}
        <Accordion type="single" collapsible className="divide-y divide-zinc-200">
          {items.map((item, idx) => (
            <AccordionItem
              key={`faq-${idx}`}
              value={`faq-${idx}`}
              className="border-b-0 last:border-b-0"
            >
              <AccordionTrigger className="px-5 py-4 text-sm font-medium text-zinc-900 hover:no-underline hover:bg-zinc-50 transition-colors">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="px-5 text-sm leading-relaxed text-zinc-600">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );

  if (!standalone) return content;

  return (
    <Section className={cn("bg-zinc-50", className)}>
      <Container className="max-w-4xl">{content}</Container>
    </Section>
  );
}
