import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const categories = [
  {
    title: "Languages",
    skills: ["C", "C++", "Java", "JavaScript", "Python", "HTML", "CSS"],
  },
  {
    title: "Libraries / Frameworks",
    skills: ["ReactJS", "ExpressJS", "Tailwind CSS", "NodeJS", "Matplotlib"],
  },
  {
    title: "Tools / Platforms",
    skills: [
      "GitHub",
      "Git",
      "VS Code",
      "IntelliJ IDEA",
      "Figma",
      "Linux",
      "Canva",
      "Adobe XD",
    ],
  },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB"],
  },
];

const Skills = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 px-8 py-16">
      <h2 className="text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        Technical Skills
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-7xl">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            whileHover={{
              y: -5,
              boxShadow: "0px 0px 30px rgba(168, 85, 247, 0.3)",
            }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl transition-all duration-300"
          >
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              {category.title}
            </h3>
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="flex flex-wrap gap-4"
            >
              {category.skills.map((skill) => (
                <motion.span
                  variants={item}
                  whileHover={{
                    scale: 1.15,
                    boxShadow: "0px 0px 15px rgba(168, 85, 247, 0.7)",
                    rotate: 1,
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="cursor-pointer px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium text-base transition-all"
                  key={skill}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
