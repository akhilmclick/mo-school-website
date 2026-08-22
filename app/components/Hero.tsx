"use client";

import { motion } from "framer-motion";

/* Small floating icon badges that orbit near the hero dashboard */
function FloatingIcon({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={`absolute z-20 ${className}`}
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 3.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      <div className="w-11 h-11 rounded-full bg-accent shadow-lg flex items-center justify-center text-white">
        {children}
      </div>
    </motion.div>
  );
}

/* Icon-label pill row beneath CTAs */
const pillItems = [
  {
    label: "Attendance",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
    ),
  },
  {
    label: "Notices",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
    ),
  },
  {
    label: "Fees",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
    ),
  },
  {
    label: "Admin",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
    ),
  },
];

import { useRef } from "react";
import ScrollPlane from "./ScrollPlane";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative sky-gradient overflow-hidden pt-28 sm:pt-32 pb-32 sm:pb-44 lg:pb-56"
    >
      {/* Scroll-animated paper plane */}
      <ScrollPlane
        sectionRef={sectionRef}
        path="M -50 140 C 220 80, 500 240, 780 340 C 920 390, 1040 440, 1120 520"
        viewBox="0 0 1000 700"
        opacityRange={[0.02, 0.15, 0.7, 0.9]}
      />
      {/* Dot grid pattern in corner */}
      <div
        className="dot-grid absolute top-0 right-0 w-[50%] h-[60%] opacity-[0.35]"
        style={{
          maskImage:
            "radial-gradient(ellipse 70% 70% at 100% 0%, black 20%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 70% at 100% 0%, black 20%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pill badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-light text-accent text-xs font-semibold tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Now live in pilot schools
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight max-w-3xl mx-auto"
        >
          One platform for every{" "}
          <span className="font-serif-accent">school</span> &amp;{" "}
          <span className="font-serif-accent">family</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-center text-muted text-base sm:text-lg max-w-xl mx-auto mt-5 leading-relaxed"
        >
          Replace paper registers, WhatsApp chaos, and Excel fee tracking with
          one clean platform — purpose-built for Indian mid-size schools.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3 bg-foreground text-white font-medium rounded-full hover:bg-gray-800 transition-colors text-sm"
          >
            Get in Touch
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-1 text-sm font-medium text-muted hover:text-foreground transition-colors"
          >
            See the Product
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </motion.div>

        {/* Pill row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="flex items-center justify-center gap-6 sm:gap-8 mt-8 flex-wrap"
        >
          {pillItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-1.5 text-xs text-muted"
            >
              <span className="text-accent">{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Trusted strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="text-center mt-8"
        >
          <p className="text-xs text-muted/70 tracking-wide uppercase">
            Piloting with mid-size schools across Maharashtra &amp; Karnataka
          </p>
        </motion.div>

        {/* Floating Dashboard Screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="relative mt-12 sm:mt-16 max-w-5xl mx-auto"
          style={{ perspective: "1200px" }}
        >
          <motion.div
            className="relative"
            style={{
              transform: "rotateX(2deg) rotateY(-3deg)",
              transformStyle: "preserve-3d",
            }}
            whileHover={{
              transform: "rotateX(0deg) rotateY(0deg)",
              transition: { duration: 0.4 },
            }}
          >
            {/* Browser frame */}
            <div className="browser-frame shadow-float bg-white">
              <div className="browser-frame-bar">
                <div className="browser-dot bg-red-400" />
                <div className="browser-dot bg-yellow-400" />
                <div className="browser-dot bg-green-400" />
                <div className="ml-4 flex-1 h-6 bg-gray-200 rounded-md max-w-xs" />
              </div>
              {/* Dashboard mockup content */}
              <div className="p-4 sm:p-6 bg-gray-50 min-h-[220px] sm:min-h-[320px]">
                {/* Top bar */}
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <div className="h-3 w-32 bg-gray-200 rounded-sm" />
                    <div className="h-2 w-20 bg-gray-100 rounded-sm mt-2" />
                  </div>
                  <div className="flex gap-2">
                    <div className="h-8 w-8 rounded-full bg-accent/20" />
                    <div className="h-8 w-8 rounded-full bg-gray-200" />
                  </div>
                </div>
                {/* Stat row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
                  {[
                    { label: "Present Today", value: "1,342", color: "bg-green-50 border-green-200" },
                    { label: "Notices Sent", value: "28", color: "bg-accent-light border-accent/30" },
                    { label: "Pending Fees", value: "₹4.2L", color: "bg-blue-50 border-blue-200" },
                    { label: "Teachers Active", value: "64", color: "bg-violet-50 border-violet-200" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className={`p-3 rounded-lg border ${stat.color}`}
                    >
                      <p className="text-[10px] text-muted uppercase tracking-wide">
                        {stat.label}
                      </p>
                      <p className="text-lg font-bold text-foreground mt-0.5">
                        {stat.value}
                      </p>
                    </div>
                  ))}
                </div>
                {/* Table-like rows */}
                <div className="space-y-2">
                  {["Class 8-A", "Class 9-B", "Class 10-C"].map(
                    (cls, i) => (
                      <div
                        key={cls}
                        className="flex items-center justify-between p-2.5 bg-white rounded-lg border border-gray-100"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded-md bg-accent/15 flex items-center justify-center text-[10px] font-bold text-accent">
                            {["8A", "9B", "10C"][i]}
                          </div>
                          <div>
                            <p className="text-xs font-medium">{cls}</p>
                            <p className="text-[10px] text-muted">
                              {[42, 38, 45][i]} students
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-1.5 w-16 bg-gray-200 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-accent rounded-full"
                              style={{ width: `${[95, 87, 100][i]}%` }}
                            />
                          </div>
                          <span className="text-[10px] text-muted font-medium">
                            {[95, 87, 100][i]}%
                          </span>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating accent icons */}
          <FloatingIcon className="-top-4 -left-6 sm:-left-10" delay={0}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
          </FloatingIcon>

          <FloatingIcon className="top-12 -right-4 sm:-right-8" delay={0.8}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
          </FloatingIcon>

          <FloatingIcon className="bottom-8 -left-3 sm:-left-6" delay={1.5}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
          </FloatingIcon>
        </motion.div>
      </div>
    </section>
  );
}
