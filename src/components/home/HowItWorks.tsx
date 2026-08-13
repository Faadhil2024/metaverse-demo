"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "motion/react";

const steps = [
  {
    title: "Upload Your Piece",
    description: "Drop in any image, still art, a sketch, a photo, whatever you want to bring to life.",
    media: "/step-upload.png",
  },
  {
    title: "Choose A Module",
    description: "Pick how it transforms, animation, 3D, a new style, or a shared metaverse scene.",
    media: "/step-module.png",
  },
  {
    title: "See It Come To Life",
    description: "Run it, get your result, and save it to a project or try another variation.",
    media: "/hero-video.mp4",
  },
];

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const index = Math.min(steps.length - 1, Math.floor(value * steps.length));
    setActiveIndex(index);
  });

  return (
    <section
      ref={containerRef}
      className="relative bg-white text-black"
      style={{ height: `${steps.length * 100}vh` }}
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2">
          {/* Left: stacked titles */}
          <div>
            {steps.slice(0, activeIndex + 1).map((step, i) => {
              const isActive = i === activeIndex;
              return (
                <div key={step.title} className="mb-2">
                  <motion.h3
                    animate={{
                      opacity: isActive ? 1 : 0.25,
                      color: isActive ? "var(--accent)" : "#000",
                    }}
                    transition={{ duration: 0.4 }}
                    className={`font-display leading-tight ${
                      isActive ? "text-4xl md:text-5xl" : "text-2xl md:text-3xl"
                    }`}
                  >
                    {step.title}
                  </motion.h3>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="mt-3 max-w-sm text-black/60">
                          {step.description}
                        </p>
                        
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right: crossfading visual */}
<div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-black/10 bg-black/[0.03] shadow-xl">            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                {steps[activeIndex].media.endsWith(".mp4") ? (
                  <video
                    src={steps[activeIndex].media}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <img
                    src={steps[activeIndex].media}
                    alt={steps[activeIndex].title}
                    className="h-full w-full object-cover"
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}