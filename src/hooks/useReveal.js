import { useEffect } from 'react';


export default function useReveal(containerRef) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const els = container.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    if (els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 90);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [containerRef]);
}
