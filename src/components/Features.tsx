"use client";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import Image from "next/image";
import { BrandText } from "./BrandText";

const products = [
  { category: "Notebooks", title: "Touta Explorer Notebook", price: "45 EGP", imageColor: "bg-orange-50 border-orange-100", assetSrc: "/notebook.png" },
  { category: "Puzzles", title: "Wooden Pyramid Puzzle", price: "120 EGP", imageColor: "bg-blue-50 border-blue-100", assetSrc: "/puzzle.png" },
  { category: "Coloring Books", title: "Nature Adventures", price: "35 EGP", imageColor: "bg-green-50 border-green-100", assetSrc: "/coloring-book.png" },
  { category: "Pins", title: "Touta Enamel Pin", price: "25 EGP", imageColor: "bg-yellow-50 border-yellow-100", assetSrc: "/pin.png" },
];

export const Features = () => {
  return (
    <section className="w-full bg-[#fafafa] py-32 px-6">
      <div className="mx-auto max-w-7xl">
        
        <div className="mb-16 text-center">
          <motion.h2 
            className="font-serif text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Shop with <BrandText>Touta</BrandText>
          </motion.h2>
          <p className="font-sans text-gray-500 max-w-xl mx-auto">Discover our collection of beautifully crafted stationery, puzzles, and accessories inspired by the magical world of <BrandText>Touta</BrandText>.</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {products.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white p-4 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className={`relative mb-6 h-64 w-full rounded-xl ${item.imageColor} border flex items-center justify-center overflow-hidden`}>
                <div className="absolute top-4 right-4 bg-white/50 backdrop-blur-sm p-2 rounded-full hover:bg-white text-gray-600 transition-colors z-20">
                  <Heart size={20} />
                </div>
                
                {/* Asset Placeholder */}
                <span className="font-sans text-xs font-medium text-gray-400 z-10">Export to {item.assetSrc}</span>
                {/* <Image src={item.assetSrc} alt={item.title} fill className="object-contain p-4 transition-transform group-hover:scale-105" /> */}
              </div>
              
              <div className="flex flex-col flex-grow">
                <span className="text-xs font-sans font-semibold text-[#c2c384] mb-2 uppercase tracking-wider">{item.category}</span>
                <h3 className="font-serif mb-2 text-xl font-bold text-gray-900">
                  {item.title.split("Touta").map((part, i, arr) => (
                    <span key={i}>
                      {part}
                      {i < arr.length - 1 && <BrandText>Touta</BrandText>}
                    </span>
                  ))}
                </h3>
                <div className="mt-auto flex items-center justify-between pt-4">
                  <p className="font-sans text-lg font-medium text-gray-800">{item.price}</p>
                  <button className="rounded-full bg-[#c2c384] px-5 py-2 font-sans text-sm font-medium text-white transition-colors hover:bg-[#aeb073]">
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
