import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Mail, Phone, Youtube } from "lucide-react";
import { company } from "@/lib/data/company";

const columns = [
  {
    title: "Empresa",
    links: [
      { label: "Institucional", href: "/empresa/institucional" },
      { label: "Visão Corporativa", href: "/empresa/visao-corporativa" },
      { label: "Clientes", href: "/empresa/clientes" },
      { label: "Linha do Tempo", href: "/empresa/linha-do-tempo" },
    ],
  },
  {
    title: "Soluções",
    links: [
      { label: "Nossos Negócios", href: "/nossos-negocios" },
      { label: "Setores", href: "/setores" },
      { label: "Serviços", href: "/servicos" },
      { label: "Produtos", href: "/produtos" },
      { label: "Cases", href: "/cases" },
    ],
  },
  {
    title: "Contato",
    links: [
      { label: "Fale Conosco", href: "/contato/fale-conosco" },
      { label: "Solicitar Orçamento", href: "/contato/solicitacao-de-orcamento" },
      { label: "Fornecedores", href: "/contato/fornecedores" },
      { label: "Localização", href: "/contato/localizacao" },
    ],
  },
];

const socials = [
  { href: company.social.linkedin, Icon: Linkedin, label: "LinkedIn da Authomathika" },
  { href: company.social.instagram, Icon: Instagram, label: "Instagram da Authomathika" },
  { href: company.social.facebook, Icon: Facebook, label: "Facebook da Authomathika" },
  { href: company.social.youtube, Icon: Youtube, label: "YouTube da Authomathika" },
];

export function SiteFooter() {
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
              Engenharia integradora para sistemas industriais críticos.
            </p>
            <p className="text-sm leading-relaxed text-zinc-500">
              Desde {company.founded}, conectando elétrica, automação, EPC e energias renováveis em projetos de alta exigência.
            </p>
            <div className="mt-7 flex items-center gap-2">
              {socials.map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex size-9 items-center justify-center rounded-lg border border-zinc-800 text-zinc-500 transition-colors hover:border-primary/50 hover:text-primary"
                >
                  <Icon className="size-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          <div className="grid gap-8 sm:grid-cols-3 lg:col-span-8">
            {columns.map((column) => (
              <div key={column.title}>
                <p className="mb-4 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-600">
                  {column.title}
                </p>
                <div className="space-y-2.5">
                  {column.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block text-sm text-zinc-400 transition-colors hover:text-zinc-100"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 py-7 text-xs md:flex-row md:items-center md:justify-between">
          <p className="text-zinc-600">
            © {new Date().getFullYear()} Authomathika Engenharia. Todos os direitos reservados.
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
