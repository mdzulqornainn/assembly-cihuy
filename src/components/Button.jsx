import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Button({ href, text, icon, target }) {
  const baseClass =
    "relative z-50 inline-flex items-center justify-center gap-2 h-11 sm:h-12 px-4 sm:px-6 rounded-3xl border-[3px] border-amber-400 text-white text-sm sm:text-base font-semibold hover:bg-white hover:text-amber-700 transition mb-1";

  const iconClass = "w-9 h-9 shrink-0 mx-1";

  const motionProps = {
    whileHover: { scale: 1.08 },
    whileTap: { scale: 0.95 },
  };

  //  external link
  if (href.startsWith("http")) {
    return (
      <motion.a
        href={href}
        target={target}
        className={baseClass}
        {...motionProps}
      >
        {icon && <img src={icon} className={iconClass} />}
        {text}
      </motion.a>
    );
  }

  //  internal route (React Router)
  return (
    <motion.div {...motionProps}>
      <Link to={href} className={baseClass}>
        {icon && <img src={icon} className={iconClass} />}
        {text}
      </Link>
    </motion.div>
  );
}
