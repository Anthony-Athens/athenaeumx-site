import type { Metadata } from "next";
import { SectionHeader } from "../components/section";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact AthenaeumX about process improvement, project management, analytics, data science, and machine learning consulting.",
};

const inquiryTypes = [
  "Process improvement",
  "Project management",
  "Data analysis",
  "Data science",
  "Machine learning",
  "Products",
  "General inquiry",
];

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
      <form className="rounded-lg border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-medium text-stone-800">
            Name
            <input
              className="min-h-11 rounded-md border border-stone-300 px-3 text-base outline-none transition focus:border-teal-700 focus:ring-2 focus:ring-teal-700/15"
              name="name"
              required
              type="text"
            />
          </label>
          <label className="grid gap-2 text-sm font-medium text-stone-800">
            Email
            <input
              className="min-h-11 rounded-md border border-stone-300 px-3 text-base outline-none transition focus:border-teal-700 focus:ring-2 focus:ring-teal-700/15"
              name="email"
              required
              type="email"
            />
          </label>
          <label className="grid gap-2 text-sm font-medium text-stone-800">
            Company
            <input
              className="min-h-11 rounded-md border border-stone-300 px-3 text-base outline-none transition focus:border-teal-700 focus:ring-2 focus:ring-teal-700/15"
              name="company"
              type="text"
            />
          </label>
          <label className="grid gap-2 text-sm font-medium text-stone-800">
            Inquiry type
            <select
              className="min-h-11 rounded-md border border-stone-300 px-3 text-base outline-none transition focus:border-teal-700 focus:ring-2 focus:ring-teal-700/15"
              name="inquiryType"
              required
            >
              <option value="">Select an inquiry type</option>
              {inquiryTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>
        </div>
        <label className="mt-5 grid gap-2 text-sm font-medium text-stone-800">
          Message
          <textarea
            className="min-h-40 rounded-md border border-stone-300 px-3 py-3 text-base outline-none transition focus:border-teal-700 focus:ring-2 focus:ring-teal-700/15"
            name="message"
            required
          />
        </label>
        <input
          aria-hidden="true"
          autoComplete="off"
          className="hidden"
          name="website"
          tabIndex={-1}
          type="text"
        />
        <button
          className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-md bg-stone-950 px-5 text-sm font-semibold text-white transition hover:bg-stone-800 sm:w-auto"
          type="submit"
        >
          Send inquiry
        </button>
      </form>
    </section>
  );
}
