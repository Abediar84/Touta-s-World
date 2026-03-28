"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BrandText } from "@/components/BrandText";
import Navbar from "@/components/Navbar";
import BrandFooter from "@/components/BrandFooter";
import { MagneticButton } from "@/components/MagneticButton";

const cinemaEase = [0.16, 1, 0.3, 1] as const;

const storyChapters = [
  {
    id: 1,
    title: "Magical Journeys Across Egypt",
    text: "One of my favorite things to do is take you on magical journeys across Egypt. Together, we will explore its most beautiful places, from the great pyramids to the secrets of the pharaohs, walking through history as if we were really there. I will help you uncover hidden stories, mysterious legends, and fascinating traditions, so you can see Egypt not just as a place, but as a world full of wonder waiting to be discovered.",
    image: "/Touta-s-World/The_Story_of_Touta_2.png",
    accent: "#c2c384",
  },
  {
    id: 2,
    title: "Learning Without Limits",
    text: "I also love helping you learn new things in a fun and exciting way. Don’t worry, it won’t feel like school at all. With me, lessons become adventures, and ideas turn into stories you’ll actually enjoy. Before you know it, you’ll be learning while smiling.",
    image: "/Touta-s-World/The_Story_of_Touta_3.png",
    accent: "#e8a87c",
  },
  {
    id: 3,
    title: "Little Hero for the Earth",
    text: "And because I care about your future, I’ll gently show you how to take care of our planet. Together, we’ll learn about recycling and discover how small actions can make a big difference. We’ll even create fascinating little projects using materials the world thought were no longer useful, turning them into something fun and full of life. Think of it as becoming a tiny hero for the Earth, and yes, heroes can start small.",
    image: "/Touta-s-World/The_Story_of_Touta_4.png",
    accent: "#aab5cc",
  },
  {
    id: 4,
    title: "Magical Tales & Giggle Moments",
    text: "Of course, we can’t forget the fun. I’m here to entertain you with magical tales, exciting adventures, and moments that make you giggle. Sometimes we’ll go on thrilling journeys, and other times we’ll just relax with a cozy story. Either way, I promise you’ll never be bored with me around.",
    image: "/Touta-s-World/The_Story_of_Touta_5.png",
    accent: "#e5b3aa",
  },
  {
    id: 5,
    title: "Your Adventure Partner",
    text: "So whenever you see me, remember, I’m not just here to tell stories. I’m here to be your little friend, your adventure partner, and your guide to a world where learning feels like magic. Are you ready?",
    image: "/Touta-s-World/The_Story_of_Touta_6.png",
    accent: "#c2c384",
  },
];

const LetterReveal = ({ text, className }: { text: string; className: string }) => {
  return (
    <h1 className={className}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: i * 0.05,
            ease: cinemaEase
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </h1>
  );
};

export default function MeetToutaPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <main ref={containerRef} className="min-h-screen w-full bg-[#fafafa] overflow-hidden leading-relaxed scroll-smooth">
      <Navbar />

      {/* 1. Cinematic Hero Intro */}
      <section className="relative w-full h-[85vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-gradient-to-br from-[#fdfbf7] to-[#f5f1ea]">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 pointer-events-none opacity-30">
           <motion.div 
             className="absolute top-20 right-20 w-80 h-80 rounded-full bg-[#c2c384]/20 blur-[100px]"
             animate={{ scale: [1, 1.2, 1] }}
             transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
           />
           <motion.div 
             className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-[#e27d60]/10 blur-[120px]"
             animate={{ scale: [1.2, 1, 1.2] }}
             transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
           />
        </div>

        <motion.div
          className="relative z-10 max-w-4xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: cinemaEase }}
        >
          {/* Peeking Mascot with subtle jump */}
          <motion.div 
            className="relative w-48 h-48 md:w-72 md:h-72 mx-auto mb-10"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.2, ease: cinemaEase }}
          >
            <Image src="/Touta-s-World/mascot-peeking.png" alt="Touta mascot" fill className="object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.1)]" priority />
          </motion.div>

          <LetterReveal 
            text="The Story of" 
            className="font-serif text-5xl md:text-8xl font-light text-[#1a1a1a] leading-tight tracking-tight mb-4" 
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8, ease: cinemaEase }}
          >
             <BrandText className="text-[#e27d60] text-[4.5rem] md:text-[8rem] leading-none mb-8 inline-block select-none">Touta</BrandText>
          </motion.div>
          
          <motion.p 
            className="font-sans text-xl md:text-2xl text-stone-500 leading-relaxed font-light max-w-2xl mx-auto italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1.2 }}
          >
            &quot;Every discovery is a treasure waiting to be found.&quot;
          </motion.p>
        </motion.div>

        {/* Scroll Hint */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
           <span className="font-sans text-[10px] tracking-[0.5em] uppercase font-bold text-stone-900">Scroll Journey</span>
        </motion.div>
      </section>

      {/* 2. Enhanced Story Chapters */}
      <section className="w-full px-6 py-40 md:px-20 bg-white relative">
        {/* Subtle noise/texture overlay */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('/stone-texture.png')] bg-repeat" />
        
        <div className="max-w-7xl mx-auto flex flex-col gap-48">
          {storyChapters.map((chapter, idx) => {
            return (
              <StoryBlock key={chapter.id} chapter={chapter} idx={idx} />
            );
          })}
        </div>
      </section>

      {/* 3. Final Cinematic CTA */}
      <section className="w-full h-screen flex items-center justify-center text-center relative overflow-hidden bg-stone-900">
        <div className="absolute inset-0 z-0">
           <Image src="/Touta-s-World/hero-pyramids.png" alt="Pyramids" fill className="object-cover opacity-20 scale-110" />
           <div className="absolute inset-0 bg-stone-900/60 mix-blend-multiply" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: cinemaEase }}
          className="relative z-10 max-w-4xl px-6"
        >
          <span className="text-[#c2c384] font-sans font-bold tracking-[0.4em] text-xs uppercase mb-8 block">THE ADVENTURE AWAITS</span>
          <h2 className="font-serif text-5xl md:text-[6rem] font-bold text-white mb-10 leading-tight tracking-tighter">
            Ready to explore <br/> <BrandText className="text-[#e27d60] italic">Touta</BrandText>&apos;s World?
          </h2>
          <p className="font-sans text-xl text-stone-400 mb-16 font-light max-w-xl mx-auto leading-relaxed">
            From the banks of the Nile to your bookshelf — discover a collection crafted for modern explorers.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <MagneticButton>
              <Link
                href="/shop"
                className="bg-white text-[#99452c] px-14 py-6 rounded-full font-sans font-bold text-lg hover:bg-stone-100 transition-colors shadow-2xl"
              >
                Explore the Gallery
              </Link>
            </MagneticButton>
            <Link href="/team" className="text-white font-sans font-bold border-b border-stone-700 hover:border-white transition-all pb-1 tracking-widest text-xs uppercase">
               Meet the Creators
            </Link>
          </div>
        </motion.div>
      </section>
      
      <BrandFooter />
    </main>
  );
}

const StoryBlock = ({ chapter, idx }: { chapter: any; idx: number }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 0.95]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={ref}
      className={`flex flex-col ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-16 md:gap-32`}
      style={{ opacity: textOpacity }}
    >
      {/* Dynamic Image Container */}
      <div className="flex-1 w-full filter drop-shadow-[0_60px_100px_-20px_rgba(0,0,0,0.15)]">
        <motion.div
          style={{ scale: imgScale }}
          className="relative aspect-[4/5] md:aspect-[3/4] rounded-[2.5rem] overflow-hidden"
        >
          <motion.div style={{ y: imgY }} className="absolute inset-0">
             <Image src={chapter.image} alt={chapter.title} fill className="object-contain" />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-0 border-[1px] border-white/20 pointer-events-none" />
        </motion.div>
      </div>

      {/* Narrative Container */}
      <div className="flex-1 space-y-10">
        <div className="space-y-4">
          <motion.span
            className="inline-flex items-center gap-4 font-sans font-bold uppercase tracking-[0.4em] text-[10px]"
            style={{ color: chapter.accent }}
          >
            <span className="w-12 h-[1px]" style={{ backgroundColor: chapter.accent, opacity: 0.3 }} />
            CHAPTER 0{chapter.id}
          </motion.span>
          <h2 className="font-serif text-4xl md:text-5xl font-medium text-stone-800 leading-tight tracking-tight">
            {chapter.title}
          </h2>
        </div>
        <p className="font-sans text-lg md:text-xl text-stone-500 leading-relaxed font-light first-letter:text-4xl first-letter:font-serif first-letter:mr-1 first-letter:float-left first-letter:text-stone-300">
          {chapter.text}
        </p>
        <div className="pt-8">
           <div className="w-16 h-0.5 bg-stone-100" />
        </div>
      </div>
    </motion.div>
  );
};
