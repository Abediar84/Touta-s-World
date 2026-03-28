import React from 'react';
import Link from 'next/link';

export default function BrandFooter() {
  return (
    <footer className="bg-[#f5f3ef] dark:bg-stone-900 rounded-t-[3rem] w-full mt-20 flex flex-col items-center px-10 md:px-20 py-16 gap-12">
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-3xl font-serif text-stone-800 dark:text-stone-100">
          Touta&apos;s World
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 font-sans text-sm tracking-wide uppercase">
          <Link href="/" className="text-stone-500 dark:text-stone-400 hover:text-[#99452c] dark:hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/meet-touta" className="text-stone-500 dark:text-stone-400 hover:text-[#99452c] dark:hover:text-white transition-colors">
            The Story
          </Link>
          <Link href="/shop" className="text-stone-500 dark:text-stone-400 hover:text-[#99452c] dark:hover:text-white transition-colors">
            The Gallery
          </Link>
          <Link href="/team" className="text-stone-500 dark:text-stone-400 hover:text-[#99452c] dark:hover:text-white transition-colors">
            The Creators
          </Link>
          <Link href="/contact" className="text-stone-500 dark:text-stone-400 hover:text-[#99452c] dark:hover:text-white transition-colors">
            Contact
          </Link>
        </div>

        <div className="flex gap-6">
          <a href="#" className="w-10 h-10 rounded-full bg-stone-200 dark:bg-stone-800 flex items-center justify-center text-[#99452c] hover:bg-[#99452c] hover:text-white transition-all">
            <span className="material-symbols-outlined text-lg">public</span>
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-stone-200 dark:bg-stone-800 flex items-center justify-center text-[#99452c] hover:bg-[#99452c] hover:text-white transition-all">
            <span className="material-symbols-outlined text-lg">favorite</span>
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-stone-200 dark:bg-stone-800 flex items-center justify-center text-[#99452c] hover:bg-[#99452c] hover:text-white transition-all">
            <span className="material-symbols-outlined text-lg">auto_awesome</span>
          </a>
        </div>
      </div>

      <div className="w-full pt-12 border-t border-stone-200/30 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
        <p className="font-sans text-sm tracking-wide uppercase text-stone-500 dark:text-stone-400">
          © {new Date().getFullYear()} Touta&apos;s World. A Nostalgic Curator&apos;s Collection.
        </p>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#60612c]"></span>
          <span className="text-[10px] font-sans font-bold text-stone-400 tracking-widest uppercase">
            STORYTELLING FOR THE NEXT GENERATION
          </span>
        </div>
      </div>
    </footer>
  );
}
