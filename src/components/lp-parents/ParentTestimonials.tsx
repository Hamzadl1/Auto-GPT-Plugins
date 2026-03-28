"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

export default function ParentTestimonials() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.h2
          {...fadeInUp}
          className="text-[28px] lg:text-[36px] font-bold text-aui-text-dark font-display mb-12 text-center"
        >
          Des parents témoignent
        </motion.h2>

        {/* Desktop: grid, Mobile: horizontal scroll */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.initials} testimonial={t} delay={i * 0.12} />
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-6 px-6">
          {TESTIMONIALS.map((t, i) => (
            <div key={t.initials} className="snap-center flex-shrink-0 w-[85vw]">
              <TestimonialCard testimonial={t} delay={i * 0.12} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  testimonial,
  delay,
}: {
  testimonial: (typeof TESTIMONIALS)[0];
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" as const, delay }}
      className="relative bg-white rounded-2xl p-8 border border-aui-border hover:shadow-md transition-all"
    >
      {/* Decorative quote */}
      <span className="absolute top-4 left-6 text-6xl font-display text-aui-green-light/20 leading-none select-none">
        &ldquo;
      </span>

      <div className="relative pt-8">
        <p className="text-base text-aui-text-dark font-body leading-relaxed mb-6 italic">
          {testimonial.quote}
        </p>

        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-aui-cream flex items-center justify-center">
            <span className="text-sm font-semibold text-aui-green-dark font-body">
              {testimonial.initials}
            </span>
          </div>
          <span className="text-sm text-aui-text-muted font-body">
            {testimonial.attribution}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
