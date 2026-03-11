"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, ArrowLeft, Shield, Clock, CheckCircle2, Send } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Panel } from "@/components/site/primitives";
import { cn } from "@/lib/utils";

const sectorKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"] as const;
const projectTypeKeys = ["0", "1", "2", "3", "4"] as const;

const productOptionIds = [
  "slv-1a",
  "px-400",
  "auth-300",
  "dpg-1a",
  "dclt-1c",
  "promtec",
  "derivador-asi",
  "planta-didatica",
  "paineis",
] as const;

const serviceOptionIds = [
  "automacao",
  "eletrica",
  "energias-renovaveis",
  "montagem",
  "epc",
  "ia-dados",
  "paradas",
  "manutencao",
  "metrologia",
  "servicos-campo",
  "ti",
] as const;

type FormData = {
  setor: string;
  tipoProjeto: string;
  categoria: "produto" | "servico";
  servicos: string[];
  nome: string;
  empresa: string;
  email: string;
  telefone: string;
  escopo: string;
};

export function ProposalForm() {
  const t = useTranslations("pages.proposalForm");
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const formSchema = z.object({
    // Step 1
    setor: z.string().min(1, t("errorSetor")),
    tipoProjeto: z.string().min(1, t("errorTipoProjeto")),
    categoria: z.enum(["produto", "servico"], { message: t("errorCategoria") }),
    servicos: z.array(z.string()).min(1, t("errorServicos")),
    // Step 2
    nome: z.string().min(2, t("errorNome")),
    empresa: z.string().min(2, t("errorEmpresa")),
    email: z.string().email(t("errorEmail")),
    telefone: z.string().min(10, t("errorTelefone")),
    // Step 3
    escopo: z.string().min(10, t("errorEscopo")),
  });

  const steps = [
    { number: 1, title: t("steps.1") },
    { number: 2, title: t("steps.2") },
    { number: 3, title: t("steps.3") },
  ];

  const sectors = sectorKeys.map((key) => ({
    key,
    label: t(`sectors.${key}`),
  }));

  const projectTypes = projectTypeKeys.map((key) => ({
    key,
    label: t(`projectTypes.${key}`),
  }));

  const productOptions = productOptionIds.map((id) => ({
    id,
    label: t(`productOptions.${id}`),
  }));

  const serviceOptionsList = serviceOptionIds.map((id) => ({
    id,
    label: t(`serviceOptions.${id}`),
  }));

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    trigger,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      setor: "",
      tipoProjeto: "",
      categoria: undefined as unknown as "produto" | "servico",
      servicos: [],
      nome: "",
      empresa: "",
      email: "",
      telefone: "",
      escopo: "",
    },
  });

  const watchedServicos = watch("servicos");

  function toggleService(id: string) {
    const current = watchedServicos ?? [];
    const updated = current.includes(id)
      ? current.filter((s) => s !== id)
      : [...current, id];
    setValue("servicos", updated, { shouldValidate: true });
  }

  async function goNext() {
    let fieldsToValidate: (keyof FormData)[] = [];
    if (currentStep === 1) fieldsToValidate = ["setor", "tipoProjeto", "categoria", "servicos"];
    if (currentStep === 2) fieldsToValidate = ["nome", "empresa", "email", "telefone"];

    const valid = await trigger(fieldsToValidate);
    if (valid) setCurrentStep((s) => Math.min(s + 1, 3));
  }

  function goBack() {
    setCurrentStep((s) => Math.max(s - 1, 1));
  }

  function onSubmit(data: FormData) {
    // TODO: Implementar envio para backend (Server Actions, API route, ou CRM)
    console.log("Form submitted:", data);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <Panel className="space-y-6 text-center">
        <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-emerald-50">
          <CheckCircle2 className="size-8 text-emerald-600" />
        </div>
        <div>
          <h2 className="font-display text-2xl font-bold text-zinc-900">{t("successTitle")}</h2>
          <p className="mt-2 text-sm text-zinc-600">
            {t("successDescription")}
          </p>
        </div>
      </Panel>
    );
  }

  return (
    <div className="space-y-6">
      {/* Progress bar */}
      <div className="flex items-center gap-2">
        {steps.map((step) => (
          <div key={step.number} className="flex flex-1 items-center gap-2">
            <div
              className={cn(
                "flex size-8 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-colors",
                currentStep >= step.number
                  ? "bg-primary text-white"
                  : "border border-zinc-200 bg-zinc-50 text-zinc-400"
              )}
            >
              {currentStep > step.number ? (
                <CheckCircle2 className="size-4" />
              ) : (
                step.number
              )}
            </div>
            <span
              className={cn(
                "hidden text-xs font-medium sm:inline",
                currentStep >= step.number ? "text-zinc-900" : "text-zinc-400"
              )}
            >
              {step.title}
            </span>
            {step.number < 3 ? (
              <div
                className={cn(
                  "h-px flex-1",
                  currentStep > step.number ? "bg-primary" : "bg-zinc-200"
                )}
              />
            ) : null}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Panel className="space-y-6">
          {/* Step 1: Sobre o projeto */}
          {currentStep === 1 ? (
            <div className="space-y-5">
              <div>
                <h2 className="font-display text-lg font-bold text-zinc-900">{t("step1Title")}</h2>
                <p className="text-sm text-zinc-500">{t("step1Description")}</p>
              </div>

              <div className="space-y-2">
                <Label>{t("labelSetor")}</Label>
                <Select onValueChange={(v) => setValue("setor", v, { shouldValidate: true })} value={watch("setor")}>
                  <SelectTrigger className="w-full h-11">
                    <SelectValue placeholder={t("placeholderSetor")} />
                  </SelectTrigger>
                  <SelectContent>
                    {sectors.map((s) => (
                      <SelectItem key={s.key} value={s.label}>{s.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.setor ? <p className="text-xs text-destructive">{errors.setor.message}</p> : null}
              </div>

              <div className="space-y-2">
                <Label>{t("labelTipoProjeto")}</Label>
                <Select onValueChange={(v) => setValue("tipoProjeto", v, { shouldValidate: true })} value={watch("tipoProjeto")}>
                  <SelectTrigger className="w-full h-11">
                    <SelectValue placeholder={t("placeholderTipo")} />
                  </SelectTrigger>
                  <SelectContent>
                    {projectTypes.map((pt) => (
                      <SelectItem key={pt.key} value={pt.label}>{pt.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.tipoProjeto ? <p className="text-xs text-destructive">{errors.tipoProjeto.message}</p> : null}
              </div>

              <div className="space-y-2">
                <Label>{t("labelInteresseEm")}</Label>
                <Select
                  onValueChange={(v) => {
                    setValue("categoria", v as "produto" | "servico", { shouldValidate: true });
                    setValue("servicos", []);
                  }}
                  value={watch("categoria") ?? ""}
                >
                  <SelectTrigger className="w-full h-11">
                    <SelectValue placeholder={t("labelCategoria")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="produto">{t("labelProduto")}</SelectItem>
                    <SelectItem value="servico">{t("labelServico")}</SelectItem>
                  </SelectContent>
                </Select>
                {errors.categoria ? <p className="text-xs text-destructive">{errors.categoria.message}</p> : null}
              </div>

              {watch("categoria") ? (
                <div className="space-y-2">
                  <Label>
                    {watch("categoria") === "produto" ? t("labelProdutosInteresse") : t("labelServicosInteresse")}
                  </Label>
                  <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
                    {(watch("categoria") === "produto" ? productOptions : serviceOptionsList).map((option) => {
                      const checked = watchedServicos?.includes(option.id);
                      return (
                        <button
                          key={option.id}
                          type="button"
                          onClick={() => toggleService(option.id)}
                          className={cn(
                            "rounded-lg border px-3 py-2.5 text-left text-sm transition-colors",
                            checked
                              ? "border-primary bg-primary/5 font-medium text-zinc-900"
                              : "border-zinc-200 bg-white text-zinc-600 hover:border-zinc-300 hover:bg-zinc-50"
                          )}
                        >
                          {option.label}
                        </button>
                      );
                    })}
                  </div>
                  {errors.servicos ? <p className="text-xs text-destructive">{errors.servicos.message}</p> : null}
                </div>
              ) : null}
            </div>
          ) : null}

          {/* Step 2: Seus dados */}
          {currentStep === 2 ? (
            <div className="space-y-5">
              <div>
                <h2 className="font-display text-lg font-bold text-zinc-900">{t("step2Title")}</h2>
                <p className="text-sm text-zinc-500">{t("step2Description")}</p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="nome">{t("labelNome")}</Label>
                  <Input id="nome" className="h-11" {...register("nome")} />
                  {errors.nome ? <p className="text-xs text-destructive">{errors.nome.message}</p> : null}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="empresa">{t("labelEmpresa")}</Label>
                  <Input id="empresa" className="h-11" {...register("empresa")} />
                  {errors.empresa ? <p className="text-xs text-destructive">{errors.empresa.message}</p> : null}
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email">{t("labelEmail")}</Label>
                  <Input id="email" type="email" className="h-11" {...register("email")} />
                  {errors.email ? <p className="text-xs text-destructive">{errors.email.message}</p> : null}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telefone">{t("labelTelefone")}</Label>
                  <Input id="telefone" className="h-11" placeholder={t("placeholderTelefone")} {...register("telefone")} />
                  {errors.telefone ? <p className="text-xs text-destructive">{errors.telefone.message}</p> : null}
                </div>
              </div>
            </div>
          ) : null}

          {/* Step 3: Escopo técnico */}
          {currentStep === 3 ? (
            <div className="space-y-5">
              <div>
                <h2 className="font-display text-lg font-bold text-zinc-900">{t("step3Title")}</h2>
                <p className="text-sm text-zinc-500">{t("step3Description")}</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="escopo">{t("labelEscopo")}</Label>
                <Textarea
                  id="escopo"
                  className="min-h-[160px]"
                  placeholder={t("placeholderEscopo")}
                  {...register("escopo")}
                />
                {errors.escopo ? <p className="text-xs text-destructive">{errors.escopo.message}</p> : null}
              </div>
            </div>
          ) : null}

          {/* Navigation */}
          <div className="flex items-center justify-between border-t border-zinc-100 pt-5">
            {currentStep > 1 ? (
              <Button type="button" variant="ghost" onClick={goBack} className="rounded-full">
                <ArrowLeft className="size-4" /> {t("btnVoltar")}
              </Button>
            ) : (
              <div />
            )}

            {currentStep < 3 ? (
              <Button type="button" onClick={goNext} className="rounded-full font-semibold">
                {t("btnProximo")} <ArrowRight className="size-4" />
              </Button>
            ) : (
              <Button type="submit" className="rounded-full font-semibold">
                {t("btnEnviar")} <Send className="size-4" />
              </Button>
            )}
          </div>
        </Panel>
      </form>

      {/* Trust indicators */}
      <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-500">
        <div className="flex items-center gap-1.5">
          <Clock className="size-3.5 text-emerald-500" />
          <span>{t("trustResponse")}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Shield className="size-3.5 text-emerald-500" />
          <span>{t("trustConfidential")}</span>
        </div>
      </div>
    </div>
  );
}
