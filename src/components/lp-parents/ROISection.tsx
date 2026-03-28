"use client";

import { motion } from "framer-motion";
import { ROI_STATS } from "@/lib/constants";
import CountUp from "./CountUp";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

export default function ROISection() {
  return (
    <section className="bg-aui-cream py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.h2
          {...fadeInUp}
          className="text-[28px] lg:text-[36px] font-bold text-aui-text-dark font-display mb-12 text-center"
        >
          Ce que le diplôme Al Akhawayn University ouvre comme portes
        </motion.h2>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {ROI_STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: "easeOut" as const, delay: i * 0.12 }}
              className="text-center"
            >
              <CountUp
                target={stat.value}
                suffix={stat.suffix}
                className="text-4xl lg:text-5xl font-bold text-aui-green-dark font-display"
              />
              <p className="text-sm text-aui-text-muted font-body mt-2 leading-snug">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          {...fadeInUp}
          className="text-base text-aui-text-muted font-body leading-relaxed max-w-3xl mx-auto text-center"
        >
          Les diplômés d&apos;Al Akhawayn University intègrent des entreprises
          de premier plan au Maroc et à l&apos;international, ou poursuivent
          dans des Masters prestigieux. Le profil de sortie — bilingue,
          rigoureux, ouvert sur le monde — est recherché par les recruteurs
          comme par les grandes écoles.
        </motion.p>
      </div>
    </section>
  );
}
