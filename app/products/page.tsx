import type { Metadata } from "next";
import { CTA, SectionHeader } from "../components/section";
import { products } from "../components/site-data";

export const metadata: Metadata = {
  title: "Products",
  description:
    "AthenaeumX products and accelerators, featuring Mental Mathletics.",
};

export default function ProductsPage() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
      <SectionHeader
        eyebrow="Products"
        title="Tools and learning products that extend the work."
        description="AthenaeumX pairs advisory support with focused products that help people build capability and move faster."
      />
      <div className="mt-12 grid gap-6">
        {products.map((product, index) => (
          <article
            className={`rounded-lg border p-7 shadow-sm ${
              index === 0
                ? "border-teal-700 bg-white"
                : "border-stone-200 bg-stone-50"
            }`}
            key={product.name}
          >
            <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-teal-700">
                  {product.status}
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-stone-950">
                  {product.name}
                </h2>
                <p className="mt-2 text-sm font-medium text-stone-500">
                  {product.category}
                </p>
              </div>
              {index === 0 ? <CTA href="/contact">Ask about Mental Mathletics</CTA> : null}
            </div>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-600">
              {product.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
