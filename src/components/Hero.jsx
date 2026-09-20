import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import ParticlesBg from './ParticlesBg.jsx';
import { fadeUp, stagger } from '../animations.js';

function FloatShape({ style, duration, delay = 0, drift = 28 }) {
  return (
    <motion.div
      aria-hidden="true"
      className="absolute opacity-[0.07] pointer-events-none"
      style={{ borderRadius: '50%', ...style }}
      animate={{ y: [0, -drift, 0], rotate: [0, 8, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
    />
  );
}

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

      {/* floating shapes (Framer Motion) */}
      <FloatShape
        duration={12}
        style={{
          width: 200, height: 200, background: 'var(--accent, #6c63ff)', top: '15%', left: '5%',
          borderRadius: '30% 70% 70% 30%/30% 30% 70% 70%',
        }}
      />
      <FloatShape
        duration={9}
        delay={-3}
        style={{ width: 120, height: 120, background: '#00f5c4', top: '70%', left: '15%' }}
      />
      <FloatShape
        duration={7}
        delay={-5}
        style={{
          width: 80, height: 80, background: '#6c63ff', top: '30%', right: '8%',
          borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%',
        }}
      />

      <motion.div
        className="max-w-[760px] relative z-[1]"
        variants={stagger(0.14, 0.1)}
        initial="hidden"
        animate="show"
      >
        <motion.div
          variants={fadeUp}
          className="inline-flex items-center gap-2 bg-accent/10 border border-accent/35 rounded-full px-[18px] py-[6px] text-[0.78rem] text-accent tracking-[0.1em] mb-7 font-mono uppercase"
        >
          <span className="w-[7px] h-[7px] rounded-full bg-neon animate-blink"></span>
          ⚡ Available for Freelance
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="text-[clamp(2.8rem,7vw,5rem)] font-black leading-[1.1] mb-2.5 tracking-[-0.02em]"
        >
          Hi, I'm<br />
          <span className="bg-grad bg-clip-text text-transparent">Youssef Mohamed</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="font-mono text-[clamp(0.95rem,2.2vw,1.2rem)] text-muted mb-6 tracking-[0.04em] min-h-[1.6em]"
        >
          <span id="typed-text" ref={typedRef}></span>
          <span className="inline-block w-[2px] h-[1em] bg-neon ml-0.5 align-middle animate-cursorBlink"></span>
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="text-[1.05rem] text-muted max-w-[540px] mb-10 leading-[1.9]"
        >
          A passionate frontend developer who turns ideas into polished digital
          experiences. Information Systems graduate with 3+ years building
          websites and apps that balance aesthetics with usability.
        </motion.p>

        <motion.div variants={fadeUp} className="flex gap-4 flex-wrap">
          <motion.a
            href="#projects"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3.5 bg-grad text-white rounded-lg font-sans text-[0.95rem] font-bold no-underline cursor-pointer inline-block transition-[opacity,box-shadow] duration-300 hover:opacity-90 hover:shadow-[0_12px_30px_rgba(108,99,255,0.4)]"
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3.5 bg-transparent text-text border-[1.5px] border-border rounded-lg font-sans text-[0.95rem] font-semibold no-underline cursor-pointer inline-block transition-[border-color,color,box-shadow] duration-300 hover:border-accent hover:text-accent hover:shadow-[0_8px_24px_rgba(108,99,255,0.2)]"
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
