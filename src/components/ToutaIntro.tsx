"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BrandText } from "./BrandText";

export const ToutaIntro = () => {
  return (
    <section id="about-touta" className="relative w-full bg-[#fdfbf7] py-24 px-6 overflow-hidden">
      {/* Decorative background blob */}
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] rounded-full bg-[#c2c384]/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full bg-[#e8a87c]/10 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center gap-16">

        {/* LEFT: Text Content */}
        <motion.div
          className="flex-1 flex flex-col items-start text-left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Eyebrow */}
          <span className="inline-flex items-center gap-2 mb-6 text-[#c2c384] font-sans font-bold uppercase tracking-widest text-sm">
            <span className="inline-block w-8 h-[2px] bg-[#c2c384]" />
            Meet your companion
          </span>

          {/* Main Heading */}
          <h2 className="font-serif text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-8">
            Hi there, I&apos;m{" "}
            <BrandText className="text-[#e27d60] text-6xl md:text-8xl">
              Touta
            </BrandText>
          </h2>

          {/* Introduction Paragraph */}
          <p className="font-sans text-xl text-gray-600 leading-relaxed max-w-xl mb-10">
            Hi there, my little friend! I&apos;m <BrandText className="text-[#c2c384]">Touta</BrandText>,
            your storytelling companion. I&apos;m here to turn your screen into a world full of wonder,
            where stories come alive and every moment feels a little more magical.
          </p>
          <p className="font-sans text-xl text-gray-600 leading-relaxed max-w-xl mb-12">
            I don&apos;t just tell stories — I bring them closer to you, making you laugh, imagine,
            and discover new things without even realizing you&apos;re learning.
          </p>

          {/* CTA Button */}
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/meet-touta"
              className="inline-flex items-center gap-3 rounded-full bg-[#e27d60] px-10 py-5 font-sans text-lg font-bold text-white shadow-xl shadow-[#e27d60]/30 transition-all hover:bg-[#c9694f]"
            >
              Begin your Journey now with{" "}
              <BrandText className="text-white text-2xl leading-none">Touta</BrandText>
              <span className="text-2xl">✨</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* RIGHT: Touta Character Mascot */}
        <motion.div
          className="flex-1 flex justify-center items-end"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        >
          {/* Character container with decorative ring */}
          <div className="relative w-[380px] h-[480px] md:w-[480px] md:h-[580px]">
            {/* Decorative glowing ring behind mascot */}
            <div className="absolute inset-[-20px] rounded-full bg-gradient-to-br from-[#c2c384]/20 to-[#e8a87c]/20 blur-[30px]" />
            <div className="absolute inset-0 rounded-[40px] border-2 border-dashed border-[#c2c384]/30" />

            <Image
              src="/mascot-peeking.png"
              alt="Touta character mascot"
              fill
              className="object-contain z-10 drop-shadow-2xl"
              sizes="(max-width: 768px) 380px, 480px"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};
