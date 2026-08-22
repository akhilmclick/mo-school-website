"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent, useSpring } from "framer-motion";

interface ScrollPlaneProps {
  sectionRef: React.RefObject<HTMLElement | null>;
  path: string;
  viewBox?: string; // e.g. "0 0 1000 600"
  showTrail?: boolean;
  opacityRange?: [number, number, number, number]; // [fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd]
  className?: string;
}

export default function ScrollPlane({
  sectionRef,
  path: pathD,
  viewBox = "0 0 1000 600",
  showTrail = true,
  opacityRange = [0.05, 0.2, 0.8, 0.95],
  className = "",
}: ScrollPlaneProps) {
  const pathRef = useRef<SVGPathElement>(null);
  const [totalLength, setTotalLength] = useState(0);

  // Motion values for smooth plane positioning
  const rawX = React.useRef(0);
  const rawY = React.useRef(0);
  const rawRot = React.useRef(0);
  const rawOp = React.useRef(0);
  const rawLengthPct = React.useRef(0);

  const [planeState, setPlaneState] = useState({
    xPct: 0,
    yPct: 0,
    rotation: 0,
    opacity: 0,
    trailLength: 0,
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Extract viewBox dimensions
  const [, , vbWidth, vbHeight] = viewBox.split(" ").map(Number);
  const w = vbWidth || 1000;
  const h = vbHeight || 600;

  useEffect(() => {
    if (pathRef.current) {
      setTotalLength(pathRef.current.getTotalLength());
    }
  }, [pathD]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (!pathRef.current || totalLength === 0) {
      if (pathRef.current) {
        const len = pathRef.current.getTotalLength();
        if (len > 0) setTotalLength(len);
      }
      return;
    }

    const progress = Math.max(0, Math.min(1, latest));
    const dist = progress * totalLength;

    const point = pathRef.current.getPointAtLength(dist);

    // Tangent calculation
    const delta = 2;
    const pNext = pathRef.current.getPointAtLength(Math.min(totalLength, dist + delta));
    const pPrev = pathRef.current.getPointAtLength(Math.max(0, dist - delta));
    const angle = Math.atan2(pNext.y - pPrev.y, pNext.x - pPrev.x) * (180 / Math.PI);

    // Calculate opacity based on range
    const [inStart, inEnd, outStart, outEnd] = opacityRange;
    let opacity = 0;
    if (progress < inStart) {
      opacity = 0;
    } else if (progress < inEnd) {
      opacity = (progress - inStart) / (inEnd - inStart);
    } else if (progress < outStart) {
      opacity = 1;
    } else if (progress < outEnd) {
      opacity = 1 - (progress - outStart) / (outEnd - outStart);
    } else {
      opacity = 0;
    }

    setPlaneState({
      xPct: (point.x / w) * 100,
      yPct: (point.y / h) * 100,
      rotation: angle,
      opacity,
      trailLength: dist,
    });
  });

  return (
    <div
      className={`hidden md:block absolute inset-0 pointer-events-none z-20 overflow-visible ${className}`}
      aria-hidden="true"
    >
      <svg
        className="absolute inset-0 w-full h-full overflow-visible"
        viewBox={viewBox}
        preserveAspectRatio="none"
      >
        {/* Invisible sampling path */}
        <path
          ref={pathRef}
          d={pathD}
          fill="none"
          stroke="transparent"
          strokeWidth="1"
        />

        {/* Subtle animated dashed contrail */}
        {showTrail && totalLength > 0 && (
          <path
            d={pathD}
            fill="none"
            stroke="#F5793A"
            strokeWidth="1.5"
            strokeDasharray="4 6"
            strokeLinecap="round"
            style={{
              opacity: planeState.opacity * 0.45,
              strokeDashoffset: totalLength - planeState.trailLength,
              strokeDasharray: `${planeState.trailLength} ${totalLength}`,
              transition: "opacity 0.2s ease-out",
            }}
          />
        )}
      </svg>

      {/* Plane motion container */}
      <motion.div
        className="absolute"
        style={{
          left: `${planeState.xPct}%`,
          top: `${planeState.yPct}%`,
          opacity: planeState.opacity,
          transform: `translate(-50%, -50%) rotate(${planeState.rotation}deg)`,
          willChange: "transform, opacity",
          transition: "opacity 0.15s ease-out",
        }}
      >
        {/* Minimal line-art SVG paper plane pointing directly East (0 degrees) */}
        <div className="relative w-8 h-8 flex items-center justify-center -translate-y-[1px]">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            className="drop-shadow-[0_4px_8px_rgba(245,121,58,0.25)]"
          >
            {/* Paper plane body facing right (+X at 0deg) */}
            <path
              d="M30 16 L4 6 L9 16 L4 26 Z"
              fill="rgba(255, 240, 232, 0.9)"
              stroke="#F5793A"
              strokeWidth="2"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            {/* Top wing fold */}
            <path
              d="M30 16 L9 16"
              stroke="#F5793A"
              strokeWidth="1.75"
              strokeLinecap="round"
            />
            {/* Keel fold */}
            <path
              d="M18 16 L9 20 L9 16"
              fill="#F5793A"
              opacity="0.3"
            />
          </svg>
        </div>
      </motion.div>
    </div>
  );
}
