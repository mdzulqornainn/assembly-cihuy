import { motion } from "framer-motion";
import ProfileCard from "./ProfileCard.jsx";
import { profiles } from "../data/Profiles.js";

export default function Team() {
  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <section
      id="members"
      className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 font-press"
    >
      {/* TITLE — Assembly Style */}
      <motion.h2
        className="text-xl sm:text-2xl font-bold text-center mb-8 sm:mb-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Our Member
      </motion.h2>

      {/* GRID */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 sm:gap-8"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {profiles.map((person) => (
          <motion.div key={person.id} variants={item}>
            <ProfileCard name={person.name} img={person.img} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
