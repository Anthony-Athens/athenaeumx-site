import type { Metadata } from "next";

export const siteUrl = "https://www.athenaeumx.com";

export const siteDescription =
  "AthenaeumX provides consulting services in process improvement, project management, data analytics, data science, machine learning, and AI strategy.";

export const primaryKeywords = [
  "Process Improvement Consultant",
  "Project Management Consultant",
  "Data Analytics Consultant",
  "Data Science Consultant",
  "Machine Learning Consultant",
  "AI Consultant",
  "Tableau Consultant",
  "Healthcare Analytics",
  "Operational Excellence",
  "Business Intelligence",
];

export const ogImage = {
  url: "/athenaeumx-operations-hero.png",
  alt: "AthenaeumX operations, analytics, and AI consulting",
};

export function absoluteUrl(path = "/"): string {
  return new URL(path, siteUrl).toString();
}

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    keywords: [...primaryKeywords, ...keywords],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | AthenaeumX`,
      description,
      url,
      siteName: "AthenaeumX",
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | AthenaeumX`,
      description,
      images: [ogImage.url],
    },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AthenaeumX",
  url: siteUrl,
  description: siteDescription,
  image: absoluteUrl(ogImage.url),
  knowsAbout: primaryKeywords,
  areaServed: "United States",
  brand: {
    "@type": "Brand",
    name: "AthenaeumX",
  },
};
