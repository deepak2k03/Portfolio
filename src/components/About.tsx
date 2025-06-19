import React from 'react';
import { motion } from 'framer-motion';
import Terminal from './Terminal';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`${
              darkMode ? 'glass-effect-dark' : 'glass-effect'
            } p-8 rounded-2xl`}
          >
            <h3 className="text-2xl font-bold mb-6 text-neon-blue">
              My Journey
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="leading-relaxed text-zinc-800 dark:text-gray-300">
                I'm Deepak Singh, a passionate and results-driven Information Technology undergraduate 
                at Kamla Nehru Institute of Technology, Sultanpur (Batch of 2026), with a strong foundation 
                in data structures, algorithms, and web development.
              </p>
              {/* <p className="leading-relaxed text-zinc-800 dark:text-gray-300">
                With hands-on experience in building scalable and performance-optimized projects like a Code
                Complexity Analyzer, Online IDE, and a REST Countries Explorer, I specialize in creating practical 
                tech solutions with real-world impact.
              </p> */}
              <p className="leading-relaxed text-zinc-800 dark:text-gray-300">
                When I'm not coding, you'll find me contributing to open-source projects, 
                mentoring aspiring developers, or exploring the latest trends in AI and 
                machine learning.
              </p>
              <p className="leading-relaxed text-zinc-800 dark:text-gray-300">
                I’m also a competitive programmer with 
                a 4-star rating on CodeChef, and a Specialist rating on Codeforces.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-blue mb-2">20+</div>
                <div className="text-sm text-gray-400">Projects Made</div>
              </div>
              {/* <div className="text-center">
                <div className="text-3xl font-bold text-neon-blue mb-2">5+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div> */}
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-blue mb-2">10+</div>
                <div className="text-sm text-gray-400">Technologies</div>
              </div>
              {/* <div className="text-center">
                <div className="text-3xl font-bold text-neon-blue mb-2">100%</div>
                <div className="text-sm text-gray-400">Client Satisfaction</div>
              </div> */}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Terminal darkMode={darkMode} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;