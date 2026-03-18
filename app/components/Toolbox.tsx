"use client";

import { motion } from "framer-motion";
import {
  Monitor,
  Server,
  Database,
  Wrench,
  Code2,
  Zap,
  Shield,
  Target,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const principles = [
  { icon: Code2, text: "Código limpo não é opcional", color: "#00ff88" },
  { icon: Zap, text: "Performance é feature", color: "#00d4ff" },
  { icon: Shield, text: "Testes garantem confiança", color: "#ff6b6b" },
  { icon: Target, text: "UX guia todas as decisões", color: "#ffd93d" },
];

interface ToolCategory {
  icon: LucideIcon;
  title: string;
  color: string;
  tools: string[];
}

const toolbox: ToolCategory[] = [
  {
    icon: Monitor,
    title: "Frontend",
    color: "#00d4ff",
    tools: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    icon: Server,
    title: "Backend",
    color: "#00ff88",
    tools: ["Node.js", "Python", "Express", "REST APIs"],
  },
  {
    icon: Database,
    title: "Data",
    color: "#ffd93d",
    tools: ["SQL", "Pandas", "Supabase", "PostgreSQL"],
  },
  {
    icon: Wrench,
    title: "Ferramentas",
    color: "#ff6b6b",
    tools: ["Git", "Docker", "Figma", "VS Code", "Vercel"],
  },
];

export function Toolbox() {
  return (
    <section id="toolbox" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-16"
        >
          <p className="text-[#00ff88] font-mono text-xs sm:text-sm mb-2 sm:mb-3">MY TOOLBOX</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-3 sm:mb-4">
            Ferramentas do Dia a Dia
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-xl">
            As tecnologias e ferramentas que uso para transformar ideias em produtos
            — do conceito ao deploy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 md:mb-20">
          {toolbox.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:border-[var(--cat-color)]/50 transition-all duration-300 group"
              style={{ "--cat-color": category.color } as React.CSSProperties}
            >
              <category.icon
                className="w-7 h-7 sm:w-8 sm:h-8 mb-3 sm:mb-4 transition-colors duration-300"
                style={{ color: category.color }}
              />
              <h3 className="font-semibold text-base sm:text-lg text-zinc-900 dark:text-white mb-3 sm:mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {category.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-mono border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 group-hover:border-[var(--cat-color)]/40 group-hover:text-zinc-900 dark:group-hover:text-zinc-200 transition-colors duration-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#00ff88] font-mono text-xs sm:text-sm mb-4 sm:mb-6 text-center">NON-NEGOTIABLES</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.text}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:border-[#00ff88]/50 dark:hover:border-[#00ff88]/50 transition-all duration-300 group"
              >
                <principle.icon
                  className="w-6 h-6 sm:w-8 sm:h-8 mb-2 sm:mb-4 transition-colors duration-300"
                  style={{ color: principle.color }}
                />
                <p className="font-medium text-zinc-900 dark:text-white text-xs sm:text-sm leading-tight">
                  {principle.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
