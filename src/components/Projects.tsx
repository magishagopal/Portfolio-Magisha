import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Share Meal',
    description: 'A web-based food donation app using MERN stack, reducing food waste by 15% and increasing distribution efficiency by 25%. Enhanced donor-recipient matching rates by 25%.',
    image: 'https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?auto=format&fit=crop&w=800&q=80',
    tech: ['Express.js', 'React.js', 'MongoDB', 'Node.js', 'Tailwind CSS'],
    github: 'https://github.com/magishagopal/ShareMeal.git'
  },
  {
    title: 'Chat Application',
    description: 'A real-time chat application with secure JWT authentication, resulting in a 20% increase in user retention through improved login and signup flows.',
    image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?auto=format&fit=crop&w=800&q=80',
    tech: ['Express.js', 'React.js', 'MongoDB', 'Node.js', 'Tailwind CSS'],
    github: 'https://github.com/magishagopal/Chat_Application.git'
  },
  {
    title: 'Game On',
    description: 'A sports event management system using JavaFX, which optimized event data handling efficiency by 25% and improved user experience by 30%.',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80',
    tech: ['JavaFX', 'Scene Builder', 'MySQL'],
    github: 'https://github.com/yourusername/game-on'
  },
  {
    title: 'OrganDonate',
    description: 'A platform connecting organ donors and recipients, enhancing the donation process with improved matching algorithms and secure medical data handling.',
    image: 'https://plus.unsplash.com/premium_photo-1682310180665-40d421dea31f?q=80&w=2112&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    tech: ['React.js', 'Express.js', 'Node.js', 'MongoDB', 'Material UI'],
    github: 'https://github.com/yourusername/organdonate'
  },
  {
    title: 'FarmConnect',
    description: 'A direct marketplace for farmers and consumers with an integrated AI model to predict price trends and optimize selling time for farmers.',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Python AI Model'],
    github: 'https://github.com/yourusername/farmconnect'
  }
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-purple-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div
          ref={ref}
          className="flex space-x-8 overflow-x-auto pb-4"
          style={{
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none", // IE & Edge
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="min-w-[300px] md:min-w-[350px] lg:min-w-[400px] group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <div className="flex gap-3 justify-end">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300"
                        >
                          <Github className="w-5 h-5 text-white" />
                        </a>
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300"
                          >
                            <ExternalLink className="w-5 h-5 text-white" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
