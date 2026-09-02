import type { MetadataRoute } from "next";
import { articles, events, siteUrl } from "@/lib/constants";

const routes = ["", "/experience", "/menu", "/events", "/humidor", "/vip", "/locker-membership", "/gallery", "/visit", "/news", "/contact", "/careers"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    ...routes.map((route) => ({ url: `${siteUrl}${route}`, lastModified: now })),
    ...articles.map((article) => ({ url: `${siteUrl}/news/${article.slug}`, lastModified: new Date(article.date) })),
    ...events.map((event) => ({ url: `${siteUrl}/events#${event.slug}`, lastModified: new Date(event.date) }))
  ];
}
