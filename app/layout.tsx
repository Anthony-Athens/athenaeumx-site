import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "./components/site-shell";
import "./globals.css";
import {
  absoluteUrl,
  ogImage,
  organizationJsonLd,
  primaryKeywords,
  siteDescription,
  siteUrl,
} from "./seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AthenaeumX | Process Improvement, Analytics, and AI Consulting",
    template: "%s | AthenaeumX",
  },
  description: siteDescription,
  keywords: primaryKeywords,
  applicationName: "AthenaeumX",
  authors: [{ name: "AthenaeumX", url: siteUrl }],
  creator: "AthenaeumX",
  publisher: "AthenaeumX",
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    title: "AthenaeumX | Process Improvement, Analytics, and AI Consulting",
    description: siteDescription,
    url: siteUrl,
    siteName: "AthenaeumX",
    type: "website",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "AthenaeumX | Process Improvement, Analytics, and AI Consulting",
    description: siteDescription,
    images: [ogImage.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
