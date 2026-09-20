import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "../animations.js";

export default function Footer() {
  return (
    <motion.footer
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className="text-center px-[5%] py-10 border-t border-border text-muted text-[0.85rem]"
    >
      <p>
        Built with{" "}
        <motion.span
          className="text-accent inline-block"
          animate={{ scale: [1, 1.25, 1] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        >
          ❤️
        </motion.span>{" "}
        by <span className="text-text font-semibold">Youssef Mohamed</span> &mdash;
        Frontend Developer
      </p>
      <p className="mt-1.5 text-[0.7rem]">
        © 2026 Youssef Mohamed. All rights reserved.
      </p>
    </motion.footer>
  );
}
