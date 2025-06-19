import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import TypeWriter from './TypeWriter';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleDownloadCV = () => {
    // In a real application, you would have an actual CV file
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1ucmZrzuhgyJZ0PVgSYTVhA9laNlWWLKl/view?usp=drive_link'; // This would be your actual CV file
    link.download = 'Deepak_Singh_Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
          }}
          className="absolute top-20 left-20 w-64 h-64 bg-neon-cyan/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: mousePosition.x * -0.02,
            y: mousePosition.y * -0.02,
          }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="text-lg font-mono text-neon-cyan mb-4 leading-relaxed text-zinc-800 dark:text-gray-300">
              Hello World! I'm
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-neon-cyan to-neon-purple bg-clip-text text-transparent leading-relaxed text-zinc-800 dark:text-gray-300">
              Deepak Singh
            </h1>
            <div className="text-xl md:text-2xl font-mono h-8 mb-8 ">
              <TypeWriter
                words={[
                  "Web Developer",
                  "React Specialist",
                  "Competitive Programmer",
                  "UI/UX Enthusiast",
                  "AI/ML Enthusiast"
                ]}
                darkMode={darkMode}
              />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed
            leading-relaxed text-zinc-800 dark:text-gray-300"
          >
            Crafting digital experiences with cutting-edge technologies. 
            Building the future, one line of code at a time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="cyber-button"
            >
              View My Work
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadCV}
              className="flex items-center space-x-2 px-6 py-3 bg-transparent border-2 border-neon-purple text-neon-purple font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-neon-purple hover:text-black hover:shadow-[0_0_20px_theme(colors.neon.purple)]"
            >
              <Download size={20} />
              <span>Download CV</span>
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center justify-center space-x-6 mb-16"
          >
            {[
              { icon: Github, href: "https://github.com/deepak2k03", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/deepak-singh-1b8590257/", label: "LinkedIn" },
              { icon: Mail, href: "sman59472@gmail.com", label: "Email" }
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:border-neon-cyan hover:bg-neon-cyan/10 transition-all duration-300 hover:animate-pulse-glow"
                aria-label={label}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="cursor-pointer"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <ChevronDown size={32} className="text-neon-cyan" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;