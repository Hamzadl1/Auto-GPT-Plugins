import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "../../lib/constants";

function TestimonialCard({
  t,
}: {
  t: (typeof TESTIMONIALS)[number];
}) {
  return (
    <div className="bg-white rounded-2xl p-7 border border-aui-border flex flex-col h-full">
      <div className="flex items-center gap-4 mb-5">
        <div className="w-14 h-14 rounded-full bg-aui-green-dark text-white flex items-center justify-center text-lg font-bold font-display shrink-0">
          {t.initials}
        </div>
        <div>
          <p className="font-display font-semibold text-aui-text-dark">
            {t.name}
          </p>
          <p className="text-sm text-aui-text-muted">{t.program}</p>
        </div>
      </div>
      <blockquote className="text-lg leading-relaxed text-aui-text-dark flex-1 mb-5">
        "{t.quote}"
      </blockquote>
      <span className="bg-aui-cream rounded-full px-3 py-1 text-xs font-medium text-aui-text-dark inline-flex items-center gap-1.5 self-start">
        {t.exchange.flag} {t.exchange.place}
      </span>
    </div>
  );
}

export default function StudentTestimonials() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="py-14 lg:py-20 bg-aui-cream/50">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-[30px] lg:text-[40px] font-bold text-aui-text-dark mb-10 leading-tight"
        >
          Ils sont passés par là.
          <br />
          Ils racontent.
        </motion.h2>

        {/* Desktop grid */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <TestimonialCard t={t} />
            </motion.div>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="lg:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
            >
              <TestimonialCard t={TESTIMONIALS[current]} />
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={() =>
                setCurrent((p) => (p === 0 ? TESTIMONIALS.length - 1 : p - 1))
              }
              className="w-10 h-10 rounded-full border border-aui-border flex items-center justify-center text-aui-text-muted hover:bg-aui-cream transition-colors"
              aria-label="Précédent"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === current ? "bg-aui-green-dark" : "bg-aui-border"
                  }`}
                  aria-label={`Témoignage ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() =>
                setCurrent((p) => (p === TESTIMONIALS.length - 1 ? 0 : p + 1))
              }
              className="w-10 h-10 rounded-full border border-aui-border flex items-center justify-center text-aui-text-muted hover:bg-aui-cream transition-colors"
              aria-label="Suivant"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
