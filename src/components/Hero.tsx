import { motion } from "framer-motion";
import TypeWriter from "./TypeWriter";
import picc from "../assets/picc.jpg"; // ✅ Correct way to import

interface HeroProps {
  darkMode: boolean;
}

export default function Hero({ darkMode }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.08),transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        {/* Flex row for image + text */}
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          {/* Image Section */}
          <div className="flex-shrink-0">
            <img
              src={picc} // ✅ imported image
              alt="Deepak Singh"
              className="w-[450px] h-[450px] object-cover shadow-2xl border-4 border-neon-cyan rounded-2xl"
            />
          </div>

          {/* Text + Animations Section */}
          <div className="text-center md:text-left flex-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="text-lg font-mono text-neon-cyan mb-4">
                Hello World! I'm
              </div>

              <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-neon-cyan to-neon-purple bg-clip-text text-transparent leading-relaxed">
                Deepak Singh
              </h1>

              <div className="text-2xl md:text-3xl font-mono h-10 mb-8">
                <TypeWriter
                  words={[
                    "Web Developer",
                    "React Specialist",
                    "Competitive Programmer",
                    "UI/UX Enthusiast",
                    "AI/ML Enthusiast",
                  ]}
                  darkMode={darkMode}
                />
              </div>
            </motion.div>

            <p className="text-lg mb-8 max-w-2xl leading-relaxed text-zinc-800 dark:text-gray-300">
              I am a Final-year B.Tech student at KNIT, Sultanpur, specializing in Information Technology. 
              With a strong foundation in Data Structures, Algorithms and web development, I am passionate about competitive programming and continuously seek out challenges to enhance my skills.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-6 justify-center md:justify-start">
              <a
                href="#projects"
                className="px-8 py-4 border-2 border-neon-cyan text-neon-cyan rounded-lg font-semibold hover:bg-neon-cyan hover:text-black transition-colors"
              >
                VIEW MY WORK
              </a>
              <a
                href="https://drive.google.com/file/d/1KbbT9Zyy6QiJ1Raaq3iTJGQNSDVPNOAU/view?usp=sharing"
                download
                className="px-8 py-4 border-2 border-neon-purple text-neon-purple rounded-lg font-semibold hover:bg-neon-purple hover:text-black transition-colors"
              >
                DOWNLOAD CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
