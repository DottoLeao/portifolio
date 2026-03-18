"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 pb-20 md:pt-0 md:pb-0">
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            className="text-[#00ff88] dark:text-[#00ff88] font-mono text-xs sm:text-sm md:text-base mb-3 sm:mb-4 tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            FULL STACK DEVELOPER & DATA SCIENTIST
          </motion.p>
          
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-zinc-900 dark:text-white leading-tight mb-4 sm:mb-6">
            Construindo aplicações onde o{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-[#00d4ff]">
              design
            </span>{" "}
            encontra a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#00ff88]">
              inteligência de dados
            </span>
          </h1>
          
          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-10 px-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Transformando fluxos complexos em interfaces intuitivas. 
            Do backend ao pixel perfeito, da análise de dados à experiência do usuário.
          </motion.p>

          <motion.div
            className="flex items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {[
              { icon: Github, href: "https://github.com/DottoLeao", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/lorenzo-le%C3%A3o-dotto/", label: "LinkedIn" },
              { icon: Mail, href: "dottoleao@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 rounded-full border border-zinc-300 dark:border-zinc-700 hover:border-[#00ff88] dark:hover:border-[#00ff88] hover:bg-[#00ff88]/10 transition-all duration-300 group active:scale-95"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={label}
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-600 dark:text-zinc-400 group-hover:text-[#00ff88]" />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 font-mono text-[10px] sm:text-xs text-zinc-500 dark:text-zinc-500 px-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {["React", "Next.js", "TypeScript", "Node.js", "Python", "SQL", "Supabase", "Figma"].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 hover:border-[#00ff88] dark:hover:border-[#00ff88] hover:text-[#00ff88] transition-colors cursor-default"
                >
                  {tech}
                </span>
              )
            )}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-400 dark:text-zinc-600" />
        </motion.div>
      </motion.div>
    </section>
  );
}
