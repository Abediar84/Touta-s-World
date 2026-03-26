"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BrandText } from "./BrandText";

export const ToutaIntro = () => {
  return (
    <section id="about-touta" className="relative w-full bg-[#fdfbf7] py-32 px-6 overflow-hidden">
      {/* Decorative background blob */}
      <div className="absolute top-[-100px] left-[-100px] w-[600px] h-[600px] rounded-full bg-[#c2c384]/15 blur-[120px] pointer-events-none opacity-60" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full bg-[#e8a87c]/15 blur-[120px] pointer-events-none opacity-60" />

      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center gap-20">

        {/* LEFT: Text Content */}
        <motion.div
          className="flex-1 flex flex-col items-start text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Eyebrow */}
          <span className="inline-flex items-center gap-3 mb-8 text-[#c2c384] font-sans font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs">
            <span className="inline-block w-10 h-[1px] bg-[#c2c384]" />
            Meet your companion
          </span>

          {/* Main Heading */}
          <h2 className="font-serif text-5xl md:text-7xl font-medium text-[#1a1a1a] leading-tight mb-8 tracking-tight">
            Hi there, I&apos;m{" "}
            <BrandText className="text-[#e27d60] text-[4rem] md:text-[6rem] leading-none">
              Touta
            </BrandText>
          </h2>

          {/* Introduction Paragraph */}
          <div className="space-y-6 mb-12">
            <p className="font-sans text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl font-light">
              Hi there, my little friend! I&apos;m <BrandText className="text-[#c2c384] text-2xl">Touta</BrandText>,
              your storytelling companion. I&apos;m here to turn your screen into a world full of wonder,
              where stories come alive and every moment feels a little more magical.
            </p>
            <p className="font-sans text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl font-light">
              I don&apos;t just tell stories — I bring them closer to you, making you laugh, imagine,
              and discover new things without even realizing you&apos;re learning.
            </p>
          </div>

          {/* CTA Button */}
          <Link
            href="/meet-touta"
            className="group relative inline-flex items-center justify-center rounded-full bg-[#e27d60] px-10 py-4 md:px-12 md:py-5 font-sans text-sm md:text-base font-bold text-white shadow-xl shadow-[#e27d60]/20 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-[#e27d60]/30 active:scale-95"
          >
            <span>Begin your Journey now</span>
            <span className="absolute right-6 opacity-0 translate-x-[-10px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
              →
            </span>
            <span className="transition-all duration-300 group-hover:pr-6" />
          </Link>
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
