"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

interface ProductShowcaseProps {
  title: ReactNode;
  subtitle?: string;
  bgColor: string;
  reversed?: boolean;
  assetPlaceholder: string;
  category: string;
  children?: ReactNode;
}

export const ProductShowcase = ({ title, subtitle, bgColor, reversed = false, assetPlaceholder, category, children }: ProductShowcaseProps) => {
  return (
    <section className={`relative flex min-h-screen w-full items-center justify-center px-6 py-32 overflow-hidden ${bgColor}`}>
      <div className={`mx-auto flex w-full max-w-7xl flex-col items-center gap-20 ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
        
        {/* Visual Focus Area */}
        <motion.div 
          className="flex-1 relative w-full aspect-[4/5] rounded-[3rem] flex flex-col items-center justify-center overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
           <Image src={`/${assetPlaceholder}.png`} alt={assetPlaceholder} fill className="object-contain z-10 drop-shadow-2xl transition-transform duration-700 hover:scale-105" />
           
           {/* Custom Children injection (e.g., Arabic calligraphy overlay) */}
           {children}
        </motion.div>

        {/* Text / Interaction Area */}
        <motion.div 
          className="flex-1 text-center md:text-left flex flex-col items-center md:items-start"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Eyebrow */}
          {subtitle && (
            <span className="inline-flex items-center gap-3 mb-6 text-white/90 font-sans font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs">
              <span className={`inline-block w-10 h-[1px] bg-white/70 ${reversed ? 'md:hidden' : 'hidden md:inline-block'}`} />
              {subtitle}
              <span className={`inline-block w-10 h-[1px] bg-white/70 ${reversed ? 'hidden md:inline-block' : 'md:hidden'}`} />
            </span>
          )}

          {/* Headline */}
          <h2 className="font-serif text-5xl md:text-7xl font-medium text-[#1a1a1a] mb-12 leading-tight tracking-tight drop-shadow-sm">
            {title}
          </h2>

          {/* Luxury Primary Button */}
          <Link 
            href={`/shop?category=${encodeURIComponent(category)}`}
            className="group relative inline-flex items-center justify-center rounded-full bg-gray-900 px-10 py-4 md:px-12 md:py-5 font-sans text-sm md:text-base font-bold text-white shadow-xl shadow-gray-900/20 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-gray-900/30 active:scale-95"
          >
            <span>Explore Collection</span>
            <span className="absolute right-6 opacity-0 translate-x-[-10px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
              →
            </span>
            <span className="transition-all duration-300 group-hover:pr-6" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
