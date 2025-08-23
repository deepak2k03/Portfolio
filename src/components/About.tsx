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
              Competitive Programming Profiles
            </h3>
            <div className="space-y-4 text-gray-300">
  <div className="grid grid-cols-[auto,1fr] gap-6 items-center">
    {/* CodeChef */}
    <div className="text-lg font-semibold text-zinc-800 dark:text-gray-300">
      ⭐ Rated 4 Stars at CodeChef
    </div>
    <a
      href="https://www.codechef.com/users/deepak2k03"
      target="_blank"
      rel="noopener noreferrer"
      className="text-neon-cyan hover:underline font-medium"
    >
      View Profile
    </a>

    {/* Codeforces */}
    <div className="text-lg font-semibold text-zinc-800 dark:text-gray-300">
      🎯 Rated Specialist at Codeforces
    </div>
    <a
      href="https://codeforces.com/profile/deepak2k03"
      target="_blank"
      rel="noopener noreferrer"
      className="text-neon-cyan hover:underline font-medium"
    >
      View Profile
    </a>

    {/* LeetCode */}
    <div className="text-lg font-semibold text-zinc-800 dark:text-gray-300">
      🧩 Rated Knight at LeetCode
    </div>
    <a
      href="https://leetcode.com/deepak2k03"
      target="_blank"
      rel="noopener noreferrer"
      className="text-neon-cyan hover:underline font-medium"
    >
      View Profile
    </a>

    {/* AtCoder */}
    <div className="text-lg font-semibold text-zinc-800 dark:text-gray-300">
      🏆 Rated 384 at Atcoder
    </div>
    <a
      href="https://atcoder.jp/users/deepak2k03"
      target="_blank"
      rel="noopener noreferrer"
      className="text-neon-cyan hover:underline font-medium"
    >
      View Profile
    </a>
    <div className="text-lg font-semibold text-zinc-800 dark:text-gray-300">
      🏆 Total Contests Participated
    </div>
    <p>170 and Counting</p>
  </div>
</div>


            <div className="mt-8 grid grid-cols-2 gap-5">
              <div className="text-center">
                {/* <div className="text-3xl font-bold text-neon-blue mb-2">20+</div> */}
                {/* <div className="text-sm text-gray-400">Projects Made</div> */}
              </div>
              {/* <div className="text-center">
                <div className="text-3xl font-bold text-neon-blue mb-2">5+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div> */}
              <div className="text-center">
                {/* <div className="text-3xl font-bold text-neon-blue mb-2">10+</div> */}
                {/* <div className="text-sm text-gray-400">Technologies</div> */}
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