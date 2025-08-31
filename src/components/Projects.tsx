import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Filter } from 'lucide-react';
import codeAnalyserImg from '../assets/codeAnalyser.png'; // or '../assets/...' depending on file location
import RESTCountriesImg from '../assets/RESTCountries.png'; // or '../assets/...' depending on file location
import currencyConverterImg from '../assets/currencyConverter.png'; // or '../assets/...' depending on file location
import portfolioImg from '../assets/portfolio.png';
import multimind from '../assets/MultiMind.png';
import skillbridge from '../assets/skillbridge.png';
import vhg from '../assets/vhg.png'

interface ProjectsProps {
  darkMode: boolean;
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  github: string;
  demo: string;
  featured: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects: Project[] = [
    {
      id: 1,
      title: "Skill Bridge",
      description: "A platform for people to exchange skills and build communities.",
      image: skillbridge,
      tags: ["Tailwind", "React", "ExpressJS", "NodeJS", "MongoDB", "Socket.io"],
      category: "fullstack",
      github: "https://github.com/harshitgupta0910/skill_bridge",
      demo: "https://skill-bridge-frontend.onrender.com/dashboard",
      featured: true
    },
    {
      id: 2,
      title: "Virtual Herbal Garden",
      description: "Scalable backend service for mobile applications with microservices architecture, Docker deployment, and CI/CD pipeline.",
      image: vhg,
      tags: ["Node.js", "Docker", "AWS", "MongoDB"],
      category: "fullstack",
      github: "https://github.com",
      demo: "https://demo.com",
      featured: true
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Modern portfolio website with 3D animations, interactive elements, and responsive design. Built with React and Framer Motion.",
      image: portfolioImg,
      tags: ["React", "Framer Motion", "Tailwind", "TypeScript"],
      category: "frontend",
      github: "https://github.com/deepak2k03/Portfolio",
      demo: "https://deepak-singh-2k03-portfolio.netlify.app/",
      featured: true
    },
    {
      id: 4,
      title: "MultiuMind",
      description: "Get Responses From Various AI Models at One Place",
      image: multimind,
      tags: ["React", "NextJS",  "TaliwindCSS", "JavaScript","OpenRouter", "NodeJS"],
      category: "frontend",
      github: "https://github.com/deepak2k03/MultiMind",
      demo: "https://multi-mind-xi.vercel.app/",
      featured: true
    },
    {
      id: 5,
      title: "Code Complexity Analyser",
      description: "Analyse the time and space complexities of code in C, C++, Python and Java",
      image: codeAnalyserImg,
      tags: ["React", "TaliwindCSS", "JavaScript", "CSS"],
      category: "frontend",
      github: "https://github.com",
      demo: "https://code-complexity-analyser.netlify.app/",
      featured: true
    },
    {
      id: 6,
      title: "DSA Sheet",
      description: "A DSA sheet containing various problems to practice for each topic from begiiner to advanced level.",
      image: codeAnalyserImg,
      tags: ["React", "TaliwindCSS", "JavaScript",],
      category: "frontend",
      github: "https://github.com",
      demo: "https://dsa-sheet-by-deepak.netlify.app/",
      featured: true
    },
    {
      id: 7,
      title: "Rest Countries Explorer",
      description: "Explore the flags, languages spoken, Currency, Population, etc if countries.",
      image: RESTCountriesImg,
      tags: ["React", "TaliwindCSS", "JavaScript", "CSS"],
      category: "frontend",
      github: "https://github.com",
      demo: "https://demo.com",
      featured: true
    },
    {
      id: 8,
      title: "Currency Converter",
      description: "Perform the currency coversion between any two currencies in the world",
      image: currencyConverterImg,
      tags: ["React", "TaliwindCSS", "JavaScript", "CSS"],
      category: "frontend",
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false
    },
    
  ];

  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'featured', name: 'Featured', count: projects.filter(p => p.featured).length },
    { id: 'fullstack', name: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
    { id: 'frontend', name: 'Frontend', count: projects.filter(p => p.category === 'frontend').length },
    { id: 'backend', name: 'Backend', count: projects.filter(p => p.category === 'backend').length },
  ];

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'featured') return project.featured;
    return project.category === activeFilter;
  });

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto rounded-full mb-8" />
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for creating innovative solutions.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <Filter className="text-neon-cyan" size={20} />
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-neon-cyan/20 text-neon-cyan border border-neon-cyan'
                  : darkMode
                  ? 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-neon-cyan'
                  : 'bg-black/10 text-gray-700 hover:bg-black/20 hover:text-neon-cyan'
              }`}
            >
              {category.name} ({category.count})
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`group ${
                darkMode ? 'glass-effect-dark' : 'glass-effect'
              } rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-neon-cyan/20 transition-all duration-300`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Project Links */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-neon-cyan/20 transition-colors"
                  >
                    <Github size={18} className="text-white" />
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-neon-cyan/20 transition-colors"
                  >
                    <ExternalLink size={18} className="text-white" />
                  </motion.a>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-neon-cyan/20 text-neon-cyan text-xs font-bold rounded-full backdrop-blur-sm border border-neon-cyan/30">
                      FEATURED
                    </span>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-neon-cyan transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-neon-purple/20 text-neon-purple text-xs font-medium rounded-full border border-neon-purple/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 cyber-button"
          >
            <Github size={20} />
            <span>View All Projects</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;