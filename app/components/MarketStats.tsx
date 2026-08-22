"use client";

import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

export default function MarketStats() {
  return (
    <section className="relative py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div {...fadeUp} className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Market Opportunity
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-3">
            A <span className="font-serif-accent">greenfield</span> market
          </h2>
        </motion.div>

        {/* Qualitative market statement card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-4xl mx-auto rounded-3xl border border-border bg-surface p-8 sm:p-14 text-center shadow-card relative overflow-hidden"
        >
          {/* Subtle gradient glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

          <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground tracking-tight leading-snug relative z-10">
            A fragmented market — most mid-size schools still run on{" "}
            <span className="text-accent font-bold">paper</span>,{" "}
            <span className="text-accent font-bold">Excel</span>, and{" "}
            <span className="text-accent font-bold">WhatsApp</span> today, with
            no dedicated digital system in place.
          </p>

          <div className="mt-8 pt-8 border-t border-border/80 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-sm text-muted relative z-10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span>1,400–2,000 students per school</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span>Zero purpose-built SaaS adoption</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span>Immediate operational upside</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
