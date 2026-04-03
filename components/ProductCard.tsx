import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { Product } from '../types';
import { getNoteConfig } from '../constants';

interface ProductCardProps {
  product: Product;
  index: number;
  onSelect: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index, onSelect }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: (index % 12) * 0.05, duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      onClick={() => onSelect(product)}
      className="group relative w-full bg-[#050505] border border-white/10 overflow-hidden flex flex-col hover:border-white/40 transition-all duration-300 shadow-xl shadow-black/80 cursor-pointer rounded-xl"
    >
      {/* Top Badges (Absolute) */}
      <div className="absolute top-4 left-4 right-4 z-20 flex justify-between items-start pointer-events-none">
        <div className="px-3 py-1 rounded-full border border-white/30 bg-black/60 backdrop-blur-md flex items-center justify-center">
          <span className="text-white font-serif text-[10px] tracking-widest uppercase font-bold">{product.brand}</span>
        </div>
        
        {/* Dynamic Marketing Badge */}
        {product.badge && (
           <div className="px-3 py-1 rounded-full bg-white shadow-[0_0_15px_rgba(191,149,63,0.5)]">
             <span className="text-black font-extrabold font-sans text-[9px] tracking-widest uppercase">
               {product.badge}
             </span>
           </div>
        )}
      </div>

      {/* Image Chamber */}
      <div className="relative h-72 lg:h-96 w-full bg-[#0a0a0a] p-0 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
        {product.imageUrl ? (
          <img
             src={`/images/perfumes/${product.imageUrl}`}
             alt={product.name}
             loading="lazy"
             className="h-full w-full object-contain p-2 md:p-6 z-0 group-hover:scale-110 drop-shadow-2xl transition-transform duration-700 ease-out drop-shadow-[0_15px_15px_rgba(0,0,0,0.5)] group-hover:drop-shadow-[0_20px_25px_rgba(255,255,255,0.1)]"
          />
        ) : (
          <div className="flex flex-col items-center justify-center h-full w-full p-8 z-0">
             <div className="w-full h-full border border-dashed border-white/10 rounded-2xl flex items-center justify-center p-4 transition-colors duration-500 group-hover:border-white/30">
                <span className="font-sans text-[10px] tracking-[0.2em] text-center text-white/20 uppercase group-hover:text-white/50 transition-colors">
                  Imagen en <br/> preparación
                </span>
             </div>
          </div>
        )}
      </div>

      {/* Data Hierarchy - B2B Magazine Style */}
      <div className="flex-1 p-6 flex flex-col justify-between border-t border-white/5 relative bg-[#050505]">

        {/* Header Info */}
        <div className="mb-6 relative z-10">
          <div className="flex flex-col items-start gap-1 mb-3">
             <h2 className="text-2xl md:text-3xl font-serif text-white group-hover:text-white transition-colors tracking-wide leading-tight drop-shadow-md">
              {product.name}
            </h2>
            <div className="w-12 h-[1px] bg-white opacity-70 mt-2 mb-1"></div>
          </div>
          <span className="text-[9px] text-white uppercase tracking-[0.2em] font-bold mb-3 block">
            {product.category} <span className="text-white/30 px-2">|</span> {product.gender}
          </span>

          <p className="text-xs md:text-sm text-[#B3B3B3] font-sans font-medium leading-relaxed line-clamp-3 min-h-[3rem]">
            {product.description}
          </p>
        </div>

        {/* Olfactory DNA with Icons */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] text-white/30 uppercase tracking-widest">NOTAS OLFATIVAS</span>
            <div className="h-[1px] flex-1 bg-white/5"></div>
          </div>
          <div className="flex flex-wrap gap-3">
            {product.dna.map((note, i) => {
              const config = getNoteConfig(note);
              const Icon = config.icon;
              return (
                <div key={i} className="group/note relative flex items-center justify-center">
                  <div
                    className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-transform hover:scale-110"
                    style={{ backgroundColor: `${config.color}20`, borderColor: config.color }}
                  >
                    <Icon size={14} style={{ color: config.color }} />
                  </div>
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black/90 border border-white/10 text-[10px] text-white rounded opacity-0 group-hover/note:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-30 backdrop-blur-sm">
                    {config.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* B2B Technical Ficha Trigger */}
        <div className="mt-auto">
          <button className="w-full bg-transparent border border-white/10 hover:border-white hover:bg-white text-white/50 hover:text-black py-3.5 px-4 rounded-xl font-bold uppercase tracking-[0.15em] text-[10px] transition-all flex justify-center items-center gap-3">
             Ver Ficha Técnica B2B
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;