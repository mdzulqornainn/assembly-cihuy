import { motion } from "framer-motion";
import frame from "../assets/gallery-frame.svg";
import { galleryItems } from "../data/Gallery.js";

export default function Gallery() {
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="gallery" className="bg-[#a9c8e9] py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 font-press">
        <div className="flex items-center justify-between gap-4 mb-8">
          <p className="text-lg sm:text-xl tracking-[0.2em] text-slate-900">
            OUR
          </p>
          <p className="text-lg sm:text-xl tracking-[0.2em] text-slate-900">
            MOMENTS
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {galleryItems.map((itemData) => (
            <motion.div
              key={itemData.id}
              className="relative w-full aspect-[540/380]"
              variants={item}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
            >
              <img
                src={itemData.img}
                alt={itemData.alt}
                loading="lazy"
                className="absolute inset-[9%] w-[82%] h-[82%] object-cover rounded-[10px]"
              />
              <img
                src={frame}
                alt=""
                aria-hidden="true"
                className="relative w-full h-full select-none pointer-events-none"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
