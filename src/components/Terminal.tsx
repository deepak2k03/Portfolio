import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon, Minimize2, Maximize2, X } from 'lucide-react';

interface TerminalProps {
  darkMode: boolean;
}

const Terminal: React.FC<TerminalProps> = ({ darkMode }) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [isMinimized, setIsMinimized] = useState(false);

  const commands = [
    { command: 'whoami', output: 'Deepak Singh - Full Stack Developer' },
    { command: 'cat skills.txt', output: 'React, Node.js, TypeScript, Python, MongoDB' },
    { command: 'cat interests.txt', output: 'AI/ML, Open Source, Mentoring, Innovation' },
    { command: 'cat motto.txt', output: '"Code is poetry, and every bug is a haiku waiting to be fixed."' },
    { command: 'pwd', output: '/home/alex/portfolio' },
    { command: 'ls -la', output: 'drwxr-xr-x  projects/\ndrwxr-xr-x  skills/\n-rw-r--r--  contact.md' },
    { command: 'Extracirricular', output: 'Hackbyte 3.0 [Participant]/\nIIT Jabalpur/\n-rw-r--r--  contact.md' },
  ];

  useEffect(() => {
    if (currentLine < commands.length) {
      const timer = setTimeout(() => {
        setCurrentLine(prev => prev + 1);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [currentLine, commands.length]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`${
        darkMode ? 'bg-gray-900/90' : 'bg-black/90'
      } backdrop-blur-md rounded-lg overflow-hidden shadow-2xl border border-neon-cyan/30 ${
        isMinimized ? 'h-12' : 'h-96'
      } transition-all duration-300`}
    >
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-gray-800/80 border-b border-neon-cyan/30">
        <div className="flex items-center space-x-2">
          <TerminalIcon size={16} className="text-neon-cyan" />
          <span className="text-sm font-mono text-neon-cyan">alex@portfolio:~$</span>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-400 transition-colors"
          />
          <button className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-400 transition-colors" />
          <button className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-400 transition-colors" />
        </div>
      </div>

      {/* Terminal Content */}
      {!isMinimized && (
        <div className="p-4 h-full overflow-y-auto font-mono text-sm ">
          <div className="text-neon-green mb-2">
            Welcome to Deepak's Portfolio Terminal v1.0.0
          </div>
          <div className="text-gray-400 mb-4">
            Type 'help' for available commands
          </div>
          
          {commands.slice(0, currentLine).map((cmd, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-3"
            >
              <div className="flex items-center space-x-2 text-neon-cyan">
                <span>$</span>
                <span>{cmd.command}</span>
              </div>
              <div className="text-gray-300 ml-4 mt-1 whitespace-pre-line">
                {cmd.output}
              </div>
            </motion.div>
          ))}
          
          {currentLine < commands.length && (
            <div className="flex items-center space-x-2 text-neon-cyan">
              <span>$</span>
              <span className="animate-pulse">_</span>
            </div>
          )}
        </div>
      )}
    </motion.div>
  );
};

export default Terminal;