import React from 'react';
import { PackageCheck, ShieldCheck, Truck, HeadphonesIcon, MapPin, Mail, Phone, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* B2B Trust Pillars (Solid & Prominent) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="flex flex-col items-center text-center p-8 bg-[#121212] rounded-2xl border border-white/5 shadow-xl shadow-black/50 hover:border-white/30 transition-colors">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FFFFFF] to-[#111111] flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(191,149,63,0.3)]">
              <Truck className="w-8 h-8 text-[#111] fill-current" />
            </div>
            <h4 className="text-white font-serif text-xl mb-3">Importadores Directos</h4>
            <p className="text-white/50 text-sm max-w-[220px] leading-relaxed">
               Garantizamos los mejores precios de Ecuador. Del fabricante a tu bodega, sin intermediarios.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center p-8 bg-[#121212] rounded-2xl border border-white/5 shadow-xl shadow-black/50 hover:border-white/30 transition-colors">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FFFFFF] to-[#111111] flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(191,149,63,0.3)]">
              <ShieldCheck className="w-8 h-8 text-[#111] fill-current" />
            </div>
            <h4 className="text-white font-serif text-xl mb-3">Envíos Asegurados</h4>
            <p className="text-white/50 text-sm max-w-[220px] leading-relaxed">
              Despachos diarios 100% seguros a todas las provincias. Inversión protegida.
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-8 bg-[#121212] rounded-2xl border border-white/5 shadow-xl shadow-black/50 hover:border-white/30 transition-colors">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FFFFFF] to-[#111111] flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(191,149,63,0.3)]">
              <HeadphonesIcon className="w-8 h-8 text-[#111] fill-current" />
            </div>
            <h4 className="text-white font-serif text-xl mb-3">Soporte Mayorista 24/7</h4>
            <p className="text-white/50 text-sm max-w-[220px] leading-relaxed">
              Atención personalizada para cotizaciones, catálogos y armado de pedidos por volumen.
            </p>
          </div>
        </div>

        {/* 4-Column B2B Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16 border-t border-white/5 pt-16">
          
          {/* Column 1: Brand & Mission */}
          <div className="flex flex-col gap-6">
            <div className="text-2xl font-serif font-bold text-white tracking-widest drop-shadow-md">
              PERFUMERÍA MAYORISTA
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
               Distribuidores líderes de perfumería nicho y diseñador en Ecuador. Proveemos mercadería 100% original con códigos batch verificables para negocios y emprendedores.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40">
                <PackageCheck size={20} />
              </div>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold tracking-widest uppercase text-xs mb-2">Navegación Rápida</h4>
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">Catálogo Completo</a>
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">Nuevos Ingresos</a>
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">Sobre Nosotros</a>
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">Solicitar Muestras</a>
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">Preguntas Frecuentes (FAQ)</a>
          </div>

          {/* Column 3: Legal & Support */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold tracking-widest uppercase text-xs mb-2">Legal & Soporte</h4>
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">Términos y Condiciones</a>
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">Políticas de Compra Mayorista</a>
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">Políticas de Envío</a>
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">Garantías y Devoluciones</a>
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">Aviso de Privacidad</a>
          </div>

          {/* Column 4: Direct Contact */}
          <div className="flex flex-col gap-6">
             <h4 className="text-white font-bold tracking-widest uppercase text-xs mb-2">Contacto Directo</h4>
             
             <div className="flex items-start gap-3">
               <MapPin className="w-5 h-5 text-white shrink-0 mt-0.5" />
               <div className="flex flex-col">
                 <span className="text-white/80 text-sm">Sede Central Operativa</span>
                 <span className="text-white/40 text-xs">Ecuador</span>
               </div>
             </div>
          </div>

        </div>

        {/* Logistics & Payment Base */}
        <div className="border-t border-white/5 pt-8 pb-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <span className="text-[10px] text-white/30 uppercase tracking-widest bg-white/5 px-2 py-1 rounded">Depósitos / Transferencias</span>
            <span className="text-[10px] text-white/30 uppercase tracking-widest bg-white/5 px-2 py-1 rounded">Banco Pichincha</span>
            <span className="text-[10px] text-white/30 uppercase tracking-widest bg-white/5 px-2 py-1 rounded">Banco Guayaquil</span>
            <span className="text-white/20 mx-2">|</span>
            <span className="text-[10px] text-white/30 uppercase tracking-widest bg-white/5 px-2 py-1 rounded">Servientrega</span>
            <span className="text-[10px] text-white/30 uppercase tracking-widest bg-white/5 px-2 py-1 rounded">Urbano Express</span>
          </div>

          <div className="text-[10px] text-white/20 font-sans tracking-widest text-center md:text-right">
             &copy; {new Date().getFullYear()} PERFUMERÍA PERFUMERÍA MAYORISTA. TODOS LOS DERECHOS RESERVADOS.
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;