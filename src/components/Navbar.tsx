"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "The World", href: "/meet-touta" },
    { name: "Collection", href: "/shop" },
    { name: "Chronicles", href: "/team" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-7xl transition-all duration-500 rounded-full px-6 md:px-10 py-4 shadow-[0_32px_64px_-4px_rgba(27,28,26,0.06)] backdrop-blur-2xl border border-white/20 ${
        isScrolled 
          ? "bg-white/80 dark:bg-stone-900/80 mt-2" 
          : "bg-white/70 dark:bg-stone-900/70 mt-6"
      }`}
    >
      <div className="flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="group flex-shrink-0">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image 
              src="/Touta-s-World/logo.png" 
              alt="Touta's World Logo" 
              width={160} 
              height={50} 
              className="h-10 md:h-12 w-auto object-contain"
              priority
            />
          </motion.div>
        </Link>

        {/* Desktop Links - Matching Stitch Font Headline Style */}
        <div className="hidden md:flex items-center gap-10 font-serif font-light tracking-tight">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="relative group text-stone-600 dark:text-stone-400 hover:text-[#E27D60] transition-colors"
            >
              <motion.span 
                className="text-sm md:text-base"
                whileHover={{ y: -1 }}
              >
                {link.name}
              </motion.span>
              <motion.span 
                className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-[#E27D60] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"
              />
            </Link>
          ))}
        </div>

        {/* Action Button */}
        <div className="flex items-center">
            <Link href="/contact" className="hidden lg:block">
                <button className="bg-[#99452c] text-white px-8 py-2.5 rounded-full font-sans text-sm font-semibold tracking-wide hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_12px_24px_-4px_rgba(153,69,44,0.2)]">
                    Join the Collection
                </button>
            </Link>
          
            {/* Mobile Toggle */}
            <div className="lg:hidden ml-4 cursor-pointer p-2">
              <div className="w-6 h-px bg-stone-900 dark:bg-stone-100 mb-1.5" />
              <div className="w-6 h-px bg-stone-900 dark:bg-stone-100" />
            </div>
        </div>
      </div>
    </motion.nav>
  );
}
