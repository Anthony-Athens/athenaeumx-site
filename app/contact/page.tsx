import type { Metadata } from "next";
import { SectionHeader } from "../components/section";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact AthenaeumX about process improvement, project management, analytics, data science, and machine learning consulting.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8 lg:py-20">
      <div>
        <SectionHeader
          eyebrow="Contact"
          title="Tell us what you are trying to improve."
          description="Share the operational challenge, delivery goal, data question, or product inquiry that brought you here."
        />
        <div className="mt-8 rounded-lg border border-stone-200 bg-white p-6 text-sm leading-6 text-stone-600">
          <p className="font-semibold text-stone-950">Typical starting points</p>
          <p className="mt-3">
            Process bottlenecks, project recovery, KPI design, analytics readiness,
            machine learning feasibility, and Mental Mathletics product questions.
          </p>
        </div>
      </div>
      <ContactForm />
    </section>
  );
}
