"use client";

import { useRef, useState } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

type ContactApiResponse = {
  success: boolean;
  error?: string;
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

function getFormValue(formData: FormData, field: string): string {
  const value = formData.get(field);
  return typeof value === "string" ? value.trim() : "";
}

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: getFormValue(formData, "name"),
      email: getFormValue(formData, "email"),
      company: getFormValue(formData, "company"),
      inquiryType: getFormValue(formData, "inquiryType"),
      message: getFormValue(formData, "message"),
      website: getFormValue(formData, "website"),
    };

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json().catch(() => null)) as
        | ContactApiResponse
        | null;

      if (!response.ok || !result?.success) {
        throw new Error(
          result?.error ?? "Unable to send your inquiry. Please try again.",
        );
      }

      formRef.current?.reset();
      setStatus("success");
      setMessage("Thanks. Your inquiry has been sent successfully.");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Unable to send your inquiry. Please try again.",
      );
    }
  }

  const isSubmitting = status === "loading";

  return (
    <form
      className="rounded-lg border border-stone-200 bg-white p-6 shadow-sm sm:p-8"
      onSubmit={handleSubmit}
      ref={formRef}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-stone-800">
          Name
          <input
            className="min-h-11 rounded-md border border-stone-300 px-3 text-base outline-none transition focus:border-teal-700 focus:ring-2 focus:ring-teal-700/15 disabled:bg-stone-100"
            disabled={isSubmitting}
            name="name"
            required
            type="text"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-stone-800">
          Email
          <input
            className="min-h-11 rounded-md border border-stone-300 px-3 text-base outline-none transition focus:border-teal-700 focus:ring-2 focus:ring-teal-700/15 disabled:bg-stone-100"
            disabled={isSubmitting}
            name="email"
            required
            type="email"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-stone-800">
          Company
          <input
            className="min-h-11 rounded-md border border-stone-300 px-3 text-base outline-none transition focus:border-teal-700 focus:ring-2 focus:ring-teal-700/15 disabled:bg-stone-100"
            disabled={isSubmitting}
            name="company"
            type="text"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-stone-800">
          Inquiry type
          <select
            className="min-h-11 rounded-md border border-stone-300 px-3 text-base outline-none transition focus:border-teal-700 focus:ring-2 focus:ring-teal-700/15 disabled:bg-stone-100"
            disabled={isSubmitting}
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
          className="min-h-40 rounded-md border border-stone-300 px-3 py-3 text-base outline-none transition focus:border-teal-700 focus:ring-2 focus:ring-teal-700/15 disabled:bg-stone-100"
          disabled={isSubmitting}
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
      {message ? (
        <p
          aria-live="polite"
          className={`mt-5 rounded-md border px-4 py-3 text-sm font-medium ${
            status === "success"
              ? "border-teal-200 bg-teal-50 text-teal-800"
              : "border-red-200 bg-red-50 text-red-800"
          }`}
        >
          {message}
        </p>
      ) : null}
      <button
        className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-md bg-stone-950 px-5 text-sm font-semibold text-white transition hover:bg-stone-800 disabled:cursor-not-allowed disabled:bg-stone-400 sm:w-auto"
        disabled={isSubmitting}
        type="submit"
      >
        {isSubmitting ? "Sending..." : "Send inquiry"}
      </button>
    </form>
  );
}
