"use client";
import React, { useState, useMemo, useEffect, Suspense, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ShoppingBag, X, Plus, Minus, Send, MessageCircle, ArrowRight } from "lucide-react";
import { BrandText } from "@/components/BrandText";
import Navbar from "@/components/Navbar";
import BrandFooter from "@/components/BrandFooter";

const cinemaEase = [0.16, 1, 0.3, 1] as const;

// --- Types ---
interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  slogan: string;
  image: string;
  bg: string;
  accent: string;
}

interface CartItem extends Product {
  quantity: number;
}

// --- Updated Product Data (14 Editions) ---
const ALL_PRODUCTS: Product[] = [
  // 1. Touta Notebook
  {
    id: "nb-1",
    name: "Touta Edition Notebook",
    category: "Notebooks",
    price: 350,
    slogan: "Your next favorite notebook is waiting — get yours now.",
    image: "/Touta-s-World/notebook.png",
    bg: "bg-[#edf3e3]",
    accent: "#c2c384",
  },
  // 2. Touta Puzzle
  {
    id: "pz-1",
    name: "Green Touta Edition Puzzle",
    category: "Puzzles",
    price: 450,
    slogan: "Small pieces, big ideas growing together.",
    image: "/Touta-s-World/puzzle.png",
    bg: "bg-[#fdf0e4]",
    accent: "#e8a87c",
  },
  {
    id: "pz-2",
    name: "In the Pyramids Puzzle",
    category: "Puzzles",
    price: 450,
    slogan: "A journey through mystery, built piece by piece.",
    image: "/Touta-s-World/puzzle.png",
    bg: "bg-[#fdf0e4]",
    accent: "#e8a87c",
  },
  {
    id: "pz-3",
    name: "In Class Puzzle",
    category: "Puzzles",
    price: 450,
    slogan: "Where curiosity comes together, one piece at a time.",
    image: "/Touta-s-World/puzzle.png",
    bg: "bg-[#fdf0e4]",
    accent: "#e8a87c",
  },
  {
    id: "pz-4",
    name: "In the Zoo Puzzle",
    category: "Puzzles",
    price: 450,
    slogan: "Where every piece brings the wild to life.",
    image: "/Touta-s-World/puzzle.png",
    bg: "bg-[#fdf0e4]",
    accent: "#e8a87c",
  },
  // 3. Touta Pins
  {
    id: "pin-1",
    name: "Storytelling Magic Pin",
    category: "Pins",
    price: 150,
    slogan: "Where every story begins with a spark.",
    image: "/Touta-s-World/pins.png",
    bg: "bg-[#e8ecf3]",
    accent: "#aab5cc",
  },
  {
    id: "pin-2",
    name: "In the Pyramids Pin",
    category: "Pins",
    price: 150,
    slogan: "A tiny piece of adventure from a world of ancient wonder.",
    image: "/Touta-s-World/pins.png",
    bg: "bg-[#e8ecf3]",
    accent: "#aab5cc",
  },
  {
    id: "pin-3",
    name: "In the Garden Pin",
    category: "Pins",
    price: 150,
    slogan: "A small symbol of growing ideas and gentle care.",
    image: "/Touta-s-World/pins.png",
    bg: "bg-[#e8ecf3]",
    accent: "#aab5cc",
  },
  {
    id: "pin-4",
    name: "In Class Pin",
    category: "Pins",
    price: 150,
    slogan: "A little reminder that learning can be fun.",
    image: "/Touta-s-World/pins.png",
    bg: "bg-[#e8ecf3]",
    accent: "#aab5cc",
  },
  {
    id: "pin-5",
    name: "Touta Logo Pin",
    category: "Pins",
    price: 150,
    slogan: "The magic of Touta, carried with you everywhere.",
    image: "/Touta-s-World/pins.png",
    bg: "bg-[#e8ecf3]",
    accent: "#aab5cc",
  },
  // 4. Touta Coloring Books
  {
    id: "cb-1",
    name: "Green Touta Coloring Book",
    category: "Coloring Books",
    price: 250,
    slogan: "Create, color, and grow something beautiful.",
    image: "/Touta-s-World/coloring.png",
    bg: "bg-[#fceae7]",
    accent: "#e5b3aa",
  },
  {
    id: "cb-2",
    name: "In the Pyramids Coloring Book",
    category: "Coloring Books",
    price: 250,
    slogan: "Uncover ancient wonders, one color at a time",
    image: "/Touta-s-World/coloring.png",
    bg: "bg-[#fceae7]",
    accent: "#e5b3aa",
  },
  {
    id: "cb-3",
    name: "In the Zoo Coloring Book",
    category: "Coloring Books",
    price: 250,
    slogan: "A colorful adventure where every page meets a new friend.",
    image: "/Touta-s-World/coloring.png",
    bg: "bg-[#fceae7]",
    accent: "#e5b3aa",
  },
  {
    id: "cb-4",
    name: "Our Body Coloring Book",
    category: "Coloring Books",
    price: 250,
    slogan: "Discover the magic inside you through color and curiosity.",
    image: "/Touta-s-World/coloring.png",
    bg: "bg-[#fceae7]",
    accent: "#e5b3aa",
  },
];

const CATEGORIES = ["All", "Notebooks", "Puzzles", "Pins", "Coloring Books"];

function ShopContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category");
  
  const [activeCategory, setActiveCategory] = useState(
    initialCategory && CATEGORIES.includes(initialCategory) ? initialCategory : "All"
  );
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Scroll parallax for Hero
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  const heroY = useTransform(scrollYProgress, [0, 0.3], ["0%", "20%"]);

  // Sync with URL params
  useEffect(() => {
    if (initialCategory && CATEGORIES.includes(initialCategory)) {
      setActiveCategory(initialCategory);
    }
  }, [initialCategory]);

  // --- Cart Actions ---
  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId: string, delta: number) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.id === productId) {
          const newQty = Math.max(1, item.quantity + delta);
          return { ...item, quantity: newQty };
        }
        return item;
      })
    );
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const filteredProducts = useMemo(() => {
    if (activeCategory === "All") return ALL_PRODUCTS;
    return ALL_PRODUCTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  // --- Checkout Logic ---
  const generateOrderSummary = () => {
    return cart
      .map((item) => `- ${item.name} (x${item.quantity})`)
      .join("\n");
  };

  const handleWhatsAppCheckout = () => {
    const message = encodeURIComponent(
      `Hi Touta Team! I'd like to place an order for the following items:\n\n${generateOrderSummary()}\n\nTotal: ${cartTotal} EGP\n\nPlease let me know the next steps!`
    );
    window.open(`https://wa.me/201234567890?text=${message}`, "_blank"); // Placeholder
  };

  const handleEmailCheckout = () => {
    const body = encodeURIComponent(
      `Hi Touta Team!\n\nI'm interested in ordering the following items from the collection:\n\n${generateOrderSummary()}\n\nTotal: ${cartTotal} EGP\n\nPlease send me the confirmation and delivery details.`
    );
    window.location.href = `mailto:hello@toutasworld.com?subject=New Collection Order&body=${body}`;
  };

  return (
    <main ref={containerRef} className="min-h-screen w-full bg-[#fafafa] overflow-hidden leading-relaxed">
      <Navbar />
      
      {/* Floating Cart Trigger */}
      <AnimatePresence>
        {cartCount > 0 && (
          <motion.button
            className="fixed bottom-10 right-10 z-50 flex flex-col items-center gap-2 group"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsCartOpen(true)}
          >
             <div className="bg-[#e27d60] text-white p-6 rounded-full shadow-[0_20px_40px_rgba(226,125,96,0.3)] group-hover:scale-110 transition-transform relative">
                <ShoppingBag size={28} />
                <span className="absolute -top-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full bg-[#c2c384] text-[10px] font-extrabold shadow-md">
                  {cartCount}
                </span>
             </div>
             <span className="bg-stone-900 text-white text-[9px] px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity font-sans tracking-widest uppercase">View Bag</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-gradient-to-br from-[#fdfbf7] to-[#f5f1ea]">
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
           <div className="absolute top-0 right-0 w-1/2 h-full bg-[#c2c384]/5 blur-[120px]" />
           <div className="absolute bottom-0 left-0 w-1/2 h-full bg-[#e27d60]/5 blur-[120px]" />
        </motion.div>

        <motion.div
          className="relative z-10 max-w-4xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: cinemaEase }}
        >
          <span className="inline-flex items-center gap-4 mb-8 text-[#c2c384] font-sans font-bold uppercase tracking-[0.4em] text-[10px] md:text-xs">
            <span className="w-12 h-[1px] bg-[#c2c384]/30" />
            THE COLLECTION
            <span className="w-12 h-[1px] bg-[#c2c384]/30" />
          </span>
          <h1 className="font-serif text-6xl md:text-[7rem] font-bold text-stone-800 mb-8 leading-[0.9] tracking-tighter">
            Artifacts of <br/> <BrandText className="text-[#e27d60] italic">Wonder</BrandText>
          </h1>
          <p className="font-sans text-xl md:text-2xl text-stone-500 leading-relaxed max-w-2xl mx-auto font-light tracking-wide">
             Every piece in our collection is an invitation to <span className="text-stone-800 font-medium">explore</span> and <span className="text-stone-800 font-medium">imagine</span>.
          </p>
        </motion.div>
      </section>

      {/* Category Navigation */}
      <section className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-6 py-6 flex overflow-x-auto no-scrollbar justify-center gap-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap rounded-full px-8 py-3 font-sans text-xs font-bold tracking-widest uppercase transition-all ${
                activeCategory === cat
                  ? "bg-stone-900 text-white shadow-xl scale-105"
                  : "bg-stone-50 text-stone-400 hover:bg-stone-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Product Grid */}
      <section className="w-full px-6 py-32 bg-white relative">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('/stone-texture.png')] bg-repeat" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8, ease: cinemaEase }}
                className="group flex flex-col h-full"
              >
                {/* Image Container */}
                <div className={`relative aspect-[5/4] ${product.bg} rounded-[2.5rem] overflow-hidden mb-10 transition-all duration-700 shadow-sm group-hover:shadow-2xl group-hover:-translate-y-2`}>
                   <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain transition-transform duration-1000 group-hover:scale-105"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                   {/* Add to Cart Floating Button */}
                   <button 
                     onClick={() => addToCart(product)}
                     className="absolute bottom-6 right-6 bg-white text-stone-900 p-4 rounded-full shadow-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 hover:bg-[#e27d60] hover:text-white"
                   >
                     <ShoppingBag size={20} />
                   </button>
                </div>

                {/* Info Container */}
                <div className="flex-1 space-y-4 px-2">
                   <div className="flex items-center gap-3">
                      <span className="w-8 h-[1px] bg-stone-200" />
                      <span className="font-sans text-[10px] tracking-[0.3em] font-bold text-stone-300 uppercase">{product.category}</span>
                   </div>
                   <h2 className="font-serif text-3xl font-bold text-stone-800 leading-tight">
                      {product.name}
                   </h2>
                   <p className="font-sans text-stone-400 font-light leading-relaxed italic border-l-2 border-stone-100 pl-6 py-1">
                      &quot;{product.slogan}&quot;
                   </p>
                   <div className="pt-4 flex items-center justify-between">
                      <span className="font-serif text-2xl text-stone-900">{product.price} <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-stone-400 ml-1">EGP</span></span>
                      <button 
                         onClick={() => addToCart(product)}
                         className="flex items-center gap-2 font-sans text-[10px] tracking-[0.3em] font-bold text-[#c2c384] hover:text-[#e27d60] transition-colors uppercase group/btn"
                      >
                         Add to Collection <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                   </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Cart Drawer */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 z-[60] bg-stone-900/60 backdrop-blur-md"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300, mass: 0.8 }}
              className="fixed right-0 top-0 bottom-0 z-[70] w-full max-w-xl bg-white shadow-2xl flex flex-col p-10 md:p-16"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between mb-16">
                 <div>
                    <h2 className="font-serif text-4xl font-bold text-stone-900 mb-2">Magic Bag</h2>
                    <p className="font-sans text-xs tracking-widest text-[#c2c384] font-bold uppercase">Artifacts selected for you</p>
                 </div>
                 <button onClick={() => setIsCartOpen(false)} className="text-stone-300 hover:text-stone-900 transition-colors p-2">
                    <X size={32} strokeWidth={1.5} />
                 </button>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto no-scrollbar space-y-12">
                 {cart.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-center opacity-30">
                       <span className="text-8xl mb-8">✨</span>
                       <p className="font-serif text-2xl mb-2">Your curate is empty</p>
                       <p className="font-sans text-xs tracking-widest uppercase">Select an archive piece to begin</p>
                    </div>
                 ) : (
                    cart.map((item) => (
                      <div key={item.id} className="grid grid-cols-[100px_1fr] gap-8">
                         <div className={`relative aspect-square rounded-2xl ${item.bg} overflow-hidden shadow-sm`}>
                            <Image src={item.image} alt={item.name} fill className="object-contain" />
                         </div>
                         <div className="space-y-4">
                            <h3 className="font-serif text-xl font-bold text-stone-800 leading-tight">{item.name}</h3>
                            <div className="flex items-center justify-between">
                               <div className="flex items-center border border-stone-100 rounded-full px-3 py-1 bg-stone-50">
                                  <button onClick={() => updateQuantity(item.id, -1)} className="p-1 hover:text-[#e27d60] transition-colors"><Minus size={14}/></button>
                                  <span className="px-4 font-sans text-sm font-bold w-10 text-center">{item.quantity}</span>
                                  <button onClick={() => updateQuantity(item.id, 1)} className="p-1 hover:text-[#e27d60] transition-colors"><Plus size={14}/></button>
                               </div>
                               <span className="font-serif text-lg text-stone-900">{item.price * item.quantity} EGP</span>
                            </div>
                            <button onClick={() => removeFromCart(item.id)} className="font-sans text-[8px] tracking-[0.4em] font-bold text-stone-300 hover:text-red-400 uppercase transition-colors">Dismiss</button>
                         </div>
                      </div>
                    ))
                 )}
              </div>

              {/* Checkout Footer */}
              {cart.length > 0 && (
                <div className="mt-16 space-y-8 pt-10 border-t border-stone-100">
                   <div className="flex items-end justify-between">
                      <span className="font-sans text-stone-400 font-bold tracking-widest uppercase text-[10px]">TOTAL ARTIFACTS</span>
                      <span className="font-serif text-5xl font-bold text-stone-900 leading-none">{cartTotal} <span className="text-sm font-sans tracking-widest text-[#c2c384]">EGP</span></span>
                   </div>
                   
                   <div className="flex flex-col gap-4">
                      <button
                        onClick={handleWhatsAppCheckout}
                        className="w-full bg-[#25D366] text-white py-6 rounded-full font-sans font-bold text-sm tracking-widest uppercase flex items-center justify-center gap-3 shadow-xl hover:shadow-[#25D366]/20 transition-all hover:scale-[1.02] active:scale-95"
                      >
                         <MessageCircle size={20} />
                         Confirm via WhatsApp
                      </button>
                      <button
                        onClick={handleEmailCheckout}
                        className="w-full bg-stone-900 text-white py-6 rounded-full font-sans font-bold text-sm tracking-widest uppercase flex items-center justify-center gap-3 shadow-xl hover:shadow-black/20 transition-all hover:scale-[1.02] active:scale-95"
                      >
                         <Send size={20} />
                         Confirm via Email
                      </button>
                   </div>
                   <p className="text-center font-sans text-[10px] text-stone-300 uppercase tracking-widest leading-relaxed">
                      Our curators will contact you within 24 hours to finalize your collection delivery.
                   </p>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </main>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-[#fafafa]">
        <div className="w-16 h-[1px] bg-stone-200 animate-pulse" />
      </div>
    }>
      <ShopContent />
      <BrandFooter />
    </Suspense>
  );
}
