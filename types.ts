export type NoteType = 
  | 'Citrico' | 'Amaderado' | 'Especiada' | 'Frutal' | 'Acuatica' 
  | 'Oriental' | 'Fougere' | 'Floral' | 'Cuero' | 'Vainilla' | 'Dulce' | 'Aromatica' | 'Verde';

export interface Product {
  id: string; // Changed to string for logical IDs
  brand: string;         
  name: string;          
  description: string;
  category: 'Árabe' | 'Nicho' | 'Autor' | 'Diseñador'; // Updated categories
  subcategory?: string; // New field for lines like "Bad Boy", "Invictus"
  gender: 'Hombre' | 'Dama' | 'Unisex'; // New field
  dna: NoteType[]; 
  price: number;
  imageUrl: string; // Will hold the filename as requested
  badge?: string; // e.g. "TOP VENTAS", "NUEVO"
}

export interface FilterState {
  search: string;
  category: string;
}