import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

export const runtime = "nodejs";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  inquiryType?: unknown;
  message?: unknown;
  website?: unknown;
};

type ContactSubmission = {
  name: string;
  email: string;
  company: string | null;
  inquiryType: string | null;
  message: string;
};

type ErrorResponse = {
  success: false;
  error: string;
  details?: Record<string, string>;
};

type SuccessResponse = {
  success: true;
};

const SOURCE = "athenaeumx.com";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function jsonResponse(
  body: SuccessResponse | ErrorResponse,
  status: number,
): Response {
  return Response.json(body, { status });
}

function getString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function parsePayload(payload: ContactPayload): {
  submission?: ContactSubmission;
  spam?: boolean;
  errors?: Record<string, string>;
} {
  const honeypot = getString(payload.website);

  if (honeypot) {
    return { spam: true };
  }

  const submission: ContactSubmission = {
    name: getString(payload.name),
    email: getString(payload.email).toLowerCase(),
    company: getString(payload.company) || null,
    inquiryType: getString(payload.inquiryType) || null,
    message: getString(payload.message),
  };

  const errors: Record<string, string> = {};

  if (!submission.name) {
    errors.name = "Name is required.";
  }

  if (!submission.email) {
    errors.email = "Email is required.";
  } else if (!EMAIL_PATTERN.test(submission.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!submission.message) {
    errors.message = "Message is required.";
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  return { submission };
}

function requireEnv(name: string): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

function createNotificationText(submission: ContactSubmission): string {
  return [
    "New AthenaeumX contact submission",
    "",
    `Name: ${submission.name}`,
    `Email: ${submission.email}`,
    `Company: ${submission.company ?? "Not provided"}`,
    `Inquiry type: ${submission.inquiryType ?? "Not provided"}`,
    `Source: ${SOURCE}`,
    "",
    "Message:",
    submission.message,
  ].join("\n");
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return jsonResponse(
      { success: false, error: "Request body must be valid JSON." },
      400,
    );
  }

  const parsed = parsePayload(payload);

  if (parsed.spam) {
    return jsonResponse({ success: false, error: "Submission rejected." }, 400);
  }

  if (parsed.errors) {
    return jsonResponse(
      {
        success: false,
        error: "Validation failed.",
        details: parsed.errors,
      },
      422,
    );
  }

  if (!parsed.submission) {
    return jsonResponse({ success: false, error: "Invalid submission." }, 400);
  }

  try {
    const supabaseUrl = requireEnv("NEXT_PUBLIC_SUPABASE_URL");
    const supabaseServiceRoleKey = requireEnv("SUPABASE_SERVICE_ROLE_KEY");
    const resendApiKey = requireEnv("RESEND_API_KEY");
    const contactToEmail = requireEnv("CONTACT_TO_EMAIL");
    const contactFromEmail = requireEnv("CONTACT_FROM_EMAIL");

    const supabase = createClient(supabaseUrl, supabaseServiceRoleKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    });

    const { error: insertError } = await supabase
      .from("contact_submissions")
      .insert({
        name: parsed.submission.name,
        email: parsed.submission.email,
        company: parsed.submission.company,
        inquiry_type: parsed.submission.inquiryType,
        message: parsed.submission.message,
        source: SOURCE,
      });

    if (insertError) {
      console.error("Contact submission insert failed", insertError);
      return jsonResponse(
        { success: false, error: "Unable to save submission." },
        500,
      );
    }

    const resend = new Resend(resendApiKey);
    const { error: emailError } = await resend.emails.send({
      from: contactFromEmail,
      to: contactToEmail,
      replyTo: parsed.submission.email,
      subject: `New AthenaeumX inquiry from ${parsed.submission.name}`,
      text: createNotificationText(parsed.submission),
    });

    if (emailError) {
      console.error("Contact notification email failed", emailError);
      return jsonResponse(
        { success: false, error: "Submission saved, but notification failed." },
        502,
      );
    }

    return jsonResponse({ success: true }, 200);
  } catch (error) {
    console.error("Contact submission handler failed", error);
    return jsonResponse(
      { success: false, error: "Unable to process submission." },
      500,
    );
  }
}
