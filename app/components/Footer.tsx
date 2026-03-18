"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, Code2 } from "lucide-react";

const links = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/lorenzo-le%C3%A3o-dotto/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:dottoleao@gmail.com", label: "Email" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 sm:py-12 px-4 sm:px-6 border-t border-zinc-100/50 dark:border-zinc-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-5 sm:gap-6 md:flex-row md:justify-between">
          {/* Logo / Name */}
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-[#00ff88] to-[#00d4ff] flex items-center justify-center">
              <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black" />
            </div>
            <span className="font-bold text-sm sm:text-base text-zinc-900 dark:text-white">
              The Data-Driven Architect
            </span>
          </motion.div>

          {/* Social Links */}
          <div className="flex items-center gap-3 sm:gap-4">
            {links.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-zinc-400 hover:text-[#00ff88] hover:bg-[#00ff88]/10 active:text-[#00ff88] active:bg-[#00ff88]/10 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={label}
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs sm:text-sm text-zinc-400 dark:text-zinc-500 flex items-center gap-1">
            <span>Feito com</span>
            <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-500 inline animate-pulse" />
            <span>© {currentYear}</span>
          </p>
        </div>

        {/* Tech Stack */}
        <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-zinc-100 dark:border-zinc-800 text-center">
          <p className="text-[10px] sm:text-xs text-zinc-400 dark:text-zinc-600 font-mono">
            Built with Next.js • TypeScript • Tailwind CSS • Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
