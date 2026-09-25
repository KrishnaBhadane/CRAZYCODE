import localFont from "next/font/local";

export const poster = localFont({
  src: "../../public/fonts/anton.woff2",
  variable: "--font-poster",
  weight: "400",
  display: "swap",
});

export const sans = localFont({
  src: "../../public/fonts/manrope.woff2",
  variable: "--font-body",
  weight: "400 800",
  display: "swap",
});
