"use client";

import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";
import { useTranslations } from "next-intl";
import {
  Menu,
  X,
  Sun,
  Zap,
  Cpu,
  Wrench,
  Settings,
  Building2,
  Factory,
  Mountain,
  ArrowUpRight,
  Droplets,
  Sprout,
  UtensilsCrossed,
  Flame,
  Warehouse,
  TreePine,
  Landmark,
  Fuel,
  Building,
  LayoutGrid,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { businessAreas } from "@/lib/data/businesses";
import { getFeaturedSectors } from "@/lib/data/sectors";
import { servicePages } from "@/lib/data/services";
import { cn } from "@/lib/utils";
import { LanguageSwitcher } from "./LanguageSwitcher";

type MegaPanel = "soluções" | "empresa" | "setores" | "serviços" | "produtos" | null;

const iconMap: Record<string, React.ElementType> = {
  Sun, Zap, Cpu, Wrench, Settings, Building2, Factory, Mountain,
  Droplets, Sprout, UtensilsCrossed, Flame, Warehouse, TreePine,
  Landmark, Fuel, Building, LayoutGrid,
};

const empresaLinkKeys = [
  { key: "institucional", href: "/empresa/institucional" },
  { key: "visaoCorporativa", href: "/empresa/visao-corporativa" },
  { key: "linhaDoTempo", href: "/empresa/linha-do-tempo" },
  { key: "clientes", href: "/empresa/clientes" },
] as const;

const produtoLinks = [
  { slug: "slv-1a", href: "/produtos/slv-1a" },
  { slug: "dclt-1c", href: "/produtos/dclt-1c" },
  { slug: "paineis", href: "/produtos/paineis" },
] as const;

const simpleLinkKeys = [
  { key: "cases", href: "/cases" },
  { key: "mediaCenter", href: "/media-center" },
  { key: "contato", href: "/contato" },
  { key: "trabalheConosco", href: "https://authomathika.gupy.io", external: true },
] as const;

export function SiteHeader() {
  const [activeMega, setActiveMega] = useState<MegaPanel>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const megaPanelRef = useRef<HTMLDivElement>(null);

  const t = useTranslations("nav");
  const te = useTranslations("navEmpresa");
  const tc = useTranslations("common");
  const tBiz = useTranslations("businessAreasData");
  const tSec = useTranslations("sectorNames");
  const tSvc = useTranslations("serviceData");
  const tProd = useTranslations("productData");

  const featuredSectors = getFeaturedSectors();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMega = useCallback(() => setActiveMega(null), []);

  const handleMegaKeyDown = useCallback(
    (e: React.KeyboardEvent, panel: MegaPanel) => {
      if (e.key === "Escape") {
        closeMega();
        (e.currentTarget as HTMLElement).focus();
      } else if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setActiveMega((prev) => (prev === panel ? null : panel));
      } else if (e.key === "ArrowDown" && activeMega === panel) {
        e.preventDefault();
        const firstLink = megaPanelRef.current?.querySelector<HTMLElement>("a, button");
        firstLink?.focus();
      }
    },
    [activeMega, closeMega],
  );

  const handlePanelKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMega();
      }
    },
    [closeMega],
  );

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-200",
        scrolled
          ? "border-b border-zinc-200 bg-white/97 shadow-sm backdrop-blur-xl"
          : "bg-white/90 backdrop-blur-md",
      )}
      onMouseLeave={closeMega}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center"
          onClick={() => { closeMega(); setMobileOpen(false); }}
        >
          <Image src="/logo-authomathika.png" alt="Authomathika" width={160} height={40} className="h-9 w-auto" priority />
        </Link>

        <nav aria-label={t("mainNav")} className="hidden items-center gap-0.5 lg:flex">
          <Link
            href="/empresa"
            className={cn(
              "rounded-md px-3 py-2 text-sm font-medium transition-colors",
              activeMega === "empresa" ? "bg-zinc-100 text-zinc-900" : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900",
            )}
            onMouseEnter={() => setActiveMega("empresa")}
          >
            {t("empresa")}
          </Link>

          <Link
            href="/nossos-negocios"
            className={cn(
              "rounded-md px-3 py-2 text-sm font-medium transition-colors",
              activeMega === "soluções" ? "bg-zinc-100 text-zinc-900" : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900",
            )}
            onMouseEnter={() => setActiveMega("soluções")}
          >
            {t("solucoes")}
          </Link>

          <Link
            href="/setores"
            className={cn(
              "rounded-md px-3 py-2 text-sm font-medium transition-colors",
              activeMega === "setores" ? "bg-zinc-100 text-zinc-900" : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900",
            )}
            onMouseEnter={() => setActiveMega("setores")}
          >
            {t("setores")}
          </Link>

          <Link
            href="/servicos"
            className={cn(
              "rounded-md px-3 py-2 text-sm font-medium transition-colors",
              activeMega === "serviços" ? "bg-zinc-100 text-zinc-900" : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900",
            )}
            onMouseEnter={() => setActiveMega("serviços")}
          >
            {t("servicos")}
          </Link>

          <Link
            href="/produtos"
            className={cn(
              "rounded-md px-3 py-2 text-sm font-medium transition-colors",
              activeMega === "produtos" ? "bg-zinc-100 text-zinc-900" : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900",
            )}
            onMouseEnter={() => setActiveMega("produtos")}
          >
            {t("produtos")}
          </Link>

          {simpleLinkKeys.map((item) =>
            "external" in item && item.external ? (
              <a
                key={item.key}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md px-3 py-2 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-50 hover:text-zinc-900"
                onMouseEnter={closeMega}
              >
                {t(item.key)}
              </a>
            ) : (
              <Link
                key={item.key}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-50 hover:text-zinc-900"
                onMouseEnter={closeMega}
              >
                {t(item.key)}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <Button asChild size="sm" className="hidden rounded-full px-5 font-semibold sm:inline-flex">
            <Link href="/contato/solicitacao-de-orcamento">{tc("solicitarProposta")}</Link>
          </Button>
          <button
            className="inline-flex size-9 items-center justify-center rounded-lg border border-zinc-200 text-zinc-600 transition-colors hover:bg-zinc-50 lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? tc("fecharMenu") : tc("abrirMenu")}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="size-4.5" /> : <Menu className="size-4.5" />}
          </button>
        </div>
      </div>

      {/* Mega panel: Soluções */}
      {activeMega === "soluções" ? (
        <div
          ref={megaPanelRef}
          role="region"
          aria-label={t("solucoes")}
          className="animate-reveal absolute left-0 right-0 top-full border-b border-zinc-200 bg-white shadow-2xl shadow-zinc-900/10"
          onKeyDown={handlePanelKeyDown}
        >
          <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8">
            <div className="mb-5 flex items-center justify-between">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-400">
                {t("divisoesOperacionais")}
              </p>
              <Link
                href="/nossos-negocios"
                className="inline-flex items-center gap-1 text-xs font-semibold text-primary transition-opacity hover:opacity-80"
                onClick={closeMega}
              >
                {t("verTodasDivisoes")} <ArrowUpRight className="size-3.5" />
              </Link>
            </div>
            <ul role="list" className="grid grid-cols-2 gap-3 lg:grid-cols-3">
              {businessAreas.map((area) => {
                const Icon = iconMap[area.icon] ?? Building2;
                return (
                  <li key={area.slug}>
                    <Link
                      href={`/nossos-negocios/${area.slug}`}
                      className="group flex items-start gap-3 rounded-xl border border-zinc-100 bg-zinc-50/50 p-4 transition-all hover:border-primary/20 hover:bg-white hover:shadow-sm"
                      onClick={closeMega}
                    >
                      <div className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-400 transition-colors group-hover:border-primary/20 group-hover:text-primary">
                        <Icon className="size-4.5" aria-hidden="true" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-display text-sm font-bold text-zinc-900">{tBiz(`${area.slug}.name`)}</p>
                        <p className="mt-0.5 line-clamp-1 text-xs text-zinc-500">{tBiz(`${area.slug}.shortDescription`)}</p>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      ) : null}

      {/* Mega panel: Empresa */}
      {activeMega === "empresa" ? (
        <div
          ref={megaPanelRef}
          role="region"
          aria-label={t("empresa")}
          className="animate-reveal absolute left-0 right-0 top-full border-b border-zinc-200 bg-white shadow-2xl shadow-zinc-900/10"
          onKeyDown={handlePanelKeyDown}
        >
          <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8">
            <p className="mb-5 font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-400">
              {t("aEmpresa")}
            </p>
            <ul role="list" className="grid grid-cols-2 gap-3 lg:grid-cols-4">
              {empresaLinkKeys.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group block rounded-xl border border-zinc-100 bg-zinc-50/50 p-4 transition-all hover:border-primary/20 hover:bg-white hover:shadow-sm"
                    onClick={closeMega}
                  >
                    <p className="font-display text-sm font-bold text-zinc-900 group-hover:text-primary transition-colors">
                      {te(`${link.key}.label`)}
                    </p>
                    <p className="mt-1 text-xs text-zinc-500">{te(`${link.key}.desc`)}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}

      {/* Mega panel: Setores */}
      {activeMega === "setores" ? (
        <div
          ref={megaPanelRef}
          role="region"
          aria-label={t("setores")}
          className="animate-reveal absolute left-0 right-0 top-full border-b border-zinc-200 bg-white shadow-2xl shadow-zinc-900/10"
          onKeyDown={handlePanelKeyDown}
        >
          <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8">
            <div className="mb-5 flex items-center justify-between">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-400">
                {t("setoresQueAtendemos")}
              </p>
              <Link
                href="/setores"
                className="inline-flex items-center gap-1 text-xs font-semibold text-primary transition-opacity hover:opacity-80"
                onClick={closeMega}
              >
                {t("verTodosOsSetores")} <ArrowUpRight className="size-3.5" />
              </Link>
            </div>
            <ul role="list" className="grid grid-cols-1 gap-3 lg:grid-cols-3">
              {featuredSectors.map((sector) => {
                const Icon = iconMap[sector.icon] ?? Factory;
                return (
                  <li key={sector.slug}>
                    <Link
                      href={`/setores/${sector.slug}`}
                      className="group flex items-start gap-3 rounded-xl border border-zinc-100 bg-zinc-50/50 p-4 transition-all hover:border-primary/20 hover:bg-white hover:shadow-sm"
                      onClick={closeMega}
                    >
                      <div className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-400 transition-colors group-hover:border-primary/20 group-hover:text-primary">
                        <Icon className="size-4.5" aria-hidden="true" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-display text-sm font-bold text-zinc-900">{tSec(`${sector.slug}.name`)}</p>
                        <p className="mt-0.5 line-clamp-2 text-xs text-zinc-500">{tSec(`${sector.slug}.headline`)}</p>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      ) : null}

      {/* Mega panel: Serviços */}
      {activeMega === "serviços" ? (
        <div
          ref={megaPanelRef}
          role="region"
          aria-label={t("servicos")}
          className="animate-reveal absolute left-0 right-0 top-full border-b border-zinc-200 bg-white shadow-2xl shadow-zinc-900/10"
          onKeyDown={handlePanelKeyDown}
        >
          <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8">
            <div className="mb-5 flex items-center justify-between">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-400">
                {t("servicos")}
              </p>
              <Link
                href="/servicos"
                className="inline-flex items-center gap-1 text-xs font-semibold text-primary transition-opacity hover:opacity-80"
                onClick={closeMega}
              >
                {t("verTodosServicos")} <ArrowUpRight className="size-3.5" />
              </Link>
            </div>
            <ul role="list" className="grid grid-cols-1 gap-3 lg:grid-cols-3">
              {servicePages.slice(0, 3).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/servicos/${service.slug}`}
                    className="group block rounded-xl border border-zinc-100 bg-zinc-50/50 p-4 transition-all hover:border-primary/20 hover:bg-white hover:shadow-sm"
                    onClick={closeMega}
                  >
                    <p className="font-display text-sm font-bold text-zinc-900 group-hover:text-primary transition-colors">
                      {tSvc(`${service.slug}.name`)}
                    </p>
                    <p className="mt-1 line-clamp-2 text-xs text-zinc-500">{tSvc(`${service.slug}.shortDescription`)}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}

      {/* Mega panel: Produtos */}
      {activeMega === "produtos" ? (
        <div
          ref={megaPanelRef}
          role="region"
          aria-label={t("produtos")}
          className="animate-reveal absolute left-0 right-0 top-full border-b border-zinc-200 bg-white shadow-2xl shadow-zinc-900/10"
          onKeyDown={handlePanelKeyDown}
        >
          <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8">
            <div className="mb-5 flex items-center justify-between">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-zinc-400">
                {t("produtos")}
              </p>
              <Link
                href="/produtos"
                className="inline-flex items-center gap-1 text-xs font-semibold text-primary transition-opacity hover:opacity-80"
                onClick={closeMega}
              >
                {t("verTodosProdutos")} <ArrowUpRight className="size-3.5" />
              </Link>
            </div>
            <ul role="list" className="grid grid-cols-1 gap-3 lg:grid-cols-3">
              {produtoLinks.map((product) => (
                <li key={product.slug}>
                  <Link
                    href={product.href}
                    className="group block rounded-xl border border-zinc-100 bg-zinc-50/50 p-4 transition-all hover:border-primary/20 hover:bg-white hover:shadow-sm"
                    onClick={closeMega}
                  >
                    <p className="font-display text-sm font-bold text-zinc-900 group-hover:text-primary transition-colors">
                      {tProd(`${product.slug}.name`)}
                    </p>
                    <p className="mt-1 line-clamp-2 text-xs text-zinc-500">{tProd(`${product.slug}.shortDescription`)}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-t border-zinc-100 bg-white transition-all duration-300 lg:hidden",
          mobileOpen ? "max-h-[85vh] overflow-y-auto" : "max-h-0",
        )}
        role="dialog"
        aria-label={tc("abrirMenu")}
        aria-hidden={!mobileOpen}
      >
        <nav aria-label={t("mobileNav")} className="mx-auto max-w-7xl space-y-1 px-5 py-5 sm:px-8">
          <div>
            <p className="px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
              {t("empresa")}
            </p>
            {empresaLinkKeys.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
                onClick={() => setMobileOpen(false)}
              >
                {te(`${link.key}.label`)}
              </Link>
            ))}
          </div>

          <div>
            <p className="px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
              {t("solucoes")}
            </p>
            {businessAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/nossos-negocios/${area.slug}`}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
                onClick={() => setMobileOpen(false)}
              >
                {tBiz(`${area.slug}.name`)}
              </Link>
            ))}
          </div>

          <div>
            <p className="px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
              {t("setores")}
            </p>
            {featuredSectors.map((sector) => (
              <Link
                key={sector.slug}
                href={`/setores/${sector.slug}`}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
                onClick={() => setMobileOpen(false)}
              >
                {tSec(`${sector.slug}.name`)}
              </Link>
            ))}
            <Link
              href="/setores"
              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-primary hover:bg-zinc-50"
              onClick={() => setMobileOpen(false)}
            >
              {t("verTodosOsSetores")}
            </Link>
          </div>

          <div>
            <p className="px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
              {t("servicos")}
            </p>
            {servicePages.slice(0, 3).map((service) => (
              <Link
                key={service.slug}
                href={`/servicos/${service.slug}`}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
                onClick={() => setMobileOpen(false)}
              >
                {tSvc(`${service.slug}.name`)}
              </Link>
            ))}
            <Link
              href="/servicos"
              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-primary hover:bg-zinc-50"
              onClick={() => setMobileOpen(false)}
            >
              {t("verTodosServicos")}
            </Link>
          </div>

          <div>
            <p className="px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
              {t("produtos")}
            </p>
            {produtoLinks.map((product) => (
              <Link
                key={product.slug}
                href={product.href}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
                onClick={() => setMobileOpen(false)}
              >
                {tProd(`${product.slug}.name`)}
              </Link>
            ))}
            <Link
              href="/produtos"
              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-primary hover:bg-zinc-50"
              onClick={() => setMobileOpen(false)}
            >
              {t("verTodosProdutos")}
            </Link>
          </div>

          {simpleLinkKeys.map((item) =>
            "external" in item && item.external ? (
              <a
                key={item.key}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
                onClick={() => setMobileOpen(false)}
              >
                {t(item.key)}
              </a>
            ) : (
              <Link
                key={item.key}
                href={item.href}
                className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
                onClick={() => setMobileOpen(false)}
              >
                {t(item.key)}
              </Link>
            ),
          )}

          <div className="border-t border-zinc-100 pt-4">
            <Button asChild className="w-full rounded-full font-semibold">
              <Link href="/contato/solicitacao-de-orcamento" onClick={() => setMobileOpen(false)}>
                {tc("solicitarProposta")}
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
