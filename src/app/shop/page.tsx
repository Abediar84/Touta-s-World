"use client";
import { useState, useMemo, useEffect, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ShoppingBag, X, Plus, Minus, Send, MessageCircle } from "lucide-react";
import { BrandText } from "@/components/BrandText";
import Navbar from "@/components/Navbar";

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

// --- Product Data ---
const ALL_PRODUCTS: Product[] = [
  // 1. Notebooks
  {
    id: "nb-1",
    name: "Touta Edition Notebook",
    category: "Notebooks",
    price: 45,
    slogan: "Your next favorite notebook is waiting — get yours now.",
    image: "/notebook.png",
    bg: "bg-[#edf3e3]",
    accent: "#c2c384",
  },
  // 2. Puzzles
  {
    id: "pz-1",
    name: "Green Touta Puzzle",
    category: "Puzzles",
    price: 120,
    slogan: "Small pieces, big ideas growing together.",
    image: "/puzzle.png",
    bg: "bg-[#fdf0e4]",
    accent: "#e8a87c",
  },
  {
    id: "pz-2",
    name: "In the Pyramids Puzzle",
    category: "Puzzles",
    price: 120,
    slogan: "A journey through mystery, built piece by piece.",
    image: "/puzzle.png",
    bg: "bg-[#fdf0e4]",
    accent: "#e8a87c",
  },
  {
    id: "pz-3",
    name: "In Class Puzzle",
    category: "Puzzles",
    price: 120,
    slogan: "Where curiosity comes together, one piece at a time.",
    image: "/puzzle.png",
    bg: "bg-[#fdf0e4]",
    accent: "#e8a87c",
  },
  {
    id: "pz-4",
    name: "In the Zoo Puzzle",
    category: "Puzzles",
    price: 120,
    slogan: "Where every piece brings the wild to life.",
    image: "/puzzle.png",
    bg: "bg-[#fdf0e4]",
    accent: "#e8a87c",
  },
  // 3. Pins
  {
    id: "pin-1",
    name: "Storytelling Magic Pin",
    category: "Pins",
    price: 25,
    slogan: "Where every story begins with a spark.",
    image: "/pins.png",
    bg: "bg-[#e8ecf3]",
    accent: "#aab5cc",
  },
  {
    id: "pin-2",
    name: "In the Pyramids Pin",
    category: "Pins",
    price: 25,
    slogan: "A tiny piece of adventure from a world of ancient wonder.",
    image: "/pins.png",
    bg: "bg-[#e8ecf3]",
    accent: "#aab5cc",
  },
  {
    id: "pin-3",
    name: "In the Garden Pin",
    category: "Pins",
    price: 25,
    slogan: "A small symbol of growing ideas and gentle care.",
    image: "/pins.png",
    bg: "bg-[#e8ecf3]",
    accent: "#aab5cc",
  },
  {
    id: "pin-4",
    name: "In Class Pin",
    category: "Pins",
    price: 25,
    slogan: "A little reminder that learning can be fun.",
    image: "/pins.png",
    bg: "bg-[#e8ecf3]",
    accent: "#aab5cc",
  },
  {
    id: "pin-5",
    name: "Touta Logo Pin",
    category: "Pins",
    price: 25,
    slogan: "The magic of Touta, carried with you everywhere.",
    image: "/pins.png",
    bg: "bg-[#e8ecf3]",
    accent: "#aab5cc",
  },
  // 4. Coloring Books
  {
    id: "cb-1",
    name: "Green Touta Coloring Book",
    category: "Coloring Books",
    price: 35,
    slogan: "Create, color, and grow something beautiful.",
    image: "/coloring.png",
    bg: "bg-[#fceae7]",
    accent: "#e5b3aa",
  },
  {
    id: "cb-2",
    name: "In the Pyramids Coloring Book",
    category: "Coloring Books",
    price: 35,
    slogan: "Uncover ancient wonders, one color at a time",
    image: "/coloring.png",
    bg: "bg-[#fceae7]",
    accent: "#e5b3aa",
  },
  {
    id: "cb-3",
    name: "In the Zoo Coloring Book",
    category: "Coloring Books",
    price: 35,
    slogan: "A colorful adventure where every page meets a new friend.",
    image: "/coloring.png",
    bg: "bg-[#fceae7]",
    accent: "#e5b3aa",
  },
  {
    id: "cb-4",
    name: "Our Body Coloring Book",
    category: "Coloring Books",
    price: 35,
    slogan: "Discover the magic inside you through color and curiosity.",
    image: "/coloring.png",
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
      .map((item) => `${item.name} x${item.quantity} - ${item.price * item.quantity} EGP`)
      .join("\n");
  };

  const handleWhatsAppCheckout = () => {
    const message = encodeURIComponent(
      `Hi Touta's Team! I'd like to place an order:\n\n${generateOrderSummary()}\n\nTotal: ${cartTotal} EGP`
    );
    window.open(`https://wa.me/201234567890?text=${message}`, "_blank"); // Placeholder number
  };

  const handleEmailCheckout = () => {
    const body = encodeURIComponent(
      `Hi Touta's Team!\n\nI'd like to place an order:\n\n${generateOrderSummary()}\n\nTotal: ${cartTotal} EGP`
    );
    window.location.href = `mailto:orders@toutasworld.com?subject=New Order from Touta's World&body=${body}`;
  };

  return (
    <main className="min-h-screen w-full bg-[#fafafa] overflow-hidden">
      <Navbar />
      
      {/* Floating Cart Trigger */}
      <motion.button
        className="fixed bottom-8 right-8 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#e27d60] text-white shadow-2xl hover:scale-110 transition-transform"
        onClick={() => setIsCartOpen(true)}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      >
        <ShoppingBag size={24} />
        {cartCount > 0 && (
          <span className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#c2c384] text-[10px] font-bold">
            {cartCount}
          </span>
        )}
      </motion.button>

      {/* Hero */}
      <section className="relative w-full min-h-[45vh] flex flex-col items-center justify-center text-center px-6 py-28 bg-gradient-to-br from-[#fdfbf7] to-[#fdf0e4]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-[#e8a87c]/15 blur-[80px] pointer-events-none" />
        <motion.div
          className="relative z-10 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Eyebrow */}
          <span className="inline-flex items-center gap-3 mb-6 text-[#e8a87c] font-sans font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs">
            <span className="w-10 h-[1px] bg-[#e8a87c]/50 inline-block" />
            Collection
            <span className="w-10 h-[1px] bg-[#e8a87c]/50 inline-block" />
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-medium text-[#1a1a1a] mb-6 leading-tight tracking-tight">
            Shop with <BrandText className="text-[#e27d60] text-[4rem] md:text-[6rem] leading-none">Touta</BrandText>
          </h1>
          <p className="font-sans text-xl text-gray-600 leading-relaxed font-light max-w-2xl mx-auto">
            Curated treasures designed to spark imagination and bring the magic of learning into your home.
          </p>
        </motion.div>
      </section>

      {/* Category Filter */}
      <section className="w-full px-6 py-12">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-8 py-3 font-sans text-sm font-bold transition-all border ${
                activeCategory === cat
                  ? "bg-[#c2c384] text-white border-[#c2c384] shadow-lg"
                  : "bg-white text-gray-500 border-gray-100 hover:border-[#c2c384]/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Product Grid */}
      <section className="w-full px-6 pb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="group rounded-[2.5rem] overflow-hidden bg-white shadow-sm hover:shadow-2xl transition-all duration-700 flex flex-col"
              >
                {/* Product Image */}
                <div className={`relative w-full aspect-[5/4] ${product.bg} flex items-center justify-center overflow-hidden`}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-10 group-hover:scale-110 group-hover:drop-shadow-2xl transition-all duration-700 ease-[0.16,1,0.3,1]"
                  />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-[#111] shadow-sm">
                    {product.category}
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-8 md:p-10 flex flex-col flex-1">
                  <h2 className="font-serif text-2xl md:text-3xl font-medium text-[#1a1a1a] mb-4 group-hover:text-[#e27d60] transition-colors leading-tight tracking-tight">
                    {product.name.split("Touta").map((part, i, arr) => (
                      <span key={i}>
                        {part}
                        {i < arr.length - 1 && <BrandText>Touta</BrandText>}
                      </span>
                    ))}
                  </h2>
                  <p className="font-sans text-base text-gray-500 leading-relaxed mb-8 italic font-light border-l border-[#c2c384]/40 pl-5">{product.slogan}</p>
                  <div className="mt-auto flex items-center justify-between pt-4">
                    <span className="font-serif text-3xl font-medium text-[#1a1a1a]">{product.price} <span className="text-sm text-gray-400 font-sans tracking-widest">EGP</span></span>
                    <button
                      onClick={() => addToCart(product)}
                      className="rounded-full bg-gray-900 px-8 py-3.5 font-sans text-xs md:text-sm font-bold text-white transition-all duration-300 hover:bg-[#e27d60] hover:scale-[1.03] active:scale-95 shadow-xl hover:shadow-[#e27d60]/30"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Cart Drawer Overlay */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 z-[70] w-full max-w-md bg-white shadow-2xl flex flex-col"
            >
              {/* Cart Header */}
              <div className="p-8 border-b border-gray-100 flex items-center justify-between bg-[#fdfbf7]">
                <div className="flex items-center gap-3">
                  <ShoppingBag className="text-[#e27d60]" />
                  <h2 className="font-serif text-2xl font-bold text-gray-900">Your Magic Bag</h2>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
                >
                  <X />
                </button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-8 flex flex-col gap-6">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center opacity-40 py-20">
                    <div className="text-6xl mb-4">✨</div>
                    <p className="font-serif text-xl">Your bag is empty.</p>
                    <p className="font-sans text-sm">Add some magic to get started!</p>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div key={item.id} className="flex gap-4 items-center">
                      <div className={`relative h-20 w-20 rounded-2xl ${item.bg} flex-shrink-0 flex items-center justify-center overflow-hidden`}>
                        <Image src={item.image} alt={item.name} fill className="object-contain p-2" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-serif text-lg font-bold text-gray-900 leading-tight">
                          {item.id.includes("nb") || item.id.includes("pz") || item.id.includes("pin") || item.id.includes("cb") ? (
                            item.name.split("Touta").map((part, i, arr) => (
                              <span key={i}>
                                {part}
                                {i < arr.length - 1 && <BrandText>Touta</BrandText>}
                              </span>
                            ))
                          ) : item.name}
                        </h3>
                        <p className="text-[#c2c384] font-serif text-sm font-bold">{item.price} EGP</p>
                        
                        <div className="flex items-center gap-4 mt-2">
                          <div className="flex items-center border border-gray-200 rounded-full px-2 py-1">
                            <button onClick={() => updateQuantity(item.id, -1)} className="p-1 hover:text-[#e27d60]"><Minus size={14}/></button>
                            <span className="px-3 font-sans text-sm font-bold w-8 text-center">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, 1)} className="p-1 hover:text-[#e27d60]"><Plus size={14}/></button>
                          </div>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-gray-300 hover:text-red-500 text-xs font-bold uppercase tracking-widest transition-colors"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Cart Footer / Checkout */}
              {cart.length > 0 && (
                <div className="p-8 border-t border-gray-100 bg-[#fdfbf7] flex flex-col gap-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-sans text-gray-500 font-medium">Subtotal</span>
                    <span className="font-serif text-3xl font-bold text-gray-900">{cartTotal} EGP</span>
                  </div>
                  
                  <button
                    onClick={handleWhatsAppCheckout}
                    className="flex items-center justify-center gap-3 w-full rounded-full bg-[#25D366] px-8 py-5 font-sans text-base font-bold text-white shadow-xl hover:scale-[1.02] transition-all"
                  >
                    <MessageCircle size={20} />
                    Confirm via WhatsApp
                  </button>

                  <button
                    onClick={handleEmailCheckout}
                    className="flex items-center justify-center gap-3 w-full rounded-full bg-gray-900 px-8 py-5 font-sans text-base font-bold text-white shadow-xl hover:scale-[1.02] transition-all"
                  >
                    <Send size={20} />
                    Confirm via Email
                  </button>
                  
                  <p className="text-center text-[10px] text-gray-400 uppercase tracking-[0.2em] font-sans pt-2">
                    Our team will contact you shortly to finalize your magical order.
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
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#e27d60]"></div>
      </div>
    }>
      <ShopContent />
    </Suspense>
  );
}
