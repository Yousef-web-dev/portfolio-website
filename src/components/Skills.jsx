import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading.jsx';
import { ease, fadeUp, stagger, viewportOnce } from '../animations.js';

const skills = [
  { icon: '🌐', name: 'HTML & CSS', w: 0.9, pct: '90%' },
  { icon: '⚡', name: 'Java Script', w: 0.8, pct: '80%' },
  { icon: '⚛️', name: 'React', w: 0.7, pct: '70%' },
  { icon: '▲', name: 'Next.js', w: 0.75, pct: '75%' },
  { icon: '🔌', name: "API's", w: 0.85, pct: '85%' },
  { icon: '🐙', name: 'Git & GitHub', w: 0.78, pct: '78%' },
];

export default function Skills() {
  return (
    <section id="skills" className="px-[5%] py-[100px] bg-bg">
      <SectionHeading label="// 02. Skills" title="Technical Skills" />

      <motion.div
        className="flex flex-wrap justify-center items-center gap-6"
        variants={stagger(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        {skills.map((s) => (
          <motion.div
            key={s.name}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            className="w-full sm:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)] bg-card border border-border rounded-2xl p-7 transition-[border-color,box-shadow] hover:border-accent hover:shadow-[0_16px_40px_rgba(108,99,255,0.15)]"
          >
            <span className="text-2xl mb-3.5 block">{s.icon}</span>
            <h3 className="text-base font-bold mb-3">{s.name}</h3>
            <div className="bg-border rounded-full h-1.5 overflow-hidden mb-1.5">
              {/* الـ bar بياخد الـ show من الكارت الأب */}
              <motion.div
                className="h-full w-full origin-left rounded-full bg-grad"
                variants={{
                  hidden: { scaleX: 0 },
                  show: { scaleX: s.w, transition: { duration: 1.2, delay: 0.3, ease } },
                }}
              />
            </div>
            <div className="font-mono text-[0.73rem] text-neon">{s.pct}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
