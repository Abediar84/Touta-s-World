"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

const cinemaEase = [0.16, 1, 0.3, 1] as const;

export default function ToutaIntro() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const mascotY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const ring1Scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1]);
  const ring2Scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 1.2]);

  return (
    <section ref={ref} className="bg-[#fdfbf7] py-40 overflow-hidden border-y border-stone-50 relative">
      <div className="max-w-7xl mx-auto px-8 md:px-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          
          {/* Mascot Image Cluster */}
          <div className="relative flex justify-center">
            <div className="w-80 h-80 md:w-[480px] md:h-[480px] relative">
              {/* Decorative Rings with scroll-linked floating motion */}
              <motion.div 
                style={{ scale: ring1Scale }}
                className="absolute inset-0 border-[1px] border-[#c2c384]/20 rounded-full"
              />
              <motion.div 
                style={{ scale: ring2Scale }}
                className="absolute inset-0 border-[1px] border-[#e27d60]/10 rounded-full"
              />
              
              <motion.div 
                style={{ y: mascotY }}
                className="w-full h-full rounded-full overflow-hidden border-[16px] border-white shadow-[0_60px_100px_-20px_rgba(0,0,0,0.1)] relative bg-stone-50"
              >
                <div className="w-full h-full relative group">
                  <Image 
                    src="/Touta-s-World/mascot-peeking.png"
                    alt="Touta Character" 
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/10 via-transparent to-transparent pointer-events-none" />
                </div>
              </motion.div>
              
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
          </div>
          
          {/* Intro Text Content */}
          <motion.div 
            className="flex flex-col gap-10"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: cinemaEase }}
          >
            <div className="flex flex-col gap-4">
              <span className="font-sans text-[#c2c384] font-bold tracking-[0.4em] text-xs uppercase">STORYTELLER</span>
              <h2 className="font-serif text-5xl md:text-7xl font-medium text-[#1a1a1a] leading-tight tracking-tight">
                Hi there, <br/>
                <span className="font-brand italic text-[#c2c384] text-[4rem] md:text-[6.5rem] leading-none">I&apos;m Touta!</span>
              </h2>
            </div>
            
            <p className="font-sans text-xl text-stone-500 leading-relaxed font-light italic border-l-2 border-[#e27d60]/20 pl-8 py-2">
              &quot;Welcome to my little corner of history. I spend my days dusting off old stories and turning them into adventures for curious minds like yours.&quot;
            </p>
            
            <p className="font-sans text-lg text-stone-600 leading-relaxed font-light">
              Whether we&apos;re decoding hieroglyphs or exploring the Nile, every discovery is a treasure waiting to be found. Join me in a world where history comes to life.
            </p>

            <div className="pt-6">
              <Link href="/shop">
                <motion.button 
                  className="bg-[#c2c384] text-white px-12 py-5 rounded-full font-sans font-bold text-sm shadow-2xl hover:bg-[#aeb072] transition-all group relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                   <span className="relative z-10">Begin your Journey</span>
                   <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
          
        </div>
      </div>
      
      {/* Decorative SVG Motif Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none">
         <svg viewBox="0 0 100 100" className="w-full h-full fill-current text-[#c2c384]">
            <path d="M0,50 Q25,30 50,50 T100,50" fill="none" stroke="currentColor" strokeWidth="0.2" />
            <path d="M0,60 Q25,40 50,60 T100,60" fill="none" stroke="currentColor" strokeWidth="0.2" />
         </svg>
      </div>
    </section>
  );
}
