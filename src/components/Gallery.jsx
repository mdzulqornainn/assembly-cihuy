import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { galleryItems } from "../data/Gallery.js";

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [autoPlay, setAutoPlay] = useState(false);
  const intervalRef = useRef(null);

  const selected = selectedIndex !== null ? galleryItems[selectedIndex] : null;

  const nextImage = () => {
    setSelectedIndex((prev) =>
      prev === galleryItems.length - 1 ? 0 : prev + 1,
    );
  };

  const prevImage = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? galleryItems.length - 1 : prev - 1,
    );
  };

  // Keyboard control
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === " ") setAutoPlay((prev) => !prev);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // Auto slideshow
  useEffect(() => {
    if (autoPlay && selectedIndex !== null) {
      intervalRef.current = setInterval(nextImage, 2500);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [autoPlay, selectedIndex]);

  return (
    <section id="gallery" className="bg-slate-50 py-20 pt-25">
      <div className="max-w-6xl mx-auto px-6">
        {/* ================= HEADER TETAP ================= */}
        <div className="mb-20 text-center font-press">
          <h2 className="text-4xl tracking-[0.3em] text-black">OUR MOMENTS</h2>
        </div>

        {/* ================= CINEMATIC MASONRY ================= */}
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-6 space-y-6">
          {galleryItems.map((data, index) => (
            <motion.div
              key={data.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ scale: 1.03 }}
              className="relative break-inside-avoid overflow-hidden rounded-2xl cursor-pointer group"
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={data.img}
                alt={data.alt}
                loading="lazy"
                className="w-full h-auto object-cover rounded-2xl transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl flex items-end">
                <p className="text-white translate-y-6 group-hover:translate-y-0 transition duration-500 p-4 text-sm">
                  {data.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ================= MODAL CINEMATIC ================= */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50"
            onClick={() => setSelectedIndex(null)}
          >
            <div
              className="relative flex items-center justify-center w-full h-full"
              onClick={(e) => e.stopPropagation()}
              onMouseEnter={() => setAutoPlay(false)}
            >
              {/* Prev */}
              <button
                onClick={prevImage}
                className="absolute left-6 text-white text-5xl hover:scale-125 transition"
              >
                ‹
              </button>

              {/* Image */}
              <motion.img
                key={selected.img}
                src={selected.img}
                alt={selected.alt}
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.85, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="max-h-[85vh] max-w-[85vw] rounded-2xl shadow-2xl"
              />

              {/* Next */}
              <button
                onClick={nextImage}
                className="absolute right-6 text-white text-5xl hover:scale-125 transition"
              >
                ›
              </button>

              {/* Close */}
              <button
                onClick={() => setSelectedIndex(null)}
                className="absolute top-6 right-6 text-white text-3xl hover:rotate-90 transition"
              >
                ✕
              </button>

              {/* Caption + Counter */}
              <div className="absolute bottom-10 text-center text-white text-sm tracking-wide">
                <p>{selected.alt}</p>
                <p className="mt-2 opacity-70">
                  {selectedIndex + 1} / {galleryItems.length}
                </p>

                {/* AutoPlay Button */}
                <button
                  onClick={() => setAutoPlay((prev) => !prev)}
                  className="mt-4 px-4 py-1 border border-white rounded-full text-xs hover:bg-white hover:text-black transition"
                >
                  {autoPlay ? "Pause Slideshow" : "Start Slideshow"}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
