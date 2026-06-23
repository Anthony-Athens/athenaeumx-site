import type { Metadata } from "next";
import { SectionHeader } from "../components/section";
import { createPageMetadata } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "Terms of Use",
  description:
    "Terms of Use for the AthenaeumX website, including informational content, intellectual property, acceptable use, updates, and liability limits.",
  path: "/terms",
  keywords: ["AthenaeumX Terms of Use", "Website Terms"],
});

export default function TermsPage() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
      <SectionHeader
        eyebrow="Terms of Use"
        title="Terms of Use"
        description="These terms explain how visitors may use the AthenaeumX website."
      />

      <div className="mt-10 space-y-8 rounded-lg border border-stone-200 bg-white p-6 leading-7 text-stone-700 shadow-sm sm:p-8">
        <section>
          <h2 className="text-xl font-semibold text-stone-950">
            Informational Content
          </h2>
          <p className="mt-3">
            The content on this website is provided for general informational
            purposes only. It should not be treated as professional advice for a
            specific situation unless AthenaeumX has separately agreed to provide
            services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-stone-950">
            No Guaranteed Outcomes
          </h2>
          <p className="mt-3">
            AthenaeumX aims to provide thoughtful, practical consulting support,
            but no specific project, business, operational, financial, analytics,
            or technology outcome is guaranteed.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-stone-950">
            Intellectual Property
          </h2>
          <p className="mt-3">
            Website content, including text, design, product names, frameworks,
            and other materials, belongs to AthenaeumX unless otherwise stated.
            Visitors may not copy, republish, or reuse this content in a way that
            suggests ownership or endorsement without permission.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-stone-950">
            Acceptable Use
          </h2>
          <p className="mt-3">
            Users may not misuse the website. This includes attempting to disrupt
            the site, submit harmful code, abuse forms, scrape content at
            unreasonable volume, or use the site for unlawful activity.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-stone-950">
            Website Updates
          </h2>
          <p className="mt-3">
            AthenaeumX may update, remove, or change website content at any time
            without notice. Content may not always be complete, current, or free
            from errors.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-stone-950">
            Limitation of Liability
          </h2>
          <p className="mt-3">
            To the fullest extent allowed by law, AthenaeumX is not responsible
            for losses or damages that may result from using this website, relying
            on website content, or being unable to access the website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-stone-950">Contact</h2>
          <p className="mt-3">
            Questions about these Terms of Use may be sent through the contact
            form on the AthenaeumX website.
          </p>
        </section>
      </div>
    </section>
  );
}
