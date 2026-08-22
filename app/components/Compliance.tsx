"use client";

import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

export default function Compliance() {
  return (
    <section className="relative py-24 sm:py-32 bg-surface">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp}>
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Trust &amp; Compliance
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mt-3 leading-tight">
            Built for how India{" "}
            <span className="font-serif-accent">regulates</span> student data
          </h2>
          <p className="text-muted mt-6 text-base leading-relaxed">
            Mo-School is designed with the{" "}
            <strong className="text-foreground">
              Digital Personal Data Protection Act (DPDP Act)
            </strong>{" "}
            front-and-center — not as an afterthought. Minors&rsquo; data
            requires verifiable parental consent, purpose-limited processing,
            and clear data retention policies. Most school software competitors
            ignore these requirements entirely. We treat compliance as a core
            product feature, not a checkbox.
          </p>
          <p className="text-muted mt-4 text-base leading-relaxed">
            The founding team brings direct experience in compliance frameworks
            and business registration — ensuring Mo-School&rsquo;s data handling
            practices are built on solid regulatory understanding from day one.
          </p>

          {/* Trust signals */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
            {[
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                ),
                label: "DPDP-Act aware",
                sub: "Minors' data handling",
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                ),
                label: "Consent-first design",
                sub: "Parental verification built in",
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                ),
                label: "Role-scoped access",
                sub: "Minimal data exposure",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-3 p-4 rounded-xl bg-white border border-border"
              >
                <div className="shrink-0 text-accent mt-0.5">{item.icon}</div>
                <div>
                  <p className="text-sm font-semibold">{item.label}</p>
                  <p className="text-xs text-muted mt-0.5">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
