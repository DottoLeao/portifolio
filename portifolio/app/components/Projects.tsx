"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { urlFor } from "@/lib/sanity/image";
import type { SanityImageSource } from "@sanity/image-url";

interface Project {
  _id: string;
  title: string;
  slug?: { current: string };
  description: string;
  problem: string;
  solution: string;
  results: string[];
  tech: string[];
  image?: SanityImageSource & { alt?: string };
  github: string;
  live: string;
  featured: boolean;
  order: number;
}

const fallbackProjects: Project[] = [
  {
    _id: "fallback-1",
    title: "Torre de Controle - Sistema de Monitoramento",
    description: "Dashboard de inteligência operacional para monitoramento em tempo real",
    problem: "Gestores precisavam de uma visão unificada de múltiplos sistemas e KPIs, com alertas proativos e análise de tendências.",
    solution: "Pipeline de dados em Python para ETL e análise preditiva, frontend em React com visualizações interativas e Supabase como backend serverless.",
    results: ["Redução de 40% no tempo de resposta a incidentes", "Automação de 15+ relatórios manuais", "Dashboard com atualização em tempo real"],
    tech: ["React", "TypeScript", "Python", "Supabase", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://demo.com",
    featured: true,
    order: 1,
  },
  {
    _id: "fallback-2",
    title: "Analytics Platform - Data Visualization",
    description: "Plataforma de análise de dados com visualizações customizáveis",
    problem: "Equipe de dados gastava horas criando relatórios estáticos que ficavam desatualizados rapidamente.",
    solution: "Aplicação Next.js com integração direta ao banco de dados, charts interativos com D3.js e exportação automatizada.",
    results: ["Criação de dashboards 5x mais rápida", "Integração com 8 fontes de dados", "Sistema de alertas inteligentes"],
    tech: ["Next.js", "Node.js", "PostgreSQL", "D3.js", "Docker"],
    github: "https://github.com",
    live: "https://demo.com",
    featured: true,
    order: 2,
  },
  {
    _id: "fallback-3",
    title: "Workflow Automation Engine",
    description: "Motor de automação de processos com interface drag-and-drop",
    problem: "Processos manuais repetitivos consumiam tempo da equipe e introduziam erros humanos.",
    solution: "Backend em Python com orquestração de tarefas, frontend Vue.js com editor visual de fluxos e integrações via API.",
    results: ["80% de redução em tarefas manuais", "Zero downtime em 6 meses", "ROI positivo em 3 meses"],
    tech: ["Python", "FastAPI", "Vue.js", "Redis", "AWS Lambda"],
    github: "https://github.com",
    live: "https://demo.com",
    featured: true,
    order: 3,
  },
];

export function Projects({ projects }: { projects?: Project[] }) {
  const data = projects && projects.length > 0 ? projects : fallbackProjects;

  return (
    <section id="projects" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-16"
        >
          <p className="text-[#00ff88] font-mono text-xs sm:text-sm mb-2 sm:mb-3">PROJETOS SELECIONADOS</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-3 sm:mb-4">
            A Prova Técnica
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-xl">
            Casos onde a combinação de análise de dados e desenvolvimento full-stack 
            gerou impacto mensurável.
          </p>
        </motion.div>

        <div className="space-y-12 sm:space-y-16 md:space-y-24">
          {data.map((project, index) => (
            <motion.article
              key={project._id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group"
            >
              <div className={`grid lg:grid-cols-2 gap-6 lg:gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                <motion.div
                  className={`relative aspect-video rounded-xl sm:rounded-2xl overflow-hidden bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-zinc-800 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {project.image ? (
                    <Image
                      src={urlFor(project.image).width(800).height(450).url()}
                      alt={project.image.alt || project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center p-4 sm:p-8">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#00ff88] to-[#00d4ff] flex items-center justify-center">
                          <span className="text-xl sm:text-2xl font-bold text-black">{index + 1}</span>
                        </div>
                        <p className="text-zinc-500 dark:text-zinc-400 font-mono text-xs sm:text-sm">Preview</p>
                      </div>
                    </div>
                  )}
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 bg-gradient-to-br from-[#00ff88]/20 to-[#00d4ff]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                </motion.div>

                <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <span className="text-[#00ff88] font-mono text-xs sm:text-sm">0{index + 1}</span>
                    <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
                  </div>
                  
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-zinc-900 dark:text-white mb-2 sm:mb-3 group-hover:text-[#00ff88] transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mb-4 sm:mb-6">
                    {project.description}
                  </p>

                  <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                    <div className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800">
                      <p className="text-[10px] sm:text-xs font-mono text-[#00ff88] mb-1.5 sm:mb-2">O PROBLEMA</p>
                      <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">{project.problem}</p>
                    </div>
                    
                    <div className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800">
                      <p className="text-[10px] sm:text-xs font-mono text-[#00d4ff] mb-1.5 sm:mb-2">A SOLUÇÃO</p>
                      <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">{project.solution}</p>
                    </div>

                    <div className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800">
                      <p className="text-[10px] sm:text-xs font-mono text-amber-500 mb-1.5 sm:mb-2">RESULTADOS</p>
                      <ul className="space-y-1">
                        {project.results?.map((result, i) => (
                          <li key={i} className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 flex items-start gap-2">
                            <ArrowUpRight className="w-3 h-3 text-[#00ff88] mt-0.5 flex-shrink-0" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                    {project.tech?.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-mono rounded-full border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 sm:gap-6">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 hover:text-[#00ff88] transition-colors active:text-[#00ff88]"
                        whileHover={{ x: 3 }}
                      >
                        <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        <span>Código</span>
                      </motion.a>
                    )}
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 hover:text-[#00ff88] transition-colors active:text-[#00ff88]"
                        whileHover={{ x: 3 }}
                      >
                        <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        <span>Demo</span>
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
