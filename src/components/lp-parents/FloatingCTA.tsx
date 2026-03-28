"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function FloatingCTA() {
  const [showCTA, setShowCTA] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowCTA(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-aui-green-dark p-4 pb-[calc(1rem+env(safe-area-inset-bottom))] shadow-2xl"
      initial={{ y: 100 }}
      animate={{ y: showCTA ? 0 : 100 }}
      transition={{ duration: 0.3 }}
    >
      <button
        onClick={scrollToForm}
        className="w-full bg-white text-aui-green-dark rounded-xl py-3.5 font-semibold font-body"
      >
        Demander le guide d&apos;admission
      </button>
    </motion.div>
  );
}
