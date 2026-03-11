import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  className?: string;
  children: ReactNode;
}

export function Container({ className, children }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-5 sm:px-8", className)}>{children}</div>
  );
}

interface SectionProps {
  className?: string;
  children: ReactNode;
}

export function Section({ className, children }: SectionProps) {
  return <section className={cn("py-16 md:py-24", className)}>{children}</section>;
}

interface PanelProps {
  className?: string;
  children: ReactNode;
}

export function Panel({ className, children }: PanelProps) {
  return <div className={cn("panel-surface p-6 md:p-8", className)}>{children}</div>;
}

interface EyebrowProps {
  className?: string;
  dark?: boolean;
  children: ReactNode;
}

export function Eyebrow({ className, dark, children }: EyebrowProps) {
  return (
    <div className={cn(dark ? "mono-label-muted" : "mono-label", className)}>{children}</div>
  );
}
