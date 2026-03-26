"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Meet Touta", href: "/meet-touta" },
  { label: "Shop", href: "/shop" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

interface NavbarProps {
  variant?: "transparent" | "solid";
}

export const Navbar = ({ variant = "solid" }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine if we should show solid background based on variant and scroll state
  const isSolid = variant === "solid" || scrolled || menuOpen;

  return (
    <nav 
      className={`fixed top-0 left-0 w-full p-4 md:p-6 flex justify-between items-center z-[100] transition-all duration-300 ${
        isSolid ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      {/* Logo Area (Icon Only) */}
      <Link href="/" className="flex items-center gap-2 cursor-pointer z-[110]">
        <div className={`h-12 w-12 rounded-full overflow-hidden flex items-center justify-center relative transition-all duration-500 hover:scale-105 ${
          isSolid ? "bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] backdrop-blur-md" : "bg-white/10 backdrop-blur-md border border-white/20 shadow-xl"
        }`}>
          <Image src="/logo.png" alt="Touta Logo" fill className="object-cover" />
        </div>
      </Link>

      {/* Desktop Links */}
      <div className={`hidden md:flex gap-8 font-sans text-xs font-bold uppercase tracking-[0.2em] px-8 py-3.5 rounded-full transition-all duration-500 z-[110] ${
        isSolid 
          ? "text-gray-600 bg-white/90 shadow-[0_8px_30px_rgb(0,0,0,0.06)] backdrop-blur-md" 
          : "text-white/90 bg-white/10 backdrop-blur-md border border-white/20 shadow-xl"
      }`}>
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link 
              key={link.label} 
              href={link.href} 
              className={`transition-colors relative overflow-hidden group ${
                isActive 
                  ? (isSolid ? "text-[#c2c384]" : "text-[#fae1d2]") 
                  : (isSolid ? "hover:text-black" : "hover:text-[#fae1d2]")
              }`}
            >
              {link.label}
              {isActive && (
                <motion.span 
                  layoutId="navUnderline"
                  className={`absolute bottom-[-2px] left-0 w-full h-[2px] ${isSolid ? "bg-[#c2c384]" : "bg-[#fae1d2]"}`}
                />
              )}
            </Link>
          );
        })}
      </div>

      {/* Mobile Hamburger Button */}
      <button
        className={`md:hidden flex flex-col justify-center items-center w-12 h-12 rounded-full transition-all duration-500 flex-shrink-0 z-[110] ${
          isSolid 
            ? "bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] backdrop-blur-md" 
            : "bg-white/10 backdrop-blur-md border border-white/20 shadow-xl"
        }`}
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        <div className="flex flex-col gap-[6px] w-5">
           <motion.span
            className={`block w-full h-[2px] rounded-full origin-center ${isSolid ? "bg-gray-800" : "bg-white"}`}
            animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
          />
          <motion.span
            className={`block w-full h-[2px] rounded-full ${isSolid ? "bg-gray-800" : "bg-white"}`}
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.25 }}
          />
          <motion.span
            className={`block w-full h-[2px]  rounded-full origin-center ${isSolid ? "bg-gray-800" : "bg-white"}`}
            animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.25 }}
          />
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white pt-32 px-8 flex flex-col"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                   <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`font-serif text-5xl font-bold transition-colors ${
                      pathname === link.href ? "text-[#c2c384]" : "text-gray-900 active:text-[#c2c384]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto pb-12">
               <div className="h-px w-full bg-gray-100 mb-8" />
               <p className="font-sans text-sm text-gray-400 uppercase tracking-widest mb-4">Follow Touta</p>
               <div className="flex gap-4">
                  {["Instagram", "WhatsApp", "Facebook"].map(social => (
                    <span key={social} className="font-sans text-xs font-bold text-gray-600 border border-gray-200 rounded-full px-4 py-2">{social}</span>
                  ))}
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
