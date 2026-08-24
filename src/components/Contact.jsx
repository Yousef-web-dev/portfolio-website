import { useEffect, useRef, useState } from 'react';
import { DotLottiePlayer } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';
import useReveal from '../hooks/useReveal.js';

const linkClass =
  "contact-link flex items-center justify-between px-4 py-3 bg-card border border-border rounded-xl text-text no-underline text-[0.85rem] font-semibold transition-all hover:border-accent hover:bg-accent/10 hover:translate-x-1 group";

// Class للـ input والمؤثرات التفاعلية
const inputClass = 
  "peer w-full bg-card border-[1.5px] border-border rounded-[10px] px-4 pt-5 pb-2 text-text font-sans text-[0.95rem] outline-none transition-all duration-300 focus:border-accent focus:shadow-[0_0_20px_rgba(108,99,255,0.2)] focus:scale-[1.01] placeholder-transparent";

// Class للـ Floating Label
const labelClass = 
  "absolute left-4 top-2 text-[0.72rem] font-semibold text-muted tracking-[0.04em] transition-all duration-200 pointer-events-none peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-[0.9rem] peer-placeholder-shown:text-muted/70 peer-focus:top-2 peer-focus:text-[0.72rem] peer-focus:text-neon";

export default function Contact() {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const [copied, setCopied] = useState(false);
  const [msgLength, setMsgLength] = useState(0);
  const MY_EMAIL = "youssef@example.com";

  useReveal(sectionRef);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(MY_EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  useEffect(() => {
    const form = formRef.current;
    if (!form) return;

    const WHATSAPP_NUMBER = '201157700392';

    function showToast(type, icon, title, sub) {
      const toast = document.getElementById('toast');
      if (!toast) return;
      document.getElementById('toastIcon').textContent = icon;
      document.getElementById('toastTitle').textContent = title;
      document.getElementById('toastSub').textContent = sub;
      toast.className = 'show ' + type;
      setTimeout(() => { toast.className = ''; }, 4500);
    }

    function sendEmail(e) {
      e.preventDefault();

      const name = form.from_name.value.trim();
      const email = form.from_email.value.trim();
      const subj = form.subject.value.trim();
      const msg = form.message.value.trim();

      if (!name || !email || !subj || !msg) {
        showToast('error', '⚠️', 'Please fill in all fields.', 'Every field is required.');
        return;
      }

      const text =
        `Hello, I'd like to get in touch with you:%0A` +
        `👤 *Name:* ${encodeURIComponent(name)}%0A` +
        `✉️ *Email:* ${encodeURIComponent(email)}%0A` +
        `📌 *Subject:* ${encodeURIComponent(subj)}%0A` +
        `💬 *Message:* ${encodeURIComponent(msg)}%0A`;

      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
      window.open(whatsappUrl, '_blank');

      showToast('success', '✅', 'Redirecting to WhatsApp...', 'Send the message from there to reach me.');
      form.reset();
      setMsgLength(0);
    }

    form.addEventListener('submit', sendEmail);
    return () => form.removeEventListener('submit', sendEmail);
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="px-[5%] py-[100px] bg-surface">
      <div className="font-mono text-[0.72rem] text-neon tracking-[0.2em] uppercase mb-3">// 05. Contact</div>
      <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-black mb-4 leading-[1.2] tracking-[-0.02em]">Let's Work Together 🤙</h2>
      <div className="w-[60px] h-[3px] bg-grad rounded mb-12"></div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        
        <div className="reveal-left lg:col-span-5 flex flex-col justify-between h-full">
          <div>
            <p className="text-muted text-base leading-[1.8] mb-4">
              Got a project in mind or want to collaborate? I'd love to hear from
              you. Fill in the form and I'll get back to you as soon as possible. 🚀
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-muted mb-6">
              <span className="flex items-center gap-1.5">⚡ Replies in ~2 hours</span>
              <span>•</span>
              <span className="flex items-center gap-1.5">📍 Cairo, Egypt (UTC+3)</span>
            </div>

            {/* أنيميشن Lottie */}
            <div className="w-full max-w-[180px] sm:max-w-[200px] mx-auto lg:mx-0 my-2">
              <DotLottiePlayer
                src="https://assets2.lottiefiles.com/packages/lf20_u25cckyh.json"
                autoplay
                loop
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>

          {/* الروابط */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
            <div onClick={handleCopyEmail} className={`${linkClass} cursor-pointer`}>
              <div className="flex items-center gap-2.5 truncate">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 shrink-0 text-neon">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-10 7L2 7" />
                </svg>
                <span className="truncate">Email Me</span>
              </div>
              <span className="text-[0.7rem] font-mono text-accent">{copied ? "Copied! ✅" : "Copy 📋"}</span>
            </div>

            <a href="https://github.com/Yousef-web-dev" target="_blank" rel="noopener noreferrer" className={linkClass}>
              <div className="flex items-center gap-2.5 truncate">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                </svg>
                <span>GitHub</span>
              </div>
              <span className="text-muted group-hover:translate-x-0.5 transition-transform">→</span>
            </a>

            <a href="https://www.linkedin.com/in/yousef-mohamed-b824a2341" target="_blank" rel="noopener noreferrer" className={linkClass}>
              <div className="flex items-center gap-2.5 truncate">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <span>LinkedIn</span>
              </div>
              <span className="text-muted group-hover:translate-x-0.5 transition-transform">→</span>
            </a>

            <a href="https://wa.me/201157700392" target="_blank" rel="noopener noreferrer" className={linkClass}>
              <div className="flex items-center gap-2.5 truncate">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
                <span>WhatsApp</span>
              </div>
              <span className="text-muted group-hover:translate-x-0.5 transition-transform">→</span>
            </a>
          </div>
        </div>

        {/* ===== الجزء الأيمن: Form مع Animated Floating Inputs ===== */}
        <div className="reveal-right lg:col-span-7">
          <form className="flex flex-col gap-[18px]" id="contactForm" ref={formRef} noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Full Name */}
              <div className="relative">
                <input
                  type="text" id="from_name" name="from_name" placeholder="John Doe" required
                  className={inputClass}
                />
                <label htmlFor="from_name" className={labelClass}>Full Name</label>
              </div>

              {/* Email Address */}
              <div className="relative">
                <input
                  type="email" id="from_email" name="from_email" placeholder="john@example.com" required
                  className={inputClass}
                />
                <label htmlFor="from_email" className={labelClass}>Email Address</label>
              </div>

            </div>

            {/* Subject */}
            <div className="relative">
              <input
                type="text" id="subject" name="subject" placeholder="Project Collaboration" required
                className={inputClass}
              />
              <label htmlFor="subject" className={labelClass}>Subject</label>
            </div>

            {/* Message Textarea */}
            <div className="relative">
              <textarea
                id="message" name="message" maxLength={500} placeholder="Tell me about your project..." required
                onChange={(e) => setMsgLength(e.target.value.length)}
                className={`${inputClass} min-h-[130px] resize-none pt-6`}
              ></textarea>
              <label htmlFor="message" className={labelClass}>Message</label>
              <span className="absolute right-3 bottom-3 font-mono text-[0.68rem] text-muted/70">{msgLength}/500</span>
            </div>

            <button
              type="submit" id="sendBtn"
              className="send-btn px-9 py-[15px] bg-grad text-white rounded-[10px] font-sans text-base font-bold cursor-pointer transition-all flex items-center justify-center gap-2.5 relative overflow-hidden hover:opacity-90 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(108,99,255,0.4)] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0"
            >
              <span className="btn-text">Send Message 🚀</span>
              <span className="btn-spinner hidden w-[18px] h-[18px] border-2 border-white/30 border-t-white rounded-full animate-[spin_0.7s_linear_infinite]"></span>
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}