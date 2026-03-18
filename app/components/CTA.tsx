"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Linkedin, Mail } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#00ff88]/10 border border-[#00ff88]/20 text-[#00ff88] font-mono text-xs sm:text-sm mb-6 sm:mb-8"
            whileHover={{ scale: 1.02 }}
          >
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#00ff88] animate-pulse" />
            Disponível para novos projetos
          </motion.div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-zinc-900 dark:text-white mb-4 sm:mb-6 leading-tight px-2">
            Tem um desafio de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-[#00d4ff]">
              dados
            </span>{" "}
            ou uma aplicação{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] to-[#00ff88]">
              complexa
            </span>{" "}
            em mente?
          </h2>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-zinc-600 dark:text-zinc-400 mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto px-2">
            Vamos construir a solução juntos. Do conceito à entrega, com foco em 
            resultados mensuráveis e código de qualidade.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 px-2">
            <motion.a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-black font-semibold text-sm sm:text-base md:text-lg hover:shadow-lg hover:shadow-[#00ff88]/25 transition-shadow duration-300 active:scale-95"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Agendar uma conversa</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 font-semibold text-sm sm:text-base md:text-lg hover:border-[#00ff88] hover:text-[#00ff88] transition-all duration-300 active:border-[#00ff88] active:text-[#00ff88]"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Ver LinkedIn</span>
            </motion.a>
          </div>

          <motion.p
            className="mt-6 sm:mt-8 text-xs sm:text-sm text-zinc-400 dark:text-zinc-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            Respondo em até 24 horas
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
