import { motion } from "framer-motion";
import { ease, fadeUp, stagger, viewportOnce } from "../animations.js";

const barVariants = {
  hidden: { scaleX: 0, opacity: 0 },
  show: { scaleX: 1, opacity: 1, transition: { duration: 0.6, ease } },
};

export default function SectionHeading({ label, title, barClass = "mb-[60px]" }) {
  return (
    <motion.div
      variants={stagger(0.1)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
    >
      <motion.div
        variants={fadeUp}
        className="font-mono text-[0.72rem] text-neon tracking-[0.2em] uppercase mb-3"
      >
        {label}
      </motion.div>
      <motion.h2
        variants={fadeUp}
        className="text-[clamp(1.8rem,4vw,2.8rem)] font-black mb-4 leading-[1.2] tracking-[-0.02em]"
      >
        {title}
      </motion.h2>
      <motion.div
        variants={barVariants}
        style={{ originX: 0 }}
        className={`w-[60px] h-[3px] bg-grad rounded ${barClass}`}
      />
    </motion.div>
  );
}
