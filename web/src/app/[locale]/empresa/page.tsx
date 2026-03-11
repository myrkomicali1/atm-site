import { redirect } from "next/navigation";
import { getLocale } from "next-intl/server";

export default async function EmpresaPage() {
  const locale = await getLocale();
  redirect(`/${locale}/empresa/institucional`);
}
