import React, { useState } from "react";
import { motion } from "framer-motion";
import { Terminal as TerminalIcon } from "lucide-react";

interface TerminalProps {
  darkMode: boolean;
}

const Terminal: React.FC<TerminalProps> = ({ darkMode }) => {
  const [history, setHistory] = useState<
    { command: string; output: string }[]
  >([]);
  const [input, setInput] = useState("");
  const [isMinimized, setIsMinimized] = useState(false);

  const commands: Record<string, string> = {
    help: `Available commands:
- whoami
- skills
- interests
- motto
- pwd
- ls
- extracurricular
- clear`,
    whoami: "Deepak Singh - Full Stack Developer",
    skills: "React, Node.js, TypeScript, Python, MongoDB",
    interests: "AI/ML, Open Source, Mentoring, Innovation",
    motto: '"Code is poetry, and every bug is a haiku waiting to be fixed."',
    pwd: "/home/deepak/portfolio",
    ls: "projects/  skills/  contact.md",
    extracurricular: "Hackbyte 3.0 [Participant]\nIIT Jabalpur",
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();

    if (trimmed.length === 0) return;

    if (trimmed === "clear") {
      setHistory([]);
    } else {
      const output = commands[trimmed] || `Command not found: ${trimmed}`;
      setHistory((prev) => [...prev, { command: trimmed, output }]);
    }
    setInput("");
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`${
        darkMode ? "bg-gray-900/90" : "bg-black/90"
      } backdrop-blur-md rounded-lg overflow-hidden shadow-2xl border border-neon-cyan/30 ${
        isMinimized ? "h-12" : "h-96"
      } transition-all duration-300 flex flex-col`}
    >
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800/80 border-b border-neon-cyan/30">
        <div className="flex items-center space-x-2">
          <TerminalIcon size={16} className="text-neon-cyan" />
          <span className="text-sm font-mono text-neon-cyan">
            Deepak@portfolio:~$
          </span>
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
        <div className="flex-1 p-4 overflow-y-auto font-mono text-sm text-gray-300">
          <div className="text-neon-green mb-2">
            Welcome to Deepak's Portfolio Terminal v1.0.0
          </div>
          <div className="text-gray-400 mb-4">
            Type <span className="text-neon-cyan">help</span> for available
            commands
          </div>

          {/* Command history */}
          {history.map((entry, i) => (
            <div key={i} className="mb-2">
              <div className="flex items-center space-x-2 text-neon-cyan">
                <span>$</span>
                <span>{entry.command}</span>
              </div>
              <div className="ml-4 whitespace-pre-line">{entry.output}</div>
            </div>
          ))}

          {/* Input line */}
          <form onSubmit={handleCommand} className="flex items-center space-x-2">
            <span className="text-neon-cyan">$</span>
            <input
              type="text"
              className="flex-1 bg-transparent outline-none text-gray-200 placeholder-gray-500"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              autoFocus
              placeholder="type a command..."
            />
          </form>
        </div>
      )}
    </motion.div>
  );
};

export default Terminal;
