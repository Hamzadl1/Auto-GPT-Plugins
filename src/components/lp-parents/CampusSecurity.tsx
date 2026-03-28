"use client";

import { motion } from "framer-motion";
import { Shield, Home, Mountain } from "lucide-react";
import { CAMPUS_BADGES } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  Shield: <Shield className="w-5 h-5 text-aui-green-mid" />,
  Home: <Home className="w-5 h-5 text-aui-green-mid" />,
  Mountain: <Mountain className="w-5 h-5 text-aui-green-mid" />,
};

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

export default function CampusSecurity() {
  return (
    <section id="campus-security" className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image placeholder */}
          <motion.div
            {...fadeInUp}
            className="bg-aui-cream rounded-2xl aspect-[4/3] flex items-center justify-center text-aui-text-muted font-body order-2 lg:order-1"
          >
            <span className="text-sm">CAMPUS / RÉSIDENCES</span>
          </motion.div>

          {/* Text */}
          <div className="order-1 lg:order-2 space-y-6">
            <motion.h2
              {...fadeInUp}
              className="text-[28px] lg:text-[36px] font-bold text-aui-text-dark font-display"
            >
              Un campus résidentiel conçu pour la réussite et la sécurité
            </motion.h2>

            <motion.div {...fadeInUp} className="space-y-4">
              <p className="text-base text-aui-text-muted font-body leading-relaxed">
                Le campus d&apos;Al Akhawayn University est situé à Ifrane, au
                cœur du Moyen Atlas. Résidences, bibliothèque, installations
                sportives, restaurants, clubs étudiants — tout est sur place
                dans un environnement sécurisé et structuré.
              </p>
              <p className="text-base text-aui-text-muted font-body leading-relaxed">
                Votre enfant vit et étudie dans un cadre qui favorise la
                concentration, l&apos;autonomie et la vie en communauté. Le
                campus est surveillé 24h/24 et l&apos;encadrement est conçu pour
                accompagner la transition vers la vie universitaire.
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              className="flex flex-wrap gap-3 pt-2"
            >
              {CAMPUS_BADGES.map((badge) => (
                <div
                  key={badge.text}
                  className="flex items-center gap-2 bg-aui-cream rounded-full px-4 py-2 text-sm text-aui-text-dark font-body"
                >
                  {iconMap[badge.icon]}
                  <span>{badge.text}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
