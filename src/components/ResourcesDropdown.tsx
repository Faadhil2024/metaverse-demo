"use client";

import { useState } from "react";
import Link from "next/link";

const items = [
  { label: "Blog", href: "/resources/blog" },
  { label: "FAQ", href: "/resources/faq" },
  { label: "Guides", href: "/resources/guides" },
  { label: "Video Tutorials", href: "/resources/video-tutorials" },
  { label: "Glossary", href: "/resources/glossary" },
];

export default function ResourcesDropdown({ transparent = false }: { transparent?: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className={`transition-colors duration-150 ${
          transparent ? "hover:text-white" : "hover:text-[var(--text)]"
        }`}
      >
        Resources
      </button>

      {open && (
        <div className="absolute left-0 top-full pt-3">
          <div className="flex w-44 flex-col rounded-xl border border-[var(--border)] bg-[var(--surface)] p-2 shadow-lg">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm text-[var(--text-muted)] transition-colors duration-150 hover:bg-[var(--bg)] hover:text-[var(--text)]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}