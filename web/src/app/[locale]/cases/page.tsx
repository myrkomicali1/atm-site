"use client";

import { Link } from "@/i18n/routing";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { caseStudies, getFeaturedCaseStudies } from "@/lib/data/case-studies";
import { sectors } from "@/lib/data/sectors";
import { useState } from "react";
import { useTranslations } from "next-intl";

function CaseCard({
  cs,
}: {
  cs: (typeof caseStudies)[0];
}) {
  const t = useTranslations("pages.caseList");
  const tt = useTranslations("pages.caseDetail.typeLabels");
  const td = useTranslations("caseStudyData");

  const hasDetails = cs.hasDetails !== false;
  const cardContent = (
    <>
      <div className="relative aspect-[16/9]">
        <Image
          src={cs.image}
          alt={td.raw(`${cs.slug}.altText`) as string ?? cs.altText}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={`object-cover transition-transform duration-500 ${hasDetails ? "group-hover:scale-105" : ""}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent" />
        <div className="absolute bottom-3 left-3 flex gap-2">
          <span className="rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-700">
            {tt(cs.type)}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg font-bold text-zinc-900">
          {td.raw(`${cs.slug}.title`) as string ?? cs.title}
        </h3>
        <p className="mt-1 text-xs text-zinc-500">
          {cs.client} — {cs.location}
        </p>
        <p className="mt-2 line-clamp-2 text-sm text-zinc-600">
          {((td.raw(`${cs.slug}.challenge`) as string) ?? "").split(". ")[0]}.
        </p>

        {cs.results.length > 0 ? (
          <div className="mt-3 flex flex-wrap gap-2">
            {cs.results.slice(0, 2).map((r, i) => (
              <span
                key={r.metric}
                className="rounded-full bg-primary/8 px-2.5 py-0.5 text-[10px] font-semibold text-primary"
              >
                {td.raw(`${cs.slug}.results.${i}.metric`) as string}: {td.raw(`${cs.slug}.results.${i}.value`) as string}
              </span>
            ))}
          </div>
        ) : null}

        {hasDetails && (
          <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-zinc-400 transition-colors group-hover:text-primary">
            <span>{t("viewFullCase")}</span>
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
          </div>
        )}
      </div>
    </>
  );

  if (!hasDetails) {
    return (
      <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-white">
        {cardContent}
      </div>
    );
  }

  return (
    <Link
      href={`/cases/${cs.slug}`}
      className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-zinc-900/6"
    >
      {cardContent}
    </Link>
  );
}

export default function CasesPage() {
  const t = useTranslations("pages.caseList");
  const ts = useTranslations("sectorNames");

  const [activeFilter, setActiveFilter] = useState<string>("todos");

  const featured = getFeaturedCaseStudies();
  const sectorFilters = sectors
    .filter((s) =>
      caseStudies.some((c) => c.sector === s.slug),
    )
    .map((s) => ({ slug: s.slug }));

  const filtered =
    activeFilter === "todos"
      ? caseStudies
      : caseStudies.filter((c) => c.sector === activeFilter);

  return (
    <main>
      {/* Page intro */}
      <section className="relative overflow-hidden border-b border-zinc-200 bg-white pt-24 pb-14 md:pt-28 md:pb-18">
        <div className="page-grid absolute inset-0 opacity-40 pointer-events-none" aria-hidden="true" />
        <div className="absolute top-0 inset-x-0 h-0.5 bg-primary" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8">
          <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-1.5 text-xs text-zinc-600">
            <Link href="/" className="transition-colors hover:text-zinc-700">{t("breadcrumbHome")}</Link>
            <span className="text-zinc-300">/</span>
            <span className="font-medium text-zinc-700" aria-current="page">{t("breadcrumbCases")}</span>
          </nav>

          <div className="grid gap-8 md:grid-cols-12 md:items-end">
            <div className="space-y-4 md:col-span-7">
              <p className="mono-label">{t("tag")}</p>
              <div className="h-0.5 w-10 bg-primary" />
              <h1 className="section-heading text-zinc-900">
                {t("heading")}
              </h1>
            </div>
            <div className="md:col-span-5">
              <p className="text-base leading-relaxed text-zinc-500 md:text-lg">
                {t("subtitle")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters + grid */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          {/* Filter tabs */}
          <div className="mb-10 flex flex-wrap gap-2">
            <button
              onClick={() => setActiveFilter("todos")}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                activeFilter === "todos"
                  ? "border-primary bg-primary text-white"
                  : "border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300 hover:bg-zinc-50"
              }`}
            >
              {t("allSectors")}
            </button>
            {sectorFilters.map((sf) => (
              <button
                key={sf.slug}
                onClick={() => setActiveFilter(sf.slug)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  activeFilter === sf.slug
                    ? "border-primary bg-primary text-white"
                    : "border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300 hover:bg-zinc-50"
                }`}
              >
                {ts(`${sf.slug}.name`)}
              </button>
            ))}
          </div>

          {/* Featured cases (only when "todos") */}
          {activeFilter === "todos" && featured.length > 0 ? (
            <div className="mb-8">
              <p className="mono-label mb-4">{t("featured")}</p>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {featured.map((cs) => (
                  <CaseCard key={cs.slug} cs={cs} />
                ))}
              </div>
            </div>
          ) : null}

          {/* All cases grid */}
          <div>
            {activeFilter === "todos" ? (
              <p className="mono-label mb-4">{t("allProjects")}</p>
            ) : null}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {filtered
                .filter(
                  (c) =>
                    activeFilter !== "todos" || !c.featured,
                )
                .map((cs) => (
                  <CaseCard key={cs.slug} cs={cs} />
                ))}
            </div>

            {filtered.length === 0 ? (
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-12 text-center">
                <p className="text-sm text-zinc-500">
                  {t("noCasesFound")}
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </main>
  );
}
