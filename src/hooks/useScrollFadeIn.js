// src/hooks/useScrollFadeIn.js
import { useRef, useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "framer-motion";

export const useScrollFadeIn = (direction = "up", duration = 0.7, delay = 0) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  const variants = {
    up: { y: 20, opacity: 0 },
    down: { y: -20, opacity: 0 },
    left: { x: 20, opacity: 0 },
    right: { x: -20, opacity: 0 },
  };

  useEffect(() => {
    if (inView) {
      controls.start({ x: 0, y: 0, opacity: 1, transition: { duration, delay } });
    }
  }, [inView, controls, delay, duration]);

  return {
    ref,
    animate: controls,
    initial: variants[direction],
  };
};