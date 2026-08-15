import type { Metadata, Viewport } from "next";
import "./globals.css";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Zane Foundation — Every person deserves room to grow",
    template: "%s — Zane Foundation",
  },
  description: "Zane Foundation works with people with Down syndrome, their families, schools and communities across Kurdistan.",
  applicationName: "Zane Foundation",
  category: "nonprofit",
  openGraph: {
    type: "website",
    siteName: "Zane Foundation",
    locale: "en_US",
    alternateLocale: ["ku_IQ"],
    images: [{ url: "/og-v3.png", width: 1200, height: 630, alt: "Zane Foundation — Every person deserves room to grow." }],
  },
  twitter: { card: "summary_large_image", images: ["/og-v3.png"] },
};

export const viewport: Viewport = {
  themeColor: "#062d24",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
