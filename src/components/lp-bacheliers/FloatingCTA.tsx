import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function FloatingCTA() {
  const { ref, inView: heroInView } = useInView({ threshold: 0.1 });

  return (
    <>
      {/* Invisible sentinel attached to the hero */}
      <div ref={ref} className="absolute top-0 left-0 w-0 h-0" id="hero-sentinel" />

      <motion.div
        className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-aui-green-dark p-4"
        style={{ paddingBottom: "calc(1rem + env(safe-area-inset-bottom, 0px))" }}
        initial={{ y: 100 }}
        animate={{ y: heroInView ? 100 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <a
          href="#hero"
          className="block w-full bg-white text-aui-green-dark rounded-xl py-3.5 font-bold text-base text-center"
        >
          Je postule — Fall 2026
        </a>
      </motion.div>
    </>
  );
}
