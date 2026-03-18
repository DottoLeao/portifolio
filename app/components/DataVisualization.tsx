"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Activity, GitCommit, Clock, TrendingUp } from "lucide-react";

interface TechData {
  name: string;
  hours: number;
  color: string;
  percentage: number;
}

const techData: TechData[] = [
  { name: "TypeScript", hours: 320, color: "#3178c6", percentage: 28 },
  { name: "React/Next.js", hours: 280, color: "#00d4ff", percentage: 24 },
  { name: "Python", hours: 240, color: "#ffd43b", percentage: 21 },
  { name: "Node.js", hours: 160, color: "#68a063", percentage: 14 },
  { name: "SQL", hours: 100, color: "#00ff88", percentage: 9 },
  { name: "Outros", hours: 50, color: "#888888", percentage: 4 },
];

const stats = [
  { icon: GitCommit, label: "Commits este ano", value: "847", trend: "+12%" },
  { icon: Activity, label: "PRs Mergeados", value: "156", trend: "+8%" },
  { icon: Clock, label: "Horas de código", value: "1,150", trend: "+15%" },
  { icon: TrendingUp, label: "Projetos ativos", value: "6", trend: "Estável" },
];

export function DataVisualization() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="stats" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-16 text-center"
        >
          <p className="text-[#00ff88] font-mono text-xs sm:text-sm mb-2 sm:mb-3">DATA-DRIVEN</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Métricas em Tempo Real
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto px-2">
            Números que contam a história da minha jornada como desenvolvedor.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10 sm:mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-[#00ff88]/50 transition-all duration-300"
            >
              <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#00ff88] mb-2 sm:mb-3" />
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-0.5 sm:mb-1 font-mono">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm text-zinc-400 mb-1 sm:mb-2 leading-tight">{stat.label}</p>
              <p className={`text-[10px] sm:text-xs font-mono ${stat.trend.includes("+") ? "text-[#00ff88]" : "text-zinc-400"}`}>
                {stat.trend}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Tech Hours Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-zinc-900 border border-zinc-800"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 sm:mb-8 gap-2">
            <div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1">
                Distribuição por Tecnologia
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400">
                Horas de estudo e desenvolvimento nos últimos 12 meses
              </p>
            </div>
            <div className="flex items-center gap-2 text-[10px] sm:text-xs text-zinc-400 font-mono">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#00ff88] animate-pulse" />
              <span className="hidden sm:inline">Atualizado automaticamente</span>
              <span className="sm:hidden">Auto-atualizado</span>
            </div>
          </div>

          {/* Bar Chart */}
          <div className="space-y-3 sm:space-y-4">
            {techData.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
                onMouseEnter={() => setHoveredBar(index)}
                onMouseLeave={() => setHoveredBar(null)}
              >
                <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                  <span className="text-xs sm:text-sm font-medium text-zinc-300">
                    {tech.name}
                  </span>
                  <span className="text-xs sm:text-sm font-mono text-zinc-400">
                    {tech.hours}h ({tech.percentage}%)
                  </span>
                </div>
                <div className="h-2 sm:h-3 rounded-full bg-zinc-800 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full relative"
                    style={{ backgroundColor: tech.color }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tech.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                  >
                    {hoveredBar === index && (
                      <motion.div
                        className="absolute inset-0 bg-white/20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      />
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Total */}
          <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-zinc-800 flex items-center justify-between">
            <span className="text-zinc-400 text-xs sm:text-sm">Total de horas</span>
            <span className="text-lg sm:text-xl md:text-2xl font-bold font-mono text-[#00ff88]">
              {techData.reduce((acc, tech) => acc + tech.hours, 0)}h
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
