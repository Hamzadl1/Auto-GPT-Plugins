import { motion } from "framer-motion";
import { DESTINATIONS } from "../../lib/constants";

export default function ExchangeSection() {
  return (
    <section id="exchange" className="py-14 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-[30px] lg:text-[40px] font-bold text-aui-text-dark mb-4 leading-tight"
        >
          72% des étudiants partent en échange.
          <br className="hidden lg:block" /> Et toi ?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-aui-text-muted text-lg max-w-2xl mb-10"
        >
          Plus de 400 universités partenaires dans 50+ pays. Un semestre ou une
          année complète à l'étranger, intégré à ton cursus.
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.06 } },
          }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3"
        >
          {DESTINATIONS.map((d) => (
            <motion.div
              key={d.name}
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4 }}
              className="bg-white border border-aui-border rounded-xl px-5 py-4 flex items-center gap-3 hover:-translate-y-1 transition-all cursor-default"
            >
              <span className="text-2xl">{d.flag}</span>
              <span className="font-medium text-aui-text-dark text-sm">
                {d.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-aui-text-muted text-sm mt-8 max-w-2xl"
        >
          Tu pars avec ton statut AUI, tes crédits sont reconnus, et tu reviens
          avec une expérience que les recruteurs mettent en haut de la pile.
        </motion.p>
      </div>
    </section>
  );
}
