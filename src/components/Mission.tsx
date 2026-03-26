"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { BrandText } from "./BrandText";

export const Mission = () => {
  return (
    <section className="relative flex min-h-[60vh] w-full items-center justify-center bg-[#c2c384] px-6 py-32 text-center overflow-hidden">
      <div className="mx-auto max-w-4xl relative z-10">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-serif text-4xl font-medium leading-relaxed text-[#111111] md:text-5xl lg:text-6xl italic">
            &quot;If we were still kids,<br/>
            <BrandText className="text-white not-italic">Touta</BrandText> would be the place where<br/>
            <span className="font-script text-6xl md:text-7xl lg:text-8xl not-italic ml-4 text-white">learning felt like magic.</span>&quot;
          </h2>
        </motion.div>
      </div>

      {/* Decorative Mascot Peeking Element */}
      <motion.div 
        className="absolute bottom-0 right-10 md:right-32 w-48 h-48 flex flex-col items-center justify-center"
        initial={{ y: 200 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <Image src="/mascot-peeking.png" alt="Touta Mascot Peeking" fill className="object-contain" />
      </motion.div>
    </section>
  );
};
