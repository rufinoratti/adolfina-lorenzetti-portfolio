"use client";

import { useEffect, useSyncExternalStore } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "motion/react";

const mediaQuery = () =>
  typeof window === "undefined"
    ? null
    : window.matchMedia("(pointer: fine)");

const subscribeFinePointer = (onStoreChange: () => void) => {
  const mq = mediaQuery();
  if (!mq) return () => {};
  mq.addEventListener("change", onStoreChange);
  return () => mq.removeEventListener("change", onStoreChange);
};

export function Cursor() {
  const reduce = useReducedMotion();
  const finePointer = useSyncExternalStore(
    subscribeFinePointer,
    () => mediaQuery()?.matches ?? false,
    () => false,
  );

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 350, damping: 40, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 350, damping: 40, mass: 0.6 });
  const scale = useMotionValue(1);

  useEffect(() => {
    if (reduce) return;

    const move = (event: PointerEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    const over = (event: PointerEvent) => {
      const target = (event.target as HTMLElement).closest(
        "a, button, [data-cursor], input, textarea, select",
      );
      scale.set(target ? 2.1 : 1);
    };

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerover", over, { passive: true });
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
    };
  }, [x, y, scale, reduce]);

  if (!finePointer || reduce) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[90]">
      <motion.div
        style={{ x, y }}
        className="absolute left-0 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent"
      />
      <motion.div
        style={{ x: ringX, y: ringY, scale }}
        className="absolute left-0 top-0 h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/50"
      />
    </div>
  );
}