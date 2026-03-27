"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  const cinemaEase = [0.16, 1, 0.3, 1] as const;

  return (
    <header className="max-w-7xl mx-auto px-8 md:px-20 mt-24 mb-32 overflow-visible">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Column Content */}
        <motion.div 
          className="flex flex-col items-start gap-8 order-2 md:order-1"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: cinemaEase }}
        >
          <div className="inline-block">
            <motion.span 
              className="font-sans text-[#aab5cc] font-bold tracking-[0.3em] text-[10px] md:text-xs uppercase"
              initial={{ opacity: 0, letterSpacing: "0.5em" }}
              animate={{ opacity: 1, letterSpacing: "0.3em" }}
              transition={{ duration: 1.5, delay: 0.2, ease: cinemaEase }}
            >
              WELCOME TO THE MAGIC
            </motion.span>
            <motion.div 
              className="h-[1px] w-12 bg-[#aab5cc] mt-2 opacity-50"
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.6, ease: cinemaEase }}
            />
          </div>
          
          <h1 className="font-serif text-5xl md:text-[5rem] leading-[1.05] font-light text-[#1a1a1a] tracking-tight">
            Begin your <br/>
            <motion.span 
              className="inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: cinemaEase }}
            >
              journey with <span className="font-brand italic text-[#e27d60] text-[4.5rem] md:text-[6.5rem] leading-none ml-2">Touta</span>
            </motion.span>
          </h1>
          
          <p className="font-sans text-lg text-gray-500 max-w-md leading-relaxed font-light">
            A curated digital sanctuary where Egyptian heritage meets modern curiosity. We craft experiences that invite children to explore the echoes of the past through the lens of wonder.
          </p>
          
          <motion.button 
            className="bg-[#1a1a1a] text-white px-10 py-5 rounded-full font-sans font-bold text-sm hover:bg-[#e27d60] transition-colors duration-500 group flex items-center gap-3 shadow-xl hover:shadow-[#e27d60]/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.4, ease: cinemaEase }}
          >
            Start Exploring
            <motion.span 
              className="text-lg group-hover:translate-x-1 transition-transform"
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>

        {/* Right Column Image Card */}
        <motion.div 
          className="order-1 md:order-2 relative"
          initial={{ opacity: 0, y: 60, rotate: -2 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 1.4, ease: cinemaEase }}
        >
          {/* Subtle Parallax Background Glow */}
          <motion.div 
            className="absolute -inset-8 bg-[#e5b3aa]/20 rounded-[4rem] blur-[80px] -z-10"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          />

          <div className="bg-white p-6 rounded-[2.5rem] shadow-[0_60px_100px_-20px_rgba(0,0,0,0.08)] border border-gray-50">
            <div className="relative overflow-hidden rounded-[1.5rem] aspect-[4/5] bg-stone-100 group">
              <motion.div
                className="w-full h-full relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1, ease: cinemaEase }}
              >
                <Image 
                  src="/hero-pyramids.png"
                  alt="Touta and Pyramids of Giza" 
                  fill
                  priority
                  className="object-cover grayscale-[0.2] transition-all duration-1000" 
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60 pointer-events-none" />
            </div>
            
            <div className="mt-8 flex justify-between items-center px-4">
              <span className="font-sans text-[9px] tracking-[0.4em] text-gray-400 font-bold uppercase">ARCHIVE REF. NO. 042</span>
              <div className="flex gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#c2c384]" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#e27d60]" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
