import Image from "next/image";
import { Facebook, Instagram, Linkedin, Mail, Phone, Youtube } from "lucide-react";
import { company } from "@/lib/data/company";
import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";

const columnConfigs = [
  {
    key: "empresa" as const,
    links: [
      { labelKey: "institucional", href: "/empresa/institucional" },
      { labelKey: "visaoCorporativa", href: "/empresa/visao-corporativa" },
      { labelKey: "clientes", href: "/empresa/clientes" },
      { labelKey: "linhaDoTempo", href: "/empresa/linha-do-tempo" },
    ],
  },
  {
    key: "solucoes" as const,
    links: [
      { labelKey: "nossosNegocios", href: "/nossos-negocios" },
      { labelKey: "setores", href: "/setores" },
      { labelKey: "servicos", href: "/servicos" },
      { labelKey: "produtos", href: "/produtos" },
      { labelKey: "cases", href: "/cases" },
    ],
  },
  {
    key: "contato" as const,
    links: [
      { labelKey: "faleConosco", href: "/contato/fale-conosco" },
      { labelKey: "solicitarOrcamento", href: "/contato/solicitacao-de-orcamento" },
      { labelKey: "fornecedores", href: "/contato/fornecedores" },
      { labelKey: "localizacao", href: "/contato/localizacao" },
    ],
  },
];

const socialIcons = [
  { key: "linkedin" as const, href: company.social.linkedin, Icon: Linkedin },
  { key: "instagram" as const, href: company.social.instagram, Icon: Instagram },
  { key: "facebook" as const, href: company.social.facebook, Icon: Facebook },
  { key: "youtube" as const, href: company.social.youtube, Icon: Youtube },
];

export async function SiteFooter() {
  const t = await getTranslations("footer");

  return (
    <footer className="bg-zinc-950 text-zinc-400">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Main content */}
        <div className="grid gap-12 border-b border-zinc-800 py-16 lg:grid-cols-12">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <div className="mb-5">
              <Image
                src="/logo-authomathika.png"
                alt="Authomathika"
                width={160}
                height={40}
                className="h-8 w-auto brightness-0 invert"
              />
            </div>
            <p className="mb-2 text-sm font-medium text-zinc-200">
              {t("brandTagline")}
            </p>
            <p className="text-sm leading-relaxed text-zinc-500">
              {t("brandDescription", { founded: company.founded })}
            </p>
            <div className="mt-7 flex items-center gap-2">
              {socialIcons.map(({ key, href, Icon }) => (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t(`socials.${key}`)}
                  className="inline-flex size-9 items-center justify-center rounded-lg border border-zinc-800 text-zinc-500 transition-colors hover:border-primary/50 hover:text-primary"
                >
                  <Icon className="size-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          <nav aria-label={t("navLabel")} className="grid gap-8 sm:grid-cols-3 lg:col-span-8">
            {columnConfigs.map((column) => (
              <div key={column.key}>
                <p className="mb-4 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-600">
                  {t(`columns.${column.key}.title`)}
                </p>
                <ul className="space-y-2.5" role="list">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="block text-sm text-zinc-400 transition-colors hover:text-zinc-100"
                      >
                        {t(`columns.${column.key}.${link.labelKey}`)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 py-7 text-xs md:flex-row md:items-center md:justify-between">
          <p className="text-zinc-600">
            {t("copyright", { year: new Date().getFullYear() })}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <a
              href={`tel:${company.phone.replace(/[^\d+]/g, "")}`}
              className="inline-flex items-center gap-2 text-zinc-500 transition-colors hover:text-zinc-300"
            >
              <Phone className="size-3.5" aria-hidden="true" />
              {company.phone}
            </a>
            <a
              href={`mailto:${company.email.comercial}`}
              className="inline-flex items-center gap-2 text-zinc-500 transition-colors hover:text-zinc-300"
            >
              <Mail className="size-3.5" aria-hidden="true" />
              {company.email.comercial}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
