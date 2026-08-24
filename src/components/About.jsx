import { useEffect, useRef } from 'react';
import useReveal from '../hooks/useReveal.js';
import img from "../assets/img.jpg";

export default function About() {
  const sectionRef = useRef(null);
  const statsRef = useRef(null);
  useReveal(sectionRef);

  useEffect(() => {
    const statsRow = statsRef.current;
    if (!statsRow) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.stat-num[data-target]').forEach((el) => {
              const target = + el.dataset.target;
              let current = 0;
              const step = target / 40;
              const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                  el.textContent = target + '+';
                  clearInterval(timer);
                } else {
                  el.textContent = Math.floor(current);
                }
              }, 35);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(statsRow);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="px-[5%] py-[100px] bg-surface">
      <div className="font-mono text-[0.72rem] text-neon tracking-[0.2em] uppercase mb-3">// 01. About</div>
      <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-black mb-4 leading-[1.2] tracking-[-0.02em]">Who is Youssef?</h2>
      <div className="w-[60px] h-[3px] bg-grad rounded mb-[60px]"></div>
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-10 md:gap-16 items-center">
        <div className="reveal-left relative flex justify-center order-first md:order-none">
          <div className="w-[260px] h-[260px] rounded-full bg-grad p-1 relative animate-spinRing">
            <img src={img}
              className ="w-full h-full rounded-full bg-card flex items-center justify-center text-5xl overflow-hidden object-cover"
            ></img>
          </div>
          <div className="absolute -top-5 -right-5 w-[100px] h-[100px] rounded-full opacity-40 animate-rotateDots bg-[radial-gradient(circle,#6c63ff_1.5px,transparent_1.5px)] bg-[length:12px_12px]"></div>
        </div>
        <div className="reveal-right">
          <p className="text-muted mb-4 text-base leading-[1.9]">
            I'm <strong className="text-text">Youssef Mohamed</strong>, a frontend developer and
            Information Systems graduate from the Institute of Specific Studies
            in Haram, Giza. I've been building for the web for
            <strong className="text-text"> 3+ years</strong>, working on real-world projects that solve
            real problems.
          </p>
          <p className="text-muted mb-4 text-base leading-[1.9]">
            I've completed professional courses in
            <strong className="text-text"> Frontend Development</strong> and earned certifications from
            <strong className="text-text"> Microsoft</strong>, which gave me a solid technical
            foundation and an eye for clean, maintainable code.
          </p>
          <p className="text-muted mb-4 text-base leading-[1.9]">
            My goal is to become a well-rounded developer who can take an idea
            from concept to a fully functional, beautiful product.
          </p>
          <div className="flex flex-wrap gap-2.5 mt-6">
            <span className="px-4 py-1.5 bg-accent/10 border border-accent/25 rounded-full text-[0.8rem] text-accent font-semibold cursor-default transition-transform hover:scale-[1.06] hover:bg-accent/20">🎓 Information Systems</span>
            <span className="px-4 py-1.5 bg-accent/10 border border-accent/25 rounded-full text-[0.8rem] text-accent font-semibold cursor-default transition-transform hover:scale-[1.06] hover:bg-accent/20">📍 Haram, Giza</span>
            <span className="px-4 py-1.5 bg-accent/10 border border-accent/25 rounded-full text-[0.8rem] text-accent font-semibold cursor-default transition-transform hover:scale-[1.06] hover:bg-accent/20">⚡ Frontend Dev</span>
            <span className="px-4 py-1.5 bg-accent/10 border border-accent/25 rounded-full text-[0.8rem] text-accent font-semibold cursor-default transition-transform hover:scale-[1.06] hover:bg-accent/20">🪟 Microsoft Certified</span>
          </div>
        </div>
      </div>
      <div className="stats-row reveal grid grid-cols-1 sm:grid-cols-3 gap-5 mt-10" ref={statsRef}>
        <div className="bg-card border border-border rounded-xl p-5 text-center transition-all hover:-translate-y-1 hover:border-accent">
          <div className="stat-num font-mono text-[1.8rem] font-bold bg-grad bg-clip-text text-transparent" data-target="3">0</div>
          <div className="text-[0.8rem] text-muted mt-1">Years of Experience</div>
        </div>
        <div className="bg-card border border-border rounded-xl p-5 text-center transition-all hover:-translate-y-1 hover:border-accent">
          <div className="stat-num font-mono text-[1.8rem] font-bold bg-grad bg-clip-text text-transparent" data-target="5">0</div>
          <div className="text-[0.8rem] text-muted mt-1">Projects Completed</div>
        </div>
        <div className="bg-card border border-border rounded-xl p-5 text-center transition-all hover:-translate-y-1 hover:border-accent">
          <div className="stat-num font-mono text-[1.8rem] font-bold bg-grad bg-clip-text text-transparent" data-target="4">0</div>
          <div className="text-[0.8rem] text-muted mt-1">Certifications</div>
        </div>
      </div>
    </section>
  );
}
