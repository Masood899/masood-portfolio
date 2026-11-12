import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });
const instrumentSerif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-instrument", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://masoodkhan.me"),
  title: {
    default: "Masood Khan — Software Engineer & AI/ML Engineer",
    template: "%s | Masood Khan"
  },
  description: "Portfolio of Masood Khan — software engineer and AI/ML engineer building full-stack products, backend systems and intelligent applications.",
  openGraph: {
    type: "website",
    url: "https://masoodkhan.me",
    title: "Masood Khan — Software Engineer & AI/ML Engineer",
    description: "Building software. Exploring intelligence.",
    siteName: "Masood Khan"
  },
  twitter: {
    card: "summary_large_image",
    title: "Masood Khan — Software Engineer & AI/ML Engineer",
    description: "Building software. Exploring intelligence."
  }
};

export const viewport: Viewport = {
  themeColor: "#f4f7fc",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${geistMono.variable} ${instrumentSerif.variable}`}>
        <a className="skip-link" href="#main">Skip to content</a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
