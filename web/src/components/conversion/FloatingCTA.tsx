"use client";

import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

const WHATSAPP_URL = "https://wa.me/5516996465516";
const SCROLL_THRESHOLD = 0.2;

export function FloatingCTA() {
  const t = useTranslations("floatingCta");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollPercent =
        window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight);
      setVisible(scrollPercent >= SCROLL_THRESHOLD);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("ariaLabel")}
      className={cn(
        "fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-emerald-500/25 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#20BD5A] hover:scale-108 active:scale-95",
        visible
          ? "translate-y-0 scale-100 opacity-100"
          : "pointer-events-none translate-y-5 scale-60 opacity-0",
      )}
    >
      <MessageCircle className="size-6" />
    </a>
  );
}
