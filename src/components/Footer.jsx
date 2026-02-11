import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";

const MotionHeart = motion(Heart);

export default function Footer() {
  return (
    <footer className="bg-black text-white py-4 ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 text-center space-y-3"
      >
        {/* Made with love */}
        <p className="text-sm tracking-wide flex items-center justify-center gap-2">
          Made with
          <MotionHeart
            className="w-4 h-4 text-red-500"
            fill="currentColor"
            animate={{ scale: [1, 1.4, 0.95, 1] }}
            transition={{
              duration: 0.9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          by{" "}
          <a
            className="font-semibold hover:underline cursor-alias"
            target="_blank"
            href="https://github.com/mdzulqornainn"
          >
            DzenMori / Nain
          </a>
        </p>

        {/* Tech Stack Logos */}
        <div className="flex items-center justify-center gap-6">
          {/* React Infinity */}
          <motion.img
            src={reactLogo}
            alt="React"
            className="w-6 h-6"
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 8,
              ease: "linear",
            }}
            style={{ filter: "drop-shadow(0 0 6px #61dafb)" }}
          />

          {/* Vite Hover */}
          <motion.img
            src={viteLogo}
            alt="Vite"
            className="w-6 h-6 cursor-pointer"
            whileHover={{ scale: 1.15, rotate: 12 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 15,
            }}
            style={{ filter: "drop-shadow(0 0 6px #a855f7)" }}
          />
        </div>

        {/* Copyright */}
        <p className="text-xs opacity-60">
          © {new Date().getFullYear()} Assembly CIHuy
        </p>
      </motion.div>
    </footer>
  );
}
