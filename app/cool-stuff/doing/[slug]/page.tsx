import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DoingDetail } from "@/components/sections/doing-detail";
import { doing } from "@/data/doing";

/**
 * The complete route must come from the prerender, so an unknown slug resolves
 * `notFound()` before the response is sent — the same reason the experience
 * detail route sets it.
 */
export const ensureStatic = "navigation";

/** The whole page is chosen by the slug, so there is no shell to render first. */
export const instant = false;

/** Prerender one page per entry at build time. */
export function generateStaticParams() {
  return doing.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/cool-stuff/doing/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const item = doing.find((entry) => entry.slug === slug);
  if (!item) return {};

  return { title: item.title, description: item.description };
}

export default async function DoingDetailPage({
  params,
}: PageProps<"/cool-stuff/doing/[slug]">) {
  const { slug } = await params;
  const item = doing.find((entry) => entry.slug === slug);
  if (!item) notFound();

  return <DoingDetail item={item} />;
}
