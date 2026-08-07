"use client";

import React, { useState } from "react";
import Section from "../../foundation/Section";
import Container from "../../foundation/Container";
import Typography from "../../foundation/Typography";
import BaseCard from "../../foundation/Card";
import { faqList } from "../../../data/faq";

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <Section background="default" spacing="default" id="faq">
      <Container size="default">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16 text-center">
          <div className="inline-block text-xs font-bold uppercase tracking-wider text-brand-blue bg-brand-blue-50 dark:bg-brand-blue-900/20 px-3 py-1 rounded-full">
            Common Inquiries
          </div>
          <Typography variant="h2" as="h2" className="text-brand-dark dark:text-white font-bold leading-tight">
            Frequently Asked Questions
          </Typography>
          <Typography variant="body" className="text-zinc-500 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Find answers to commonly asked questions about registration, courses, coaching modes, and mentorship programs.
          </Typography>
        </div>

        {/* Accordions Stack */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {faqList.map((item) => {
            const isOpen = openId === item.id;
            return (
              <BaseCard
                key={item.id}
                variant="default"
                hover={false}
                className="p-0 border border-zinc-100 dark:border-zinc-800 text-left overflow-hidden bg-white dark:bg-zinc-900 shadow-xs"
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left outline-none cursor-pointer group"
                  aria-expanded={isOpen}
                >
                  <Typography variant="h3" as="span" className="font-bold text-sm sm:text-base text-brand-dark dark:text-white group-hover:text-brand-blue dark:group-hover:text-white transition-colors select-none">
                    {item.question}
                  </Typography>
                  <span className="ml-4 shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-zinc-50 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 group-hover:bg-brand-blue-50 dark:group-hover:bg-brand-blue-950 group-hover:text-brand-blue dark:group-hover:text-brand-blue-400 transition-colors">
                    <svg
                      className={`h-4 w-4 transform transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                {/* Accordion Content */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-60 border-t border-zinc-50 dark:border-zinc-800/80" : "max-h-0"
                  }`}
                >
                  <div className="p-5 sm:p-6 bg-zinc-50/50 dark:bg-zinc-950/20">
                    <Typography variant="body" className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                      {item.answer}
                    </Typography>
                  </div>
                </div>
              </BaseCard>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

