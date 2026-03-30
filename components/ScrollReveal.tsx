import { motion, type Variant } from "framer-motion";
import { ReactNode } from "react";

type AnimationVariant = "fadeUp" | "fadeDown" | "fadeLeft" | "fadeRight" | "scaleUp" | "rotateIn" | "slideUp" | "blur";

const variants: Record<AnimationVariant, { hidden: Variant; visible: Variant }> = {
  fadeUp: {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  },
  fadeDown: {
    hidden: { opacity: 0, y: -60 },
    visible: { opacity: 1, y: 0 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0 },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
  rotateIn: {
    hidden: { opacity: 0, rotate: -8, scale: 0.9 },
    visible: { opacity: 1, rotate: 0, scale: 1 },
  },
  slideUp: {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  },
  blur: {
    hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
    visible: { opacity: 1, filter: "blur(0px)", y: 0 },
  },
};

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: AnimationVariant;
  duration?: number;
}

const ScrollReveal = ({
  children,
  className = "",
  delay = 0,
  variant = "fadeUp",
  duration = 0.7,
}: ScrollRevealProps) => {
  const v = variants[variant];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: v.hidden,
        visible: {
          ...v.visible,
          transition: {
            duration,
            delay,
            ease: [0.25, 0.46, 0.45, 0.94],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
