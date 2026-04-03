import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, Briefcase, Heart, Coffee, Moon, Sun, Snowflake } from 'lucide-react';
import { Product, NoteType } from '../types';
import { getNoteConfig } from '../constants';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

const getProfessionalRating = (dna: NoteType[]) => {
  let work = 50; let dates = 50; let casual = 50; 
  let night = 50; let summer = 50; let winter = 50;

  if (dna.includes('Citrico') || dna.includes('Acuatica') || dna.includes('Verde')) {
    summer += 35; casual += 30; work += 25; winter -= 20;
  }
  if (dna.includes('Amaderado') || dna.includes('Cuero') || dna.includes('Especiada')) {
    night += 35; winter += 30; work += 15; summer -= 20;
  }
  if (dna.includes('Dulce') || dna.includes('Oriental') || dna.includes('Vainilla')) {
    dates += 40; night += 20; winter += 30; summer -= 30;
  }
  if (dna.includes('Floral') || dna.includes('Frutal') || dna.includes('Aromatica')) {
    casual += 30; summer += 20; dates += 15; work += 10;
  }

  const clamp = (v: number) => Math.max(10, Math.min(100, v));

  return [
    { label: 'Oficina / Trabajo', value: clamp(work), icon: Briefcase },
    { label: 'Citas / Romance', value: clamp(dates), icon: Heart },
    { label: 'Uso Diario Casual', value: clamp(casual), icon: Coffee },
    { label: 'Salidas Nocturnas', value: clamp(night), icon: Moon },
    { label: 'Primavera / Verano', value: clamp(summer), icon: Sun },
    { label: 'Otoño / Invierno', value: clamp(winter), icon: Snowflake },
  ];
};

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  const ratings = getProfessionalRating(product.dna);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-5xl bg-[#0a0a0a] rounded-3xl border border-white/10 shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-50 w-10 h-10 bg-black/50 hover:bg-white/10 rounded-full flex items-center justify-center text-white/50 hover:text-white transition-colors border border-white/5"
          >
            <X size={20} />
          </button>

          {/* Left Column: Image Chamber */}
          <div className="w-full md:w-5/12 bg-[#050505] flex items-center justify-center p-8 relative overflow-hidden group border-b md:border-b-0 md:border-r border-white/5 min-h-[300px] md:min-h-0">
             <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
             {product.imageUrl ? (
               <img
                 src={`/images/perfumes/${product.imageUrl}`}
                 alt={product.name}
                 className="w-full h-full max-h-[500px] object-contain drop-shadow-[0_20px_30px_rgba(30,58,138,0.2)] hover:scale-105 transition-transform duration-700 ease-out z-10"
               />
             ) : (
               <div className="text-white/20 text-center uppercase tracking-widest text-xs border border-dashed border-white/10 p-12 rounded-2xl">
                 Imagen del<br/>Frasco Pendiente
               </div>
             )}
          </div>

          {/* Right Column: B2B Data & Ratings */}
          <div className="w-full md:w-7/12 p-8 md:p-12 flex flex-col overflow-y-auto no-scrollbar">
            
            {/* Core Header */}
            <div className="mb-8">
               <div className="flex items-center gap-3 mb-4">
                 <span className="px-3 py-1 bg-white/20 border border-white/30 text-[#E5E5E5] text-[10px] tracking-widest uppercase font-bold rounded-full">
                   {product.brand}
                 </span>
                 <span className="text-white/40 text-[10px] uppercase tracking-wider pl-3 border-l border-white/10">
                   {product.category}
                 </span>
               </div>
               
               <h2 className="text-4xl md:text-5xl font-serif text-white mb-4 tracking-wide leading-tight group-hover:text-[#E5E5E5] transition-colors">
                 {product.name}
                 {product.subcategory && (
                   <span className="block text-xl text-white/40 mt-1 font-sans font-light tracking-normal">
                     Línea {product.subcategory}
                   </span>
                 )}
               </h2>
               
               <p className="text-white/60 text-sm leading-relaxed max-w-lg font-sans">
                 {product.description}
               </p>
            </div>

            {/* Olfactory DNA Summary */}
            <div className="mb-10">
               <h3 className="text-[10px] text-white/30 uppercase tracking-[0.2em] mb-4 flex items-center gap-4">
                 ADN Olfativo <div className="h-px flex-1 bg-white/5" />
               </h3>
               <div className="flex gap-4 flex-wrap">
                 {product.dna.map((note, idx) => {
                    const config = getNoteConfig(note);
                    const Icon = config.icon;
                    return (
                      <div key={idx} className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/5 bg-white/5">
                        <Icon size={14} style={{ color: config.color }} />
                        <span className="text-xs text-white/80 font-medium">{config.label}</span>
                      </div>
                    );
                 })}
               </div>
            </div>

            {/* Professional Rating Section */}
            <div className="mt-auto">
               <h3 className="text-[10px] text-white font-bold uppercase tracking-[0.2em] mb-6 flex items-center gap-4">
                 <Star size={12} className="fill-current" /> Calificación de Ocasión B2B <div className="h-px flex-1 bg-white/5" />
               </h3>
               
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
                 {ratings.map((rating, i) => {
                    const RatingIcon = rating.icon;
                    return (
                      <div key={i} className="flex flex-col gap-2">
                        <div className="flex justify-between items-center">
                           <div className="flex items-center gap-2">
                             <RatingIcon size={12} className="text-white/40" />
                             <span className="text-xs text-white/60 uppercase tracking-widest">{rating.label}</span>
                           </div>
                           <span className="text-xs font-mono font-bold text-white">{rating.value}%</span>
                        </div>
                        {/* Progress Bar */}
                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${rating.value}%` }}
                            transition={{ duration: 1, delay: 0.2 + (i * 0.1), ease: "easeOut" }}
                            className="h-full bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                          />
                        </div>
                      </div>
                    );
                 })}
               </div>
            </div>

          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProductModal;
