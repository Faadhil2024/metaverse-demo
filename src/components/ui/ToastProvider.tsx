"use client";

import { createContext, useContext, useState, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CheckCircle, WarningCircle, X } from "@phosphor-icons/react/dist/ssr";

type Toast = { id: number; type: "success" | "error"; message: string };
type ToastContextType = { showToast: (type: "success" | "error", message: string) => void };

const ToastContext = createContext<ToastContextType | null>(null);

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
}

export default function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback((type: "success" | "error", message: string) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, type, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-2">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
              className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-sm shadow-lg ${
                toast.type === "success"
                  ? "border-[var(--accent)]/30 bg-[var(--surface)] text-[var(--text)]"
                  : "border-red-500/30 bg-[var(--surface)] text-[var(--text)]"
              }`}
            >
              {toast.type === "success" ? (
                <CheckCircle size={18} weight="fill" className="text-[var(--accent)]" />
              ) : (
                <WarningCircle size={18} weight="fill" className="text-red-400" />
              )}
              <span>{toast.message}</span>
              <button
                onClick={() => setToasts((prev) => prev.filter((t) => t.id !== toast.id))}
                className="ml-2 text-[var(--text-muted)] hover:text-[var(--text)]"
              >
                <X size={14} />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}