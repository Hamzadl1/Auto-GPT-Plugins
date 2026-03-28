import { motion } from "framer-motion";
import { GALLERY_ITEMS } from "../../lib/constants";

const galleryItem = {
  initial: { opacity: 0, scale: 0.92 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
};

export default function VisualGallery() {
  return (
    <section className="py-14 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 auto-rows-[180px] lg:auto-rows-[220px]">
          {GALLERY_ITEMS.map((item, i) => (
            <motion.div
              key={i}
              className={`${item.span} relative rounded-2xl overflow-hidden group cursor-pointer`}
              {...galleryItem}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
            >
              <div className="absolute inset-0 bg-aui-cream flex items-center justify-center text-aui-text-muted text-sm p-4 text-center">
                {item.alt}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <span className="text-white text-sm font-medium">
                  {item.caption}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
