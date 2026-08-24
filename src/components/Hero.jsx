import { useEffect, useRef } from 'react';
import ParticlesBg from './ParticlesBg.jsx';

export default function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typedEl = typedRef.current;
    if (!typedEl) return;

    const phrases = ['Frontend Developer', 'UI/UX Enthusiast', 'React Developer', 'Problem Solver'];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId;

    function typeWriter() {
      const currentPhrase = phrases[phraseIndex];

      if (!isDeleting) {
        typedEl.textContent = currentPhrase.slice(0, ++charIndex);
        if (charIndex === currentPhrase.length) {
          isDeleting = true;
          timeoutId = setTimeout(typeWriter, 1800);
          return;
        }
      } else {
        typedEl.textContent = currentPhrase.slice(0, --charIndex);
        if (charIndex === 0) {
          isDeleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
        }
      }

      timeoutId = setTimeout(typeWriter, isDeleting ? 55 : 90);
    }
    typeWriter();

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center px-[5%] pt-20 pb-10 relative overflow-hidden">
      <ParticlesBg />
      <div className="absolute w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(108,99,255,0.14)_0%,transparent_70%)] top-1/2 -right-[15%] -translate-y-1/2 pointer-events-none animate-pulseGlow"></div>
      <div className="absolute w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(0,245,196,0.08)_0%,transparent_70%)] bottom-[10%] -left-[5%] pointer-events-none animate-pulseGlowRev"></div>

      {/* floating shapes */}
      <div
        className="absolute opacity-[0.07] pointer-events-none rounded-full animate-floatAnim"
        style={{
          width: '200px',
          height: '200px',
          background: 'var(--accent, #6c63ff)',
          top: '15%',
          left: '5%',
          animationDuration: '12s',
          borderRadius: '30% 70% 70% 30%/30% 30% 70% 70%',
        }}
      ></div>
      <div
        className="absolute opacity-[0.07] pointer-events-none rounded-full animate-floatAnim"
        style={{
          width: '120px',
          height: '120px',
          background: '#00f5c4',
          top: '70%',
          left: '15%',
          animationDuration: '9s',
          animationDelay: '-3s',
        }}
      ></div>
      <div
        className="absolute opacity-[0.07] pointer-events-none rounded-full animate-floatAnim"
        style={{
          width: '80px',
          height: '80px',
          background: '#6c63ff',
          top: '30%',
          right: '8%',
          animationDuration: '7s',
          animationDelay: '-5s',
          borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%',
        }}
      ></div>

      <div className="max-w-[760px] relative z-[1]">
        <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/35 rounded-full px-[18px] py-[6px] text-[0.78rem] text-accent tracking-[0.1em] mb-7 font-mono uppercase animate-[fadeDown_0.8s_ease_both]">
          <span className="w-[7px] h-[7px] rounded-full bg-neon animate-blink"></span>
          ⚡ Available for Freelance
        </div>
        <h1 className="text-[clamp(2.8rem,7vw,5rem)] font-black leading-[1.1] mb-2.5 tracking-[-0.02em] animate-[fadeUp_0.9s_0.2s_ease_both]">
          Hi, I'm<br />
          <span className="bg-grad bg-clip-text text-transparent">Youssef Mohamed</span>
        </h1>
        <p className="font-mono text-[clamp(0.95rem,2.2vw,1.2rem)] text-muted mb-6 tracking-[0.04em] animate-[fadeUp_0.9s_0.35s_ease_both] min-h-[1.6em]">
          <span id="typed-text" ref={typedRef}></span>
          <span className="inline-block w-[2px] h-[1em] bg-neon ml-0.5 align-middle animate-cursorBlink"></span>
        </p>
        <p className="text-[1.05rem] text-muted max-w-[540px] mb-10 leading-[1.9] animate-[fadeUp_0.9s_0.5s_ease_both]">
          A passionate frontend developer who turns ideas into polished digital
          experiences. Information Systems graduate with 3+ years building
          websites and apps that balance aesthetics with usability.
        </p>
        <div className="flex gap-4 flex-wrap animate-[fadeUp_0.9s_0.65s_ease_both]">
          <a
            href="#projects"
            className="px-8 py-3.5 bg-grad text-white rounded-lg font-sans text-[0.95rem] font-bold no-underline cursor-pointer inline-block transition-[opacity,transform,box-shadow] duration-300 hover:opacity-90 hover:-translate-y-[3px] hover:shadow-[0_12px_30px_rgba(108,99,255,0.4)]"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 bg-transparent text-text border-[1.5px] border-border rounded-lg font-sans text-[0.95rem] font-semibold no-underline cursor-pointer inline-block transition-[border-color,color,transform,box-shadow] duration-300 hover:border-accent hover:text-accent hover:-translate-y-[3px] hover:shadow-[0_8px_24px_rgba(108,99,255,0.2)]"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
