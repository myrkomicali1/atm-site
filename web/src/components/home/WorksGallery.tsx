import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { works } from "@/lib/data/company";
import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";

interface WorkCardProps {
  work: (typeof works)[0];
  index: number;
  sizes: string;
  className?: string;
  titleSize?: "lg" | "md" | "sm";
  hideDescription?: boolean;
  tWorks: Awaited<ReturnType<typeof getTranslations<"worksData">>>;
}

function WorkCard({
  work,
  index,
  sizes,
  className = "",
  titleSize = "md",
  hideDescription = false,
  tWorks,
}: WorkCardProps) {
  const titleClasses = {
    lg: "text-2xl",
    md: "text-xl",
    sm: "text-base",
  };
  const category = tWorks.has(`${index}.category`)
    ? tWorks(`${index}.category`)
    : work.category;
  const description = tWorks.has(`${index}.description`)
    ? tWorks(`${index}.description`)
    : work.description;
  const altText = tWorks.has(`${index}.altText`)
    ? tWorks(`${index}.altText`)
    : (work.altText ?? work.title);

  return (
    <article
      className={`group relative overflow-hidden rounded-2xl bg-zinc-100 ${className}`}
    >
      <Image
        src={work.image}
        alt={altText}
        fill
        sizes={sizes}
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-zinc-950/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <div className="mb-1 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-primary">
          {category}
        </div>
        <h3 className={`font-display font-bold text-white ${titleClasses[titleSize]}`}>
          {work.title}
        </h3>
        {!hideDescription ? (
          <p className="mt-1 line-clamp-1 text-sm text-zinc-300">{description}</p>
        ) : null}
      </div>
    </article>
  );
}

export async function WorksGallery() {
  const t = await getTranslations("works");
  const tc = await getTranslations("common");
  const tWorks = await getTranslations("worksData");

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <AnimateOnScroll>
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="mono-label mb-3">{t("tag")}</p>
              <h2 className="section-heading-sm text-zinc-900">{t("heading")}</h2>
            </div>
            <Link
              href="/cases"
              className="hidden items-center gap-2 text-sm font-semibold text-zinc-400 transition-colors hover:text-zinc-900 sm:inline-flex"
            >
              {tc("verTodosOsCases")} <ArrowRight className="size-4" />
            </Link>
          </div>
        </AnimateOnScroll>

        {/* Asymmetric hero grid — 1 large (3 cols, 2 rows) + 2 medium (2 cols each) */}
        <div
          className="grid gap-4 lg:grid-cols-5"
          style={{ gridTemplateRows: "280px 280px" }}
        >
          <WorkCard
            work={works[1]}
            index={1}
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="min-h-[360px] lg:col-span-3 lg:row-span-2 lg:min-h-0"
            titleSize="lg"
            tWorks={tWorks}
          />
          <WorkCard
            work={works[2]}
            index={2}
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="min-h-[200px] lg:col-span-2 lg:min-h-0"
            tWorks={tWorks}
          />
          <WorkCard
            work={works[3]}
            index={3}
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="min-h-[200px] lg:col-span-2 lg:min-h-0"
            tWorks={tWorks}
          />
        </div>

        {/* Smaller works strip — 4 cards */}
        <div className="mt-4 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {works.slice(4, 8).map((work, i) => (
            <WorkCard
              key={work.title}
              work={work}
              index={4 + i}
              sizes="(max-width: 640px) 50vw, 25vw"
              className="min-h-[160px]"
              titleSize="sm"
              hideDescription
              tWorks={tWorks}
            />
          ))}
        </div>

        {/* Mobile: view all */}
        <div className="mt-8 flex justify-center sm:hidden">
          <Link
            href="/cases"
            className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-500 hover:text-zinc-900"
          >
            {tc("verTodosOsCases")} <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
