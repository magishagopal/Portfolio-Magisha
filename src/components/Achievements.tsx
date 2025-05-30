import React from "react";
import { motion } from "framer-motion";

const Achievements = () => {
  const platforms = [
    {
      name: "LeetCode",
      description: "200+ problems solved | Ranked 437,185 | 7+ contests | Max rating 1,376",
      link: "https://leetcode.com/u/Magisha_Gopal/",
    },
    {
      name: "CodeChef",
      description: "160+ problems solved | Max Rating - 1039 | 6+ contests | 1 Star Code",
      link: "https://www.codechef.com/users/magisha",
    },
    {
      name: "HackerRank",
      description: "4 silver star in Java | 2 star in SQL | 3 silver star in C",
      link: "https://www.hackerrank.com/profile/magisha_g2022cse",
    },
  ];

  const workshops = [
    "Blockchain Technology Workshop @ SECE",
    "Intel One API Workshop by Intel @ SECE",
  ];

  const hackathons = [
    "ELECT-ERA'24 - Top 10 @ Electroblitz Hackathon (CIT)",
    "Hackfest'24 - Top 15 @ Sustainability Hackathon (SAP)",
  ];

  const boxVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-12 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-white via-gray-100 to-gray-200 dark:from-[#0f0c29] dark:via-[#302b63] dark:to-[#24243e] transition-all duration-500">
      <h2 className="text-4xl font-bold text-center text-indigo-700 dark:text-blue-400 mb-12">Achievements</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
        {platforms.map((platform, index) => (
          <motion.div
            key={index}
            variants={boxVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05, rotateX: 3, rotateY: 3 }}
            className="bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-6 shadow-xl transition-all duration-300 flex flex-col justify-between border border-indigo-300 dark:border-indigo-500/30 hover:border-indigo-500 relative group"
            style={{ perspective: 1000 }}
          >
            <motion.div className="transition-transform duration-300">
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{platform.name}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{platform.description}</p>
              <motion.a
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-indigo-600 dark:text-indigo-400 group-hover:text-indigo-800 dark:group-hover:text-indigo-300 relative"
                whileHover={{ x: 2 }}
              >
                View My Profile →
                <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 group-hover:w-full transition-all duration-500"></span>
              </motion.a>
            </motion.div>
            <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-indigo-300 dark:border-indigo-500 opacity-0 group-hover:opacity-40 pointer-events-none"
              animate={{ opacity: [0, 0.2, 0.4, 0.2, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[{ title: "Workshops", items: workshops }, { title: "Hackathons", items: hackathons }].map((section, index) => (
          <motion.div
            key={index}
            variants={boxVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05, rotateX: 3, rotateY: 3 }}
            className="bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-6 shadow-xl transition-all duration-300 border border-indigo-300 dark:border-indigo-500/30 hover:border-indigo-500 relative group"
            style={{ perspective: 1000 }}
          >
            <motion.div className="transition-transform duration-300">
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">{section.title}</h3>
              <ul className="text-gray-600 dark:text-gray-400 space-y-2">
                {section.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-indigo-300 dark:border-indigo-500 opacity-0 group-hover:opacity-40 pointer-events-none"
              animate={{ opacity: [0, 0.2, 0.4, 0.2, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
