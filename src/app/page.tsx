import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ToutaIntro from "@/components/ToutaIntro";
import ProductShowcase from "@/components/ProductShowcase";
import TeamPreview from "@/components/TeamPreview";
import QuoteBlock from "@/components/QuoteBlock";
import BrandFooter from "@/components/BrandFooter";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-surface overflow-hidden">
      
      {/* Navigation Layer */}
      <Navbar />
      
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Touta Character Introduction */}
      <ToutaIntro />
      
      {/* 3. Products/Artifacts Collection */}
      <ProductShowcase />

      {/* 4. Team Preview */}
      <TeamPreview />
      
      {/* 5. Magic Quote Block */}
      <QuoteBlock />

      {/* Footer */}
      <BrandFooter />

    </main>
  );
}
