import Link from "next/link";
import { navigation } from "./site-data";

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-stone-200 bg-white/92 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-6 lg:px-8">
        <Link className="flex items-center gap-3" href="/" aria-label="AthenaeumX home">
          <span className="grid size-9 place-items-center rounded-md bg-stone-950 text-sm font-semibold text-white">
            AX
          </span>
          <span className="text-lg font-semibold text-stone-950">AthenaeumX</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link
              className="rounded-md px-3 py-2 text-sm font-medium text-stone-700 transition hover:bg-stone-100 hover:text-stone-950"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          className="inline-flex min-h-10 items-center justify-center rounded-md bg-teal-700 px-4 text-sm font-semibold text-white transition hover:bg-teal-800"
          href="/contact"
        >
          Start a conversation
        </Link>
      </div>
      <nav
        className="flex gap-1 overflow-x-auto border-t border-stone-200 px-5 py-2 md:hidden"
        aria-label="Mobile navigation"
      >
        {navigation.map((item) => (
          <Link
            className="shrink-0 rounded-md px-3 py-2 text-sm font-medium text-stone-700"
            href={item.href}
            key={item.href}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-stone-200 bg-stone-950 text-white">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-lg font-semibold">AthenaeumX</p>
            <p className="mt-3 max-w-xl text-sm leading-6 text-stone-300">
              Operations improvement, project delivery, analytics, data science, and
              machine learning for organizations ready to work with more clarity.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            {navigation.map((item) => (
              <Link
                className="rounded-md px-2 py-1 text-sm text-stone-300 hover:text-white"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-stone-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 AthenaeumX. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            {legalLinks.map((item) => (
              <Link
                className="text-stone-400 transition hover:text-white"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
