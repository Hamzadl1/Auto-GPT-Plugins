"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

export default function ScholarshipSection() {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="scholarships" className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.h2
          {...fadeInUp}
          className="text-[28px] lg:text-[36px] font-bold text-aui-text-dark font-display mb-4 text-center"
        >
          Des bourses de mérite pour récompenser l&apos;excellence
        </motion.h2>

        <motion.p
          {...fadeInUp}
          className="text-base text-aui-text-muted font-body max-w-2xl mx-auto text-center mb-12 leading-relaxed"
        >
          Al Akhawayn University attribue chaque année des bourses de mérite sur
          dossier académique. Elles sont conçues pour rendre l&apos;excellence
          accessible aux meilleurs profils.
        </motion.p>

        {/* Central highlight card */}
        <motion.div
          {...fadeInUp}
          className="max-w-2xl mx-auto bg-aui-cream border-2 border-aui-gold/30 rounded-2xl p-10"
        >
          <p className="text-base text-aui-text-dark font-body leading-relaxed mb-4">
            Les bourses de mérite sont attribuées sur la base du dossier
            académique de votre enfant — notes, résultats au baccalauréat, et
            parcours scolaire. Elles sont renouvelables chaque année sous
            condition de maintien des résultats.
          </p>
          <p className="text-base text-aui-text-dark font-body leading-relaxed mb-8">
            Un conseiller admissions peut vous accompagner pour évaluer
            l&apos;éligibilité de votre enfant et vous expliquer les options de
            financement disponibles.
          </p>

          <button
            onClick={scrollToForm}
            className="bg-aui-green-dark text-white rounded-xl px-8 py-4 font-semibold hover:bg-aui-green-mid transition-colors font-body"
          >
            Parler à un conseiller bourses &amp; financement →
          </button>

          <p className="text-xs text-aui-text-muted mt-4 font-body">
            Entretien confidentiel · Sans engagement
          </p>
        </motion.div>
      </div>
    </section>
  );
}
