"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { BrandText } from "@/components/BrandText";
import Navbar from "@/components/Navbar";
import BrandFooter from "@/components/BrandFooter";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isBot, setIsBot] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isBot) return; 
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen w-full bg-[#fafafa] overflow-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative w-full min-h-[45vh] flex flex-col items-center justify-center text-center px-6 py-28 bg-gradient-to-br from-[#fdfbf7] to-[#fceae7]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[400px] rounded-full bg-[#e5b3aa]/20 blur-[80px] pointer-events-none" />
        <motion.div
          className="relative z-10 max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 mb-6 text-[#e27d60] font-sans font-bold uppercase tracking-widest text-sm">
            <span className="w-8 h-[2px] bg-[#e27d60] inline-block" />
            Get in Touch
          </span>
          <h1 className="font-serif text-6xl md:text-7xl font-bold text-gray-900 mb-6">
            Say Hello to <BrandText className="text-[#e27d60]">Touta</BrandText>
          </h1>
          <p className="font-sans text-xl text-gray-600 leading-relaxed">
            Have a question, collaboration idea, or just want to share your magic? We&apos;d love to hear from you.
          </p>
        </motion.div>
      </section>

      {/* Contact Form + Info */}
      <section className="w-full px-6 py-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* Left: Info */}
          <motion.div
            className="flex flex-col gap-10"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">Let&apos;s connect</h2>
              <p className="font-sans text-lg text-gray-600 leading-relaxed">
                Whether you&apos;re a parent, educator, collaborator, or simply a fan of the magical world of{" "}
                <BrandText className="text-[#c2c384]">Touta</BrandText> — we&apos;re happy to chat.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {[
                { icon: "✉️", label: "Email", value: "toutaaa546@gmail.com" },
                { icon: "📱", label: "WhatsApp", value: "01033949360" },
                { icon: "✨", label: "Instagram", value: "@touta_storytelling" },
                { icon: "👤", label: "Facebook", value: "@touta" },
                { icon: "🎵", label: "TikTok", value: "@touta_storytelling" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#c2c384]/15 flex items-center justify-center text-xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <span className="block font-sans text-xs font-bold uppercase tracking-widest text-[#c2c384] mb-1">{item.label}</span>
                    <span className="block font-sans text-base text-gray-700">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            {submitted ? (
              <div className="rounded-3xl bg-[#c2c384]/10 border border-[#c2c384]/30 p-16 text-center">
                <div className="text-6xl mb-6">✨</div>
                <h3 className="font-serif text-3xl font-bold text-gray-900 mb-4">Message Sent!</h3>
                <p className="font-sans text-gray-600">Thank you for reaching out. We&apos;ll get back to you with a little bit of magic very soon.</p>
              </div>
            ) : (
              <form
                className="flex flex-col gap-5"
                onSubmit={handleSubmit}
              >
                {/* Honeypot field - hidden from real users */}
                <input 
                  type="text" 
                  name="_honey" 
                  style={{ display: 'none' }} 
                  tabIndex={-1} 
                  autoComplete="off" 
                  onChange={(e) => setIsBot(!!e.target.value)}
                />

                <div className="grid grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="font-sans text-sm font-bold text-gray-700">First Name</label>
                    <input required className="rounded-2xl border border-gray-200 bg-white px-5 py-4 font-sans text-base focus:outline-none focus:ring-2 focus:ring-[#c2c384]/50 transition-all" placeholder="Your first name" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-sans text-sm font-bold text-gray-700">Last Name</label>
                    <input required className="rounded-2xl border border-gray-200 bg-white px-5 py-4 font-sans text-base focus:outline-none focus:ring-2 focus:ring-[#c2c384]/50 transition-all" placeholder="Your last name" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-sans text-sm font-bold text-gray-700">Email</label>
                  <input required type="email" className="rounded-2xl border border-gray-200 bg-white px-5 py-4 font-sans text-base focus:outline-none focus:ring-2 focus:ring-[#c2c384]/50 transition-all" placeholder="hello@example.com" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-sans text-sm font-bold text-gray-700">Subject</label>
                  <select required className="rounded-2xl border border-gray-200 bg-white px-5 py-4 font-sans text-base focus:outline-none focus:ring-2 focus:ring-[#c2c384]/50 transition-all appearance-none">
                    <option value="">Select a topic...</option>
                    <option>General Enquiry</option>
                    <option>Product Question</option>
                    <option>Collaboration</option>
                    <option>Wholesale / B2B</option>
                    <option>Media & Press</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-sans text-sm font-bold text-gray-700">Message</label>
                  <textarea required rows={5} className="rounded-2xl border border-gray-200 bg-white px-5 py-4 font-sans text-base focus:outline-none focus:ring-2 focus:ring-[#c2c384]/50 transition-all resize-none" placeholder="Tell us about your enquiry..." />
                </div>
                <motion.button
                  type="submit"
                  className="rounded-full bg-[#e27d60] px-12 py-5 font-sans text-lg font-bold text-white shadow-xl hover:bg-[#c9694f] transition-colors"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Send Message ✨
                </motion.button>
              </form>
            )}
          </motion.div>

        </div>
      </section>
      <BrandFooter />
    </main>
  );
}
