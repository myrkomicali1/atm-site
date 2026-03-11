import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { works } from "@/lib/data/company";

interface WorkCardProps {
  work: (typeof works)[0];
  sizes: string;
  className?: string;
  titleSize?: "lg" | "md" | "sm";
  hideDescription?: boolean;
}

function WorkCard({
  work,
  sizes,
  className = "",
  titleSize = "md",
  hideDescription = false,
}: WorkCardProps) {
  const titleClasses = {
    lg: "text-2xl",
    md: "text-xl",
    sm: "text-base",
  };
  return (
    <article
      className={`group relative overflow-hidden rounded-2xl bg-zinc-100 ${className}`}
    >
      <Image
        src={work.image}
        alt={work.altText ?? work.title}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-zinc-950/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <div className="mb-1 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
          {work.category}
        </div>
        <h3 className={`font-display font-bold text-white ${titleClasses[titleSize]}`}>
          {work.title}
        </h3>
        {!hideDescription ? (
          <p className="mt-1 line-clamp-1 text-sm text-zinc-300">{work.description}</p>
        ) : null}
      </div>
    </article>
  );
}

export function WorksGallery() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="mono-label mb-3">Portfólio</p>
            <h2 className="section-heading-sm text-zinc-900">Entregas de referência.</h2>
          </div>
          <Link
            href="/cases"
            className="hidden items-center gap-2 text-sm font-semibold text-zinc-400 transition-colors hover:text-zinc-900 sm:inline-flex"
          >
            Ver todos os cases <ArrowRight className="size-4" />
          </Link>
        </div>

        {/* Asymmetric hero grid — 1 large (3 cols, 2 rows) + 2 medium (2 cols each) */}
        <div
          className="grid gap-4 lg:grid-cols-5"
          style={{ gridTemplateRows: "280px 280px" }}
        >
          <WorkCard
            work={works[1]}
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="min-h-[360px] lg:col-span-3 lg:row-span-2 lg:min-h-0"
            titleSize="lg"
          />
          <WorkCard
            work={works[2]}
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="min-h-[200px] lg:col-span-2 lg:min-h-0"
          />
          <WorkCard
            work={works[3]}
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="min-h-[200px] lg:col-span-2 lg:min-h-0"
          />
        </div>

        {/* Smaller works strip — 4 cards */}
        <div className="mt-4 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {works.slice(4, 8).map((work) => (
            <WorkCard
              key={work.title}
              work={work}
              sizes="(max-width: 640px) 50vw, 25vw"
              className="min-h-[160px]"
              titleSize="sm"
              hideDescription
            />
          ))}
        </div>

        {/* Mobile: view all */}
        <div className="mt-8 flex justify-center sm:hidden">
          <Link
            href="/cases"
            className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-500 hover:text-zinc-900"
          >
            Ver todos os cases <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
