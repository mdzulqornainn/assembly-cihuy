import { motion } from "framer-motion";

export default function Button({ href, text, icon, target }) {
  const rel = target === "_blank" ? "noreferrer" : undefined;
  return (
    <motion.a
      href={href}
      target={target}
      rel={rel}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative z-50 inline-flex items-center justify-center gap-2 h-11 sm:h-12 px-4 sm:px-6 rounded-3xl border-[3px] border-amber-400 text-white text-sm sm:text-base font-semibold hover:bg-white hover:text-amber-700 transition mb-1"
    >
      {icon && <img src={icon} className="w-9 h-9 shrink-0 mx-1" />}
      {text && <span>{text}</span>}
    </motion.a>
  );
}
