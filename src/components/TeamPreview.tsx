"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const cinemaEase = [0.16, 1, 0.3, 1] as const;

const stats = [
  { value: "17", label: "Creators" },
  { value: "CIU", label: "Class of 2024" },
  { value: "1", label: "Shared Dream" },
];

export default function TeamPreview() {
  return (
    <section className="relative w-full py-36 overflow-hidden bg-stone-950">
      {/* Subtle grain texture */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('/stone-texture.png')] bg-repeat" />

      {/* Top decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Left: image mosaic */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: cinemaEase }}
          >
            {/* Main team photo */}
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-[0_60px_120px_-20px_rgba(0,0,0,0.6)]">
              <Image
                src="/Touta-s-World/touta_team_1.png"
                alt="The Team Behind Touta"
                fill
                className="object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent" />
              <div className="absolute inset-0 border border-white/5 rounded-[2.5rem] pointer-events-none" />
            </div>

            {/* Floating accent card */}
            <motion.div
              className="absolute -bottom-8 -right-6 bg-[#c2c384] rounded-3xl px-8 py-6 shadow-2xl text-stone-900"
              initial={{ opacity: 0, y: 20, rotate: -3 }}
              whileInView={{ opacity: 1, y: 0, rotate: -3 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: cinemaEase }}
            >
              <span className="block font-serif text-5xl font-bold leading-none">17</span>
              <span className="block font-sans text-[10px] font-bold uppercase tracking-[0.3em] mt-1 opacity-70">
                Visionaries
              </span>
            </motion.div>

            {/* Decorative corner badge */}
            <motion.div
              className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-[#e27d60]/10 border border-[#e27d60]/20 backdrop-blur-sm flex items-center justify-center"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              <span className="font-sans text-[7px] text-[#e27d60]/70 tracking-[0.15em] uppercase font-bold text-center leading-relaxed">
                THE · TEAM · BEHIND · TOUTA ·
              </span>
            </motion.div>
          </motion.div>

          {/* Right: content */}
          <motion.div
            className="flex flex-col gap-10"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, delay: 0.15, ease: cinemaEase }}
          >
            {/* Section label */}
            <div className="flex items-center gap-4">
              <span className="font-sans text-[#c2c384] font-bold tracking-[0.4em] text-[10px] uppercase">
                A COLLECTIVE VISION
              </span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            {/* Heading */}
            <h2 className="font-serif text-5xl md:text-[4.5rem] font-bold text-white leading-[0.95] tracking-tighter">
              The Team<br />
              Behind{" "}
              <span className="font-brand italic text-[#c2c384]">Touta</span>
            </h2>

            {/* Description */}
            <p className="font-sans text-lg text-stone-400 leading-relaxed font-light max-w-lg">
              We are a team of graduating students from the Canadian International University,
              majoring in Public Relations and Advertising. What began as a graduation project
              grew into a shared mission — to bring magic back to learning.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-6 py-8 border-y border-white/10">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col gap-1">
                  <span className="font-serif text-4xl text-white font-bold">{s.value}</span>
                  <span className="font-sans text-[10px] text-stone-500 uppercase tracking-[0.3em] font-bold">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Chapters preview */}
            <div className="space-y-4">
              {[
                { ch: "01", title: "Born from a Shared Dream", desc: "A graduation project that became a mission." },
                { ch: "02", title: "Transforming Screen Time", desc: "Making every discovery meaningful for children." },
              ].map((item) => (
                <motion.div
                  key={item.ch}
                  className="group flex items-start gap-5 p-5 rounded-2xl border border-white/5 hover:border-[#c2c384]/30 hover:bg-white/5 transition-all duration-500 cursor-pointer"
                  whileHover={{ x: 4 }}
                >
                  <span className="font-sans text-[#c2c384]/50 text-xs font-bold uppercase tracking-widest mt-1 shrink-0">
                    CH.{item.ch}
                  </span>
                  <div>
                    <h3 className="font-serif text-lg text-white group-hover:text-[#c2c384] transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-sans text-sm text-stone-500 mt-1">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <Link href="/team">
              <motion.button
                className="w-fit border border-white/20 text-white px-10 py-4 rounded-full font-sans font-semibold text-sm hover:border-[#c2c384] hover:text-[#c2c384] transition-all duration-500 flex items-center gap-3 group"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Meet the Full Team
                <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
