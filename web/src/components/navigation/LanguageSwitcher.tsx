"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const localeLabels: Record<string, string> = {
  "pt-BR": "PT",
  en: "EN",
  es: "ES",
};

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function switchLocale(newLocale: string) {
    router.replace(pathname, { locale: newLocale as "pt-BR" | "en" | "es" });
  }

  return (
    <div className="flex items-center gap-0.5 rounded-full border border-zinc-200 bg-zinc-50 p-0.5">
      {Object.entries(localeLabels).map(([loc, label]) => (
        <button
          key={loc}
          onClick={() => switchLocale(loc)}
          className={cn(
            "rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider transition-colors",
            locale === loc
              ? "bg-white text-zinc-900 shadow-sm"
              : "text-zinc-400 hover:text-zinc-600",
          )}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
