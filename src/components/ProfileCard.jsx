import { motion } from "framer-motion";
import { useId } from "react";
import Frame from "../assets/profile-frame.svg";

export default function ProfileCard({ name, img }) {
  const clipId = useId();

  return (
    <motion.div
      className="flex flex-col items-center gap-3 cursor-pointer"
      // ✨ FEEL BUTTON
      whileHover={{
        scale: 1.08,
        y: -6,
      }}
      whileTap={{
        scale: 0.95,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 18,
      }}
    >
      <svg
        viewBox="0 0 174.5 233.7"
        className="w-24 h-36 sm:w-32 sm:h-44 md:w-36 md:h-48 lg:w-40 lg:h-52 drop-shadow-lg"
      >
        <defs>
          {/* AREA FOTO (UNIK & AMAN) */}
          <clipPath id={clipId}>
            <rect x="10" y="40" width="154.5" height="165" rx="8" />
          </clipPath>
        </defs>

        {/* FOTO */}
        <image
          href={img}
          width="174.5"
          height="233.7"
          clipPath={`url(#${clipId})`}
          preserveAspectRatio="xMidYMid slice"
        />

        {/* FRAME */}
        <image href={Frame} width="174.5" height="233.7" />
      </svg>

      <p className="text-sm text-center font-medium">{name}</p>
    </motion.div>
  );
}
