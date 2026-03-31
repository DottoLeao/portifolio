"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Briefcase } from "lucide-react";
import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <p className="text-[#00ff88] font-mono text-xs sm:text-sm mb-2 sm:mb-3">
            SOBRE MIM
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Minha Jornada
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-center"
        >
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-[#00ff88] to-[#00d4ff] opacity-40 blur-md" />
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-zinc-900 border-2 border-zinc-700 overflow-hidden">
                <Image
                  src="/lorenzo.png"
                  alt="Lorenzo Leão Dotto"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 160px, 192px"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Lorenzo Leão Dotto
            </h3>

            <p className="text-sm sm:text-base text-zinc-400 mb-4 leading-relaxed">
              Sou formado pela{" "}
              <span className="text-[#00ff88] font-medium">FIAP</span> e
              apaixonado por resolver problemas reais de empresas usando
              tecnologia. Meu foco está em transformar processos operacionais e
              logísticos complexos em soluções digitais que funcionam — sistemas
              que economizam tempo, reduzem erros e ajudam na tomada de decisão.
            </p>

            <p className="text-sm sm:text-base text-zinc-400 mb-6 leading-relaxed">
              Para mim, a tecnologia é a magia da humanidade — a capacidade de
              transformar ideias em algo que funciona, que resolve, que muda a
              vida das pessoas. É isso que me move todos os dias.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-xs sm:text-sm text-zinc-500">
              <span className="flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-[#00ff88]" />
                FIAP
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#00d4ff]" />
                Brasil
              </span>
              <span className="flex items-center gap-1.5">
                <Briefcase className="w-4 h-4 text-[#ffd93d]" />
                Full Stack & Data
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
