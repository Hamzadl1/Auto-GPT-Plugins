"use client";

import { motion } from "framer-motion";
import { Building2, ScrollText, Globe } from "lucide-react";
import { INSTITUTIONAL_PROOFS } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  Building2: <Building2 className="w-10 h-10 text-aui-green-mid mb-4" />,
  ScrollText: <ScrollText className="w-10 h-10 text-aui-green-mid mb-4" />,
  Globe: <Globe className="w-10 h-10 text-aui-green-mid mb-4" />,
};

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

export default function InstitutionalProof() {
  return (
    <section id="institutional-proof" className="bg-aui-cream py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section number */}
        <motion.div {...fadeInUp} className="flex items-center gap-4 mb-8">
          <span className="text-sm font-semibold text-aui-green-light/60 font-body tracking-wider">
            01
          </span>
          <div className="h-px w-12 bg-aui-green-light/30" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="text-[28px] lg:text-[36px] font-bold text-aui-text-dark font-display mb-4"
        >
          Un diplôme d&apos;État délivré par une université publique
        </motion.h2>

        <motion.p
          {...fadeInUp}
          className="text-base text-aui-text-muted font-body max-w-3xl mb-12 leading-relaxed"
        >
          Ce n&apos;est pas une école privée. C&apos;est une institution
          d&apos;État fondée par Dahir Royal, qui délivre un diplôme reconnu par
          le ministère de l&apos;Enseignement supérieur.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {INSTITUTIONAL_PROOFS.map((proof, i) => (
            <motion.div
              key={proof.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                ease: "easeOut" as const,
                delay: i * 0.12,
              }}
              className="bg-white rounded-2xl p-8 border border-aui-border hover:shadow-md transition-all hover:-translate-y-0.5"
            >
              {iconMap[proof.icon]}
              <h3 className="text-xl font-semibold text-aui-text-dark font-body mb-3">
                {proof.title}
              </h3>
              <p className="text-sm text-aui-text-muted font-body leading-relaxed">
                {proof.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
