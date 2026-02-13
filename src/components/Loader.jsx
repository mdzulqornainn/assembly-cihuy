import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import pixelCharacter from "../assets/char.svg";

export default function GameLoading({ onFinish }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onFinish();
          }, 500);
          return 100;
        }
        return prev + 10;
      });
    }, 300);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 bg-white flex font-press flex-col items-center justify-center overflow-hidden">
      {/* Character Jump */}
      <motion.img
        src={pixelCharacter}
        alt="pixel character"
        className="w-20 mb-6"
        animate={{ y: [0, -20, 0] }}
        transition={{
          repeat: Infinity,
          duration: 0.6,
          ease: "easeInOut",
        }}
      />

      {/* Text */}
      <h1 className="text-blue-600 text-2xl font-mono tracking-wider mb-8 animate-pulse">
        Tunggu bentar yaa....
      </h1>

      <div className="flex gap-2 mb-6">
        {Array.from({ length: 10 }).map((_, index) => (
          <motion.div
            key={index}
            className="w-6 h-6"
            style={{
              backgroundColor: progress / 10 > index ? "#facc15" : "#1f2937",
            }}
            animate={progress / 10 > index ? { scale: [1, 1.2, 1] } : {}}
            transition={{ duration: 0.2 }}
          />
        ))}
      </div>

      {/* Persentase */}
      <motion.p
        className="text-black  text-lg"
        key={progress}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
      >
        {progress}%
      </motion.p>
    </div>
  );
}
