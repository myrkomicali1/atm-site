import { ArrowRight, Mail, Phone } from "lucide-react";
import { company } from "@/lib/data/company";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

export async function ContactCTA() {
  const t = await getTranslations("contactCta");
  const tc = await getTranslations("common");

  return (
    <section className="border-t border-zinc-100 bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left: typographic statement */}
          <AnimateOnScroll variant="fade-left">
          <div>
            <div className="mb-5 h-0.5 w-10 bg-primary" />
            <h2 className="font-display text-[clamp(2rem,4.5vw,4.25rem)] font-bold leading-[1.02] tracking-[-0.03em] text-zinc-900">
              {t("heading")}
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-zinc-500">
              {t("description")}
            </p>
          </div>
          </AnimateOnScroll>

          {/* Right: action cards */}
          <AnimateOnScroll variant="fade-right" delay={200}>
          <div className="space-y-3">
            <Button
              asChild
              size="lg"
              className="flex h-14 w-full items-center justify-between rounded-2xl px-6 text-base font-semibold"
            >
              <Link href="/contato/solicitacao-de-orcamento">
                <span>{tc("solicitarPropostaTecnica")}</span>
                <ArrowRight className="size-5" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="flex h-14 w-full items-center justify-between rounded-2xl border-zinc-200 px-6 text-base font-semibold text-zinc-700 hover:bg-zinc-50"
            >
              <Link href="/contato/fale-conosco">
                <span>{tc("faleConosco")}</span>
                <ArrowRight className="size-5" />
              </Link>
            </Button>

            {/* Direct contacts */}
            <div className="flex flex-col gap-3 border-t border-zinc-100 pt-5">
              <a
                href={`tel:${company.phone.replace(/[^\d+]/g, "")}`}
                className="inline-flex items-center gap-3 text-sm text-zinc-500 transition-colors hover:text-zinc-900"
              >
                <div className="flex size-8 items-center justify-center rounded-lg border border-zinc-200">
                  <Phone className="size-3.5" />
                </div>
                {company.phone}
              </a>
              <a
                href={`mailto:${company.email.comercial}`}
                className="inline-flex items-center gap-3 text-sm text-zinc-500 transition-colors hover:text-zinc-900"
              >
                <div className="flex size-8 items-center justify-center rounded-lg border border-zinc-200">
                  <Mail className="size-3.5" />
                </div>
                {company.email.comercial}
              </a>
            </div>
          </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
