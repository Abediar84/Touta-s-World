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
            className="object-cover opacity-80"
            style={{ color: "transparent" }}
          />
        </motion.div>
        {/* lighter stone overlay for more clarity */}
        <div className="absolute inset-0 bg-stone-900/20 mix-blend-multiply" />
        {/* gradient fade to bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-stone-950/70" />
      </div>

      {/* ── Hero Content ── */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 flex flex-col items-center gap-10 w-full px-2 sm:px-6 md:px-12 lg:px-16 mt-20 md:mt-32"
      >
        {/* Eyebrow label */}
        <motion.span
          className="inline-flex items-center gap-4 text-white font-sans font-bold uppercase tracking-[0.5em] text-[10px] md:text-[11px]"
          initial={{ letterSpacing: "1em", opacity: 0 }}
          animate={{ letterSpacing: "0.5em", opacity: 1 }}
          transition={{ duration: 1.6, delay: 0.2, ease: cinemaEase }}
        >
          <span className="w-10 h-[1px] bg-white/60" />
          WELCOME TO THE MAGIC
          <span className="w-10 h-[1px] bg-white/60" />
        </motion.span>

        {/* Slogans Side by Side on Far Ends */}
        <motion.div 
          className="flex flex-row items-center justify-between w-full gap-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: cinemaEase }}
        >
          <div className="flex-1 text-left">
            <h1 className="font-serif text-[4.5vw] sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.2] tracking-tighter">
              Begin your journey<br />
              with <span className="font-brand italic text-[#e27d60] !font-normal">Touta</span>
            </h1>
          </div>
          
          <div className="flex-1 text-right">
            <span className="font-hamdy text-[5vw] sm:text-5xl md:text-7xl lg:text-8xl text-[#c2c384] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] whitespace-nowrap">
              وهنبتدي الحدوتة
            </span>
          </div>
        </motion.div>

        <div className="flex flex-col items-center mt-10 md:mt-24 gap-8">
          {/* Sub-text */}
          <motion.p
            className="hidden sm:block font-sans text-lg md:text-xl text-white max-w-2xl leading-relaxed font-light bg-black/40 backdrop-blur-md px-8 py-5 rounded-2xl border border-white/10 shadow-2xl text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.65, ease: cinemaEase }}
          >
            A curated digital sanctuary where Egyptian heritage meets modern curiosity.
            We craft experiences that invite children to explore the echoes of the past
            through the lens of wonder.
          </motion.p>
        </div>
      </motion.div>

      {/* ── CTA at Bottom ── */}
      <motion.div
        className="absolute bottom-8 sm:bottom-12 left-0 right-0 z-20 flex flex-col sm:flex-row justify-center items-center gap-4 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9, ease: cinemaEase }}
      >
        <Link href="/meet-touta">
          <motion.button
            className="bg-[#e27d60] text-white px-10 py-4 sm:px-12 sm:py-5 rounded-full font-sans font-bold text-sm hover:bg-[#c96a4e] transition-colors duration-500 group flex items-center gap-3 shadow-[0_20px_50px_rgba(226,125,96,0.35)]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Begin your journey
            <span className="text-lg group-hover:translate-x-1 transition-transform inline-block">→</span>
          </motion.button>
        </Link>
        <Link href="/shop">
          <motion.button
            className="border border-white/30 text-white/80 px-8 py-4 sm:px-10 sm:py-5 rounded-full font-sans font-semibold text-sm hover:border-white hover:text-white transition-all duration-400 backdrop-blur-sm bg-black/20"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            View Collection
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
}
