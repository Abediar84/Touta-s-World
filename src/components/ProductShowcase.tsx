"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const cinemaEase = [0.16, 1, 0.3, 1] as const;

const mockProducts = [
  {
    category: 'SCRIBE ESSENTIALS',
    name: 'The Classic Notebook',
    description: 'Capture your daily discoveries.',
    image: '/Touta-s-World/notebook.png',
    actionText: 'Discover →',
    hoverColor: 'hover:border-[#c2c384]',
    textColor: 'text-[#c2c384]'
  },
  {
    category: 'MYSTERY GAMES',
    name: 'Sphinx Riddle Puzzles',
    description: 'Piecing history back together.',
    image: '/Touta-s-World/puzzle.png',
    actionText: 'Solve →',
    hoverColor: 'hover:border-[#e27d60]',
    textColor: 'text-[#e27d60]'
  },
  {
    category: 'EMBLEMS',
    name: 'Curator\'s Enamel Pins',
    description: 'Small tokens of eternal magic.',
    image: '/Touta-s-World/pins.png',
    actionText: 'Collect →',
    hoverColor: 'hover:border-[#aab5cc]',
    textColor: 'text-[#aab5cc]'
  },
  {
    category: 'CANVAS WORK',
    name: 'Pharaoh\'s Coloring Book',
    description: 'Add your own light to the story.',
    image: '/Touta-s-World/coloring.png',
    actionText: 'Create →',
    hoverColor: 'hover:border-[#e5b3aa]',
    textColor: 'text-[#e5b3aa]'
  }
];

export default function ProductShowcase() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1, ease: cinemaEase } 
    }
  };

  return (
    <section className="py-40 max-w-7xl mx-auto px-8 md:px-20 relative">
      <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
        <div className="flex flex-col gap-6">
          <motion.span 
            className="font-sans text-[#aab5cc] font-bold tracking-[0.4em] text-xs uppercase"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            THE COLLECTION
          </motion.span>
          <motion.h3 
            className="font-serif text-5xl md:text-6xl font-medium tracking-tight text-stone-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: cinemaEase }}
          >
            Artifacts for <span className="italic text-[#e27d60]">Modern Explorers</span>
          </motion.h3>
        </div>
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 1, delay: 0.4 }}
        >
          <Link 
            className="font-sans text-xs font-bold text-stone-400 tracking-[0.2em] border-b border-stone-100 hover:border-[#e27d60] hover:text-[#e27d60] transition-all pb-2 uppercase" 
            href="/shop"
          >
            Explore Full Gallery
          </Link>
        </motion.div>
      </div>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {mockProducts.map((product, idx) => (
          <motion.div key={idx} variants={item}>
            <Link href="/shop" className="block group">
              <div className={`relative bg-white rounded-[2rem] p-8 border border-stone-100 ${product.hoverColor} transition-all duration-700 flex flex-col items-center text-center h-full hover:shadow-2xl hover:shadow-black/5 hover:-translate-y-2`}>
                
                {/* Image Container */}
                <div className="w-full aspect-video relative bg-stone-50 rounded-2xl mb-8 overflow-hidden">
                  <motion.div
                    className="w-full h-full relative"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.8, ease: cinemaEase }}
                  >
                    <Image 
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain transition-all duration-1000" 
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <span className="font-sans text-[10px] tracking-[0.3em] text-stone-300 font-bold uppercase mb-3">
                  {product.category}
                </span>
                <h4 className="font-serif text-2xl text-stone-800 mb-3">{product.name}</h4>
                <p className="font-sans text-sm text-stone-400 leading-relaxed font-light px-2">
                  {product.description}
                </p>
                
                {/* Action Link */}
                <div className="mt-8 relative h-6 overflow-hidden w-full">
                  <motion.div 
                    className="absolute inset-0 flex flex-col items-center justify-center transition-transform duration-500 group-hover:-translate-y-full"
                  >
                     <span className="h-6 flex items-center text-stone-200">View Archive</span>
                     <span className={`h-6 flex items-center ${product.textColor} font-bold`}>{product.actionText}</span>
                  </motion.div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Background Decorative Motif */}
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#e5b3aa]/5 blur-[100px] -z-10 rounded-full" />
    </section>
  );
}
