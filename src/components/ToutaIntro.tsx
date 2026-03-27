"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BrandText } from './BrandText';

export default function ToutaIntro() {
  const cinemaEase = [0.16, 1, 0.3, 1] as const;

  return (
    <section className="bg-[#fdfbf7] py-32 overflow-hidden border-y border-gray-50">
      <div className="max-w-7xl mx-auto px-8 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          
          {/* Mascot Image Cluster */}
          <motion.div 
            className="relative flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: cinemaEase }}
          >
            <div className="w-80 h-80 md:w-[480px] md:h-[480px] relative">
              {/* Decorative Rings with floating motion */}
              <motion.div 
                className="absolute inset-0 border-[1px] border-[#c2c384]/20 rounded-full"
                animate={{ scale: [1.1, 1.15, 1.1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="absolute inset-0 border-[1px] border-[#e27d60]/10 rounded-full"
                animate={{ scale: [1.25, 1.3, 1.25], opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              
              <div className="w-full h-full rounded-full overflow-hidden border-[16px] border-white shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] relative bg-stone-50">
                <motion.div 
                  className="w-full h-full relative"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.8, ease: cinemaEase }}
                >
                  <Image 
                    src="/mascot-peeking.png"
                    alt="Touta Character" 
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>
              
              {/* Curator Badge */}
              <motion.div 
                className="absolute -bottom-4 -right-2 bg-[#aab5cc] text-white px-8 py-4 rounded-2xl font-sans text-[10px] font-bold tracking-[0.2em] shadow-xl rotate-6 uppercase"
                initial={{ rotate: 0, y: 20 }}
                whileInView={{ rotate: 6, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4, ease: cinemaEase }}
              >
                Meet the Curator
              </motion.div>
            </div>
          </motion.div>
          
          {/* Intro Text Content */}
          <motion.div 
            className="flex flex-col gap-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: cinemaEase }}
          >
            <div className="flex flex-col gap-4">
              <span className="font-sans text-[#c2c384] font-bold tracking-[0.3em] text-xs uppercase">Storyteller</span>
              <h2 className="font-serif text-5xl md:text-6xl font-medium text-[#1a1a1a] leading-tight tracking-tight">
                Hi there, <br/>
                <span className="font-brand italic text-[#c2c384] text-[4rem] md:text-[5.5rem] leading-none">I&apos;m Touta!</span>
              </h2>
            </div>
            
            <p className="font-sans text-xl text-gray-500 leading-relaxed font-light italic border-l-2 border-[#e27d60]/20 pl-8 py-2">
              &quot;Welcome to my little corner of history. I spend my days dusting off old stories and turning them into adventures for curious minds like yours.&quot;
            </p>
            
            <p className="font-sans text-lg text-gray-500 leading-relaxed font-light">
              Whether we&apos;re decoding hieroglyphs or exploring the Nile, every discovery is a treasure waiting to be found. Join me in a world where history comes to life.
            </p>

            <div className="pt-6">
              <motion.button 
                className="bg-[#c2c384] text-white px-12 py-5 rounded-full font-sans font-bold text-sm shadow-xl hover:bg-[#aeb072] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Begin your Journey
              </motion.button>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
