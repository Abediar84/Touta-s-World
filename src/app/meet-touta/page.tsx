"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BrandText } from "@/components/BrandText";
import Navbar from "@/components/Navbar";
import { MagneticButton } from "@/components/MagneticButton";

const storyChapters = [
  {
    id: 1,
    title: "Magical Journeys Across Egypt",
    text: "One of my favorite things to do is take you on magical journeys across Egypt. Together, we will explore its most beautiful places, from the great pyramids to the secrets of the pharaohs, walking through history as if we were really there. I will help you uncover hidden stories, mysterious legends, and fascinating traditions, so you can see Egypt not just as a place, but as a world full of wonder waiting to be discovered.",
    image: "/The_Story_of_Touta_2.png",
    accent: "#c2c384",
  },
  {
    id: 2,
    title: "Learning Without Limits",
    text: "I also love helping you learn new things in a fun and exciting way. Don’t worry, it won’t feel like school at all. With me, lessons become adventures, and ideas turn into stories you’ll actually enjoy. Before you know it, you’ll be learning while smiling.",
    image: "/The_Story_of_Touta_3.png",
    accent: "#e8a87c",
  },
  {
    id: 3,
    title: "Little Hero for the Earth",
    text: "And because I care about your future, I’ll gently show you how to take care of our planet. Together, we’ll learn about recycling and discover how small actions can make a big difference. We’ll even create fascinating little projects using materials the world thought were no longer useful, turning them into something fun and full of life. Think of it as becoming a tiny hero for the Earth, and yes, heroes can start small.",
    image: "/The_Story_of_Touta_4.png",
    accent: "#aab5cc",
  },
  {
    id: 4,
    title: "Magical Tales & Giggle Moments",
    text: "Of course, we can’t forget the fun. I’m here to entertain you with magical tales, exciting adventures, and moments that make you giggle. Sometimes we’ll go on thrilling journeys, and other times we’ll just relax with a cozy story. Either way, I promise you’ll never be bored with me around.",
    image: "/The_Story_of_Touta_5.png",
    accent: "#e5b3aa",
  },
  {
    id: 5,
    title: "Your Adventure Partner",
    text: "So whenever you see me, remember, I’m not just here to tell stories. I’m here to be your little friend, your adventure partner, and your guide to a world where learning feels like magic. Are you ready?",
    image: "/The_Story_of_Touta_6.png",
    accent: "#c2c384",
  },
];

export default function MeetToutaPage() {
  return (
    <main className="min-h-screen w-full bg-[#fafafa] overflow-hidden">
      <Navbar />

      {/* Hero Intro */}
      <section className="relative w-full min-h-[60vh] flex flex-col items-center justify-center text-center px-6 py-24 bg-gradient-to-br from-[#fdfbf7] to-[#f5e9dc]">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#c2c384]/15 blur-[80px]" />
        </div>

        <motion.div
          className="relative z-10 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Mascot */}
          <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mb-8">
            <Image src="/mascot-peeking.png" alt="Touta mascot" fill className="object-contain drop-shadow-2xl" priority />
          </div>

          <h1 className="font-serif text-5xl md:text-7xl font-medium text-[#1a1a1a] leading-tight tracking-tight mb-6">
            The Story of{" "}
            <BrandText className="text-[#e27d60] text-[4rem] md:text-[6rem] leading-none">Touta</BrandText>
          </h1>
          <p className="font-sans text-xl text-gray-600 leading-relaxed font-light max-w-2xl mx-auto">
            A digital story about a magical companion who makes every learning moment feel like an adventure.
          </p>
        </motion.div>
      </section>

      {/* Story Chapters */}
      <section className="w-full px-6 py-24">
        <div className="max-w-5xl mx-auto flex flex-col gap-32">
          {storyChapters.map((chapter, idx) => (
            <motion.div
              key={chapter.id}
              className={`flex flex-col ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-20`}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Image */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 0.95, y: 30 },
                  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
                }}
                className="flex-1 relative w-full aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl transition-transform duration-700 hover:scale-[1.02]"
                style={{ boxShadow: `0 30px 80px ${chapter.accent}30` }}
              >
                <Image src={chapter.image} alt={chapter.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </motion.div>

              {/* Text */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: idx % 2 === 0 ? 30 : -30 },
                  visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
                }}
                className="flex-1 text-left"
              >
                <span
                  className="inline-flex items-center gap-3 font-sans font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-6"
                  style={{ color: chapter.accent }}
                >
                  <span className="w-8 h-[1px]" style={{ backgroundColor: chapter.accent }} />
                  Chapter {chapter.id}
                </span>
                <h2 className="font-serif text-4xl md:text-5xl font-medium text-[#1a1a1a] mb-6 leading-tight tracking-tight">
                  {chapter.title.split("Touta").map((part, i, arr) => (
                    <span key={i}>
                      {part}
                      {i < arr.length - 1 && <BrandText>Touta</BrandText>}
                    </span>
                  ))}
                </h2>
                <p className="font-sans text-lg md:text-xl text-gray-600 leading-relaxed font-light">
                  {chapter.text}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full py-40 text-center bg-gradient-to-br from-[#c2c384] to-[#aeb073] px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="font-serif text-5xl md:text-7xl font-medium text-white mb-8 leading-tight tracking-tight drop-shadow-sm">
            Ready to explore <BrandText className="text-[#fae1d2]">Touta</BrandText>&apos;s World?
          </h2>
          <p className="font-sans text-lg md:text-xl text-white/90 mb-14 font-light max-w-xl mx-auto">
            Discover our magical collection of notebooks, puzzles, pins, and coloring books.
          </p>
          <MagneticButton className="inline-block mt-4">
            <Link
              href="/shop"
              className="group relative inline-flex items-center justify-center rounded-full bg-white px-12 py-5 font-sans text-sm md:text-base font-bold text-[#e27d60] shadow-xl shadow-black/10 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-black/20 active:scale-95"
            >
              <span>Explore the Collection</span>
              <span className="absolute right-6 opacity-0 translate-x-[-10px] transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                →
              </span>
              <span className="transition-all duration-300 group-hover:pr-6" />
            </Link>
          </MagneticButton>
        </motion.div>
      </section>

    </main>
  );
}
