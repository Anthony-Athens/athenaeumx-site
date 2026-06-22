import Link from "next/link";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div
      className={`max-w-3xl ${
        align === "center" ? "mx-auto text-center" : ""
      }`}
    >
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="mt-3 text-4xl font-semibold leading-tight text-stone-950 sm:text-5xl">
        {title}
      </h1>
      {description ? (
        <p className="mt-5 text-lg leading-8 text-stone-600">{description}</p>
      ) : null}
    </div>
  );
}

export function CTA({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const classes =
    variant === "primary"
      ? "bg-stone-950 text-white hover:bg-stone-800"
      : "border border-stone-300 text-stone-950 hover:border-stone-950 hover:bg-white";

  return (
    <Link
      className={`inline-flex min-h-11 items-center justify-center rounded-md px-5 text-sm font-semibold transition ${classes}`}
      href={href}
    >
      {children}
    </Link>
  );
}
