import { motion } from "framer-motion";
import Team from "../components/Team";

import ikbal from "../assets/profile/8.jpg";
import rose from "../assets/profile/12.jpg";

export default function Profile() {
  return (
    <section className="min-h-screen bg-slate-50 pt-20 sm:pt-24 pb-12 sm:pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 font-press">
        {/* LABEL */}
        <motion.p
          className="text-xs sm:text-sm uppercase tracking-[0.25em] sm:tracking-[0.3em] text-slate-500"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Assembly
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
          className="mt-4 text-xs sm:text-xs md:text-sm text-slate-600 leading-7"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Kami dari
          <span className="font-bold text-blue-400"> Assembly </span>
          mengucapkan terima kasih banyak untuk Kak Eggball dan Kak Rose atas
          arahan, waktu, dan kesabarannya selama ospek. Banyak pelajaran dan
          pengalaman berharga yang kami dapatkan. Semoga kakak-kakak selalu
          sukses ke depannya. Terima kasih! 🙌✨
          <br />
          <br />
          <span className="italic text-xs opacity-65">from Assembly(GPT)</span>
        </motion.p>

        {/* CARDS */}
        <motion.div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            {
              title: "Kak Eggball",
              profile: ikbal,
            },
            {
              title: "Kak Rose",
              profile: rose,
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-sm"
              whileHover={{
                scale: 1.03,
                y: -6,
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              <h2 className="text-lg font-semibold text-slate-900">
                {item.title}
              </h2>
              <img
                src={item.profile}
                alt={item.title}
                className="mt-3 w-full h-48 object-cover rounded-lg"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Team />
    </section>
  );
}
