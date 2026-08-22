"use client";

import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

const founders = [
  {
    initials: "M",
    name: "Moin",
    role: "Founder",
    bio: "Moin brings a strong business and execution mindset to Mo-School. He focuses on driving the company's strategic vision, turning opportunities into structured initiatives, and leading execution on the ground.",
  },
  {
    initials: "A",
    name: "Akhil",
    role: "Co-Founder | Product & Tech",
    bio: "Akhil leads product and technology, combining software engineering, product strategy, and user experience design. He focuses on building scalable technical architecture and turning complex school workflows into simple, reliable software.",
  },
];

export default function Founders() {
  return (
    <section id="founders" className="relative py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div {...fadeUp} className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Meet the Founders
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-3 leading-tight max-w-3xl mx-auto">
            Built by people who understand both{" "}
            <span className="font-serif-accent">schools</span> and{" "}
            <span className="font-serif-accent">startups</span>
          </h2>
        </motion.div>

        {/* Founder cards — two-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {founders.map((founder, i) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="rounded-2xl border border-border bg-surface p-8 sm:p-10 text-center flex flex-col items-center"
            >
              {/* Avatar placeholder */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 border-2 border-accent/30 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-accent">
                  {founder.initials}
                </span>
              </div>

              {/* Name */}
              <h3 className="text-xl font-bold text-foreground">
                {founder.name}
              </h3>

              {/* Role */}
              <p className="text-sm font-semibold text-accent mt-1">
                {founder.role}
              </p>

              {/* Bio */}
              <p className="text-sm text-muted mt-4 leading-relaxed text-center">
                {founder.bio}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing connector line */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-muted text-sm sm:text-base mt-12 max-w-2xl mx-auto leading-relaxed"
        >
          Together, Moin and Akhil combine operational leadership and technical
          execution to build Mo-School with a practical, founder-first mindset.
        </motion.p>
      </div>
    </section>
  );
}
