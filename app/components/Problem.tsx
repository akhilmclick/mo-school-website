"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import ScrollPlane from "./ScrollPlane";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

const bottlenecks = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    title: "Paper Registers",
    problem: "Scattered records & delays",
    description:
      "Physical roll-call books and paper slips create administrative friction, lost attendance records, and zero real-time visibility for school management.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "WhatsApp Chaos",
    problem: "Unacknowledged notices",
    description:
      "Important school announcements get buried in noisy chat threads. Principals have no proof parents actually received or read crucial notices.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
    title: "Excel Spreadsheets",
    problem: "Manual fee reconciliation",
    description:
      "Fragmented spreadsheets lead to fee tracking errors, manual payment matching headaches, and delayed financial reporting for administration.",
  },
];

export default function Problem() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="problem"
      className="relative py-24 sm:py-32 bg-surface overflow-hidden border-t border-border/40"
    >
      {/* Second flight: shallow drift across the problem breakdown */}
      <ScrollPlane
        sectionRef={sectionRef}
        path="M -60 280 C 240 320, 600 200, 1060 250"
        viewBox="0 0 1000 500"
        opacityRange={[0.08, 0.22, 0.78, 0.92]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            The Problem
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-3 leading-tight">
            Schools are caught between{" "}
            <span className="font-serif-accent">paper</span> and{" "}
            <span className="font-serif-accent">complexity</span>
          </h2>
          <p className="text-muted mt-4 text-base sm:text-lg leading-relaxed">
            Most mid-size institutions (1,400–2,000 students) rely on three
            disconnected tools — none of which were built for schools.
          </p>
        </motion.div>

        {/* 3 Problem cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {bottlenecks.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="rounded-2xl border border-border bg-white p-7 sm:p-8 shadow-card flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                <p className="text-xs font-semibold uppercase tracking-wide text-accent mt-1">
                  {item.problem}
                </p>
                <p className="text-sm text-muted mt-3 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
