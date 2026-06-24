import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jbmono",
  display: "swap",
});

const TITLE = "gity — multiple GitHub accounts on one machine, automatically";
const DESCRIPTION =
  "gity auto-selects the right Git name, email, and SSH key based on the folder your repo lives in — using Git's own includeIf. Run multiple GitHub accounts on one machine with zero identity leakage and no SSH key conflicts.";
const OG_DESCRIPTION =
  "Run multiple GitHub accounts on one machine — with zero identity leakage and no SSH key conflicts. gity wires up Git's native includeIf plus per-profile SSH keys.";

export const metadata: Metadata = {
  metadataBase: new URL("https://gity-tool-site.vercel.app"),
  title: TITLE,
  description: DESCRIPTION,
  authors: [{ name: "Yahia Rachek" }],
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/assets/favicon.svg", type: "image/svg+xml" },
      { url: "/assets/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/assets/icon-512.png",
  },
  openGraph: {
    type: "website",
    title: TITLE,
    description: OG_DESCRIPTION,
    url: "/",
    siteName: "gity",
    images: [{ url: "/assets/og.png", width: 1200, height: 1200, alt: "gity" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "Auto-select the right Git name, email, and SSH key based on the folder your repo lives in.",
    images: ["/assets/og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0f172a",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
