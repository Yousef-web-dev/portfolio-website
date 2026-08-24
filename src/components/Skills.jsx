import { useEffect, useRef } from 'react';
import useReveal from '../hooks/useReveal.js';

const skills = [
  { icon: '🌐', name: 'HTML & CSS', w: '0.90', pct: '90%' },
  { icon: '⚡', name: 'Java Script', w: '0.80', pct: '80%' },
  { icon: '⚛️', name: 'React', w: '0.70', pct: '70%' },
  { icon: '🗄️', name: 'SQL', w: '0.75', pct: '75%' },
  { icon: '📊', name: 'Power BI', w: '0.68', pct: '68%' },
  { icon: '🐙', name: 'Git & GitHub', w: '0.78', pct: '78%' },
];

export default function Skills() {
  const gridRef = useRef(null);
  useReveal(gridRef);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const cards = grid.querySelectorAll('.skill-card');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.skill-bar').forEach((bar) => {
              bar.style.transform = `scaleX(${bar.dataset.w})`;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="px-[5%] py-[100px] bg-bg">
      <div className="font-mono text-[0.72rem] text-neon tracking-[0.2em] uppercase mb-3">// 02. Skills</div>
      <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-black mb-4 leading-[1.2] tracking-[-0.02em]">Technical Skills</h2>
      <div className="w-[60px] h-[3px] bg-grad rounded mb-[60px]"></div>
      <div className="flex flex-wrap justify-center items-center gap-6" ref={gridRef}>
        {skills.map((s) => (
          <div
            className="skill-card reveal w-full sm:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)] bg-card border border-border rounded-2xl p-7 transition-all hover:border-accent hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(108,99,255,0.15)]"
            key={s.name}
          >
            <span className="text-2xl mb-3.5 block">{s.icon}</span>
            <h3 className="text-base font-bold mb-3">{s.name}</h3>
            <div className="bg-border rounded-full h-1.5 overflow-hidden mb-1.5">
              <div className="skill-bar" data-w={s.w}></div>
            </div>
            <div className="font-mono text-[0.73rem] text-neon">{s.pct}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

