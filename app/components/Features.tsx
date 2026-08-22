"use client";

import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

export default function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div {...fadeUp} className="mb-14 max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Core features
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-3 leading-tight">
            Built for how schools{" "}
            <span className="font-serif-accent">actually run</span>
          </h2>
          <p className="text-muted mt-4 text-base sm:text-lg leading-relaxed max-w-lg">
            Structured, simple tools replacing scattered paper registers,
            WhatsApp groups, and Excel spreadsheets.
          </p>
        </motion.div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Large left card — dark */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 rounded-2xl bg-surface-dark text-white p-6 sm:p-8 flex flex-col justify-between min-h-[380px] sm:min-h-[440px] group cursor-default"
            style={{ perspective: "800px" }}
            whileHover={{
              rotateY: -2,
              rotateX: 1,
              transition: { duration: 0.3 },
            }}
          >
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-xs font-medium text-white/70 mb-4">
                Attendance
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold leading-snug">
                Lightning-fast<br />roll-call
              </h3>
              <p className="text-white/60 text-sm mt-3 leading-relaxed max-w-xs">
                Teachers mark attendance in under a minute via a clean tap-to-mark UI — no paper registers, no delays.
              </p>
            </div>

            {/* Tilted phone mockup */}
            <div className="mt-6 flex justify-end">
              <div
                className="w-44 sm:w-52 bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/10 shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                style={{ transform: "rotate(-4deg)" }}
              >
                <div className="space-y-2">
                  {["Arjun K.", "Priya S.", "Rohan M.", "Sneha D.", "Vikram P."].map(
                    (name, i) => (
                      <div
                        key={name}
                        className="flex items-center justify-between py-1.5 px-2 rounded-lg bg-white/5"
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-white/20" />
                          <span className="text-[11px] font-medium text-white/80">
                            {name}
                          </span>
                        </div>
                        <div
                          className={`w-5 h-5 rounded-md flex items-center justify-center ${
                            i < 4
                              ? "bg-accent"
                              : "border border-white/30"
                          }`}
                        >
                          {i < 4 && (
                            <svg
                              width="10"
                              height="10"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="white"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M20 6 9 17l-5-5" />
                            </svg>
                          )}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Stat callout */}
            <div className="mt-6">
              <span className="text-4xl sm:text-5xl font-bold text-accent">3×</span>
              <p className="text-white/50 text-xs mt-1">
                faster attendance marking
              </p>
            </div>
          </motion.div>

          {/* Right column — 3 smaller cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Notice Acknowledgment */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl bg-surface border border-border p-6 group cursor-default flex flex-col"
              style={{ perspective: "800px" }}
              whileHover={{
                rotateY: 2,
                rotateX: -1,
                transition: { duration: 0.3 },
              }}
            >
              <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-xs font-medium text-accent mb-4 w-fit">
                Notices
              </span>
              <h3 className="text-lg font-bold leading-snug">
                Verified notice<br />acknowledgment
              </h3>
              <p className="text-muted text-sm mt-2 leading-relaxed flex-1">
                Every notice requires a digital receipt. No more &ldquo;I didn&rsquo;t see it&rdquo; excuses — schools get proof every parent was reached.
              </p>
              {/* Mini card mockup */}
              <div
                className="mt-4 bg-white rounded-xl p-3 border border-border shadow-card group-hover:shadow-card-hover transition-shadow"
                style={{ transform: "rotate(2deg)" }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] text-muted">Annual Day Notice</p>
                    <p className="text-xs font-semibold mt-0.5">
                      38 / 42 acknowledged
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full border-3 border-accent flex items-center justify-center">
                    <span className="text-[10px] font-bold text-accent">90%</span>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <span className="text-3xl font-bold text-accent">100%</span>
                <p className="text-muted text-xs mt-0.5">
                  notice acknowledgment, verified
                </p>
              </div>
            </motion.div>

            {/* Student Profile */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="rounded-2xl bg-surface border border-border p-6 group cursor-default flex flex-col"
              style={{ perspective: "800px" }}
              whileHover={{
                rotateY: -2,
                rotateX: 1,
                transition: { duration: 0.3 },
              }}
            >
              <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-xs font-medium text-blue-600 mb-4 w-fit">
                Records
              </span>
              <h3 className="text-lg font-bold leading-snug">
                Complete student<br />profiles
              </h3>
              <p className="text-muted text-sm mt-2 leading-relaxed flex-1">
                Admission details, academic history, parent contacts — everything in one searchable, structured record.
              </p>
              {/* Mini card mockup */}
              <div
                className="mt-4 bg-white rounded-xl p-3 border border-border shadow-card group-hover:shadow-card-hover transition-shadow"
                style={{ transform: "rotate(-2deg)" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent/30 to-accent/10 flex items-center justify-center">
                    <span className="text-xs font-bold text-accent">AS</span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold">Aditi Sharma</p>
                    <p className="text-[10px] text-muted">
                      Class 9-B • Roll #14 • Since 2022
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <span className="text-3xl font-bold text-accent">0</span>
                <p className="text-muted text-xs mt-0.5">
                  paper forms needed
                </p>
              </div>
            </motion.div>

            {/* Role-based access — spans full width on right */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="sm:col-span-2 rounded-2xl bg-surface border border-border p-6 group cursor-default"
              style={{ perspective: "800px" }}
              whileHover={{
                rotateY: 1,
                rotateX: -1,
                transition: { duration: 0.3 },
              }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
                <div className="flex-1">
                  <span className="inline-block px-3 py-1 rounded-full bg-violet-50 text-xs font-medium text-violet-600 mb-4">
                    Access Control
                  </span>
                  <h3 className="text-lg font-bold leading-snug">
                    Role-based access for every user
                  </h3>
                  <p className="text-muted text-sm mt-2 leading-relaxed max-w-md">
                    Parents see their child&rsquo;s data. Teachers manage their classes.
                    Admins see everything. Clean, scoped permissions by design.
                  </p>
                </div>
                {/* Roles visual */}
                <div className="flex gap-3 sm:gap-4 shrink-0">
                  {[
                    { role: "Parent", icon: "👨‍👩‍👧", bg: "bg-amber-50" },
                    { role: "Teacher", icon: "📚", bg: "bg-emerald-50" },
                    { role: "Admin", icon: "🛡️", bg: "bg-accent-light" },
                  ].map((r) => (
                    <div
                      key={r.role}
                      className={`${r.bg} rounded-xl p-4 text-center min-w-[72px] border border-border/50 shadow-card group-hover:shadow-card-hover transition-shadow`}
                    >
                      <div className="text-2xl mb-1">{r.icon}</div>
                      <p className="text-[11px] font-semibold">{r.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
