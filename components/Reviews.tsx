import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Zap, CheckCircle, Smartphone, Globe, Landmark, Sparkles } from 'lucide-react';

const qualityPillars = [
  { id: 1, title: "100% Original", text: "Garantía total de autenticidad en cada fragancia.", icon: <ShieldCheck className="w-8 h-8 text-white/20" />, color: "from-white/10 to-transparent" },
  { id: 2, title: "Importación Directa", text: "Sin intermediarios, directamente desde los fabricantes globales.", icon: <Globe className="w-8 h-8 text-white/20" />, color: "from-white/10 to-transparent" },
  { id: 3, title: "Batch Codes", text: "Códigos de lote verificables para total transparencia.", icon: <Landmark className="w-8 h-8 text-white/20" />, color: "from-white/10 to-transparent" },
  { id: 4, title: "Envío Nacional", text: "Logística asegurada a todas las provincias del Ecuador.", icon: <Zap className="w-8 h-8 text-white/20" />, color: "from-white/10 to-transparent" },
  { id: 5, title: "Precios B2B", text: "Márgenes competitivos diseñados para tu negocio.", icon: <CheckCircle className="w-8 h-8 text-white/20" />, color: "from-white/10 to-transparent" },
  { id: 6, title: "Soporte Especializado", text: "Asesoría personalizada para armar tu inventario.", icon: <Smartphone className="w-8 h-8 text-white/20" />, color: "from-white/10 to-transparent" },
  { id: 7, title: "Sellos de Seguridad", text: "Productos con empaques y sellos intactos de fábrica.", icon: <Award className="w-8 h-8 text-white/20" />, color: "from-white/10 to-transparent" },
  { id: 8, title: "Catálogo 2026", text: "Las últimas tendencias y lanzamientos internacionales.", icon: <Sparkles className="w-8 h-8 text-white/20" />, color: "from-white/10 to-transparent" },
];

const Reviews: React.FC = () => {
  return (
    <section className="py-24 bg-[#0a0a0a] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-white mb-4 tracking-wide drop-shadow-md uppercase tracking-[0.2em]">Excelencia en Perfumería</h2>
        <p className="text-white/50 text-sm font-sans tracking-wide uppercase tracking-[0.3em]">Estándares de calidad de nivel mundial para el mercado ecuatoriano.</p>
      </div>

      <div className="relative w-full flex overflow-x-hidden group mb-8 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]">
        <div className="flex gap-6 animate-scroll whitespace-nowrap px-6">
          {[...qualityPillars, ...qualityPillars, ...qualityPillars].map((pillar, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02, borderColor: "rgba(255,255,255,0.4)" }}
              className={`w-80 md:w-96 flex-shrink-0 bg-[#121212] border border-white/10 p-8 rounded-2xl relative shadow-xl shadow-black/50 transition-all overflow-hidden`}
            >
              {/* Background gradient hint */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent -mr-16 -mt-16 rounded-full blur-2xl"></div>
              
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                  {pillar.icon}
                </div>
                <div className="bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                   <span className="text-white/40 text-[8px] uppercase tracking-[0.2em] font-bold">Certificado B2B</span>
                </div>
              </div>

              <h3 className="text-white text-lg font-serif mb-3 tracking-wide">{pillar.title}</h3>
              <p className="text-white/50 text-sm font-sans whitespace-normal leading-relaxed">{pillar.text}</p>
              
              <div className="mt-8 flex items-center gap-2">
                 <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent"></div>
                 <div className="w-1 h-1 rounded-full bg-white/20"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-scroll {
          animation: scroll 60s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Reviews;