import { motion } from "framer-motion";
import Team from "../components/Team";
import Navbar from "../components/Navbar";

export default function Profile() {
  return (
    <section className="min-h-screen bg-slate-50 pt-20 sm:pt-24 pb-12 sm:pb-16">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 font-press">
        {/* LABEL */}
        <motion.p
          className="text-xs sm:text-sm uppercase tracking-[0.25em] sm:tracking-[0.3em] text-slate-500"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          ; Assembly
        </motion.p>

        {/* TITLE */}
        <motion.h1
          className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900"
          whileHover={{ x: 6 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          Profile Group
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Assembly is a community of passionate individuals who come together to
          share ideas, collaborate on projects, and support each other in their
          personal and professional growth.
        </motion.p>

        {/* CARDS */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            {
              title: "Hehe",
              text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est dolor provident vel rerum ipsum .",
            },
            {
              title: "Hehe",
              text: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est dolor provident vel.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm"
              whileHover={{
                y: -6,
                scale: 1.03,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
            >
              <h2 className="text-lg font-semibold text-slate-900">
                {item.title}
              </h2>
              <p className="mt-2 text-sm text-slate-600">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <Team />
    </section>
  );
}
