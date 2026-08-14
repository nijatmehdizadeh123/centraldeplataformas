import type { MetadataRoute } from "next";
import { SITE } from "@/app/data/site";

const BASE = `https://${SITE.domain}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/plataformas",
    "/guia",
    "/sobre",
    "/contacto",
    "/privacidade",
    "/privacy",
    "/termos",
    "/terms",
    "/cookies",
  ];

  return routes.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));
}
