"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { BrandText } from "./BrandText";

export const About = () => {
  return (
    <section id="about-team" className="relative flex min-h-screen w-full items-center justify-center bg-[#fdfbf7] px-6 pt-24 pb-4">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-16 md:flex-row">
        
        {/* Left Side: Classroom Asset */}
        <motion.div 
          className="flex-1 w-full aspect-[4/3] rounded-[2rem] flex flex-col items-center justify-center relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
           {/* Glowing Portal Element behind the image */}
           <div className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c2c384]/30 blur-[60px]" />
           
           <Image src="/touta_team_1.png" alt="Touta Team" fill className="object-contain z-10" />
        </motion.div>

        {/* Right Side: Copy */}
        <motion.div 
          className="flex-1 text-left"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block text-[#c2c384] font-sans font-bold tracking-widest uppercase text-sm mb-4">The Team behind <BrandText>Touta</BrandText></span>
          <h2 className="font-serif text-5xl font-bold text-gray-900 md:text-6xl mb-6">
            Get to know<br/>our story.
          </h2>
          <p className="font-sans text-lg text-gray-600 leading-relaxed mb-8">
            Step into <BrandText>Touta</BrandText>&apos;s world, where every product is a portal to imagination. 
            We design experiences that blend the rich history of our culture with the 
            boundless magic of childhood learning.
          </p>
          <button className="rounded-full border-2 border-gray-900 bg-transparent px-8 py-3 font-sans text-sm font-bold text-gray-900 transition-colors hover:bg-gray-900 hover:text-white">
            Read More
          </button>
        </motion.div>

      </div>

    </section>
  );
};
