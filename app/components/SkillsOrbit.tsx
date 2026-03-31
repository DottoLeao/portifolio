"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Code2, Zap, Shield, Target } from "lucide-react";

const ORBITS = [
  {
    label: "Experiência Visual",
    description: "Interfaces intuitivas que encantam seus clientes",
    color: "#00d4ff",
    radius: 80,
    duration: 28,
    reverse: false,
    techs: ["React", "Next.js", "TypeScript", "Tailwind", "Framer"],
  },
  {
    label: "Sistemas Robustos",
    description: "Aplicações seguras e escaláveis para seu negócio",
    color: "#00ff88",
    radius: 140,
    duration: 38,
    reverse: true,
    techs: ["Node.js", "Python", "Express", "APIs"],
  },
  {
    label: "Inteligência de Dados",
    description: "Análises e dashboards para decisões mais inteligentes",
    color: "#ffd93d",
    radius: 195,
    duration: 48,
    reverse: false,
    techs: ["SQL", "Pandas", "Supabase", "PostgreSQL"],
  },
  {
    label: "Produtividade",
    description: "Entregas rápidas com qualidade e automação",
    color: "#ff6b6b",
    radius: 245,
    duration: 56,
    reverse: true,
    techs: ["Git", "Docker", "Figma", "VS Code", "Vercel"],
  },
];

const PRINCIPLES = [
  { icon: Code2, text: "Facilidade para evoluir o projeto no futuro", color: "#00ff88" },
  { icon: Zap, text: "Sites rápidos que não perdem clientes", color: "#00d4ff" },
  { icon: Shield, text: "Sistemas estáveis e livres de erros", color: "#ff6b6b" },
  { icon: Target, text: "Experiência pensada para seu usuário final", color: "#ffd93d" },
];

const orbitKeyframes = `
  @keyframes orbit-cw {
    from { transform: rotate(0deg) translateX(var(--orbit-r)) rotate(0deg); }
    to { transform: rotate(360deg) translateX(var(--orbit-r)) rotate(-360deg); }
  }
  @keyframes orbit-ccw {
    from { transform: rotate(0deg) translateX(var(--orbit-r)) rotate(0deg); }
    to { transform: rotate(-360deg) translateX(var(--orbit-r)) rotate(360deg); }
  }
`;

export function SkillsOrbit() {
  const [paused, setPaused] = useState(false);

  return (
    <section id="skills" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6">
      <style dangerouslySetInnerHTML={{ __html: orbitKeyframes }} />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-16 text-center"
        >
          <p className="text-[#00ff88] font-mono text-xs sm:text-sm mb-2 sm:mb-3">
            ESPECIALIDADES
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Como Entrego Resultados
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-xl mx-auto">
            As ferramentas que uso para transformar desafios do seu negócio em soluções reais.
          </p>
        </motion.div>

        {/* Desktop: orbit visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hidden sm:flex justify-center mb-12 md:mb-16 lg:mb-20"
        >
          <div
            className="relative"
            style={{ width: 560, height: 560 }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Center core with glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="absolute -inset-4 rounded-full bg-[#00ff88]/10 blur-xl animate-pulse" />
              <div className="relative w-16 h-16 rounded-full bg-zinc-800/80 border border-[#00ff88]/30 flex items-center justify-center backdrop-blur-sm">
                <span className="text-[#00ff88] font-mono font-bold text-lg select-none">
                  &lt;/&gt;
                </span>
              </div>
            </div>

            {/* Dashed orbit rings */}
            {ORBITS.map((orbit, i) => (
              <div
                key={`ring-${i}`}
                className="absolute top-1/2 left-1/2 rounded-full border border-dashed pointer-events-none"
                style={{
                  width: orbit.radius * 2,
                  height: orbit.radius * 2,
                  marginTop: -orbit.radius,
                  marginLeft: -orbit.radius,
                  borderColor: `${orbit.color}15`,
                }}
              />
            ))}

            {/* Category labels at top of each ring */}
            {ORBITS.map((orbit) => (
              <div
                key={`label-${orbit.label}`}
                className="absolute left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-widest uppercase pointer-events-none select-none"
                style={{
                  top: `calc(50% - ${orbit.radius}px - 16px)`,
                  color: `${orbit.color}50`,
                }}
              >
                {orbit.label}
              </div>
            ))}

            {/* Orbiting tech planets */}
            {ORBITS.map((orbit, i) =>
              orbit.techs.map((tech, j) => {
                const delay = -(orbit.duration / orbit.techs.length) * j;
                return (
                  <div
                    key={tech}
                    className="absolute top-1/2 left-1/2 w-0 h-0"
                    style={
                      {
                        "--orbit-r": `${orbit.radius}px`,
                        animation: `${orbit.reverse ? "orbit-ccw" : "orbit-cw"} ${orbit.duration}s linear infinite`,
                        animationDelay: `${delay}s`,
                        animationPlayState: paused ? "paused" : "running",
                      } as React.CSSProperties
                    }
                  >
                    <span
                      className="absolute -translate-x-1/2 -translate-y-1/2 px-3 py-1.5 rounded-full text-[11px] font-mono whitespace-nowrap border backdrop-blur-sm transition-all duration-300 hover:scale-125 hover:z-20 cursor-default select-none"
                      style={{
                        borderColor: `${orbit.color}40`,
                        color: orbit.color,
                        backgroundColor: `${orbit.color}08`,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = `0 0 20px 4px ${orbit.color}25`;
                        e.currentTarget.style.backgroundColor = `${orbit.color}18`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = "none";
                        e.currentTarget.style.backgroundColor = `${orbit.color}08`;
                      }}
                    >
                      {tech}
                    </span>
                  </div>
                );
              })
            )}
          </div>
        </motion.div>

        {/* Mobile: grid fallback */}
        <div className="sm:hidden grid grid-cols-2 gap-3 mb-12">
          {ORBITS.map((orbit, i) => (
            <motion.div
              key={orbit.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-4 rounded-xl bg-zinc-900 border border-zinc-800"
            >
              <h3
                className="font-mono text-[10px] mb-1 uppercase tracking-widest"
                style={{ color: orbit.color }}
              >
                {orbit.label}
              </h3>
              <p className="text-[10px] text-zinc-500 mb-3">
                {orbit.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {orbit.techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded-full text-[10px] font-mono border"
                    style={{
                      borderColor: `${orbit.color}40`,
                      color: orbit.color,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Non-Negotiables */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#00ff88] font-mono text-xs sm:text-sm mb-4 sm:mb-6 text-center">
            MEU COMPROMISSO
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {PRINCIPLES.map((principle, index) => (
              <motion.div
                key={principle.text}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-[#00ff88]/50 transition-all duration-300 group"
              >
                <principle.icon
                  className="w-6 h-6 sm:w-8 sm:h-8 mb-2 sm:mb-4 transition-colors duration-300"
                  style={{ color: principle.color }}
                />
                <p className="font-medium text-white text-xs sm:text-sm leading-tight">
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
