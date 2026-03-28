"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

const cinemaEase = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const imgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.22]);
  const textY    = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity  = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative w-full h-screen flex flex-col items-center justify-center text-center overflow-hidden"
    >
      {/* ── Cinematic Background ── */}
      <div className="absolute inset-0 z-0">
        <motion.div style={{ scale: imgScale }} className="absolute inset-0">
          <Image
            alt="Pyramids"
            src="/Touta-s-World/hero-pyramids.png"
            fill
            priority
            className="object-cover opacity-20"
            style={{ color: "transparent" }}
          />
        </motion.div>
        {/* dark stone overlay — exact mix-blend as reference */}
        <div className="absolute inset-0 bg-stone-900/60 mix-blend-multiply" />
        {/* gradient fade to bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-stone-950/80" />
      </div>

      {/* ── Hero Content ── */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 flex flex-col items-center gap-8 max-w-4xl px-6"
      >
        {/* Eyebrow label */}
        <motion.span
          className="inline-flex items-center gap-4 text-white/60 font-sans font-bold uppercase tracking-[0.5em] text-[10px] md:text-[11px]"
          initial={{ letterSpacing: "1em", opacity: 0 }}
          animate={{ letterSpacing: "0.5em", opacity: 1 }}
          transition={{ duration: 1.6, delay: 0.2, ease: cinemaEase }}
        >
          <span className="w-10 h-[1px] bg-white/30" />
          WELCOME TO THE MAGIC
          <span className="w-10 h-[1px] bg-white/30" />
        </motion.span>

        {/* Main heading */}
        <motion.h1
          className="font-serif text-6xl md:text-[7.5rem] font-bold text-white leading-[0.92] tracking-tighter"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: cinemaEase }}
        >
          Begin your journey<br />
          with{" "}
          <span className="font-brand italic text-[#e27d60] !font-normal">Touta</span>
        </motion.h1>

        {/* Sub-text */}
        <motion.p
          className="font-sans text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.65, ease: cinemaEase }}
        >
          A curated digital sanctuary where Egyptian heritage meets modern curiosity.
          We craft experiences that invite children to explore the echoes of the past
          through the lens of wonder.
        </motion.p>

        {/* CTA */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: cinemaEase }}
        >
          <Link href="/meet-touta">
            <motion.button
              className="bg-[#e27d60] text-white px-12 py-5 rounded-full font-sans font-bold text-sm hover:bg-[#c96a4e] transition-colors duration-500 group flex items-center gap-3 shadow-[0_20px_50px_rgba(226,125,96,0.35)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Start Exploring
              <span className="text-lg group-hover:translate-x-1 transition-transform inline-block">→</span>
            </motion.button>
          </Link>
          <Link href="/shop">
            <motion.button
              className="border border-white/30 text-white/80 px-10 py-5 rounded-full font-sans font-semibold text-sm hover:border-white hover:text-white transition-all duration-400 backdrop-blur-sm"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              View Collection
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-white/40 font-sans text-[9px] tracking-[0.4em] uppercase">Scroll</span>
        <div className="w-[1px] h-14 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
}
