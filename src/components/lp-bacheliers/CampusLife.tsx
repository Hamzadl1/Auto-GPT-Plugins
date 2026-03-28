import { motion } from "framer-motion";
import { Users, Trophy, Home, Heart } from "lucide-react";
import type { ReactNode } from "react";

const iconMap: Record<string, ReactNode> = {
  Users: <Users className="w-10 h-10 text-aui-green-light" />,
  Trophy: <Trophy className="w-10 h-10 text-aui-green-light" />,
  Home: <Home className="w-10 h-10 text-aui-green-light" />,
  Heart: <Heart className="w-10 h-10 text-aui-green-light" />,
};

const blocks = [
  {
    icon: "Users",
    title: "60+ clubs",
    text: "Entrepreneuriat, débat, musique, photo, théâtre, robotique, sport, solidarité. Tu trouveras ta tribu.",
  },
  {
    icon: "Trophy",
    title: "Sport & compétitions",
    text: "Terrains de foot, basket, tennis, piscine, salle de sport. Des compétitions inter-universitaires. Le campus vit.",
  },
  {
    icon: "Home",
    title: "Tu vis sur campus",
    text: "Chambre, wifi, resto, bibliothèque ouverte tard — tout à 5 minutes à pied. Pas de trajet, pas de perte de temps.",
  },
  {
    icon: "Heart",
    title: "Ta communauté",
    text: "4,500+ étudiants. 30+ nationalités. Des amitiés qui durent toute la vie. Tu fais partie d'un réseau avant même d'être diplômé.",
  },
];

export default function CampusLife() {
  return (
    <section id="campus-life" className="py-14 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-[30px] lg:text-[40px] font-bold text-aui-text-dark mb-3 leading-tight"
        >
          Ifrane, c'est pas ce que tu crois
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-aui-text-muted text-lg max-w-3xl mb-10"
        >
          Un campus où tu vis, tu études, tu crées, tu compétites — et tu
          rentres chez toi avec des souvenirs que personne ne pourra te
          reprendre.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {blocks.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-7 border border-aui-border"
            >
              <div className="mb-4">{iconMap[b.icon]}</div>
              <h3 className="font-display text-[22px] font-semibold text-aui-text-dark mb-2">
                {b.title}
              </h3>
              <p className="text-aui-text-muted text-sm leading-relaxed">
                {b.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
