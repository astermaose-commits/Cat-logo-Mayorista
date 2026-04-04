import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, BadgeCheck, Instagram } from 'lucide-react';

const reviews = [
  { id: 1, name: "Distribuidora M.", text: "Realizamos nuestro primer pedido de 50 unidades. La mejor fijación, mercadería 100% original. Llegó con sellos intactos.", location: "Quito, Pichincha", date: "15 Mar 2026", stars: 5 },
  { id: 2, name: "Andrea S.", text: "El envío por Servientrega al por mayor a Guayaquil fue rapidísimo y muy bien embalado. Excelente margen de ganancia.", location: "Guayaquil, Guayas", date: "12 Mar 2026", stars: 5 },
  { id: 3, name: "Perfumería D.", text: "Los mejores precios B2B que he encontrado en Ecuador, y la atención por WhatsApp para armar el pedido fue impecable.", location: "Cuenca, Azuay", date: "08 Mar 2026", stars: 5 },
  { id: 4, name: "Fernanda R.", text: "Conseguí lotes de Lattafa y Afnan que no encontraba con otros distribuidores. Totalmente recomendados para surtir.", location: "Machala, El Oro", date: "02 Mar 2026", stars: 5 },
];

const Reviews: React.FC = () => {
  return (
    <section className="py-24 bg-[#0a0a0a] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-white mb-4 tracking-wide drop-shadow-md">Comunidad Mayorista</h2>
        <p className="text-white/50 text-sm font-sans tracking-wide uppercase">Operaciones exitosas en todo el Ecuador.</p>
      </div>

      <div className="relative w-full flex overflow-x-hidden group mb-16 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]">
        <div className="flex gap-6 animate-scroll whitespace-nowrap px-6">
          {[...reviews, ...reviews, ...reviews].map((review, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02 }}
              className="w-80 md:w-96 flex-shrink-0 bg-[#121212] border border-white/20 p-8 rounded-2xl relative shadow-xl shadow-black/50 transition-all hover:border-white/50"
            >
              <Quote className="absolute top-6 right-6 text-white/10 w-12 h-12" />
              
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} size={16} className={s < review.stars ? "fill-[#FFFFFF] text-white" : "text-white/20"} />
                  ))}
                </div>
                <div className="bg-green-500/10 border border-green-500/20 px-2 py-1 rounded flex items-center gap-1">
                   <BadgeCheck size={10} className="text-green-500" />
                   <span className="text-green-500 text-[8px] uppercase tracking-widest font-bold">Compra Verificada</span>
                </div>
              </div>

              <p className="text-white/80 text-sm font-sans whitespace-normal mb-6 leading-relaxed">"{review.text}"</p>
              
              <div className="flex flex-col gap-1 border-t border-white/5 pt-4 mt-auto">
                <p className="text-white text-xs font-bold uppercase tracking-widest">{review.name}</p>
                <p className="text-white/40 text-[10px] font-sans tracking-wider uppercase">
                  📍 {review.location} &bull; 🗓 {review.date}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-center px-6">
        <a href="https://instagram.com/perfumerialospaisas" target="_blank" rel="noopener noreferrer">
           <button className="bg-[#1a1a1a] hover:bg-[#222] border border-white/30 hover:border-white text-white px-8 py-4 rounded-xl font-sans text-xs uppercase tracking-[0.15em] transition-all flex items-center gap-3 shadow-[0_0_15px_rgba(191,149,63,0.1)] hover:shadow-[0_0_25px_rgba(191,149,63,0.3)]">
             <Instagram size={18} className="text-white" />
             Ver cientos de referencias en nuestro Instagram
           </button>
        </a>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-scroll {
          animation: scroll 45s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Reviews;