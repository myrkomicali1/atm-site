"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, ArrowLeft, Shield, Clock, CheckCircle2, Send } from "lucide-react";
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

const sectors = [
  "Sucroenergético",
  "Fertilizantes",
  "Energias Renováveis",
  "Saneamento",
  "Alimentos e Bebidas",
  "Siderurgia e Química",
  "Logística",
  "Papel e Celulose",
  "Cimento",
  "Petróleo e Gás",
  "Infraestrutura",
  "Outro",
];

const projectTypes = [
  "Greenfield (planta nova)",
  "Brownfield (ampliação/modernização)",
  "Revamp (retrofit)",
  "Manutenção / Parada programada",
  "Outro",
];

const serviceOptions = [
  { id: "automacao", label: "Automação Industrial" },
  { id: "eletrica", label: "Engenharia Elétrica" },
  { id: "energias-renovaveis", label: "Energias Renováveis" },
  { id: "montagem", label: "Montagem Eletromecânica" },
  { id: "epc", label: "Engenharia EPC" },
  { id: "servicos", label: "Serviços e Manutenção" },
];

const formSchema = z.object({
  // Step 1
  setor: z.string().min(1, "Selecione o setor"),
  tipoProjeto: z.string().min(1, "Selecione o tipo de projeto"),
  servicos: z.array(z.string()).min(1, "Selecione ao menos um servico"),
  // Step 2
  nome: z.string().min(2, "Informe seu nome"),
  empresa: z.string().min(2, "Informe a empresa"),
  email: z.string().email("Informe um e-mail valido"),
  telefone: z.string().min(10, "Informe o telefone"),
  // Step 3
  escopo: z.string().min(10, "Descreva brevemente o escopo do projeto"),
});

type FormData = z.infer<typeof formSchema>;

const steps = [
  { number: 1, title: "Sobre o projeto" },
  { number: 2, title: "Seus dados" },
  { number: 3, title: "Escopo tecnico" },
];

export function ProposalForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

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
    if (currentStep === 1) fieldsToValidate = ["setor", "tipoProjeto", "servicos"];
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
          <h2 className="font-display text-2xl font-bold text-zinc-900">Solicitacao recebida</h2>
          <p className="mt-2 text-sm text-zinc-600">
            Nossa equipe de engenharia comercial analisara seu escopo e retornara em ate 48 horas uteis com uma proposta tecnica personalizada.
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
                <h2 className="font-display text-lg font-bold text-zinc-900">Sobre o projeto</h2>
                <p className="text-sm text-zinc-500">Nos ajude a entender o contexto do seu projeto.</p>
              </div>

              <div className="space-y-2">
                <Label>Setor de atuacao</Label>
                <Select onValueChange={(v) => setValue("setor", v, { shouldValidate: true })} value={watch("setor")}>
                  <SelectTrigger className="w-full h-11">
                    <SelectValue placeholder="Selecione o setor" />
                  </SelectTrigger>
                  <SelectContent>
                    {sectors.map((s) => (
                      <SelectItem key={s} value={s}>{s}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.setor ? <p className="text-xs text-destructive">{errors.setor.message}</p> : null}
              </div>

              <div className="space-y-2">
                <Label>Tipo de projeto</Label>
                <Select onValueChange={(v) => setValue("tipoProjeto", v, { shouldValidate: true })} value={watch("tipoProjeto")}>
                  <SelectTrigger className="w-full h-11">
                    <SelectValue placeholder="Selecione o tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    {projectTypes.map((t) => (
                      <SelectItem key={t} value={t}>{t}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.tipoProjeto ? <p className="text-xs text-destructive">{errors.tipoProjeto.message}</p> : null}
              </div>

              <div className="space-y-2">
                <Label>Servicos de interesse</Label>
                <div className="grid grid-cols-2 gap-2">
                  {serviceOptions.map((option) => {
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
            </div>
          ) : null}

          {/* Step 2: Seus dados */}
          {currentStep === 2 ? (
            <div className="space-y-5">
              <div>
                <h2 className="font-display text-lg font-bold text-zinc-900">Seus dados</h2>
                <p className="text-sm text-zinc-500">Para que possamos entrar em contato.</p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="nome">Nome completo</Label>
                  <Input id="nome" className="h-11" {...register("nome")} />
                  {errors.nome ? <p className="text-xs text-destructive">{errors.nome.message}</p> : null}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="empresa">Empresa</Label>
                  <Input id="empresa" className="h-11" {...register("empresa")} />
                  {errors.empresa ? <p className="text-xs text-destructive">{errors.empresa.message}</p> : null}
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail corporativo</Label>
                  <Input id="email" type="email" className="h-11" {...register("email")} />
                  {errors.email ? <p className="text-xs text-destructive">{errors.email.message}</p> : null}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telefone">Telefone</Label>
                  <Input id="telefone" className="h-11" placeholder="(00) 00000-0000" {...register("telefone")} />
                  {errors.telefone ? <p className="text-xs text-destructive">{errors.telefone.message}</p> : null}
                </div>
              </div>
            </div>
          ) : null}

          {/* Step 3: Escopo tecnico */}
          {currentStep === 3 ? (
            <div className="space-y-5">
              <div>
                <h2 className="font-display text-lg font-bold text-zinc-900">Escopo tecnico</h2>
                <p className="text-sm text-zinc-500">Descreva o projeto ou compartilhe o memorial descritivo.</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="escopo">Descricao do escopo</Label>
                <Textarea
                  id="escopo"
                  className="min-h-[160px]"
                  placeholder="Descreva o projeto, local, dimensionamento estimado, prazos desejaveis e outras informacoes relevantes..."
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
                <ArrowLeft className="size-4" /> Voltar
              </Button>
            ) : (
              <div />
            )}

            {currentStep < 3 ? (
              <Button type="button" onClick={goNext} className="rounded-full font-semibold">
                Proximo <ArrowRight className="size-4" />
              </Button>
            ) : (
              <Button type="submit" className="rounded-full font-semibold">
                Enviar solicitacao <Send className="size-4" />
              </Button>
            )}
          </div>
        </Panel>
      </form>

      {/* Trust indicators */}
      <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-500">
        <div className="flex items-center gap-1.5">
          <Clock className="size-3.5 text-emerald-500" />
          <span>Resposta em ate 48h uteis</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Shield className="size-3.5 text-emerald-500" />
          <span>Seus dados sao confidenciais</span>
        </div>
      </div>
    </div>
  );
}
