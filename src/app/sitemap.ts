import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-posts";

const BASE = "https://phprescription.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/residential",
    "/residential/drinking-systems",
    "/residential/total-home",
    "/residential/showers",
    "/residential/uv",
    "/business",
    "/business/restaurant",
    "/business/coolers",
    "/business/drinking-systems",
    "/business/total",
    "/aquapellis",
    "/technology",
    "/products",
    "/pool",
    "/marine",
    "/solutions/medical",
    "/solutions/restaurant-hospitality",
    "/experts",
    "/about",
    "/about/leo",
    "/about/community",
    "/book",
    "/blog",
    "/faq",
    "/faq/point-of-difference",
    "/nutraceuticals",
    "/resources",
    "/affiliate",
    "/consultation",
    "/contact",
    "/warranty",
    "/privacy",
    "/terms",
  ];

  const now = new Date();
  return [
    ...staticRoutes.map((path) => ({
      url: `${BASE}${path}`,
      lastModified: now,
      changeFrequency: (path === "" ? "weekly" : "monthly") as "weekly" | "monthly",
      priority: path === "" ? 1 : path.split("/").length > 2 ? 0.6 : 0.8,
    })),
    ...blogPosts.map((post) => ({
      url: `${BASE}/blog/${post.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
