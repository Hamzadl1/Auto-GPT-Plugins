"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Building2, ScrollText, GraduationCap, Globe } from "lucide-react";
import LeadForm from "./LeadForm";

const iconMap = {
  Building2: <Building2 className="w-4 h-4 flex-shrink-0" />,
  ScrollText: <ScrollText className="w-4 h-4 flex-shrink-0" />,
  GraduationCap: <GraduationCap className="w-4 h-4 flex-shrink-0" />,
  Globe: <Globe className="w-4 h-4 flex-shrink-0" />,
};

const badges = [
  { icon: "Building2" as const, text: "Université publique — fondée par Dahir Royal" },
  { icon: "ScrollText" as const, text: "Diplôme d'État — reconnu au Maroc et à l'international" },
  { icon: "GraduationCap" as const, text: "Bourses de mérite — attribuées sur dossier" },
  { icon: "Globe" as const, text: "3 accréditations — NECHE · ABET · EPAS" },
];

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen bg-gradient-to-br from-[#1B3A2D] to-[#0F2A1E] pt-32 pb-20 lg:pb-24"
    >
      {/* Overlay pattern */}
      <div className="absolute inset-0 bg-[url('/images/parents/campus-hero.webp')] bg-cover bg-center opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Text column */}
          <div className="lg:col-span-3 space-y-6">
            <motion.span
              {...fadeInUp}
              className="inline-block text-sm tracking-widest text-aui-gold font-medium uppercase font-body"
            >
              Admissions Fall 2026
            </motion.span>

            <motion.h1
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.1 }}
              className="text-[32px] lg:text-[48px] font-bold leading-[1.1] text-white font-display"
            >
              L&apos;université publique qui donne à votre enfant un diplôme
              d&apos;État et une carrière internationale.
            </motion.h1>

            <motion.p
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.2 }}
              className="text-base lg:text-lg text-aui-text-light/80 max-w-2xl font-body leading-relaxed"
            >
              Al Akhawayn University est la seule université publique marocaine
              100% en anglais, avec trois accréditations internationales. Des
              bourses de mérite sont attribuées chaque année sur dossier.
            </motion.p>

            {/* Badges */}
            <motion.div
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.3 }}
              className="flex flex-wrap gap-3 pt-2"
            >
              {badges.map((badge) => (
                <div
                  key={badge.text}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 rounded-full px-4 py-2 text-sm text-white font-body"
                >
                  {iconMap[badge.icon]}
                  <span>{badge.text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Form column */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" as const }}
          >
            <LeadForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
