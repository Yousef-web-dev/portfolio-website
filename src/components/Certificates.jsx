import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading.jsx';
import { fadeUp, stagger, viewportOnce } from '../animations.js';

const certs = [
  {
    icon: '🌐',
    title: 'Frontend Development',
    desc: 'Comprehensive course covering modern web development from fundamentals to advanced techniques.',
    tag: 'Frontend Course ✔',
  },
  {
    icon: '🪟',
    title: 'Microsoft Certification',
    desc: 'Official Microsoft certification in core technical skills and digital literacy.',
    tag: 'Microsoft Certified ✔',
  },
  {
    icon: '🎓',
    title: 'Information Systems Degree',
    desc: 'Graduate of the Information Systems department — Institute of Specific Studies, Haram.',
    tag: 'IS Graduate ✔',
  },
  {
    icon: '⚡',
    title: 'JavaScript Fundamentals',
    desc: 'Mastery of modern JavaScript fundamentals, ES6+ features, and best practices.',
    tag: 'JS Certified ✔',
  },
];

const cardVariants = {
  ...fadeUp,
  hover: { y: -6, transition: { duration: 0.25 } },
};

const iconVariants = {
  hover: { rotate: [0, -12, 12, 0], scale: 1.08, transition: { duration: 0.5 } },
};

export default function Certificates() {
  return (
    <section id="certificates" className="px-[5%] py-[100px] bg-bg">
      <SectionHeading label="// 04. Certificates" title="My Certificates" />

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        variants={stagger(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
      >
        {certs.map((c) => (
          <motion.div
            key={c.title}
            variants={cardVariants}
            whileHover="hover"
            className="bg-card border border-border rounded-2xl p-6 flex gap-[18px] items-start transition-[border-color,box-shadow] hover:border-neon hover:shadow-[0_14px_36px_rgba(0,245,196,0.1)]"
          >
            <motion.div
              variants={iconVariants}
              className="w-[50px] h-[50px] shrink-0 rounded-xl bg-grad flex items-center justify-center text-[1.4rem]"
            >
              {c.icon}
            </motion.div>
            <div>
              <h4 className="text-[0.95rem] font-bold mb-1">{c.title}</h4>
              <p className="text-[0.8rem] text-muted leading-[1.6]">{c.desc}</p>
              <span className="block mt-2 font-mono text-[0.68rem] text-neon">{c.tag}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
