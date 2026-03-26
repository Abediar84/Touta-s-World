"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BrandText } from "./BrandText";
import { Navbar } from "./Navbar";

export const Hero = () => {
  return (
    <section className="relative w-full flex flex-col items-center justify-center overflow-hidden">
      <Navbar variant="transparent" />
      
      {/* Hero Background Image - Ensuring Full Length is visible */}
      <div className="relative w-full z-0">
        <Image 
          src="/hero-pyramids.png" 
          alt="Touta Pyramids Background" 
          width={1920}
          height={1080}
          className="w-full h-auto object-contain"
          priority 
        />

        {/* Hero Vignette Overlay for better text legibility */}
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />

        {/* Hero Content Overlay - Bottom Center */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-end px-6 pb-20 md:pb-32 pointer-events-none">
          <motion.div 
            className="max-w-5xl text-center pointer-events-auto flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Elegant Eyebrow */}
            <motion.span 
              className="inline-flex items-center gap-3 mb-6 text-white/90 font-sans text-[10px] md:text-xs font-bold uppercase tracking-[0.4em]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1.2 }}
            >
              <span className="w-12 h-[1px] bg-white/50 inline-block" />
              Welcome to the Magic
              <span className="w-12 h-[1px] bg-white/50 inline-block" />
            </motion.span>

            {/* Cinematic Headline */}
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.1] text-white drop-shadow-lg tracking-tight">
              Begin your<br/>
              journey with<br/>
              <span className="block mt-4 drop-shadow-xl">
                <BrandText className="text-[5.5rem] md:text-[8rem] lg:text-[11rem] leading-none text-[#fae1d2]">Touta</BrandText>
              </span>
            </h1>
            
            {/* Luxury Primary Button */}
            <motion.div
              className="mt-12 md:mt-16 flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href="#about-touta"
                className="group relative inline-flex items-center justify-center rounded-full bg-white px-10 py-4 md:px-12 md:py-5 font-sans text-sm md:text-base font-bold text-[#e27d60] shadow-xl shadow-[#e27d60]/10 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-[#e27d60]/20 active:scale-95"
              >
                <span>Start Exploring</span>
                <span className="absolute right-6 opacity-0 translate-x-[-10px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  →
                </span>
                <span className="transition-all duration-300 group-hover:pr-6" /> {/* Spacer trick */}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
