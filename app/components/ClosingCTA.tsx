"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import ScrollPlane from "./ScrollPlane";

export default function ClosingCTA() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* 3rd flight: Takeoff upward arc into the sky gradient */}
      <ScrollPlane
        sectionRef={sectionRef}
        path="M -50 480 C 220 440, 580 340, 820 180 C 920 110, 1020 40, 1120 -30"
        viewBox="0 0 1000 600"
        opacityRange={[0.05, 0.2, 0.75, 0.95]}
      />

      {/* Gradient background matching hero */}
      <div className="absolute inset-0 sky-gradient" />

      {/* Dot grid accent */}
      <div
        className="dot-grid absolute bottom-0 left-0 w-[40%] h-[50%] opacity-[0.25]"
        style={{
          maskImage:
            "radial-gradient(ellipse 70% 70% at 0% 100%, black 20%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 70% at 0% 100%, black 20%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            Let&rsquo;s bring your school{" "}
            <span className="font-serif-accent">online</span>
          </h2>
          <p className="text-muted mt-4 text-base sm:text-lg leading-relaxed max-w-md mx-auto">
            Ready to move from paper chaos to a clean, compliant digital
            platform? Let&rsquo;s talk.
          </p>

          <div className="mt-8">
            <a
              href="mailto:hello@mo-school.in"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-foreground text-white font-medium rounded-full hover:bg-gray-800 transition-colors text-sm shadow-lg"
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
          </div>

          <p className="text-sm text-muted mt-6">
            Direct email:&ensp;
            <a
              href="mailto:hello@mo-school.in"
              className="font-medium text-foreground hover:text-accent transition-colors underline underline-offset-4"
            >
              hello@mo-school.in
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
