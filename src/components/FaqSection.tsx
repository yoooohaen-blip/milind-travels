"use client";

import React, { useState } from "react";
import { FREQUENT_QUESTIONS } from "@/data/content";
import { ChevronDown } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="section-py surface-light" style={{ borderBottom: "1px solid rgba(8, 21, 33, 0.08)" }}>
      <div className="site-container-narrow">
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto 3rem auto" }}>
          <h2 className="text-section-title" style={{ color: "var(--color-midnight-navy)", marginBottom: "1rem" }}>
            Frequently Asked Questions
          </h2>

          <p className="text-lead" style={{ color: "var(--text-dark-secondary)" }}>
            Essential answers for facilities directors, HR heads, and procurement managers
            evaluating corporate transportation partnerships in Mumbai.
          </p>
        </div>

        {/* Accordion List */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {FREQUENT_QUESTIONS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.q}
                style={{
                  backgroundColor: "#FFFFFF",
                  border: isOpen
                    ? "1px solid var(--color-champagne)"
                    : "1px solid rgba(129, 144, 154, 0.18)",
                  borderRadius: "var(--radius-md)",
                  overflow: "hidden",
                  transition: "all var(--transition-fast)",
                  boxShadow: isOpen ? "var(--shadow-md)" : "var(--shadow-sm)",
                }}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "1.35rem 1.75rem",
                    textAlign: "left",
                    color: "var(--color-midnight-navy)",
                    backgroundColor: "transparent",
                  }}
                >
                  <span style={{ fontSize: "1.05rem", fontWeight: 700, paddingRight: "1rem" }}>
                    {faq.q}
                  </span>
                  <div
                    style={{
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 240ms ease",
                      color: isOpen ? "var(--color-champagne-dark)" : "var(--color-slate-gray)",
                      flexShrink: 0,
                    }}
                  >
                    <ChevronDown size={20} />
                  </div>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: "0 1.75rem 1.5rem 1.75rem",
                      color: "var(--text-dark-secondary)",
                      fontSize: "0.95rem",
                      lineHeight: 1.65,
                      borderTop: "1px solid rgba(8, 21, 33, 0.05)",
                      paddingTop: "1rem",
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
