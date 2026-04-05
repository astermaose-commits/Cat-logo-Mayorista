import React, { useState, useEffect, useRef } from 'react';
import { Search, ShoppingBag, Menu, X, MapPin, Phone, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FilterState } from '../types';
import { PRODUCTS } from '../constants'; // Required for Live Search

interface NavbarProps {
  onFilterChange: (filters: FilterState) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onFilterChange }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isBrandsOpen, setIsBrandsOpen] = useState(false);
  
  const searchRef = useRef<HTMLDivElement>(null);
  const brandsRef = useRef<HTMLDivElement>(null);

  // Main Categories
  const mainCategories = ['All', 'Hombre', 'Dama', 'Unisex', 'Árabe', 'Diseñador', 'Nicho', 'Autor'];
  
  // Brands for dropdown
  const brandOptions = [
    'Yanbal', 'Carolina Herrera', 'Paco Rabanne', 'Jean Paul Gaultier', 
    'Hugo Boss', "Victoria's Secret", 'Creed', 'Armani', 'Dior', 'Versace', 
    'Montblanc', 'Bvlgari', 'Calvin Klein', 'Chanel', 'Mugler', 'Givenchy'
  ];

  const handleCategoryClick = (cat: string) => {
    setActiveCategory(cat);
    onFilterChange({ search: '', category: cat });
    setIsMenuOpen(false);
    setIsBrandsOpen(false);
  };

  const handleFullCatalog = () => {
    handleCategoryClick('All');
    document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Click outside listener for dropdowns
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchExpanded(false);
      }
      if (brandsRef.current && !brandsRef.current.contains(event.target as Node)) {
        setIsBrandsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Live Search Logic
  const searchResults = searchQuery.trim() === '' ? [] : PRODUCTS.filter(p => {
    const s = searchQuery.toLowerCase();
    return p.name.toLowerCase().includes(s) || 
           p.brand.toLowerCase().includes(s) ||
           (p.subcategory && p.subcategory.toLowerCase().includes(s));
  }).slice(0, 5);

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 w-full z-40 backdrop-blur-xl bg-[#0f0f0f]/90 border-b border-white/5"
      >
        {/* B2B Announcement Bar */}
        <div className="w-full bg-gradient-to-r from-[#FFFFFF] via-[#E5E5E5] to-[#FFFFFF] py-1.5 flex justify-center items-center">
          <p className="text-black text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-center">
            Importadores Directos • Envíos Nacionales Seguros • Cotiza al por Mayor
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 md:py-4">
          <div className="flex items-center justify-between mb-4">
            <button onClick={() => setIsMenuOpen(true)} className="group">
              <Menu className="w-6 h-6 text-white/60 group-hover:text-white transition-colors" />
            </button>
            
            <div className="flex flex-col items-center cursor-pointer" onClick={() => window.scrollTo(0,0)}>
              <div className="text-xl md:text-2xl font-serif font-bold tracking-[0.3em] text-white select-none text-center">
                CATÁLOGO MAYORISTA
              </div>
            </div>

            <ShoppingBag className="w-6 h-6 text-white/40 hover:text-white cursor-pointer transition-colors" />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 relative">
            
            {/* Live Search Bar */}
            <div ref={searchRef} className="relative z-50 w-full md:w-auto">
              <motion.div 
                className={`relative flex items-center bg-[#1a1a1a] border rounded-full px-4 py-2 transition-all duration-300 shadow-inner ${
                  isSearchExpanded ? 'w-full md:w-[400px] border-white' : 'w-full md:w-[280px] border-white/10'
                }`}
                onClick={() => setIsSearchExpanded(true)}
              >
                <Search className={`w-4 h-4 mr-3 transition-colors ${isSearchExpanded ? 'text-white' : 'text-white/40'}`} />
                <input 
                  type="text" 
                  value={searchQuery}
                  placeholder="Buscar marca, modelo o perfume..." 
                  className="bg-transparent border-none outline-none text-sm text-white w-full font-sans placeholder-white/30"
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setIsSearchExpanded(true);
                  }}
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery('')} className="ml-2 text-white/40 hover:text-white">
                    <X className="w-4 h-4" />
                  </button>
                )}
              </motion.div>

              {/* Predictive Dropdown */}
              <AnimatePresence>
                {isSearchExpanded && searchQuery && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full mt-2 left-0 w-full bg-[#121212] border border-white/10 rounded-xl shadow-2xl overflow-hidden"
                  >
                    {searchResults.length > 0 ? (
                      <div className="flex flex-col">
                        <div className="px-4 py-2 bg-white/5 border-b border-white/5">
                          <span className="text-[10px] text-white/50 uppercase tracking-widest">Resultados Sugeridos</span>
                        </div>
                        {searchResults.map((p) => (
                          <div 
                            key={p.id} 
                            onClick={() => {
                               setSearchQuery(p.name);
                               onFilterChange({ category: 'All', search: p.name });
                               setIsSearchExpanded(false);
                            }}
                            className="flex items-center gap-3 p-3 hover:bg-white/5 cursor-pointer transition-colors border-b border-white/5 last:border-b-0 group"
                          >
                            <div className="w-10 h-10 bg-black rounded overflow-hidden flex-shrink-0 flex items-center justify-center p-1 border border-white/5">
                              {p.imageUrl ? (
                                <img src={`/images/perfumes/${p.imageUrl}`} className="w-full h-full object-contain" alt={p.name} />
                              ) : (
                                <span className="text-[8px] text-white/20">N/A</span>
                              )}
                            </div>
                            <div className="flex flex-col gap-0.5">
                              <span className="text-white text-sm font-sans group-hover:text-white transition-colors line-clamp-1">{p.name}</span>
                              <span className="text-white/40 text-[10px] uppercase tracking-wider">{p.brand}</span>
                            </div>
                          </div>
                        ))}
                        <button 
                          onClick={() => {
                             onFilterChange({ category: 'All', search: searchQuery });
                             setIsSearchExpanded(false);
                          }}
                          className="px-4 py-3 bg-white/10 text-white text-xs font-bold uppercase tracking-wider text-center hover:bg-white/20 transition-colors"
                        >
                          Ver todos los resultados
                        </button>
                      </div>
                    ) : (
                      <div className="p-4 text-center text-white/40 text-sm">
                        No se encontraron perfumes para "{searchQuery}"
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* High-Level Categories - Swipeable on mobile */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide no-scrollbar">
              {mainCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryClick(cat)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-sans tracking-widest uppercase transition-all duration-300 whitespace-nowrap border ${
                    activeCategory === cat 
                      ? 'border-white text-black font-bold' 
                      : 'border-white/10 text-white/50 hover:border-white/30 hover:text-white'
                  }`}
                >
                  {activeCategory === cat && (
                    <motion.div
                      layoutId="activeChip"
                      className="absolute inset-0 bg-gradient-to-r from-[#FFFFFF] to-[#E5E5E5] rounded-full z-0"
                    />
                  )}
                  <span className="relative z-10">{cat === 'All' ? 'Catálogo' : cat}</span>
                </button>
              ))}

              {/* Brands Dropdown Toggle */}
              <div className="relative" ref={brandsRef}>
                <button
                  onClick={() => setIsBrandsOpen(!isBrandsOpen)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-sans tracking-widest uppercase transition-all duration-300 whitespace-nowrap border flex items-center gap-1 ${
                    brandOptions.includes(activeCategory) 
                      ? 'border-white text-white font-bold bg-white/10' 
                      : 'border-white/10 text-white/50 hover:border-white/30 hover:text-white'
                  }`}
                >
                  <span>Marcas</span>
                  <ChevronDown className={`w-3 h-3 transition-transform ${isBrandsOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Brands Mega-Menu Mini */}
                <AnimatePresence>
                  {isBrandsOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute top-full mt-3 right-0 w-64 bg-[#121212] border border-white/30 rounded-xl shadow-2xl z-50 p-2 grid grid-cols-2 gap-1"
                    >
                      {brandOptions.map(brand => (
                        <button
                          key={brand}
                          onClick={() => handleCategoryClick(brand)}
                          className={`text-left px-3 py-2 rounded-lg text-xs font-sans transition-colors ${
                            activeCategory === brand 
                            ? 'bg-white text-black font-bold' 
                            : 'text-white/70 hover:bg-white/10'
                          }`}
                        >
                          {brand}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Sidebar Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            />
            
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 left-0 h-full w-[85%] max-w-sm bg-[#0a0a0a] border-r border-white/20 z-50 flex flex-col shadow-2xl overflow-y-auto"
            >
              <div className="p-6 flex justify-between items-center border-b border-white/5 sticky top-0 bg-[#0a0a0a] z-10">
                 <h2 className="text-xl font-serif text-gold tracking-widest uppercase">Catálogo 2026</h2>
                 <button onClick={() => setIsMenuOpen(false)}>
                   <X className="w-6 h-6 text-white/50 hover:text-white" />
                 </button>
              </div>

              <div className="flex-1 p-6 flex flex-col gap-6">
                <div className="space-y-3">
                  <h3 className="text-white font-sans text-[10px] uppercase tracking-widest pl-2">Navegación</h3>
                  <button onClick={() => setIsMenuOpen(false)} className="block w-full text-lg font-serif text-white hover:bg-white/5 px-4 py-2 rounded-lg transition-colors text-left">Inicio</button>
                  <button onClick={handleFullCatalog} className="block w-full text-lg font-serif text-white hover:bg-white/5 px-4 py-2 rounded-lg transition-colors text-left">Catálogo Completo</button>
                </div>

                <div className="space-y-2">
                  <h3 className="text-white font-sans text-[10px] uppercase tracking-widest pl-2 mb-2">Líneas Exclusivas</h3>
                  {['Árabe', 'Diseñador', 'Nicho', 'Autor'].map(cat => (
                    <button key={cat} onClick={() => handleCategoryClick(cat)} className="block w-full text-sm font-sans text-white/70 hover:text-white hover:bg-white/5 px-4 py-2 rounded-lg transition-colors text-left">{cat}</button>
                  ))}
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-white font-sans text-[10px] uppercase tracking-widest pl-2 mb-2">Marcas Principales</h3>
                  <div className="grid grid-cols-2 gap-1 px-2">
                    {brandOptions.slice(0, 8).map(brand => (
                      <button key={brand} onClick={() => handleCategoryClick(brand)} className="text-xs text-white/60 hover:text-white text-left p-2 hover:bg-white/5 rounded">
                        {brand}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="h-px bg-white/5 my-2"></div>
                
                <div className="flex flex-col gap-3 px-2">
                  <div className="flex items-center gap-4 text-white/60 group">
                    <MapPin className="w-4 h-4 text-white" />
                    <span className="font-sans text-sm group-hover:text-white transition-colors">Sede Central Operativa - Ecuador</span>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-white/5 bg-black/40 mt-auto">
                <p className="text-[10px] text-white/30 font-sans text-center uppercase tracking-widest">
                  Operación B2B Mayorista
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;