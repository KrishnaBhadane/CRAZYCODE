import type { Metadata } from "next";
import site from "@/data/site";

export const siteUrl = new URL(process.env.SITE_URL || "https://kreepycode.vercel.app");
const title = `${site.name} | Freelance Web Design & Development`;
const image = {
  url: "/images/social-card.png",
  width: 1200,
  height: 630,
  alt: "Kreepycode — independent web and design studio",
};

export const siteMetadata: Metadata = {
  metadataBase: siteUrl,
  title: { default: title, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || "7BHIMtqSsLtzdWNo5mfjGuPvZIPKGOK1yifmGIxXBZY",
  },
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/images/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/images/favicon.svg", type: "image/svg+xml", sizes: "any" },
    ],
    apple: [{ url: "/images/brand-icon.png", sizes: "512x512" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: site.name,
    title,
    description: site.description,
    images: [image],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.description,
    images: [image],
  },
};

export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": new URL("/#studio", siteUrl).href,
      name: site.name,
      url: siteUrl.href,
      description: site.description,
      logo: new URL("/images/brand-icon.png", siteUrl).href,
      email: site.contact.email,
      sameAs: site.socials.map((social) => social.href),
    },
    {
      "@type": "WebSite",
      "@id": new URL("/#website", siteUrl).href,
      name: site.name,
      url: siteUrl.href,
      inLanguage: "en",
      publisher: { "@id": new URL("/#studio", siteUrl).href },
    },
  ],
};
