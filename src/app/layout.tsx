import type { Viewport } from "next";
import { poster, sans } from "@/lib/fonts";
import { siteMetadata } from "@/lib/seo";
import "./globals.css";

export const metadata = siteMetadata;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F5F1E8",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poster.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
