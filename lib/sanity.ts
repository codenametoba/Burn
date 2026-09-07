import { createClient } from "next-sanity";
import { createImageUrlBuilder } from "@sanity/image-url";

export const projectId = process.env.SANITY_PROJECT_ID || process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "demo";
export const dataset = process.env.SANITY_DATASET || process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion = "2026-09-02";
const serverReadToken = process.env.SANITY_API_READ_TOKEN || process.env.SANITY_API_TOKEN;

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  token: serverReadToken,
  useCdn: false,
  perspective: "published"
});

const builder = createImageUrlBuilder({ projectId, dataset });

export function urlFor(source: Parameters<typeof builder.image>[0]) {
  return builder.image(source);
}
