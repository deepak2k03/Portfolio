import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface SkillsCubeProps {
  darkMode: boolean;
}

const SkillsCube: React.FC<SkillsCubeProps> = ({ darkMode }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 });
  const cubeRef = useRef<HTMLDivElement>(null);

  const skills = [
    'JavaScript', 'Tailwind', 'React', 'Redux', 'Python', 'C++'
  ];

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setLastMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

    const deltaX = e.clientX - lastMousePos.x;
    const deltaY = e.clientY - lastMousePos.y;

    setRotation(prev => ({
      x: prev.x - deltaY * 0.5, // Invert Y for natural rotation
      y: prev.y + deltaX * 0.5
    }));

    setLastMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  // Auto-rotate slowly when not being controlled
  useEffect(() => {
    if (isDragging) return;

    const interval = setInterval(() => {
      setRotation(prev => ({
        x: prev.x,
        y: prev.y + 0.2 // Very slow auto-rotation
      }));
    }, 50);

    return () => clearInterval(interval);
  }, [isDragging]);

  // Preset rotation buttons
  const presetRotations = [
    { name: 'Front', x: 0, y: 0 },
    { name: 'Back', x: 0, y: 180 },
    { name: 'Right', x: 0, y: 90 },
    { name: 'Left', x: 0, y: -90 },
    { name: 'Top', x: -90, y: 0 },
    { name: 'Bottom', x: 90, y: 0 },
  ];

  const handlePresetRotation = (preset: { x: number; y: number }) => {
    setRotation(preset);
  };

  return (
    <div className="flex flex-col items-center justify-center h-96 space-y-6">
      <motion.div
        ref={cubeRef}
        className="relative perspective-1000 cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        style={{ perspective: '1000px' }}
      >
        <motion.div
          className="preserve-3d w-32 h-32 relative"
          animate={{
            rotateX: rotation.x,
            rotateY: rotation.y,
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20
          }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Front Face - React */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 border border-neon-cyan/50 backdrop-blur-sm rounded-lg flex items-center justify-center text-neon-cyan font-bold text-sm"
            style={{ transform: 'translateZ(64px)' }}
          >
            {skills[0]}
          </div>
          
          {/* Back Face - Tailwind */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-neon-purple/20 to-neon-pink/20 border border-neon-purple/50 backdrop-blur-sm rounded-lg flex items-center justify-center text-neon-purple font-bold text-sm"
            style={{ transform: 'rotateY(180deg) translateZ(64px)' }}
          >
            {skills[1]}
          </div>
          
          {/* Right Face - Express.js */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-neon-green/20 to-neon-cyan/20 border border-neon-green/50 backdrop-blur-sm rounded-lg flex items-center justify-center text-neon-green font-bold text-sm"
            style={{ transform: 'rotateY(90deg) translateZ(64px)' }}
          >
            {skills[2]}
          </div>
          
          {/* Left Face - Next.js */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-neon-pink/20 to-neon-purple/20 border border-neon-pink/50 backdrop-blur-sm rounded-lg flex items-center justify-center text-neon-pink font-bold text-sm"
            style={{ transform: 'rotateY(-90deg) translateZ(64px)' }}
          >
            {skills[3]}
          </div>
          
          {/* Top Face - MongoDB */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-neon-cyan/20 border border-yellow-400/50 backdrop-blur-sm rounded-lg flex items-center justify-center text-yellow-400 font-bold text-sm"
            style={{ transform: 'rotateX(90deg) translateZ(64px)' }}
          >
            {skills[4]}
          </div>
          
          {/* Bottom Face - Redux */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 border border-neon-blue/50 backdrop-blur-sm rounded-lg flex items-center justify-center text-neon-blue font-bold text-sm"
            style={{ transform: 'rotateX(-90deg) translateZ(64px)' }}
          >
            {skills[5]}
          </div>
        </motion.div>
      </motion.div>
      
      <div className="text-center">
        <h3 className="text-2xl font-bold text-red mb-2">Interactive Skills Cube</h3>
        <p className="text-neon-blue max-w-xs mb-4">
          Drag to rotate or click buttons to view each technology
        </p>
        
        {/* Control Buttons */}
        <div className="grid grid-cols-3 gap-2 max-w-xs">
          {presetRotations.map((preset) => (
            <motion.button
              key={preset.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handlePresetRotation(preset)}
              className="px-3 py-1 text-xs bg-white/10 backdrop-blur-sm border border-white/20 rounded-md hover:border-neon-cyan hover:text-neon-cyan transition-all duration-300"
            >
              {preset.name}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsCube;