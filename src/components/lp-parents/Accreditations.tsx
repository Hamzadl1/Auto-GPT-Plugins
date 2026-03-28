"use client";

import { motion } from "framer-motion";
import { ACCREDITATIONS } from "@/lib/constants";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

export default function Accreditations() {
  return (
    <section id="accreditations" className="bg-aui-cream py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.h2
          {...fadeInUp}
          className="text-[28px] lg:text-[36px] font-bold text-aui-text-dark font-display mb-4"
        >
          Reconnu là où ça compte
        </motion.h2>

        <motion.p
          {...fadeInUp}
          className="text-base text-aui-text-muted font-body max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Ces accréditations placent Al Akhawayn University parmi les
          universités dont le diplôme est accepté sans équivalence en Amérique du
          Nord, en Europe et au-delà.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {ACCREDITATIONS.map((acc, i) => (
            <motion.div
              key={acc.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: "easeOut" as const, delay: i * 0.12 }}
              className="flex flex-col items-center gap-4"
            >
              {/* Logo placeholder */}
              <div className="h-14 w-32 bg-aui-border/50 rounded-lg flex items-center justify-center grayscale hover:grayscale-0 transition-all">
                <span className="text-sm font-semibold text-aui-text-muted font-body">
                  {acc.name}
                </span>
              </div>
              <p className="text-sm text-aui-text-muted font-body leading-snug">
                {acc.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
