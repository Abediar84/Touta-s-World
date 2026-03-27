import React from 'react';
import Image from 'next/image';

const mockProducts = [
  {
    category: 'SCRIBE ESSENTIALS',
    name: 'The Archive Notebook',
    description: 'Capture your daily discoveries.',
    image: '/notebook.png',
    actionText: 'Discover →',
    hoverColor: 'hover:bg-primary-fixed',
    textColor: 'text-primary'
  },
  {
    category: 'MYSTERY GAMES',
    name: 'Sphinx Riddle Puzzles',
    description: 'Piecing history back together.',
    image: '/puzzle.png',
    actionText: 'Solve →',
    hoverColor: 'hover:bg-secondary-container',
    textColor: 'text-secondary'
  },
  {
    category: 'EMBLEMS',
    name: 'Curator\'s Enamel Pins',
    description: 'Small tokens of eternal magic.',
    image: '/pins.png',
    actionText: 'Collect →',
    hoverColor: 'hover:bg-tertiary-fixed',
    textColor: 'text-tertiary'
  },
  {
    category: 'CANVAS WORK',
    name: 'Pharaoh\'s Coloring Book',
    description: 'Add your own light to the story.',
    image: '/coloring.png',
    actionText: 'Create →',
    hoverColor: 'hover:bg-surface-variant',
    textColor: 'text-on-surface'
  }
];

export default function ProductShowcase() {
  return (
    <section className="py-32 max-w-7xl mx-auto px-8 md:px-20">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div className="flex flex-col gap-4">
          <span className="font-label text-tertiary font-bold tracking-[0.2em] text-xs uppercase">THE COLLECTION</span>
          <h3 className="font-headline text-4xl font-light">
            Artifacts for <span className="font-headline italic text-primary">Modern Explorers</span>
          </h3>
        </div>
        <a className="font-label text-sm font-semibold text-primary underline decoration-primary/30 underline-offset-8 hover:text-on-primary-container transition-colors" href="/shop">
          VIEW THE ENTIRE ARCHIVE
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {mockProducts.map((product, idx) => (
          <div key={idx} className={`group relative bg-surface-container-lowest rounded-xl p-8 ${product.hoverColor} transition-colors duration-500 flex flex-col items-center text-center`}>
            <div className="w-full aspect-square relative bg-surface-container p-6 rounded-lg mb-8 overflow-hidden">
              <Image 
                src={product.image}
                alt={product.name}
                fill
                className="object-cover rounded shadow-sm group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <span className="font-label text-[10px] tracking-widest text-outline uppercase mb-2">
              {product.category}
            </span>
            <h4 className="font-headline text-xl mb-2">{product.name}</h4>
            <p className="font-body text-sm text-on-surface-variant opacity-70">
              {product.description}
            </p>
            <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 transition-transform">
              <span className={`${product.textColor} font-bold`}>{product.actionText}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
