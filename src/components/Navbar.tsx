"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const cinemaEase = [0.16, 1, 0.3, 1] as const;

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isSolid = isScrolled || pathname !== "/";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home",        href: "/" },
    { name: "Meet Touta", href: "/meet-touta" },
    { name: "Shop",        href: "/shop" },
    { name: "Our Team",    href: "/team" },
    { name: "Contact",     href: "/contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: cinemaEase }}
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-7xl transition-all duration-500 rounded-full px-6 md:px-10 py-4 shadow-[0_32px_64px_-4px_rgba(27,28,26,0.06)] backdrop-blur-[32px] border border-white/10 ${
          isSolid
            ? "bg-white/70 dark:bg-stone-900/70 mt-2"
            : "bg-white/10 dark:bg-stone-900/10 mt-6"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="group flex-shrink-0">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4, ease: cinemaEase }}
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

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10 font-serif font-light tracking-tight">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative group transition-colors ${
                  isSolid
                    ? "text-stone-700 hover:text-[#E27D60]"
                    : "text-white/85 hover:text-white"
                }`}
              >
                <motion.span
                  className="text-sm md:text-[15px]"
                  whileHover={{ y: -1 }}
                >
                  {link.name}
                </motion.span>
                <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-[#E27D60] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
              </Link>
            ))}
          </div>

          {/* Action Button + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link href="/contact" className="hidden lg:block">
              <button className="bg-[#99452c] text-white px-8 py-2.5 rounded-full font-sans text-sm font-semibold tracking-wide hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_12px_24px_-4px_rgba(153,69,44,0.25)]">
                Join the Collection
              </button>
            </Link>

            {/* Mobile menu toggle */}
            <button
              id="mobile-menu-toggle"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((v) => !v)}
              className="lg:hidden flex flex-col gap-[5px] p-2 cursor-pointer"
            >
              <motion.div
                animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 7 : 0 }}
                className={`w-6 h-[1.5px] ${isSolid ? "bg-stone-900" : "bg-white"} origin-center`}
              />
              <motion.div
                animate={{ opacity: menuOpen ? 0 : 1 }}
                className={`w-6 h-[1.5px] ${isSolid ? "bg-stone-900" : "bg-white"}`}
              />
              <motion.div
                animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -7 : 0 }}
                className={`w-6 h-[1.5px] ${isSolid ? "bg-stone-900" : "bg-white"} origin-center`}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: cinemaEase }}
            className="fixed top-0 left-0 right-0 z-40 pt-44 pb-10 px-8 bg-stone-950/95 backdrop-blur-xl shadow-2xl flex flex-col gap-6 lg:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-serif text-2xl text-white/80 hover:text-[#e27d60] transition-colors"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <div className="border-t border-white/10 pt-6 mt-2">
              <Link href="/contact" onClick={() => setMenuOpen(false)}>
                <button className="w-full bg-[#99452c] text-white px-8 py-3.5 rounded-full font-sans text-sm font-semibold tracking-wide">
                  Join the Collection
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
