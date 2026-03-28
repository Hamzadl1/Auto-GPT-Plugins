import { motion } from "framer-motion";

export default function CTAFinal() {
  return (
    <section className="relative bg-aui-green-dark py-20 lg:py-28 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cta-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="40" cy="40" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>
      </div>

      <div className="relative max-w-4xl mx-auto px-5 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-[800] text-4xl lg:text-6xl text-white leading-[1.05] tracking-[-0.02em] mb-6"
        >
          Fall 2026 — Ta place t'attend.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-white/80 text-lg lg:text-xl max-w-2xl mx-auto mb-10"
        >
          4 ans 100% en anglais. Un campus à Ifrane. Le monde entier comme
          terrain de jeu. Postule maintenant.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <a
            href="#hero"
            className="bg-white text-aui-green-dark rounded-xl px-8 py-4 font-semibold hover:scale-[1.02] transition-transform text-center"
          >
            Je postule
          </a>
          <a
            href="https://wa.me/212535862000"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/40 text-white rounded-xl px-8 py-4 hover:bg-white/10 transition-colors text-center"
          >
            Parler à un conseiller
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="text-white/50 text-sm"
        >
          +212 535-862-000 · WhatsApp · admissions@aui.ma
        </motion.p>
      </div>
    </section>
  );
}
