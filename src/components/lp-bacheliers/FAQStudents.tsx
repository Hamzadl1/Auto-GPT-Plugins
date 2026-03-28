import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "../../lib/constants";

function FAQItem({ item, open, toggle }: { item: (typeof FAQ_ITEMS)[number]; open: boolean; toggle: () => void }) {
  return (
    <div className="border-b border-aui-border last:border-b-0">
      <button
        onClick={toggle}
        className="w-full flex items-start justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-display font-semibold text-aui-text-dark text-base lg:text-lg">
          {item.q}
        </span>
        <ChevronDown
          size={20}
          className={`shrink-0 text-aui-text-muted mt-1 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-aui-text-muted text-sm leading-relaxed pb-5 pr-8">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQStudents() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-14 lg:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-5 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-[30px] lg:text-[40px] font-bold text-aui-text-dark mb-10 leading-tight text-center"
        >
          Tes questions, nos réponses
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {FAQ_ITEMS.map((item, i) => (
            <FAQItem
              key={i}
              item={item}
              open={openIndex === i}
              toggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
