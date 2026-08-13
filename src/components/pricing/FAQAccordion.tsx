"use client";

import { useState } from "react";
import { CaretDown } from "@phosphor-icons/react/dist/ssr";
import { faqs } from "@/lib/data";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div>
      <h2 className="mb-8 text-center font-display text-3xl">
        Frequently asked questions
      </h2>

      <div className="mx-auto max-w-2xl divide-y divide-[var(--border)] border-t border-[var(--border)]">
        {faqs.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={item.question}>
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex w-full items-center justify-between py-4 text-left text-sm"
              >
                {item.question}
                <CaretDown
                  size={16}
                  className={`shrink-0 text-[var(--text-muted)] transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
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