import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BriefcaseIcon } from 'lucide-react';

const timelineData = [
  {
    title: 'MERN Stack Developer Intern',
    company: 'Better Tomorrow',
    date: '2024',
    description: 'Developed a secure chat application and organ donation system, improving data retrieval time by 20% through optimized backend integration. Gained hands-on experience with JWT authentication, and real-time data handling.',
  },
  {
    title: 'UI/UX Design Intern',
    company: 'CODSOFT',
    date: '2024',
    description: 'Designed multiple high-impact app pages using Figma, focusing on enhancing user experience through optimized user flows. Improved overall usability and accessibility by applying user-centered design principles.',
  }, 
  {
    title: 'Web Developer Intern',
    company: 'Octanet Private Limited',
    date: '2024',
    description: 'Created multiple web solutions, focusing on responsive design and optimal user experience.',
  },
];

const Timeline = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="internships" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Professional Journey
        </h2>
        
        <div ref={ref} className="max-w-4xl mx-auto relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full" />
          
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} mb-12`}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
                  <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">{item.title}</h3>
                  <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">{item.company}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{item.date}</p>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">{item.description}</p>
                </div>
              </div>
              
              <div className="w-12 h-12 absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                <div className="w-8 h-8 bg-white dark:bg-gray-800 rounded-full border-4 border-blue-500 dark:border-indigo-500 flex items-center justify-center">
                  <BriefcaseIcon size={16} className="text-blue-500 dark:text-indigo-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;