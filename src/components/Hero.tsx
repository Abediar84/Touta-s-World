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

        {/* Hero Content Overlay - Bottom Center */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-end px-6 pb-16 md:pb-24 pointer-events-none">
          <motion.div 
            className="max-w-5xl text-center pointer-events-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-serif text-4xl font-bold leading-tight text-white sm:text-6xl md:text-8xl lg:text-9xl drop-shadow-[0_5px_15px_rgba(0,0,0,0.3)]">
              Begin your<br/>
              Journey now<br/>
              <span className="block mt-2 md:mt-4 drop-shadow-[0_5px_15px_rgba(0,0,0,0.3)]">
                with <BrandText className="font-normal text-5xl sm:text-7xl md:text-9xl lg:text-[10rem] text-[#fae1d2]">Touta</BrandText>
              </span>
            </h1>
            
            <motion.div
              className="mt-8 md:mt-12 flex justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="#about-touta"
                className="inline-block rounded-full bg-white px-8 py-4 md:px-14 md:py-6 font-sans text-base md:text-xl font-bold text-[#e27d60] shadow-2xl transition-all hover:scale-105"
              >
                Start Your Journey
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
