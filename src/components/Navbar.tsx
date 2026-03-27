"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { BrandText } from "./BrandText";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Meet Touta", href: "/meet-touta" },
    { name: "Shop", href: "/shop" },
    { name: "Team", href: "/team" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-8 md:px-20 ${
        isScrolled 
          ? "py-4 bg-white/80 backdrop-blur-xl shadow-sm border-b border-gray-100" 
          : "py-8 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="group">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <BrandText className="text-3xl md:text-4xl text-[#1a1a1a] group-hover:text-[#e27d60] transition-colors">
              Touta
            </BrandText>
          </motion.div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="relative group"
            >
              <motion.span 
                className="font-sans text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-gray-500 group-hover:text-[#e27d60] transition-colors"
                whileHover={{ y: -2 }}
              >
                {link.name}
              </motion.span>
              <motion.span 
                className="absolute -bottom-2 left-0 right-0 h-[1.5px] bg-[#e27d60] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"
              />
            </Link>
          ))}
        </div>

        {/* Mobile Toggle Placeholder */}
        <div className="md:hidden">
          <div className="w-8 h-px bg-gray-900 mb-2" />
          <div className="w-8 h-px bg-gray-900" />
        </div>
      </div>
    </motion.nav>
  );
}
