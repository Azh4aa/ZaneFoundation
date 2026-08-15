import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./brand-v2.css";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Zane Foundation — Potential. Dignity. Possibility.",
    template: "%s — Zane Foundation",
  },
  description: "Zane Foundation advances opportunity, dignity and lifelong support for people with Down syndrome in Kurdistan and Iraq.",
  applicationName: "Zane Foundation",
  category: "nonprofit",
  openGraph: {
    type: "website",
    siteName: "Zane Foundation",
    locale: "en_US",
    alternateLocale: ["ku_IQ"],
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Zane Foundation — Potential. Dignity. Possibility." }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export const viewport: Viewport = {
  themeColor: "#0D1B3D",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
