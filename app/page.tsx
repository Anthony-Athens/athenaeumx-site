import Image from "next/image";
import type { Metadata } from "next";
import { CTA, SectionHeader } from "./components/section";
import { differentiators, services } from "./components/site-data";
import { createPageMetadata } from "./seo";

export const metadata: Metadata = createPageMetadata({
  title: "Process Improvement, Data Analytics, and AI Consulting",
  description:
    "AthenaeumX provides process improvement consulting, project management consulting, data analytics, data science, machine learning, AI strategy, Tableau consulting, and business intelligence support.",
  path: "/",
  keywords: [
    "Operations Consultant",
    "AI Strategy Consultant",
    "Operational Analytics",
  ],
});

const metrics = [
  ["5", "core capabilities"],
  ["30-90", "day improvement cycles"],
  ["1", "operating model aligned to data"],
];

export default function Home() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">
              Operations, analytics, and AI consulting
            </p>
            <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-tight text-stone-950 sm:text-6xl">
              Improve the way work moves, decisions happen, and data creates value.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
              AthenaeumX helps organizations strengthen operations through process
              improvement, project management, data analysis, data science, and
              machine learning.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CTA href="/contact">Discuss your priorities</CTA>
              <CTA href="/services" variant="secondary">
                Explore services
              </CTA>
            </div>
          </div>
          <div className="relative min-h-[360px] overflow-hidden rounded-lg border border-stone-200 bg-stone-100 shadow-sm lg:min-h-[560px]">
            <Image
              src="/athenaeumx-operations-hero.png"
              alt="Abstract operations dashboards and workflow analytics in a modern strategy room"
              fill
              priority
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-stone-200 bg-stone-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-8 sm:px-6 md:grid-cols-3 lg:px-8">
          {metrics.map(([value, label]) => (
            <div key={label}>
              <p className="text-3xl font-semibold">{value}</p>
              <p className="mt-1 text-sm uppercase tracking-[0.12em] text-stone-300">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeader
          eyebrow="Where AthenaeumX fits"
          title="A practical bridge between strategy, operations, and intelligent systems."
          description="The work starts with how an organization actually runs, then connects process, delivery discipline, and data capability into changes teams can adopt."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {differentiators.map((item) => (
            <div className="rounded-lg border border-stone-200 bg-white p-6 shadow-sm" key={item}>
              <p className="text-base leading-7 text-stone-700">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeader
              eyebrow="Services"
              title="Focused support for better operations."
              description="Engagements can begin with a diagnostic, a delivery challenge, an analytics need, or a machine learning opportunity."
            />
            <CTA href="/services" variant="secondary">
              View all services
            </CTA>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-5">
            {services.map((service) => (
              <article
                className="rounded-lg border border-stone-200 bg-stone-50 p-5"
                key={service.title}
              >
                <h2 className="text-lg font-semibold text-stone-950">{service.title}</h2>
                <p className="mt-3 text-sm leading-6 text-stone-600">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
