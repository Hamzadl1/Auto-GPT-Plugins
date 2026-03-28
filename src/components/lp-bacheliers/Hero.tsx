import { motion } from "framer-motion";
import { Globe, Plane, Mountain } from "lucide-react";
import LeadFormStudent from "./LeadFormStudent";

const badges = [
  { icon: <Globe className="w-4 h-4" />, text: "100% en anglais" },
  { icon: <Plane className="w-4 h-4" />, text: "72% en échange international" },
  { icon: <Mountain className="w-4 h-4" />, text: "Campus résidentiel à Ifrane" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-aui-green-dark overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Text content */}
          <div className="lg:col-span-3 flex flex-col justify-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="text-sm tracking-widest text-aui-gold font-semibold uppercase mb-6 block"
            >
              Fall 2026 — Admissions ouvertes
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.1 }}
              className="font-display font-[800] text-5xl lg:text-7xl text-white leading-[1.05] tracking-[-0.02em] mb-6"
            >
              4 ans pour devenir qui tu veux.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.2 }}
              className="text-lg lg:text-xl text-white/80 leading-relaxed max-w-xl mb-8"
            >
              Un campus au cœur du Moyen Atlas. 100% en anglais. 72% des
              étudiants partent en échange dans le monde entier. Et un diplôme
              d'État qui t'ouvre toutes les portes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.35 }}
              className="flex flex-wrap gap-3"
            >
              {badges.map((badge) => (
                <span
                  key={badge.text}
                  className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm text-white flex items-center gap-2"
                >
                  {badge.icon}
                  {badge.text}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <LeadFormStudent />
          </div>
        </div>
      </div>
    </section>
  );
}
