"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { site } from "@/lib/site";

export function Preloader() {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (reduce) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- needs to skip before first paint on reduced-motion users
      setVisible(false);
      return;
    }
    let played = false;
    try {
      played = sessionStorage.getItem("al-preloader") === "1";
    } catch {
      /* storage unavailable */
    }
    if (played) {
      setVisible(false);
      return;
    }
    try {
      sessionStorage.setItem("al-preloader", "1");
    } catch {
      /* storage unavailable */
    }
    const timer = setTimeout(() => setVisible(false), 1500);
    return () => clearTimeout(timer);
  }, [reduce]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink"
          aria-hidden="true"
        >
          <div className="flex flex-col items-center">
            <motion.span
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-5xl italic text-paper sm:text-6xl"
            >
              {site.initials}
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="mt-4 font-mono text-[11px] uppercase tracking-[0.3em] text-paper/50"
            >
              {site.role}
            </motion.span>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.15, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 h-px w-24 origin-left bg-accent"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}