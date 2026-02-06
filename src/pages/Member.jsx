import { motion } from "framer-motion";
import Team from "../components/Team";
import Navbar from "../components/Navbar";

export default function Profile() {
  return (
    <section className="min-h-screen bg-slate-50 pt-24 pb-16">
      <Navbar />

      <div className="max-w-3xl mx-auto px-6 font-press">
        {/* LABEL */}
        <motion.p
          className="text-sm uppercase tracking-[0.3em] text-slate-500"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Assembly
        </motion.p>

        {/* TITLE */}
        <motion.h1
          className="mt-3 text-3xl md:text-4xl font-bold text-slate-900"
          whileHover={{ x: 6 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          Profile Group
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est dolor
          provident vel rerum ipsum veritatis molestias libero illo eos
          aspernatur, laborum porro laboriosam ipsam, illum saepe nisi neque aut
          quos.
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
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
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
