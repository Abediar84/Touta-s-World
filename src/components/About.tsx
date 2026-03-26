"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { BrandText } from "./BrandText";

export const About = () => {
  return (
    <section id="about-team" className="relative flex min-h-screen w-full items-center justify-center bg-[#fdfbf7] px-6 py-32 overflow-hidden">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-20 md:flex-row">
        
        {/* Left Side: Classroom Asset */}
        <motion.div 
          className="flex-1 w-full aspect-[4/3] rounded-[3rem] flex flex-col items-center justify-center relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
           {/* Glowing Portal Element behind the image */}
           <div className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c2c384]/20 blur-[80px]" />
           
           <Image src="/touta_team_1.png" alt="Touta Team" fill className="object-contain z-10 drop-shadow-2xl" />
        </motion.div>

        {/* Right Side: Copy */}
        <motion.div 
          className="flex-1 text-left"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Eyebrow */}
          <span className="inline-flex items-center gap-3 mb-6 text-[#c2c384] font-sans font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs">
            <span className="inline-block w-10 h-[1px] bg-[#c2c384]" />
            The Team behind <BrandText>Touta</BrandText>
          </span>
          
          {/* Main Heading */}
          <h2 className="font-serif text-5xl md:text-6xl font-medium text-[#1a1a1a] leading-tight mb-8 tracking-tight">
            Get to know<br/>our story.
          </h2>
          
          <p className="font-sans text-lg md:text-xl text-gray-600 leading-relaxed font-light mb-10 max-w-lg">
            Step into <BrandText className="text-[#c2c384] text-xl">Touta</BrandText>&apos;s world, where every product is a portal to imagination. 
            We design experiences that blend the rich history of our culture with the 
            boundless magic of childhood learning.
          </p>
          
          <button className="group relative inline-flex items-center justify-center rounded-full border border-gray-300 bg-transparent px-10 py-4 font-sans text-sm font-bold text-gray-700 transition-all duration-300 hover:border-gray-900 hover:bg-gray-900 hover:text-white hover:scale-[1.03] active:scale-95 shadow-sm hover:shadow-xl">
            Read More
          </button>
        </motion.div>

      </div>

    </section>
  );
};
