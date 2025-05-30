import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-900 dark:to-purple-900">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I'm a Computer Science Engineering student with a passion for creating innovative digital solutions. My expertise spans Full Stack Development and UI/UX Design, allowing me to build comprehensive web applications that are both functional and user-friendly.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Currently pursuing my B.E in Computer Science Engineering at Sri Eshwar College of Engineering with a CGPA of 8.17, I combine academic excellence with practical experience through various internships and projects.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;