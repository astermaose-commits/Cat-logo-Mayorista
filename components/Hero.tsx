import React from 'react';
import { motion } from 'framer-motion';
import { Vortex } from './Vortex';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[95vh] flex flex-col items-center justify-center overflow-hidden bg-void border-b border-white/5">
      
      {/* 1. Vortex Background */}
      <Vortex />
      
      {/* 2. Background Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-10 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"
        style={{ filter: 'contrast(120%) brightness(50%)' }}
      ></div>

      {/* 3. Soft Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#050505_100%)] z-0 pointer-events-none opacity-90"></div>
      
      {/* 4. Content - Shifted Downwards */}
      {/* Added significant pt (padding-top) to push the visual center lower on the screen */}
      <div className="relative z-10 w-full max-w-7xl px-4 h-full flex flex-col items-center justify-center pt-32 md:pt-56 pb-12">
        
        {/* Subtitle - Above Logo */}
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-white font-sans uppercase tracking-[0.2em] md:tracking-[0.4em] mb-8 md:mb-12 text-[10px] md:text-sm font-bold drop-shadow-lg text-center"
        >
          Esencia Pura • Importación Directa • Catálogo 2026
        </motion.p>
        
        {/* Logo Container - Replaced image with styled text */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
          className="relative w-full flex flex-col justify-center items-center gap-2"
        >
           {/* Soft Glow */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-white/10 blur-[80px] rounded-full pointer-events-none -z-10"></div>

           <h1 className="text-4xl md:text-7xl lg:text-8xl font-serif font-bold text-center tracking-[0.2em] text-gold uppercase drop-shadow-2xl">
             Perfumería
           </h1>
           <div className="h-px w-32 md:w-64 bg-gradient-to-r from-transparent via-[#FFFFFF] to-transparent my-2 md:my-4"></div>
           <h2 className="text-2xl md:text-5xl lg:text-6xl font-serif text-white/90 tracking-[0.3em] font-light uppercase">
             Exclusiva
           </h2>
        </motion.div>

        {/* Scroll Line - Anchors the bottom */}
        <motion.div 
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 0.5 }}
          transition={{ delay: 1, duration: 1 }}
          className="h-16 md:h-24 w-[1px] bg-gradient-to-b from-[#FFFFFF] to-transparent mt-10 md:mt-16 origin-top opacity-30"
        ></motion.div>
      </div>
    </section>
  );
};

export default Hero;