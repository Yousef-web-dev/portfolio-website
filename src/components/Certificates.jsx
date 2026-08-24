import { useRef } from 'react';
import useReveal from '../hooks/useReveal.js';

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

export default function Certificates() {
  const gridRef = useRef(null);
  useReveal(gridRef);

  return (
    <section id="certificates" className="px-[5%] py-[100px] bg-bg">
      <div className="font-mono text-[0.72rem] text-neon tracking-[0.2em] uppercase mb-3">// 04. Certificates</div>
      <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-black mb-4 leading-[1.2] tracking-[-0.02em]">My Certificates</h2>
      <div className="w-[60px] h-[3px] bg-grad rounded mb-[60px]"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5" ref={gridRef}>
        {certs.map((c) => (
          <div
            className="cert-card reveal bg-card border border-border rounded-2xl p-6 flex gap-[18px] items-start transition-all hover:border-neon hover:-translate-y-1.5 hover:shadow-[0_14px_36px_rgba(0,245,196,0.1)]"
            key={c.title}
          >
            <div className="w-[50px] h-[50px] shrink-0 rounded-xl bg-grad flex items-center justify-center text-[1.4rem]">{c.icon}</div>
            <div>
              <h4 className="text-[0.95rem] font-bold mb-1">{c.title}</h4>
              <p className="text-[0.8rem] text-muted leading-[1.6]">{c.desc}</p>
              <span className="block mt-2 font-mono text-[0.68rem] text-neon">{c.tag}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
