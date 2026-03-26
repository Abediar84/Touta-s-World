"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BrandText } from "@/components/BrandText";
import { Navbar } from "@/components/Navbar";

// Team data is now redundant as we are using a narrative approach

export default function TeamPage() {
  return (
    <main className="min-h-screen w-full bg-[#fafafa] overflow-hidden leading-relaxed">
      <Navbar />
      
      {/* 1. Page Hero (Image Background) */}
      <section className="relative w-full h-[70vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/touta_team_1.png" 
            alt="The Team Behind Touta" 
            fill 
            className="object-cover"
            priority
          />
          {/* Extra Layer (Overlay) */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        </div>

        <motion.div
          className="relative z-10 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 mb-6 text-white/80 font-sans font-bold uppercase tracking-[0.3em] text-xs">
            <span className="w-8 h-[1px] bg-white/50 inline-block" />
            Our People
          </span>
          <h1 className="font-serif text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
            The Team <br/>Behind <BrandText className="text-[#c2c384]">Touta</BrandText>
          </h1>
          <p className="font-sans text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl mx-auto font-light">
            A collective of creators and dreamers dedicated to bringing <span className="italic font-medium text-white">magic</span> back to learning.
          </p>
        </motion.div>
      </section>

      {/* Lead Narrative (Graduation Project Story) */}
      <motion.section 
        className="relative w-full max-w-4xl mx-auto px-6 pt-24 pb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="font-sans text-xl md:text-2xl text-gray-700 leading-relaxed italic border-l-4 border-[#c2c384] pl-8 py-2">
          We are a team of graduating students from the Canadian International University,
          majoring in Public Relations and Advertising within Mass Communications. What
          began as a graduation project soon grew into something far more meaningful, a
          shared vision to create something that truly matters.
        </p>
      </motion.section>


      {/* Team Narrative Section */}
      <section className="w-full px-6 py-24 bg-white">
        <div className="max-w-4xl mx-auto space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >

            {/* Team Kids Illustration (Related to Mission) */}
            <div className="relative aspect-[21/9] w-full max-w-4xl mx-auto -mb-4">
              <Image 
                src="/touta_team_kids.svg" 
                alt="Touta Team Kids Illustration" 
                fill 
                className="object-contain"
              />
            </div>

            <div className="py-8 text-center bg-[#fdfbf7] rounded-3xl border border-gray-100 px-6">
              <h3 className="font-serif text-3xl md:text-4xl text-gray-900 leading-tight">
                &quot;If we were still kids, <BrandText className="text-[#e27d60]">Touta</BrandText> would be the place where <span className="text-[#c2c384] italic">learning felt like magic.</span>&quot;
              </h3>
              <p className="mt-4 font-sans text-lg text-gray-500 font-medium uppercase tracking-[0.2em]">
                That feeling guided us through every step of this journey.
              </p>
            </div>

            <p className="font-sans text-lg text-gray-600 leading-relaxed">
              <BrandText className="text-[#e27d60]">Touta</BrandText> was created from our deep belief in the power of storytelling, the kind of
              storytelling that stays with a child, shapes their imagination, and becomes part of
              how they see the world. We wanted to create a companion, a presence in a child&apos;s
              life that feels comforting, engaging, and full of wonder.
            </p>

            <p className="font-sans text-lg text-gray-600 leading-relaxed">
              As a team, we poured our hearts into building something that could transform
              everyday screen time into a more meaningful experience, something that does not
              just pass time, but adds value to it. We believe that what children watch and listen to
              should leave them happier, more curious, and more connected to the world
              around them.
            </p>

            <div className="relative p-10 bg-gradient-to-br from-[#c2c384]/10 to-transparent rounded-3xl overflow-hidden border border-[#c2c384]/20">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <span className="text-8xl">✨</span>
              </div>
              <p className="font-sans text-lg text-gray-600 leading-relaxed relative z-10">
                Seventeen students dedicated themselves to this project, giving their time,
                creativity, and passion every single day. Behind <BrandText className="text-[#e27d60]">Touta</BrandText> is a team that truly cares
                about children, about their growth, and about creating moments that feel special.
              </p>
            </div>

            <div className="text-center space-y-4 pt-8">
              <p className="font-script text-4xl text-[#c2c384]">Because this was never just about completing a project.</p>
              <p className="font-serif text-3xl font-bold text-gray-900">
                It was about creating something that could become a small, <br className="hidden md:block" />
                <span className="text-[#e27d60]">beautiful part of a child&apos;s life.</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="w-full py-24 bg-[#c2c384] text-center px-6">
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-5xl font-bold text-white mb-6">Want to join our team?</h2>
          <p className="font-sans text-lg text-white/80 mb-10">We are always looking for passionate people who share our love for childhood imagination and learning.</p>
          <a href="mailto:hello@toutasworld.com" className="inline-block rounded-full bg-white px-12 py-5 font-sans text-lg font-bold text-[#c2c384] shadow-xl hover:scale-105 transition-transform">
            Get in Touch ✉️
          </a>
        </motion.div>
      </section>

    </main>
  );
}
