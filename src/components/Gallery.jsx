import { motion } from "framer-motion";
import frame from "../assets/gallery-frame.svg";
import { galleryItems } from "../data/Gallery.js";

export default function Gallery() {
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const item = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <section id="gallery" className="bg-slate-50 py-20 pt-25">
      <div className="max-w-6xl mx-auto px-6">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-24 max-w-4xl mx-auto font-press"
        >
          {/* ===== MOBILE VERSION ===== */}
          <div className="sm:hidden text-center">
            <h2 className="text-4xl tracking-[0.3em] mb-10 text-black">
              OUR MOMENT
            </h2>

            <div className="space-y-10 flex flex-col items-center">
              {[0, 1].map((i) => (
                <div
                  key={i}
                  className="relative w-full max-w-[360px] aspect-[540/380]"
                >
                  <img
                    src={galleryItems[i]?.img}
                    alt=""
                    className="absolute top-[8%] left-[8%] w-[84%] h-[84%] object-cover rounded-xl"
                  />
                  <img
                    src={frame}
                    alt=""
                    className="relative w-full h-full pointer-events-none select-none drop-shadow-[6px_6px_0px_rgba(0,0,0,0.3)]"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ===== DESKTOP VERSION ===== */}
          <div className="hidden sm:grid grid-cols-2 gap-10 items-center">
            {/* OUR */}
            <p className="text-4xl tracking-[0.3em] text-black justify-self-center">
              OUR
            </p>

            {/* Frame 1 */}
            <div className="relative w-full max-w-[360px] justify-self-end aspect-[540/380]">
              <img
                src={galleryItems[0]?.img}
                alt=""
                className="absolute top-[8%] left-[8%] w-[84%] h-[84%] object-cover rounded-xl"
              />
              <img
                src={frame}
                alt=""
                className="relative w-full h-full pointer-events-none select-none drop-shadow-[6px_6px_0px_rgba(0,0,0,0.3)]"
              />
            </div>

            {/* Frame 2 */}
            <div className="relative w-full max-w-[360px] aspect-[540/380]">
              <img
                src={galleryItems[1]?.img}
                alt=""
                className="absolute top-[8%] left-[8%] w-[84%] h-[84%] object-cover rounded-xl"
              />
              <img
                src={frame}
                alt=""
                className="relative w-full h-full pointer-events-none select-none drop-shadow-[6px_6px_0px_rgba(0,0,0,0.3)]"
              />
            </div>

            {/* MOMENT */}
            <p className="text-4xl tracking-[0.3em] text-black text-right justify-self-center ">
              MOMENT
            </p>
          </div>
        </motion.div>

        {/* ================= GRID GALLERY ================= */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {galleryItems.map((data) => (
            <motion.div
              key={data.id}
              variants={item}
              whileHover={{ y: -8, scale: 1.04 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className="relative w-full aspect-[540/380]"
            >
              <img
                src={data.img}
                alt={data.alt}
                loading="lazy"
                className="absolute top-[8%] left-[8%] 
                           w-[84%] h-[84%] 
                           object-cover rounded-xl"
              />

              <img
                src={frame}
                alt=""
                aria-hidden="true"
                className="relative w-full h-full pointer-events-none select-none drop-shadow-[6px_6px_0px_rgba(0,0,0,0.3)]"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
