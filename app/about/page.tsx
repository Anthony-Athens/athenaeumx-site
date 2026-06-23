import type { Metadata } from "next";
import { SectionHeader } from "../components/section";
import { differentiators } from "../components/site-data";
import { createPageMetadata } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "About AthenaeumX",
  description:
    "Learn about AthenaeumX, a consulting firm focused on operational excellence, process improvement, project management, data analytics, data science, machine learning, and AI strategy.",
  path: "/about",
  keywords: [
    "Operational Excellence",
    "Business Intelligence",
    "AI Consultant",
    "Data Science Consultant",
  ],
});

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeader
          eyebrow="About"
          title="A consultancy for organizations that want improvement to survive contact with daily work."
          description="AthenaeumX combines operations discipline, project management structure, and analytical methods to help teams make better decisions and execute with more confidence."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-lg bg-stone-950 p-7 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-300">
              Operating belief
            </p>
            <p className="mt-5 text-2xl font-semibold leading-snug">
              Better systems come from making work visible, measurable, and easier
              to improve.
            </p>
          </div>
          <div className="space-y-5 text-lg leading-8 text-stone-600">
            <p>
              Many organizations have strategies, dashboards, and project plans that
              do not quite connect. AthenaeumX focuses on that connection point:
              how teams coordinate work, how leaders see performance, and how data
              becomes action.
            </p>
            <p>
              Engagements are designed to be clear and usable, whether the need is
              a process diagnostic, a delivery reset, a reporting foundation, or an
              advanced analytics and machine learning roadmap.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-stone-950">How we work</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {differentiators.map((item) => (
              <div className="rounded-lg border border-stone-200 bg-stone-50 p-6" key={item}>
                <p className="leading-7 text-stone-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
