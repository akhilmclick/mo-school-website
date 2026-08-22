"use client";

import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

const steps = [
  {
    number: "01",
    title: "Onboard your school",
    description:
      "A guided 6-step wizard collects school details, class structure, and admin credentials. Up and running in a single afternoon.",
  },
  {
    number: "02",
    title: "Assign roles",
    description:
      "Invite teachers, link parents to their children, and set admin access levels — everyone gets exactly the permissions they need.",
  },
  {
    number: "03",
    title: "Go live",
    description:
      "Attendance, notices, and student records are live from day one. No migration headaches, no training manuals.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-24 sm:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — text steps */}
          <motion.div {...fadeUp}>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              How it works
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-3 leading-tight">
              Live in{" "}
              <span className="font-serif-accent">one afternoon</span>
            </h2>
            <p className="text-muted mt-4 text-base leading-relaxed max-w-md">
              Three steps from first login to full deployment. No IT team required.
            </p>

            <div className="mt-10 space-y-8">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="flex gap-4"
                >
                  <div className="shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="text-sm font-bold text-accent">
                      {step.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-base">{step.title}</h3>
                    <p className="text-muted text-sm mt-1 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — dashboard card mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl border border-border shadow-float p-5 sm:p-6">
              {/* Onboarding wizard mockup */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                </div>
                <div>
                  <p className="text-sm font-semibold">School Setup Wizard</p>
                  <p className="text-[11px] text-muted">Step 3 of 6</p>
                </div>
              </div>

              {/* Progress bar */}
              <div className="h-1.5 bg-gray-100 rounded-full mb-6 overflow-hidden">
                <motion.div
                  className="h-full bg-accent rounded-full"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "50%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                />
              </div>

              {/* Form-like fields */}
              <div className="space-y-4">
                <div>
                  <label className="text-[11px] text-muted font-medium uppercase tracking-wider">
                    School Name
                  </label>
                  <div className="mt-1 h-10 bg-gray-50 rounded-lg border border-border flex items-center px-3">
                    <span className="text-sm text-foreground">
                      Delhi Public Academy
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] text-muted font-medium uppercase tracking-wider">
                      Classes
                    </label>
                    <div className="mt-1 h-10 bg-gray-50 rounded-lg border border-border flex items-center px-3">
                      <span className="text-sm text-foreground">
                        1st – 12th
                      </span>
                    </div>
                  </div>
                  <div>
                    <label className="text-[11px] text-muted font-medium uppercase tracking-wider">
                      Total Students
                    </label>
                    <div className="mt-1 h-10 bg-gray-50 rounded-lg border border-border flex items-center px-3">
                      <span className="text-sm text-foreground">1,680</span>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="text-[11px] text-muted font-medium uppercase tracking-wider">
                    Board Affiliation
                  </label>
                  <div className="mt-1 h-10 bg-gray-50 rounded-lg border border-border flex items-center px-3">
                    <span className="text-sm text-foreground">CBSE</span>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex items-center justify-between mt-6">
                <button className="text-sm text-muted hover:text-foreground transition-colors">
                  ← Back
                </button>
                <button className="inline-flex items-center gap-1.5 px-5 py-2 bg-accent text-white text-sm font-medium rounded-full hover:bg-accent-dark transition-colors">
                  Continue
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
