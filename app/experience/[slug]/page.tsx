import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExperienceDetail } from "@/components/sections/experience-detail";
import { experience } from "@/data/experiences";

/**
 * The complete route must come from the prerender, so an unknown slug resolves
 * `notFound()` before the response is sent. Without this the Partial Prerender
 * shell is served first and an unknown slug answers 200 with the 404 inside it.
 * (`dynamicParams` is the pre-Cache-Components way to do this and is rejected
 * when `cacheComponents` is on.)
 */
export const ensureStatic = "navigation";

/**
 * The whole page is chosen by the slug, so there is no shell to render before
 * the URL is read and the instant-navigation check flags it. `ensureStatic`
 * above already forces the complete route to be prerendered, so the navigation
 * resolves from static output regardless.
 */
export const instant = false;

/** Prerender one page per role at build time. */
export function generateStaticParams() {
  return experience.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/experience/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const item = experience.find((entry) => entry.slug === slug);
  if (!item) return {};

  return {
    title: `${item.organisation} — ${item.role}`,
    description: item.summary,
  };
}

export default async function ExperienceDetailPage({
  params,
}: PageProps<"/experience/[slug]">) {
  const { slug } = await params;
  const item = experience.find((entry) => entry.slug === slug);
  if (!item) notFound();

  return <ExperienceDetail item={item} />;
}
