import { useEffect, useRef, useState } from "react";
import { motion, animate, useInView } from "framer-motion";
import SectionHeading from "./SectionHeading.jsx";
import { fadeUp, fadeLeft, fadeRight, scaleIn, stagger, viewportOnce } from "../animations.js";
import img from "../assets/img.webp";

const badges = [
  "🎓 Information Systems",
  "📍 Haram, Giza",
  "⚡ Frontend Dev",
  "🪟 Microsoft Certified",
];

const stats = [
  { n: 3, label: "Years of Experience" },
  { n: 5, label: "Projects Completed" },
  { n: 4, label: "Certifications" },
];

// عدّاد بيشتغل لما يظهر في الشاشة
function Counter({ to }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref}>
      {value}
      {value === to ? "+" : ""}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="px-[5%] py-[100px] bg-surface">
      <SectionHeading label="// 01. About" title="Who is Youssef?" />

      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-10 md:gap-16 items-center">
        {/* الصورة: الـ entrance على الـ wrapper والدوران بيفضل CSS عشان مايتعارضوش */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative flex justify-center order-first md:order-none"
        >
          <div className="w-[260px] h-[260px] rounded-full bg-grad p-1 relative animate-spinRing">
            <img
              src={img}
              alt="Youssef Mohamed"
              className="w-full h-full rounded-full bg-card flex items-center justify-center text-5xl overflow-hidden object-cover"
            />
          </div>
          <div className="absolute -top-5 -right-5 w-[100px] h-[100px] rounded-full opacity-40 animate-rotateDots bg-[radial-gradient(circle,#6c63ff_1.5px,transparent_1.5px)] bg-[length:12px_12px]"></div>
        </motion.div>

        <motion.div
          variants={stagger(0.14)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.p variants={fadeRight} className="text-muted mb-4 text-base leading-[1.9]">
            I'm <strong className="text-text">Youssef Mohamed</strong>, a
            frontend developer and Information Systems graduate from the
            Institute of Specific Studies in Haram, Giza. I've been building for
            the web for
            <strong className="text-text"> 3+ years</strong>, working on
            real-world projects that solve real problems.
          </motion.p>
          <motion.p variants={fadeRight} className="text-muted mb-4 text-base leading-[1.9]">
            I've completed professional courses in
            <strong className="text-text"> Frontend Development</strong> and
            earned certifications from
            <strong className="text-text"> Microsoft</strong>, which gave me a
            solid technical foundation and an eye for clean, maintainable code.
          </motion.p>
          <motion.p variants={fadeRight} className="text-muted mb-4 text-base leading-[1.9]">
            My goal is to become a well-rounded developer who can take an idea
            from concept to a fully functional, beautiful product.
          </motion.p>

          <motion.div variants={stagger(0.08)} className="flex flex-wrap gap-2.5 mt-6">
            {badges.map((b) => (
              <motion.span
                key={b}
                variants={scaleIn}
                whileHover={{ scale: 1.06 }}
                className="px-4 py-1.5 bg-accent/10 border border-accent/25 rounded-full text-[0.8rem] text-accent font-semibold cursor-default transition-colors hover:bg-accent/20"
              >
                {b}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        variants={stagger(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-10"
      >
        {stats.map((s) => (
          <motion.div
            key={s.label}
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="bg-card border border-border rounded-xl p-5 text-center transition-colors hover:border-accent"
          >
            <div className="font-mono text-[1.8rem] font-bold bg-grad bg-clip-text text-transparent">
              <Counter to={s.n} />
            </div>
            <div className="text-[0.8rem] text-muted mt-1">{s.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
