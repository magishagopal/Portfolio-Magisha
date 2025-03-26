import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Download, Github, Linkedin } from 'lucide-react';
import { Link } from 'react-scroll';
import myPhoto from "../assets/port-pic.jpg";

const Hero = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500 dark:from-violet-900 dark:via-purple-900 dark:to-fuchsia-900"
    >
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.2),rgba(255,255,255,0))]" />
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Image Section */}
          <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
              <img 
                src={myPhoto}
                alt="Magisha G"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
          </motion.div>

          {/* Text Section */}
          <div className="text-center md:text-left">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-6 text-white"
            >
              Magisha G
            </motion.h1>

            <TypeAnimation
              sequence={[
                'Computer Science Engineering student',
                2000,
                'Full Stack Developer',
                2000,
                'UI/UX Designer',
                2000,
              ]}
              wrapper="h2"
              speed={50}
              className="text-xl md:text-2xl text-white/90 mb-8"
              repeat={Infinity}
            />

            {/* Resume Download */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center md:justify-start gap-4 mb-8"
            >
              <a 
                href="https://drive.google.com/drive/folders/12tRoF0oqZClTLjHDyCgM4a9lrgKYmFZF?usp=sharing" 
                download
                className="flex items-center gap-2 px-6 py-3 bg-white text-purple-600 rounded-full hover:bg-purple-50 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                <Download size={20} />
                Download Resume
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center md:justify-start gap-4"
            >
              <a 
                href="https://www.linkedin.com/in/magisha-g-23487b259/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/20"
              >
                <Linkedin className="w-6 h-6 text-white" />
              </a>
              <a 
                href="https://github.com/magishagopal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white/10 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/20"
              >
                <Github className="w-6 h-6 text-white" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <Link 
          to="about" 
          smooth={true} 
          duration={500} 
          className="animate-bounce cursor-pointer"
        >
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center items-start p-1"
          >
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-white/50 rounded-full"
            />
          </motion.div>
        </Link>
      </div>
    </motion.section>
  );
};

export default Hero;
