import type { Metadata } from "next";
import { CTA, SectionHeader } from "../components/section";
import { services } from "../components/site-data";
import { createPageMetadata } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "Consulting Services",
  description:
    "AthenaeumX consulting services include process improvement, project management, data analytics, data science, machine learning, AI strategy, Tableau consulting, operational excellence, and business intelligence.",
  path: "/services",
  keywords: [
    "Process Improvement Consultant",
    "Project Management Consultant",
    "Tableau Consultant",
    "Operational Excellence Consultant",
  ],
});

export default function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeader
          eyebrow="Services"
          title="Operational improvement with analytical depth."
          description="AthenaeumX supports leaders who need cleaner processes, stronger delivery rhythms, better measurement, and intelligent automation."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article
              className="rounded-lg border border-stone-200 bg-white p-7 shadow-sm"
              key={service.title}
            >
              <h2 className="text-2xl font-semibold text-stone-950">{service.title}</h2>
              <p className="mt-4 leading-7 text-stone-600">{service.description}</p>
              <p className="mt-5 border-l-4 border-teal-700 pl-4 text-sm font-medium leading-6 text-stone-700">
                {service.proof}
              </p>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-stone-950 text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-5 py-12 sm:px-6 md:flex-row md:items-center lg:px-8">
          <div>
            <h2 className="text-3xl font-semibold">Need a sharper operating system?</h2>
            <p className="mt-3 max-w-2xl text-stone-300">
              Start with a focused conversation about the constraints, decisions, and
              data that matter most.
            </p>
          </div>
          <CTA href="/contact">Contact AthenaeumX</CTA>
        </div>
      </section>
    </>
  );
}
