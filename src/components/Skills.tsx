import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SkillsCube from './SkillsCube';

interface SkillsProps {
  darkMode: boolean;
}

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'other';
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const skills: Skill[] = [
    { name: 'HTML', level: 95, category: 'frontend' },
    { name: 'Tailwind CSS', level: 90, category: 'frontend' },
    { name: 'JavaScript', level: 90, category: 'backend' },
    { name: 'React', level: 90, category: 'frontend' },
    // { name: 'Next.js', level: 85, category: 'frontend' },
    // { name: 'Node.js', level: 90, category: 'backend' },
    // { name: 'Express.js', level: 85, category: 'backend' },
    // { name: 'MongoDB', level: 85, category: 'database' },
    { name: 'Redux', level: 70, category: 'database' },
    // { name: 'TypeScript', level: 90, category: 'frontend' },
    { name: 'C++', level: 95, category: 'backend' },
    { name: 'Python', level: 90, category: 'frontend' },
    // { name: 'PostgreSQL', level: 80, category: 'database' },
    // { name: 'Docker', level: 85, category: 'tools' },
    { name: 'Git', level: 80, category: 'tools' },
    { name: 'GitHub', level: 80, category: 'tools' },
    { name: 'Figma', level: 75, category: 'other' },
    { name: 'AI/ML', level: 65, category: 'other' },
  ];

  const categories = [
    { id: 'all', name: 'All', color: 'neon-cyan' },
    { id: 'frontend', name: 'Frontend', color: 'neon-purple' },
    { id: 'backend', name: 'Backend', color: 'neon-green' },
    { id: 'database', name: 'Database', color: 'neon-pink' },
    { id: 'tools', name: 'Tools', color: 'neon-blue' },
    { id: 'other', name: 'Other', color: 'yellow-400' },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <SkillsCube darkMode={darkMode} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? `bg-${category.color}/20 text-${category.color} border-${category.color} border`
                      : darkMode
                      ? 'bg-white/10 text-gray-300 hover:bg-white/20'
                      : 'bg-black/10 text-gray-700 hover:bg-black/20'
                  }`}
                >
                  {category.name}
                </motion.button>
              ))}
            </div>

            {/* Skills List */}
            <div className="space-y-4">
              {filteredSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`${
                    darkMode ? 'glass-effect-dark' : 'glass-effect'
                  } p-4 rounded-lg hover:scale-105 transition-transform duration-300`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-lg">{skill.name}</span>
                    <span className="text-neon-cyan font-mono">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;