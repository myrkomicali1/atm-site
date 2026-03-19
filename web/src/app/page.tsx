// next-intl middleware rewrites "/" to the [locale] route at runtime.
// This file must exist but should not be statically rendered.
export const dynamic = "force-dynamic";

export default function RootPage() {
  return null;
}
