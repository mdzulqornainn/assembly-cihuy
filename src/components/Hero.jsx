import hero from "../assets/profile.jpg";
import dirt from "../assets/dirt.svg";
import cloud from "../assets/cloud.svg";
import music from "../assets/music.svg";
import camera from "../assets/camera.svg";
import Button from "./Button.jsx";
import Foto from "./ProfileCard.jsx";
import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.25 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const playMusic = () => {
    const audio = document.querySelector("audio");
    if (!audio) return;

    if (audio.paused) {
      audio.muted = false;
      audio.volume = 0.5;
      audio.play().catch(() => {});
    }
  };

  return (
    <section
      className="relative min-h-[100svh] overflow-hidden bg-linear-to-b from-blue-400 to-indigo-600 flex flex-col justify-center items-center text-white font-press px-4 sm:px-6"
      onClick={playMusic}
    >
      {/* Dirt background floating subtle */}
      <motion.img
        src={dirt}
        className="absolute bottom-0 w-[140%] sm:w-full z-0"
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      {/* clouds */}
      <motion.img
        src={cloud}
        className="absolute top-0 mx-6 left-1/2 w-[120%] sm:w-full z-10 pointer-events-none opacity-60 -translate-x-1/2"
        initial={{ opacity: 0.7, x: -50 }}
        animate={{ x: [-50, 10, -50] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content staggered */}
      <motion.div
        className="relative z-50 flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Image */}
        <motion.img
          src={hero}
          className="w-24 sm:w-28 md:w-36 rounded-full mb-6 shadow-lg"
          variants={itemVariants}
        />

        {/* Title */}
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center"
          variants={itemVariants}
        >
          ASSEMBLY GROUP
        </motion.h1>

        {/* Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex gap-3 md:gap-4 mt-2 flex-wrap justify-center"
        >
          <Button href="#gallery" text="Gallery" icon={camera} />
          <Button href="/member" text="Members" />
          <Button
            href="https://open.spotify.com/playlist/7BBQ3REvQUrRb9LFuCXSQN?si=efd4f8318fca4348"
            text="Playlist"
            icon={music}
            target="_blank"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
