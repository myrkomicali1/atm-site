"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, ArrowLeft, Shield, Clock, CheckCircle2, Send, ChevronDown } from "lucide-react";
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

type Country = { code: string; dial: string; flag: string; name: string; mask: string };

const countries: Country[] = [
  { code: "BR", dial: "+55", flag: "🇧🇷", name: "Brasil", mask: "(##) #####-####" },
  { code: "US", dial: "+1", flag: "🇺🇸", name: "United States", mask: "(###) ###-####" },
  { code: "AF", dial: "+93", flag: "🇦🇫", name: "Afghanistan", mask: "## ### ####" },
  { code: "AL", dial: "+355", flag: "🇦🇱", name: "Albania", mask: "## ### ####" },
  { code: "DZ", dial: "+213", flag: "🇩🇿", name: "Algeria", mask: "### ## ## ##" },
  { code: "AD", dial: "+376", flag: "🇦🇩", name: "Andorra", mask: "### ###" },
  { code: "AO", dial: "+244", flag: "🇦🇴", name: "Angola", mask: "### ### ###" },
  { code: "AR", dial: "+54", flag: "🇦🇷", name: "Argentina", mask: "(##) ####-####" },
  { code: "AM", dial: "+374", flag: "🇦🇲", name: "Armenia", mask: "## ######" },
  { code: "AU", dial: "+61", flag: "🇦🇺", name: "Australia", mask: "### ### ###" },
  { code: "AT", dial: "+43", flag: "🇦🇹", name: "Austria", mask: "### #######" },
  { code: "AZ", dial: "+994", flag: "🇦🇿", name: "Azerbaijan", mask: "## ### ## ##" },
  { code: "BH", dial: "+973", flag: "🇧🇭", name: "Bahrain", mask: "#### ####" },
  { code: "BD", dial: "+880", flag: "🇧🇩", name: "Bangladesh", mask: "#### ######" },
  { code: "BY", dial: "+375", flag: "🇧🇾", name: "Belarus", mask: "## ### ## ##" },
  { code: "BE", dial: "+32", flag: "🇧🇪", name: "Belgium", mask: "### ## ## ##" },
  { code: "BZ", dial: "+501", flag: "🇧🇿", name: "Belize", mask: "### ####" },
  { code: "BJ", dial: "+229", flag: "🇧🇯", name: "Benin", mask: "## ## ####" },
  { code: "BO", dial: "+591", flag: "🇧🇴", name: "Bolivia", mask: "# #######" },
  { code: "BA", dial: "+387", flag: "🇧🇦", name: "Bosnia", mask: "## ### ###" },
  { code: "BW", dial: "+267", flag: "🇧🇼", name: "Botswana", mask: "## ### ###" },
  { code: "BN", dial: "+673", flag: "🇧🇳", name: "Brunei", mask: "### ####" },
  { code: "BG", dial: "+359", flag: "🇧🇬", name: "Bulgaria", mask: "### ### ###" },
  { code: "KH", dial: "+855", flag: "🇰🇭", name: "Cambodia", mask: "## ### ###" },
  { code: "CM", dial: "+237", flag: "🇨🇲", name: "Cameroon", mask: "## ## ## ##" },
  { code: "CA", dial: "+1", flag: "🇨🇦", name: "Canada", mask: "(###) ###-####" },
  { code: "CL", dial: "+56", flag: "🇨🇱", name: "Chile", mask: "# ####-####" },
  { code: "CN", dial: "+86", flag: "🇨🇳", name: "China", mask: "### #### ####" },
  { code: "CO", dial: "+57", flag: "🇨🇴", name: "Colombia", mask: "### ###-####" },
  { code: "CR", dial: "+506", flag: "🇨🇷", name: "Costa Rica", mask: "#### ####" },
  { code: "HR", dial: "+385", flag: "🇭🇷", name: "Croatia", mask: "## ### ####" },
  { code: "CU", dial: "+53", flag: "🇨🇺", name: "Cuba", mask: "# ### ####" },
  { code: "CY", dial: "+357", flag: "🇨🇾", name: "Cyprus", mask: "## ######" },
  { code: "CZ", dial: "+420", flag: "🇨🇿", name: "Czech Republic", mask: "### ### ###" },
  { code: "DK", dial: "+45", flag: "🇩🇰", name: "Denmark", mask: "## ## ## ##" },
  { code: "DO", dial: "+1", flag: "🇩🇴", name: "Dominican Rep.", mask: "(###) ###-####" },
  { code: "EC", dial: "+593", flag: "🇪🇨", name: "Ecuador", mask: "## ### ####" },
  { code: "EG", dial: "+20", flag: "🇪🇬", name: "Egypt", mask: "### ### ####" },
  { code: "SV", dial: "+503", flag: "🇸🇻", name: "El Salvador", mask: "#### ####" },
  { code: "EE", dial: "+372", flag: "🇪🇪", name: "Estonia", mask: "#### ####" },
  { code: "ET", dial: "+251", flag: "🇪🇹", name: "Ethiopia", mask: "## ### ####" },
  { code: "FI", dial: "+358", flag: "🇫🇮", name: "Finland", mask: "## ### ####" },
  { code: "FR", dial: "+33", flag: "🇫🇷", name: "France", mask: "# ## ## ## ##" },
  { code: "GE", dial: "+995", flag: "🇬🇪", name: "Georgia", mask: "### ## ## ##" },
  { code: "DE", dial: "+49", flag: "🇩🇪", name: "Germany", mask: "### #######" },
  { code: "GH", dial: "+233", flag: "🇬🇭", name: "Ghana", mask: "## ### ####" },
  { code: "GR", dial: "+30", flag: "🇬🇷", name: "Greece", mask: "### ### ####" },
  { code: "GT", dial: "+502", flag: "🇬🇹", name: "Guatemala", mask: "#### ####" },
  { code: "HN", dial: "+504", flag: "🇭🇳", name: "Honduras", mask: "#### ####" },
  { code: "HK", dial: "+852", flag: "🇭🇰", name: "Hong Kong", mask: "#### ####" },
  { code: "HU", dial: "+36", flag: "🇭🇺", name: "Hungary", mask: "## ### ####" },
  { code: "IS", dial: "+354", flag: "🇮🇸", name: "Iceland", mask: "### ####" },
  { code: "IN", dial: "+91", flag: "🇮🇳", name: "India", mask: "##### #####" },
  { code: "ID", dial: "+62", flag: "🇮🇩", name: "Indonesia", mask: "### #### ####" },
  { code: "IR", dial: "+98", flag: "🇮🇷", name: "Iran", mask: "### ### ####" },
  { code: "IQ", dial: "+964", flag: "🇮🇶", name: "Iraq", mask: "### ### ####" },
  { code: "IE", dial: "+353", flag: "🇮🇪", name: "Ireland", mask: "## ### ####" },
  { code: "IL", dial: "+972", flag: "🇮🇱", name: "Israel", mask: "## ### ####" },
  { code: "IT", dial: "+39", flag: "🇮🇹", name: "Italy", mask: "### ### ####" },
  { code: "JM", dial: "+1", flag: "🇯🇲", name: "Jamaica", mask: "(###) ###-####" },
  { code: "JP", dial: "+81", flag: "🇯🇵", name: "Japan", mask: "## #### ####" },
  { code: "JO", dial: "+962", flag: "🇯🇴", name: "Jordan", mask: "# #### ####" },
  { code: "KZ", dial: "+7", flag: "🇰🇿", name: "Kazakhstan", mask: "### ### ## ##" },
  { code: "KE", dial: "+254", flag: "🇰🇪", name: "Kenya", mask: "### ######" },
  { code: "KR", dial: "+82", flag: "🇰🇷", name: "South Korea", mask: "## #### ####" },
  { code: "KW", dial: "+965", flag: "🇰🇼", name: "Kuwait", mask: "#### ####" },
  { code: "LV", dial: "+371", flag: "🇱🇻", name: "Latvia", mask: "## ### ###" },
  { code: "LB", dial: "+961", flag: "🇱🇧", name: "Lebanon", mask: "## ### ###" },
  { code: "LT", dial: "+370", flag: "🇱🇹", name: "Lithuania", mask: "### #####" },
  { code: "LU", dial: "+352", flag: "🇱🇺", name: "Luxembourg", mask: "### ### ###" },
  { code: "MY", dial: "+60", flag: "🇲🇾", name: "Malaysia", mask: "## #### ####" },
  { code: "MX", dial: "+52", flag: "🇲🇽", name: "Mexico", mask: "## ####-####" },
  { code: "MA", dial: "+212", flag: "🇲🇦", name: "Morocco", mask: "## #### ###" },
  { code: "MZ", dial: "+258", flag: "🇲🇿", name: "Mozambique", mask: "## ### ####" },
  { code: "NL", dial: "+31", flag: "🇳🇱", name: "Netherlands", mask: "# ########" },
  { code: "NZ", dial: "+64", flag: "🇳🇿", name: "New Zealand", mask: "## ### ####" },
  { code: "NI", dial: "+505", flag: "🇳🇮", name: "Nicaragua", mask: "#### ####" },
  { code: "NG", dial: "+234", flag: "🇳🇬", name: "Nigeria", mask: "### ### ####" },
  { code: "NO", dial: "+47", flag: "🇳🇴", name: "Norway", mask: "### ## ###" },
  { code: "OM", dial: "+968", flag: "🇴🇲", name: "Oman", mask: "#### ####" },
  { code: "PK", dial: "+92", flag: "🇵🇰", name: "Pakistan", mask: "### #######" },
  { code: "PA", dial: "+507", flag: "🇵🇦", name: "Panama", mask: "#### ####" },
  { code: "PY", dial: "+595", flag: "🇵🇾", name: "Paraguay", mask: "### ###-###" },
  { code: "PE", dial: "+51", flag: "🇵🇪", name: "Peru", mask: "### ###-###" },
  { code: "PH", dial: "+63", flag: "🇵🇭", name: "Philippines", mask: "### ### ####" },
  { code: "PL", dial: "+48", flag: "🇵🇱", name: "Poland", mask: "### ### ###" },
  { code: "PT", dial: "+351", flag: "🇵🇹", name: "Portugal", mask: "### ### ###" },
  { code: "QA", dial: "+974", flag: "🇶🇦", name: "Qatar", mask: "#### ####" },
  { code: "RO", dial: "+40", flag: "🇷🇴", name: "Romania", mask: "### ### ###" },
  { code: "RU", dial: "+7", flag: "🇷🇺", name: "Russia", mask: "### ### ## ##" },
  { code: "SA", dial: "+966", flag: "🇸🇦", name: "Saudi Arabia", mask: "## ### ####" },
  { code: "SN", dial: "+221", flag: "🇸🇳", name: "Senegal", mask: "## ### ## ##" },
  { code: "RS", dial: "+381", flag: "🇷🇸", name: "Serbia", mask: "## ### ####" },
  { code: "SG", dial: "+65", flag: "🇸🇬", name: "Singapore", mask: "#### ####" },
  { code: "SK", dial: "+421", flag: "🇸🇰", name: "Slovakia", mask: "### ### ###" },
  { code: "SI", dial: "+386", flag: "🇸🇮", name: "Slovenia", mask: "## ### ###" },
  { code: "ZA", dial: "+27", flag: "🇿🇦", name: "South Africa", mask: "## ### ####" },
  { code: "ES", dial: "+34", flag: "🇪🇸", name: "Spain", mask: "### ## ## ##" },
  { code: "LK", dial: "+94", flag: "🇱🇰", name: "Sri Lanka", mask: "## ### ####" },
  { code: "SE", dial: "+46", flag: "🇸🇪", name: "Sweden", mask: "## ### ####" },
  { code: "CH", dial: "+41", flag: "🇨🇭", name: "Switzerland", mask: "## ### ## ##" },
  { code: "TW", dial: "+886", flag: "🇹🇼", name: "Taiwan", mask: "### ### ###" },
  { code: "TZ", dial: "+255", flag: "🇹🇿", name: "Tanzania", mask: "### ### ###" },
  { code: "TH", dial: "+66", flag: "🇹🇭", name: "Thailand", mask: "## ### ####" },
  { code: "TN", dial: "+216", flag: "🇹🇳", name: "Tunisia", mask: "## ### ###" },
  { code: "TR", dial: "+90", flag: "🇹🇷", name: "Turkey", mask: "### ### ####" },
  { code: "UA", dial: "+380", flag: "🇺🇦", name: "Ukraine", mask: "## ### ####" },
  { code: "AE", dial: "+971", flag: "🇦🇪", name: "UAE", mask: "## ### ####" },
  { code: "GB", dial: "+44", flag: "🇬🇧", name: "United Kingdom", mask: "#### ######" },
  { code: "UY", dial: "+598", flag: "🇺🇾", name: "Uruguay", mask: "## ###-###" },
  { code: "VE", dial: "+58", flag: "🇻🇪", name: "Venezuela", mask: "### ###-####" },
  { code: "VN", dial: "+84", flag: "🇻🇳", name: "Vietnam", mask: "## ### ## ##" },
];

function applyPhoneMask(value: string, mask: string): string {
  const digits = value.replace(/\D/g, "");
  let result = "";
  let digitIndex = 0;
  for (let i = 0; i < mask.length && digitIndex < digits.length; i++) {
    if (mask[i] === "#") {
      result += digits[digitIndex++];
    } else {
      result += mask[i];
    }
  }
  return result;
}

function PhoneInput({
  value,
  onChange,
  placeholder,
  id,
  hasError,
}: {
  value: string;
  onChange: (fullValue: string) => void;
  placeholder?: string;
  id?: string;
  hasError?: boolean;
}) {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [localNumber, setLocalNumber] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [search, setSearch] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
        setSearch("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (dropdownOpen && searchRef.current) {
      searchRef.current.focus();
    }
  }, [dropdownOpen]);

  const filtered = search
    ? countries.filter(
        (c) =>
          c.name.toLowerCase().includes(search.toLowerCase()) ||
          c.code.toLowerCase().includes(search.toLowerCase()) ||
          c.dial.includes(search),
      )
    : countries;

  const handleNumberChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, "");
    const masked = applyPhoneMask(raw, selectedCountry.mask);
    setLocalNumber(masked);
    onChange(`${selectedCountry.dial} ${masked}`);
  }, [selectedCountry, onChange]);

  const selectCountry = useCallback((country: Country) => {
    setSelectedCountry(country);
    setLocalNumber("");
    onChange(`${country.dial} `);
    setDropdownOpen(false);
    setSearch("");
  }, [onChange]);

  return (
    <div className="relative flex" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setDropdownOpen((v) => !v)}
        className={cn(
          "flex items-center gap-1 rounded-l-lg border border-r-0 border-zinc-200 bg-zinc-50 px-2.5 text-xs transition-colors hover:bg-zinc-100",
          hasError && "border-destructive",
        )}
      >
        <span className="text-sm leading-none">{selectedCountry.flag}</span>
        <span className="text-[11px] text-zinc-600">{selectedCountry.dial}</span>
        <ChevronDown className="size-2.5 text-zinc-400" />
      </button>
      {dropdownOpen ? (
        <div className="absolute left-0 top-full z-50 mt-1 w-60 rounded-lg border border-zinc-200 bg-white shadow-lg">
          <div className="border-b border-zinc-100 p-1.5">
            <input
              ref={searchRef}
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search country..."
              className="w-full rounded-md border border-zinc-200 bg-zinc-50 px-2.5 py-1.5 text-xs text-zinc-900 outline-none placeholder:text-zinc-400 focus:border-primary/40 focus:ring-1 focus:ring-primary/20"
            />
          </div>
          <div className="max-h-48 overflow-y-auto py-0.5">
            {filtered.length === 0 ? (
              <p className="px-3 py-2 text-[11px] text-zinc-400">No results</p>
            ) : (
              filtered.map((c, i) => (
                <button
                  key={`${c.code}-${c.dial}-${i}`}
                  type="button"
                  onClick={() => selectCountry(c)}
                  className={cn(
                    "flex w-full items-center gap-2 px-2.5 py-1.5 text-[11px] transition-colors hover:bg-zinc-50",
                    c.code === selectedCountry.code && c.dial === selectedCountry.dial && "bg-zinc-50 font-medium",
                  )}
                >
                  <span className="text-sm leading-none">{c.flag}</span>
                  <span className="text-zinc-900">{c.name}</span>
                  <span className="ml-auto text-zinc-400">{c.dial}</span>
                </button>
              ))
            )}
          </div>
        </div>
      ) : null}
      <Input
        id={id}
        type="tel"
        className={cn("h-11 rounded-l-none", hasError && "border-destructive")}
        placeholder={selectedCountry.mask.replace(/#/g, "0")}
        value={localNumber}
        onChange={handleNumberChange}
      />
    </div>
  );
}

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
                  <PhoneInput
                    id="telefone"
                    value={watch("telefone")}
                    onChange={(v) => setValue("telefone", v, { shouldValidate: true })}
                    hasError={!!errors.telefone}
                  />
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
