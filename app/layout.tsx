import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "./components/site-shell";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "AthenaeumX | Operations, Analytics, and AI Consulting",
    template: "%s | AthenaeumX",
  },
  description:
    "AthenaeumX helps organizations improve operations through process improvement, project management, data analysis, data science, and machine learning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
