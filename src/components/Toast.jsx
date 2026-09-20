import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// بيسمع لأي showToast(...) من src/toast.js
export default function Toast() {
  const [toast, setToast] = useState(null);

  useEffect(() => {
    let timer;
    const handler = (e) => {
      clearTimeout(timer);
      setToast({ ...e.detail, id: Date.now() });
      timer = setTimeout(() => setToast(null), 4500);
    };
    window.addEventListener("app:toast", handler);
    return () => {
      window.removeEventListener("app:toast", handler);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 right-6 z-[1000] max-w-[calc(100vw-3rem)]"
    >
      <AnimatePresence>
        {toast && (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, x: 60, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 380, damping: 28 }}
            className={`flex items-center gap-3 bg-card border rounded-xl px-5 py-4 shadow-[0_16px_40px_rgba(0,0,0,0.45)] ${
              toast.type === "error" ? "border-red-500/50" : "border-neon/40"
            }`}
          >
            <span className="text-xl">{toast.icon}</span>
            <div className="flex flex-col gap-0.5">
              <span className="block text-[0.92rem] font-bold text-text">{toast.title}</span>
              <span className="block text-[0.8rem] font-normal text-muted">{toast.sub}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
