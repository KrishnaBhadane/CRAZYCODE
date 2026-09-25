import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  // Section anchors are part of the homepage, not separate pages.
  return [{ url: siteUrl.href }];
}
