import { motion } from "framer-motion";
import { PROGRAMS } from "../../lib/constants";

export default function Programs() {
  return (
    <section id="programs" className="py-14 lg:py-20 bg-aui-cream/40">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-[30px] lg:text-[40px] font-bold text-aui-text-dark mb-10 leading-tight"
        >
          Des programmes qui préparent
          <br className="hidden lg:block" /> aux métiers de demain
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {PROGRAMS.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-7 border border-aui-border flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-aui-green-dark text-white text-xs font-bold tracking-wider px-3 py-1 rounded-full uppercase">
                  {p.label}
                </span>
                {p.accreditation && (
                  <span className="text-xs text-aui-text-muted font-medium">
                    {p.accreditation}
                  </span>
                )}
              </div>

              <h3 className="font-display text-[22px] font-semibold text-aui-text-dark mb-3">
                {p.title}
              </h3>

              <p className="text-aui-text-muted text-sm leading-relaxed flex-1">
                {p.description}
              </p>

              <p className="text-aui-green-mid font-semibold text-sm mt-4 pt-4 border-t border-aui-border">
                {p.impact}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
