"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/constants";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

export default function FAQParents() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-white py-16 lg:py-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <motion.h2
          {...fadeInUp}
          className="text-[28px] lg:text-[36px] font-bold text-aui-text-dark font-display mb-12 text-center"
        >
          Questions fréquentes des parents
        </motion.h2>

        <div className="divide-y divide-aui-border">
          {FAQ_ITEMS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="py-5"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full flex justify-between items-center text-left gap-4"
              >
                <span className="text-lg font-semibold text-aui-text-dark font-body">
                  {item.q}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0 text-aui-text-muted"
                >
                  {openIndex === i ? (
                    <Minus size={20} />
                  ) : (
                    <Plus size={20} />
                  )}
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" as const }}
                    className="overflow-hidden"
                  >
                    <p className="text-base text-aui-text-muted font-body leading-relaxed pt-3">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
