import { Hero } from "@/components/Hero";
import { ToutaIntro } from "@/components/ToutaIntro";
import { About } from "@/components/About";
import { ProductShowcase } from "@/components/ProductShowcase";
import { BrandText } from "@/components/BrandText";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-start overflow-hidden bg-[#fafafa]">
      
      {/* 1. Hero Section (Pyramids Theme) */}
      <Hero />

      {/* 2. Touta Character Introduction */}
      <ToutaIntro />
      
      {/* 3. About Section (Classroom Theme) */}
      <About />

      {/* Mascot Laying — small centered, no frame */}
      <div className="relative z-10 w-full bg-[#fdfbf7] flex justify-center py-4">
        <img
          src="/mascot-laying.png"
          alt="Touta mascot laying"
          className="w-1/4 h-auto object-contain"
        />
      </div>
      
      {/* 4. Notebooks */}
      <ProductShowcase 
        title={<><BrandText>Touta</BrandText> Note book</>} 
        subtitle="Write Your Story"
        bgColor="bg-[#c2c384]" 
        assetPlaceholder="notebook"
        category="Notebooks"
        reversed={false}
      />

      {/* 5. Puzzles */}
      <ProductShowcase 
        title={<><BrandText>Touta</BrandText> Puzzle</>} 
        subtitle="Learn & Build"
        bgColor="bg-[#e8a87c]" 
        assetPlaceholder="puzzle"
        category="Puzzles"
        reversed={true}
      />

      {/* 6. Pins & Accessories */}
      <ProductShowcase 
        title={<><BrandText>Touta</BrandText> Pins</>} 
        subtitle="Wear the Magic"
        bgColor="bg-[#aab5cc]" 
        assetPlaceholder="pins"
        category="Pins"
        reversed={false}
      />

      {/* 7. Coloring Books */}
      <ProductShowcase 
        title={<><BrandText>Touta</BrandText> Coloring Books</>} 
        subtitle="Color your World"
        bgColor="bg-[#e5b3aa]" 
        assetPlaceholder="coloring"
        category="Coloring Books"
        reversed={true}
      />

      {/* Simple Footer */}
      <footer className="w-full py-12 text-center bg-[#111111] text-white/60">
        <p className="font-sans text-sm">© 2026 <BrandText>Touta</BrandText>&apos;s World. All rights reserved.</p>
      </footer>

    </main>
  );
}
