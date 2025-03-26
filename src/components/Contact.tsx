import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9976808023',
      href: 'tel:+919976808023'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'magisha.g2022cse@sece.ac.in',
      href: 'mailto:magisha.g2022cse@sece.ac.in'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      href: 'https://www.linkedin.com/in/magisha-g-23487b259/'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'View Projects',
      href: 'https://github.com/magishagopal'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-gray-900 dark:to-rose-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
          Get in Touch
        </h2>

        <div
          ref={ref}
          className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.a
                key={index}
                href={info.href}
                target={info.icon === Linkedin || info.icon === Github ? '_blank' : undefined}
                rel={info.icon === Linkedin || info.icon === Github ? 'noopener noreferrer' : undefined}
                initial={{ y: 50, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-pink-100 dark:bg-pink-900/30 rounded-lg group-hover:bg-pink-200 dark:group-hover:bg-pink-900/50 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400">{info.label}</h3>
                    <p className="text-lg font-medium text-gray-800 dark:text-white">{info.value}</p>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;