import React from 'react';

export default function BrandFooter() {
  return (
    <footer className="bg-[#f5f3ef] dark:bg-stone-900 rounded-t-[3rem] w-full mt-20 flex flex-col items-center px-10 md:px-20 py-16 gap-12">
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-3xl font-serif text-stone-800 dark:text-stone-100 italic">
          Touta's World
        </div>
        <div className="flex flex-wrap justify-center gap-8 font-label text-sm tracking-wide uppercase">
          <a className="text-stone-500 dark:text-stone-400 hover:text-primary dark:hover:text-white transition-colors" href="/shop">The Gallery</a>
          <a className="text-stone-500 dark:text-stone-400 hover:text-primary dark:hover:text-white transition-colors" href="#">Privacy Parchment</a>
          <a className="text-stone-500 dark:text-stone-400 hover:text-primary dark:hover:text-white transition-colors" href="#">Terms of Discovery</a>
          <a className="text-stone-500 dark:text-stone-400 hover:text-primary dark:hover:text-white transition-colors" href="/contact">Contact the Curator</a>
        </div>
        <div className="flex gap-6">
          <a className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" href="#">
            <span className="material-symbols-outlined text-lg">public</span>
          </a>
          <a className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" href="#">
            <span className="material-symbols-outlined text-lg">favorite</span>
          </a>
          <a className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all" href="#">
            <span className="material-symbols-outlined text-lg">auto_awesome</span>
          </a>
        </div>
      </div>
      
      <div className="w-full pt-12 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
        <p className="font-label text-sm tracking-wide uppercase text-stone-500 dark:text-stone-400">
          © 2024 Touta's World. A Nostalgic Curator's Archive.
        </p>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-secondary"></span>
          <span className="text-[10px] font-label font-bold text-outline-variant tracking-widest uppercase">STORYTELLING FOR THE NEXT GENERATION</span>
        </div>
      </div>
    </footer>
  );
}
