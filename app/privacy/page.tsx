import type { Metadata } from "next";
import { SectionHeader } from "../components/section";
import { createPageMetadata } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "Privacy Policy for AthenaeumX, including how contact form submissions are used, protected, and supported by Supabase and Vercel.",
  path: "/privacy",
  keywords: ["AthenaeumX Privacy Policy", "Contact Information Privacy"],
});

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
      <SectionHeader
        eyebrow="Privacy Policy"
        title="Privacy Policy"
        description="This policy explains how AthenaeumX handles information submitted through this website."
      />

      <div className="mt-10 space-y-8 rounded-lg border border-stone-200 bg-white p-6 leading-7 text-stone-700 shadow-sm sm:p-8">
        <section>
          <h2 className="text-xl font-semibold text-stone-950">
            Information You Submit
          </h2>
          <p className="mt-3">
            Users may submit contact information through the AthenaeumX website,
            including name, email address, company, inquiry type, and message
            details.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-stone-950">
            How Information Is Used
          </h2>
          <p className="mt-3">
            Submitted information is used solely to respond to inquiries, discuss
            potential services, and provide services requested by the user.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-stone-950">
            Personal Information
          </h2>
          <p className="mt-3">
            AthenaeumX does not sell personal information. Submitted information
            is not used for unrelated marketing or shared with third parties for
            sale.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-stone-950">
            Data Protection
          </h2>
          <p className="mt-3">
            AthenaeumX uses reasonable measures to protect submitted information
            from unauthorized access, loss, misuse, or disclosure. No website or
            data transmission method can be guaranteed to be completely secure.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-stone-950">
            Website Operations
          </h2>
          <p className="mt-3">
            AthenaeumX uses service providers such as Supabase and Vercel to
            operate the website, process contact submissions, host the website,
            and support related technical functions.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-stone-950">Contact</h2>
          <p className="mt-3">
            To ask questions about this Privacy Policy or how submitted
            information is handled, please use the contact form on the
            AthenaeumX website.
          </p>
        </section>
      </div>
    </section>
  );
}
