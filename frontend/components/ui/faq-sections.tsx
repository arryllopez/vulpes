"use client";

import { cn } from "@/lib/utils";
import { useState, ReactNode } from "react";

interface FaqItem {
  question: string;
  answer: ReactNode;
}

interface FaqSectionsProps {
  faqs: FaqItem[];
  title?: string;
  subtitle?: string;
  label?: string;
  className?: string;
}

export function FaqSections({
  faqs,
  title = "Looking for answers?",
  subtitle = "Everything you need to know.",
  label = "FAQ's",
  className,
}: FaqSectionsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "max-w-3xl mx-auto flex flex-col items-center justify-center px-4 md:px-0",
        className
      )}
    >
      <p className="text-primary text-base md:text-lg font-medium">{label}</p>
      <h1 className="text-3xl md:text-4xl font-semibold text-center">{title}</h1>
      <p className="text-base md:text-lg text-slate-500 mt-3 pb-10 text-center">{subtitle}</p>
      {faqs.map((faq, index) => (
        <div
          className="border-b border-slate-200 py-5 md:py-6 cursor-pointer w-full"
          key={index}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        >
          <div className="flex items-center justify-between">
            <h3 className="text-lg md:text-xl font-medium">{faq.question}</h3>
            <svg
              width="24"
              height="24"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`${
                openIndex === index ? "rotate-180" : ""
              } transition-all duration-500 ease-in-out flex-shrink-0 ml-4`}
            >
              <path
                d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                stroke="#1D293D"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p
            className={`text-base md:text-lg text-slate-500 transition-all duration-500 ease-in-out ${
              openIndex === index
                ? "opacity-100 max-h-[300px] translate-y-0 pt-4"
                : "opacity-0 max-h-0 -translate-y-2"
            }`}
          >
            {faq.answer}
          </p>
        </div>
      ))}
    </div>
  );
}

export default FaqSections;
