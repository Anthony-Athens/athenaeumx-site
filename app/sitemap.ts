import type { MetadataRoute } from "next";
import { absoluteUrl } from "./seo";

const routes = [
  { path: "/", priority: 1 },
  { path: "/services", priority: 0.9 },
  { path: "/products", priority: 0.8 },
  { path: "/about", priority: 0.7 },
  { path: "/contact", priority: 0.8 },
  { path: "/privacy", priority: 0.4 },
  { path: "/terms", priority: 0.4 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified,
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}
