"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFinished(true);
          }, 700);
          return 100;
        }
        return prev + 4;
      });
    }, 70);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isFinished) {
      const timeout = setTimeout(() => {
        setShowContent(true);
      }, 600);
      return () => clearTimeout(timeout);
    }
  }, [isFinished]);

  if (showContent) return null;

  return (
      <AnimatePresence>
        {!isFinished && (
            <motion.div
                className="fixed inset-0 bg-black z-[9999] flex items-center justify-center select-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                onContextMenu={(e) => e.preventDefault()} // blokada prawego przycisku
            >
              <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0.4 }}
                  animate={{ opacity: [0.4, 0.6, 0.4] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
              >
                <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-800 rounded-full filter blur-3xl opacity-30 animate-pulse" />
                <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-indigo-700 rounded-full filter blur-2xl opacity-30 animate-pulse" />
              </motion.div>

              <motion.div
                  className="relative flex flex-col items-center"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
              >
                {/* Warstwa maskująca logo */}
                <div className="relative w-28 h-28 mb-8">
                  <motion.img
                      src="/assets/logo/klovychat.png"
                      alt="Klovy Logo"
                      className="w-full h-full object-contain pointer-events-none"
                      draggable={false}
                      initial={{ scale: 0.95 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 1, ease: "easeOut" }}
                  />
                  {/* Przezroczysta nakładka blokująca interakcje */}
                  <div className="absolute inset-0 z-10" />
                </div>

                <div className="relative w-64 h-2 bg-neutral-700 rounded-full overflow-hidden">
                  <motion.div
                      className="h-full bg-gradient-to-r from-purple-400 via-indigo-500 to-purple-400"
                      animate={{ width: `${progress}%` }}
                      transition={{ ease: "easeOut", duration: 0.4 }}
                  />
                </div>

                <div className="mt-3 text-sm text-gray-300">{progress}%</div>
              </motion.div>
            </motion.div>
        )}
      </AnimatePresence>
  );
}
