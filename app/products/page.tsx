import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeader } from "../components/section";
import { products } from "../components/site-data";
import { createPageMetadata } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "Software Products",
  description:
    "Explore AthenaeumX software products and future platforms, including Mental Mathletics, health and wellness analytics, and machine learning powered prediction tools.",
  path: "/products",
  keywords: [
    "Mental Mathletics",
    "Healthcare Analytics",
    "Machine Learning Products",
    "Predictive Analytics Platform",
  ],
});

export default function ProductsPage() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
      <SectionHeader
        eyebrow="Products"
        title="Software products developed under AthenaeumX."
        description="Current and future platforms apply analytics, machine learning, and performance tracking to practical domains where better data can improve decisions."
      />
      <div className="mt-12 grid gap-6">
        {products.map((product) => {
          const isActiveProduct = Boolean(product.href);

          return (
            <article
              className={`rounded-lg border p-6 shadow-sm sm:p-8 ${
                isActiveProduct
                  ? "border-teal-700 bg-white ring-4 ring-teal-700/10"
                  : "border-stone-200 bg-stone-50"
              }`}
              key={product.name}
            >
              <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                <div className="max-w-3xl">
                  <p
                    className={`inline-flex rounded-md px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] ${
                      isActiveProduct
                        ? "bg-teal-700 text-white"
                        : "bg-white text-stone-700 ring-1 ring-stone-200"
                    }`}
                  >
                    {product.status}
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold text-stone-950">
                    {product.name}
                  </h2>
                  <p className="mt-2 text-base font-semibold text-teal-700">
                    {product.subtitle}
                  </p>
                </div>
                {product.href ? (
                  <Link
                    className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-md bg-stone-950 px-5 text-sm font-semibold text-white transition hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:ring-offset-2"
                    href={product.href}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Visit Product
                  </Link>
                ) : null}
              </div>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-600">
                {product.description}
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {product.capabilities.map((capability) => (
                  <div
                    className="rounded-md border border-stone-200 bg-white px-4 py-3 text-sm font-medium leading-6 text-stone-700"
                    key={capability}
                  >
                    {capability}
                  </div>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
