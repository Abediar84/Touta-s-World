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
    <section className={`relative flex min-h-screen w-full items-center justify-center px-6 py-24 ${bgColor}`}>
      <div className={`mx-auto flex w-full max-w-7xl flex-col items-center gap-16 ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
        
        {/* Visual Focus Area */}
        <motion.div 
          className="flex-1 relative w-full aspect-[4/5] rounded-[2rem] flex flex-col items-center justify-center overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
           <Image src={`/${assetPlaceholder}.png`} alt={assetPlaceholder} fill className="object-contain z-10" />
           
           {/* Custom Children injection (e.g., Arabic calligraphy overlay) */}
           {children}
        </motion.div>

        {/* Text / Interaction Area */}
        <motion.div 
          className="flex-1 text-center md:text-left flex flex-col items-center md:items-start"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {subtitle && <span className="inline-block font-sans font-bold tracking-widest uppercase text-sm mb-4 text-white opacity-90">{subtitle}</span>}
          <h2 className="font-serif text-6xl font-bold text-gray-900 md:text-7xl mb-8">
            {title}
          </h2>
          <Link 
            href={`/shop?category=${encodeURIComponent(category)}`}
            className="rounded-full bg-gray-900 px-10 py-4 font-sans text-sm font-bold text-white transition-transform hover:scale-105 shadow-xl"
          >
            Explore Collection
          </Link>
        </motion.div>

      </div>
    </section>
  );
};
