import { getTranslations } from "next-intl/server";
import { Mail, MapPin, MessageSquare, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PageIntro } from "@/components/layout/PageIntro";
import { Container, Panel, Section } from "@/components/site/primitives";

export async function generateMetadata() {
  const t = await getTranslations("pages.faleConosco");
  return {
    title: t("title"),
    alternates: { canonical: "/contato/fale-conosco" },
  };
}

export default async function FaleConoscoPage() {
  const t = await getTranslations("pages.faleConosco");

  const channels = [
    { Icon: Phone, title: t("channelTelefone"), value: t("channelTelefoneValue"), details: t("channelTelefoneDetails") },
    { Icon: Mail, title: t("channelEmail"), value: t("channelEmailValue"), details: t("channelEmailDetails") },
    { Icon: MessageSquare, title: t("channelSac"), value: t("channelSacValue"), details: t("channelSacDetails") },
    { Icon: MapPin, title: t("channelEndereco"), value: t("channelEnderecoValue"), details: t("channelEnderecoDetails") },
  ];

  return (
    <main>
      <PageIntro
        tag={t("tag")}
        title={t("pageTitle")}
        subtitle={t("subtitle")}
        breadcrumbs={[
          { label: t("breadcrumbContato"), href: "/contato" },
          { label: t("breadcrumbFaleConosco") },
        ]}
      />

      <Section>
        <Container className="grid gap-8 lg:grid-cols-12">
          <Panel className="space-y-3 lg:col-span-5">
            {channels.map((item) => (
              <div key={item.title} className="flex items-start gap-3 rounded-xl border border-zinc-200 bg-zinc-50 p-4">
                <item.Icon className="mt-0.5 size-4 text-primary" />
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-zinc-500">{item.title}</p>
                  <p className="text-sm font-semibold text-zinc-900">{item.value}</p>
                  <p className="text-xs text-zinc-600">{item.details}</p>
                </div>
              </div>
            ))}
          </Panel>

          <Panel className="lg:col-span-7">
            <form className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2"><Label htmlFor="nome">{t("labelNome")}</Label><Input id="nome" className="h-11" /></div>
                <div className="space-y-2"><Label htmlFor="email">{t("labelEmail")}</Label><Input id="email" type="email" className="h-11" /></div>
              </div>
              <div className="space-y-2"><Label htmlFor="assunto">{t("labelAssunto")}</Label><Input id="assunto" className="h-11" /></div>
              <div className="space-y-2"><Label htmlFor="mensagem">{t("labelMensagem")}</Label><Textarea id="mensagem" className="min-h-[140px]" /></div>
              <Button type="submit" className="w-full rounded-full font-semibold">{t("enviarMensagem")}</Button>
            </form>
          </Panel>
        </Container>
      </Section>
    </main>
  );
}
