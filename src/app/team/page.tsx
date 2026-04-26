"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BrandText } from "@/components/BrandText";
import Navbar from "@/components/Navbar";
import BrandFooter from "@/components/BrandFooter";

const cinemaEase = [0.16, 1, 0.3, 1] as const;

const TEAM_MEMBERS = [
  { name: "Tasneem", image: "/Touta-s-World/Team_Tasneem.png" },
  { name: "Jana", image: "/Touta-s-World/Team_Jana.png" },
  { name: "Malak El Gendy", image: "/Touta-s-World/Team_Malak_El_Gendy.png" },
  { name: "Fares", image: "/Touta-s-World/Team_Fares.png" },
  { name: "Youssef Arafa", image: "/Touta-s-World/Team_Youssef_arafa.png" },
  { name: "Habiba (Toya)", image: "/Touta-s-World/Team_Habiba.png" },
  { name: "Jessie", image: "/Touta-s-World/Team_Jessie.png" },
  { name: "Rosette", image: "/Touta-s-World/Team_Rosette.png" },
  { name: "Nour Al Saqaf", image: "/Touta-s-World/Team_Nour_Al_Saqaf.png" },
  { name: "Rawan", image: "/Touta-s-World/Team_Rawan.png" },
  { name: "Raneem", image: "/Touta-s-World/Team_Raneem.png" },
  { name: "Malak Serry", image: "/Touta-s-World/Team_Malak_Serry.png" },
  { name: "Shahd", image: "/Touta-s-World/Team_Shahd_Ahmed.png" },
  { name: "Nour Hassan", image: "/Touta-s-World/Team_Nour_Hassan.png" },
  { name: "Mohamed Abo Elenien", image: "/Touta-s-World/Team_Mohamed_Abo_Elenien.png" },
  { name: "Mohamed Ahmed", image: "/Touta-s-World/Team_Mohamed_Ahmed.png" },
  { name: "Nourine", image: "/Touta-s-World/Team_Nourine.png" }
];

export default function TeamPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <main ref={containerRef} className="min-h-screen w-full bg-[#fafafa] overflow-hidden leading-relaxed scroll-smooth">
      <Navbar />
      
      {/* 1. Cinematic Parallax Hero */}
      <section className="relative w-full h-[60vh] md:h-[80vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        {/* Parallax Background Wrapper - Landscape Optimized */}
        <motion.div 
          style={{ y: parallaxY }} 
          className="absolute inset-0 z-0"
        >
          <Image 
            src="/Touta-s-World/touta_team_1.png" 
            alt="The Team Behind Touta" 
            fill 
            className="object-cover scale-105"
            priority
          />
          {/* Grainy Texture Overlay */}
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#fafafa] via-transparent to-transparent" />
        </motion.div>

        <motion.div
          style={{ opacity: headerOpacity }}
          className="relative z-10 max-w-4xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: cinemaEase }}
        >
          <motion.span 
            className="inline-flex items-center gap-3 mb-8 text-white/70 font-sans font-bold uppercase tracking-[0.5em] text-[10px]"
            initial={{ letterSpacing: "1em", opacity: 0 }}
            animate={{ letterSpacing: "0.5em", opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
          >
            <span className="w-12 h-[1px] bg-white/30" />
            A COLLECTIVE VISION
            <span className="w-12 h-[1px] bg-white/30" />
          </motion.span>
          <h1 className="font-serif text-6xl md:text-[7rem] font-bold text-white mb-8 leading-[0.9] tracking-tighter">
            The Team <br/>Behind <BrandText className="text-[#c2c384] italic !font-normal">Touta</BrandText>
          </h1>
          <p className="font-sans text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mx-auto font-light tracking-wide">
            Where Egyptian heritage meets <span className="italic font-medium text-white">modern curiosity</span> through the eyes of {TEAM_MEMBERS.length} creators.
          </p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent" />
        </motion.div>
      </section>

      {/* 2. Editorial Narrative Section (Staggered Layout) */}
      <section className="relative w-full py-32 px-6 md:px-20 bg-[#fafafa]">
        {/* Artistic Background Element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#c2c384]/5 -skew-x-12 transform origin-top pointer-events-none" />
        
        <div className="max-w-7xl mx-auto space-y-40">
          
          {/* Chapter One: The Genesis */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <span className="font-sans text-[#c2c384] font-bold text-xs uppercase tracking-[.3em]">CHAPTER 01</span>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight text-stone-800">
                Born from <br/> a Shared Dream
              </h2>
              <p className="font-sans text-lg text-stone-600 leading-relaxed font-light">
                We are a team of graduating students from the 2026 CIC, majoring in Public Relations and Advertising. What began as a graduation project grew into a shared mission to bring magic back to learning.
              </p>
            </motion.div>
            <motion.div 
              className="relative aspect-video rounded-[2rem] overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: cinemaEase }}
            >
              <Image src="/Touta-s-World/touta_story_hero.png" alt="Genesis" fill className="object-contain" />
              <div className="absolute inset-0 border-[20px] border-white/10 pointer-events-none rounded-[2rem]" />
            </motion.div>
          </div>

          {/* Chapter Two: The Mission (Asymmetric) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center flex-row-reverse">
             <motion.div 
              className="md:order-2 space-y-8 pl-0 md:pl-16"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="font-sans text-[#e27d60] font-bold text-xs uppercase tracking-[.3em]">CHAPTER 02</span>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight text-stone-800">
                Transforming <br/> Screen Time
              </h2>
              <p className="font-sans text-lg text-stone-600 leading-relaxed font-light">
                As a team, we poured our hearts into building something that could transform everyday screen time into a more meaningful experience. We believe children should leave every discovery happier, more curious, and more connected to their world.
              </p>
            </motion.div>
            <motion.div 
              className="md:order-1 relative p-12 bg-white rounded-[3rem] shadow-xl border border-stone-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
               <div className="relative aspect-video w-full mb-8">
                  <Image src="/Touta-s-World/touta_team_kids.svg" alt="Mission" fill className="object-contain" />
               </div>
               <div className="text-center italic text-stone-400 font-sans text-sm tracking-widest uppercase">
                  Creativity in Motion
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. The "Seventeen" Mosaic Tribute */}
      <section className="w-full py-32 bg-stone-900 overflow-hidden relative">
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/stone-texture.png')] bg-repeat" />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <motion.h2 
              className="font-serif text-5xl md:text-7xl text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              The {TEAM_MEMBERS.length}
            </motion.h2>
            <p className="text-stone-400 font-sans tracking-widest uppercase text-xs">A Collective of Visionaries & Storytellers</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {TEAM_MEMBERS.map((member, i) => (
              <motion.div
                key={member.name + i}
                className="group relative aspect-[3/4] bg-stone-800/50 rounded-2xl border border-stone-800 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="absolute inset-0 flex items-center justify-center opacity-70 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700">
                   <Image 
                     src={member.image} 
                     alt={member.name} 
                     fill 
                     className="object-cover group-hover:scale-110 transition-transform duration-700" 
                   />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-white/50 font-sans text-xs tracking-widest mb-1 block">{(i + 1).toString().padStart(2, '0')}</span>
                    <span className="text-white font-serif text-lg leading-tight mb-1">{member.name}</span>
                    <span className="text-[#c2c384] font-sans text-[10px] uppercase tracking-[0.2em] font-bold">2026 CIC</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Closing Vision */}
      <section className="w-full py-40 bg-[#fafafa] relative flex flex-col items-center text-center px-6">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-6xl mb-12 block">✨</span>
          <h2 className="font-serif text-5xl font-bold text-stone-900 mb-8 italic">
            &quot;Learning should feel like <span className="text-[#c2c384]">magic</span>.&quot;
          </h2>
          <p className="font-sans text-xl text-stone-500 font-light mb-16 leading-relaxed">
            {TEAM_MEMBERS.length} students dedicated themselves to this project, giving their time, creativity, and passion to build something that could become a beautiful part of a child&apos;s life.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
             <Link href="/contact" className="rounded-full bg-[#1a1a1a] text-white px-12 py-5 font-sans font-bold hover:scale-105 transition-transform shadow-xl">
                Collaborate With Us
             </Link>
             <a href="mailto:toutaaa546@gmail.com" className="text-stone-600 font-sans font-bold border-b-2 border-stone-200 hover:border-[#c2c384] transition-colors pb-1">
                toutaaa546@gmail.com
             </a>
          </div>
        </motion.div>
      </section>

      <BrandFooter />
    </main>
  );
}
