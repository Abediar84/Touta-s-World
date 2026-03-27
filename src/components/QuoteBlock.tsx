import React from 'react';

export default function QuoteBlock() {
  return (
    <section className="relative w-full py-40 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#c2c384]/20 via-surface to-[#e27d60]/10"></div>
      <div className="max-w-4xl mx-auto px-10 relative z-10 text-center">
        <span className="material-symbols-outlined text-primary text-4xl mb-8 opacity-40">format_quote</span>
        <blockquote className="font-headline text-4xl md:text-6xl text-on-surface leading-[1.3] font-light">
          If we were still kids, <span className="font-headline italic text-secondary">Touta</span> would be the place where learning felt like <span className="text-primary-container">magic</span>.
        </blockquote>
        <div className="h-0.5 w-24 bg-primary/20 mx-auto mt-12"></div>
      </div>
    </section>
  );
}
