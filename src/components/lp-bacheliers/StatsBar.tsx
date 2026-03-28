import { motion } from "framer-motion";
import CountUp from "./CountUp";
import { STATS } from "../../lib/constants";

export default function StatsBar() {
  return (
    <section className="bg-aui-cream py-10">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Desktop */}
        <div className="hidden lg:flex items-center justify-between">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="text-center"
            >
              <p className="font-display font-[800] text-4xl text-aui-green-dark tracking-tight">
                <CountUp end={s.value} suffix={s.suffix} />
              </p>
              <p className="text-sm text-aui-text-muted mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile horizontal scroll */}
        <div className="lg:hidden overflow-x-auto scroll-snap-x flex gap-8 pb-2 -mx-5 px-5">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="text-center shrink-0"
            >
              <p className="font-display font-[800] text-3xl text-aui-green-dark tracking-tight">
                <CountUp end={s.value} suffix={s.suffix} />
              </p>
              <p className="text-xs text-aui-text-muted mt-1 whitespace-nowrap">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
