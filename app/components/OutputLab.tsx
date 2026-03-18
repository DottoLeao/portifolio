"use client";

import { motion } from "framer-motion";
import { Play, BookOpen, Code2, Zap, Shield, Target } from "lucide-react";
import Image from "next/image";
import { urlFor } from "@/lib/sanity/image";
import type { SanityImageSource } from "@sanity/image-url";

const principles = [
  { icon: Code2, text: "Código limpo não é opcional", color: "#00ff88" },
  { icon: Zap, text: "Performance é feature", color: "#00d4ff" },
  { icon: Shield, text: "Testes garantem confiança", color: "#ff6b6b" },
  { icon: Target, text: "UX guia todas as decisões", color: "#ffd93d" },
];

interface LabItem {
  _id: string;
  title: string;
  description: string;
  type: "video" | "article";
  thumbnail?: SanityImageSource;
  link: string;
  views: string;
  date: string;
  order: number;
}

const fallbackContent: LabItem[] = [
  {
    _id: "fallback-lab-1",
    type: "video",
    title: "Dominando Next.js 14 - Server Components na Prática",
    description: "Como usar RSC para melhorar performance drasticamente",
    link: "https://youtube.com",
    views: "12.5K",
    date: "2 semanas atrás",
    order: 1,
  },
  {
    _id: "fallback-lab-2",
    type: "video",
    title: "TypeScript Avançado - Generics e Type Guards",
    description: "Técnicas para código type-safe e reutilizável",
    link: "https://youtube.com",
    views: "8.2K",
    date: "1 mês atrás",
    order: 2,
  },
  {
    _id: "fallback-lab-3",
    type: "article",
    title: "Python + SQL: Pipeline de Dados Eficiente",
    description: "Construindo ETL robusto com boas práticas",
    link: "https://blog.com",
    views: "5.1K",
    date: "3 semanas atrás",
    order: 3,
  },
];

export function OutputLab({ content }: { content?: LabItem[] }) {
  const data = content && content.length > 0 ? content : fallbackContent;

  return (
    <section id="lab" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-16"
        >
          <p className="text-[#00ff88] font-mono text-xs sm:text-sm mb-2 sm:mb-3">THE OUTPUT LAB</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-3 sm:mb-4">
            Compartilhando Conhecimento
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-xl">
            Acredito que ensinar é a melhor forma de aprender. Aqui estão alguns conteúdos 
            onde documento minha jornada de aprendizado contínuo.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16 md:mb-20">
          {data.map((item, index) => (
            <motion.a
              key={item._id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group block"
            >
              <div className="relative aspect-video rounded-lg sm:rounded-xl overflow-hidden bg-gradient-to-br from-zinc-200 to-zinc-300 dark:from-zinc-800 dark:to-zinc-900 mb-3 sm:mb-4">
                {item.thumbnail && (
                  <Image
                    src={urlFor(item.thumbnail).width(600).height(340).url()}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00ff88]/20 to-[#00d4ff]/20 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  {item.type === "video" ? (
                    <motion.div
                      className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white/90 dark:bg-black/90 flex items-center justify-center shadow-lg"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Play className="w-5 h-5 sm:w-6 sm:h-6 text-[#00ff88] ml-0.5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white/90 dark:bg-black/90 flex items-center justify-center shadow-lg"
                      whileHover={{ scale: 1.1 }}
                    >
                      <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-[#00d4ff]" />
                    </motion.div>
                  )}
                </div>
                {item.views && (
                  <div className="absolute bottom-1.5 right-1.5 sm:bottom-2 sm:right-2 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded bg-black/80 text-white text-[10px] sm:text-xs font-mono">
                    {item.views} views
                  </div>
                )}
              </div>
              <h3 className="font-semibold text-sm sm:text-base text-zinc-900 dark:text-white mb-1 group-hover:text-[#00ff88] group-active:text-[#00ff88] transition-colors line-clamp-2">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-500 mb-1.5 sm:mb-2 line-clamp-2">
                {item.description}
              </p>
              {item.date && (
                <p className="text-[10px] sm:text-xs text-zinc-400 dark:text-zinc-600 font-mono">
                  {item.date}
                </p>
              )}
            </motion.a>
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
