"use client";

import { useState } from "react";
import { Plus } from "@phosphor-icons/react/dist/ssr";
import { faqCategories } from "@/lib/data";

export default function CategorizedFAQ() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const current = faqCategories[activeCategory];

  function selectCategory(i: number) {
    setActiveCategory(i);
    setOpenIndex(null);
  }

  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-[220px_1fr]">
      {/* Sidebar */}
      <div className="flex flex-col">
        {faqCategories.map((group, i) => (
          <button
            key={group.category}
            onClick={() => selectCategory(i)}
            className={`border-b border-[var(--border)] py-3 text-left text-sm transition-colors duration-150 ${
              activeCategory === i
                ? "text-[var(--text)]"
                : "text-[var(--text-muted)] hover:text-[var(--text)]"
            }`}
          >
            {group.category}
          </button>
        ))}
      </div>

      {/* Panel */}
      <div className="rounded-2xl bg-[var(--surface)] p-2">
        {current.items.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={item.question}
              className="border-b border-[var(--border)] px-4 last:border-none"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex w-full items-center justify-between py-4 text-left text-sm text-[var(--accent)]"
              >
                {item.question}
                <Plus
                  size={16}
                  className={`shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <p className="pb-4 text-sm text-[var(--text-muted)]">
                  {item.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}