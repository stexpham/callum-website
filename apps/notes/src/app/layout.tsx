import "./globals.css";
import { cx } from "cva";
import type { Metadata, Viewport } from "next";
import { mono, sans } from "@repo/ui/fonts";
import config from "@repo/ui/config";
import { Providers } from "./providers";

const title = "Callum Flack is a designer who codes and writes";
const description =
  "Callum Flack is a designer who codes. Fluid across visual design, user experience and frontend engineering, he also writes about creativity, teamwork and attention.";

export const metadata: Metadata = {
  metadataBase: new URL(config.PUBLIC_URL),
  title,
  description,
  twitter: {
    card: "summary",
    creator: "@callumflack",
    title,
    description,
    images: {
      url: "/images/twitter-card.png", // Must be an absolute URL
      alt: "Callum Flack's initial (C) on his favourite colour.",
    },
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cx(sans.variable, mono.variable)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
