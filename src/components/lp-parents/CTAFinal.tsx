"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

export default function CTAFinal() {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="cta-final"
      className="relative bg-aui-green-dark py-20 lg:py-28 overflow-hidden"
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.p
          {...fadeInUp}
          className="text-sm tracking-widest text-aui-gold font-medium uppercase mb-6 font-body"
        >
          Fall 2026 — Les admissions sont ouvertes.
        </motion.p>

        <motion.h2
          {...fadeInUp}
          className="text-[28px] lg:text-[40px] font-bold text-white font-display leading-tight mb-6"
        >
          Offrez à votre enfant un diplôme d&apos;État porté par trois
          accréditations internationales, dans la seule université publique
          marocaine 100% en anglais.
        </motion.h2>

        <motion.div
          {...fadeInUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
        >
          <button
            onClick={scrollToForm}
            className="bg-white text-aui-green-dark hover:bg-aui-cream rounded-xl px-8 py-4 font-semibold transition-colors font-body"
          >
            Recevoir le guide d&apos;admission
          </button>
          <button
            onClick={scrollToForm}
            className="border border-white/40 text-white hover:bg-white/10 rounded-xl px-8 py-4 font-semibold transition-colors font-body"
          >
            Parler à un conseiller
          </button>
        </motion.div>

        <motion.button
          {...fadeInUp}
          onClick={scrollToForm}
          className="text-sm text-white/60 hover:text-white/80 transition-colors font-body mb-8 block mx-auto"
        >
          ↑ Remplir le formulaire en haut de page
        </motion.button>

        <motion.div
          {...fadeInUp}
          className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/70 font-body"
        >
          <a href="tel:+212535862000" className="flex items-center gap-2 hover:text-white transition-colors">
            <Phone size={16} />
            +212 535-862-000
          </a>
          <span className="flex items-center gap-2">
            <MessageCircle size={16} />
            WhatsApp
          </span>
          <a href="mailto:admissions@aui.ma" className="flex items-center gap-2 hover:text-white transition-colors">
            <Mail size={16} />
            admissions@aui.ma
          </a>
        </motion.div>
      </div>
    </section>
  );
}
