import { Product, NoteType } from './types';
import { Sun, Trees, Droplets, Flower, Flame, Wind, Cherry, Coffee, Zap, Heart, Leaf } from 'lucide-react';

export const getNoteConfig = (note: NoteType) => {
  switch (note) {
    case 'Citrico': return { color: '#FACC15', icon: Sun, label: 'Cítrico' };
    case 'Amaderado': return { color: '#78350F', icon: Trees, label: 'Amaderado' };
    case 'Especiada': return { color: '#EA580C', icon: Flame, label: 'Especiado' };
    case 'Frutal': return { color: '#EC4899', icon: Cherry, label: 'Frutal' };
    case 'Acuatica': return { color: '#06B6D4', icon: Droplets, label: 'Acuático' };
    case 'Oriental': return { color: '#7C3AED', icon: Wind, label: 'Oriental' };
    case 'Fougere': return { color: '#10B981', icon: Trees, label: 'Fougère' };
    case 'Floral': return { color: '#F472B6', icon: Flower, label: 'Floral' };
    case 'Cuero': return { color: '#3E2723', icon: Zap, label: 'Cuero' };
    case 'Vainilla': return { color: '#FDE047', icon: Coffee, label: 'Vainilla' };
    case 'Dulce': return { color: '#DB2777', icon: Heart, label: 'Dulce' };
    case 'Aromatica': return { color: '#84CC16', icon: Wind, label: 'Aromático' };
    case 'Verde': return { color: '#4ADE80', icon: Leaf, label: 'Verde' };
    default: return { color: '#9CA3AF', icon: Sun, label: 'General' };
  }
};

export const PRODUCTS: Product[] = [
  // ==========================================
  // GAMA MEDIA Y VARIADOS - FEMENINOS
  // ==========================================
  {
    id: 'giardini-di-toscana-bianco-latte',
    name: 'Bianco Latte',
    brand: 'Giardini di Toscana',
    category: 'Nicho',
    gender: 'Dama',
    price: 45.00,
    badge: 'NUEVO',
    imageUrl: `150_Mujer_Giardini_di_Toscana_Bianco_Latte.webp`,
    description: 'El abrazo viral de caramelo, miel y vainilla cremosa.',
    dna: ['Vainilla', 'Dulce', 'Gourmand' as NoteType]
  },
  {
    id: 'selena-gomez-selena',
    name: 'Selena Gomez',
    brand: 'Selena Gomez',
    category: 'Diseñador',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `151_Mujer_Selena_Gomez_Selena_Gomez.webp`,
    description: 'Frambuesa vibrante y chocolate oscuro.',
    dna: ['Frutal', 'Dulce', 'Floral']
  },
  {
    id: 'sofia-vergara-sofia',
    name: 'Sofia Vergara',
    brand: 'Sofia Vergara',
    category: 'Diseñador',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `152_Mujer_Sofia_Vergara_Sofia_Vergara.webp`,
    description: 'Moras jugosas y orquídea colombiana.',
    dna: ['Oriental', 'Floral', 'Frutal']
  },
  {
    id: 'bond-no-9-bleecker-street',
    name: 'Bleecker Street',
    brand: 'Bond No. 9',
    category: 'Nicho',
    gender: 'Unisex',
    price: 45.00,
    imageUrl: `153_Mujer_Bond_No._9_Bleecker_Street.webp`,
    description: 'La esencia de NY. Hojas de violeta y arándanos.',
    dna: ['Verde', 'Amaderado', 'Frutal']
  },
  {
    id: 'shakira-s-by-shakira',
    name: 'S by Shakira',
    brand: 'Shakira',
    category: 'Diseñador',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `154_Mujer_Shakira_S_by_Shakira.webp`,
    description: 'Melodía oriental de jazmín y sándalo.',
    dna: ['Oriental', 'Floral', 'Amaderado']
  },
  {
    id: 'prada-candy',
    name: 'Prada Candy',
    brand: 'Prada',
    category: 'Diseñador',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `155_Mujer_Prada_Candy.webp`,
    description: 'Exceso de caramelo y benjuí sofisticado.',
    dna: ['Dulce', 'Vainilla', 'Oriental']
  },
  {
    id: 'kim-kardashian-kim',
    name: 'Kim Kardashian',
    brand: 'Kim Kardashian',
    category: 'Diseñador',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `156_Mujer_Kim_Kardashian_Kim_Kardashian.webp`,
    description: 'Opulencia de nardos y gardenias.',
    dna: ['Floral', 'Oriental', 'Especiada']
  },
  {
    id: 'katy-perry-meow',
    name: 'Meow!',
    brand: 'Katy Perry',
    category: 'Diseñador',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `157_Mujer_Katy_Perry_Meow!.webp`,
    description: 'Dulce vainilla y pera en una botella felina.',
    dna: ['Dulce', 'Vainilla', 'Frutal']
  },
  {
    id: 'drakkar-intense-dama',
    name: 'Drakkar Intense Dama',
    brand: 'Guy Laroche',
    category: 'Diseñador',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `158_Mujer_Guy_Laroche_Drakkar_Intense.webp`,
    description: 'Intensidad aromática y carácter fuerte.',
    dna: ['Oriental', 'Amaderado', 'Especiada']
  },
  {
    id: 'gucci-rush',
    name: 'Gucci Rush',
    brand: 'Gucci',
    category: 'Diseñador',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `159_Mujer_Gucci_Rush.webp`,
    description: 'Impulso adictivo de melocotón y pachulí.',
    dna: ['Frutal', 'Floral', 'Oriental']
  },
  {
    id: 'britney-spears-fantasy',
    name: 'Fantasy',
    brand: 'Britney Spears',
    category: 'Diseñador',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `160_Mujer_Britney_Spears_Fantasy.webp`,
    description: 'Poción de amor con chocolate blanco y kiwi.',
    dna: ['Dulce', 'Frutal', 'Gourmand' as NoteType]
  },
  {
    id: 'britney-spears-fantasy-intense',
    name: 'Fantasy Intense',
    brand: 'Britney Spears',
    category: 'Diseñador',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `161_Mujer_Britney_Spears_Fantasy_Intense.webp`,
    description: 'Más profundo, más dulce, más provocativo.',
    dna: ['Dulce', 'Oriental', 'Amaderado']
  },
  {
    id: 'issey-miyake-dama',
    name: 'L’Eau d’Issey Dama',
    brand: 'Issey Miyake',
    category: 'Diseñador',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `162_Mujer_Issey_Miyake_L'eau_d'Issey.webp`,
    description: 'La pureza del agua y flores blancas.',
    dna: ['Acuatica', 'Floral', 'Fresco' as NoteType]
  },
  {
    id: 'guess-woman',
    name: 'Guess Woman',
    brand: 'Guess',
    category: 'Diseñador',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `163_Mujer_Guess_Woman.webp`,
    description: 'Magnolia y manzana verde para la mujer chic.',
    dna: ['Floral', 'Frutal', 'Fresco' as NoteType]
  },
  {
    id: 'lancome-la-vie-est-belle',
    name: 'La Vie Est Belle',
    brand: 'Lancôme',
    category: 'Diseñador',
    gender: 'Dama',
    price: 45.00,
    badge: 'TOP VENTAS',
    imageUrl: `164_Mujer_Lancôme_La_Vie_Est_Belle.webp`,
    description: 'La sonrisa de cristal. Praliné e Iris.',
    dna: ['Dulce', 'Floral', 'Frutal']
  },
  {
    id: 'lancome-la-vie-est-belle-elixir',
    name: 'La Vie Est Belle L’Elixir',
    brand: 'Lancôme',
    category: 'Diseñador',
    gender: 'Dama',
    price: 45.00,
    badge: 'TOP VENTAS',
    imageUrl: `165_Mujer_Lancôme_La_Vie_Est_Belle_L’Elixir.webp`,
    description: 'Frambuesa licorosa y manteca de cacao.',
    dna: ['Frutal', 'Dulce', 'Floral']
  },
  {
    id: 'cacharel-amor-amor',
    name: 'Amor Amor',
    brand: 'Cacharel',
    category: 'Diseñador',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `166_Mujer_Cacharel_Amor_Amor.webp`,
    description: 'El primer beso. Grosella negra y vainilla.',
    dna: ['Floral', 'Frutal', 'Citrico']
  },
  {
    id: 'mugler-angel',
    name: 'Angel',
    brand: 'Mugler',
    category: 'Diseñador',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `167_Mujer_Mugler_Angel.webp`,
    description: 'El primer gourmand de la historia. Pachulí y Chocolate.',
    dna: ['Dulce', 'Oriental', 'Amaderado']
  },
  {
    id: 'mugler-angel-nova',
    name: 'Angel Nova',
    brand: 'Mugler',
    category: 'Diseñador',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `168_Mujer_Mugler_Angel_Nova.webp`,
    description: 'Supernova frutal de frambuesa y litchi.',
    dna: ['Frutal', 'Floral', 'Amaderado']
  },
  {
    id: 'rasasi-hawas-dama',
    name: 'Hawas Dama',
    brand: 'Rasasi',
    category: 'Árabe',
    gender: 'Dama',
    price: 45.00,
    badge: 'TENDENCIA TIKTOK',
    imageUrl: `169_Mujer_Rasasi_Hawas_For_Her.webp`,
    description: 'Elegancia moderna con granada y jazmín.',
    dna: ['Frutal', 'Floral', 'Dulce']
  },
  {
    id: 'bbw-pink-chiffon',
    name: 'Pink Chiffon',
    brand: 'Bath & Body Works',
    category: 'Diseñador',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `170_Mujer_Bath_&_Body_Works_Pink_Chiffon.webp`,
    description: 'Pétalos rosados suaves y glaseado de vainilla.',
    dna: ['Dulce', 'Floral', 'Frutal']
  },
  {
    id: 'givenchy-ange-ou-demon-le-secret',
    name: 'Ange ou Demon Le Secret',
    brand: 'Givenchy',
    category: 'Diseñador',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `171_Mujer_Givenchy_Ange_ou_Demon_Le_Secret.webp`,
    description: 'Confidencia luminosa de té y arándanos.',
    dna: ['Floral', 'Frutal', 'Citrico']
  },
  {
    id: 'givenchy-ange-ou-demon',
    name: 'Ange ou Demon',
    brand: 'Givenchy',
    category: 'Diseñador',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `172_Mujer_Givenchy_Ange_ou_Demon.webp`,
    description: 'El misterio dual de la vainilla y el azafrán.',
    dna: ['Oriental', 'Floral', 'Dulce']
  },
  {
    id: 'givenchy-amarige',
    name: 'Amarige',
    brand: 'Givenchy',
    category: 'Diseñador',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `173_Mujer_Givenchy_Amarige.webp`,
    description: 'Un ramo floral radiante y soleado.',
    dna: ['Floral', 'Oriental', 'Amaderado']
  },
  {
    id: 'escada-sorbetto-rosso',
    name: 'Sorbetto Rosso',
    brand: 'Escada',
    category: 'Diseñador',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `174_Mujer_Escada_Sorbetto_Rosso.webp`,
    description: 'Verano italiano, sandía refrescante y sal.',
    dna: ['Frutal', 'Acuatica', 'Dulce']
  },
  {
    id: 'loco-por-ti-dama',
    name: 'Loco Por Ti',
    brand: 'Generic',
    category: 'Diseñador',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `175_Mujer_Loco_Por_Ti_Loco_Por_Ti.webp`,
    description: 'Pasión floral y encanto frutal.',
    dna: ['Floral', 'Frutal', 'Dulce']
  },
  {
    id: 'burberry-dama-clasico',
    name: 'Burberry Clásico',
    brand: 'Burberry',
    category: 'Diseñador',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `192_Hombre_Burberry_Burberry_Clásico.webp`,
    description: 'Minimalismo británico con melocotón y sándalo.',
    dna: ['Frutal', 'Amaderado', 'Oriental']
  },
  {
    id: 'lolita-lempicka-dama',
    name: 'Lolita Lempicka',
    brand: 'Lolita Lempicka',
    category: 'Diseñador',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `177_Mujer_Lolita_Lempicka_Lolita_Lempicka.webp`,
    description: 'Un cuento de hadas de regaliz y anís.',
    dna: ['Dulce', 'Especiada', 'Floral']
  },
  {
    id: 'animale-dama',
    name: 'Animale',
    brand: 'Animale',
    category: 'Diseñador',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `178_Mujer_Animale_Animale.webp`,
    description: 'Chipre intenso y misterioso de los 80.',
    dna: ['Oriental', 'Floral', 'Amaderado']
  },
  {
    id: 'cartier-la-panthere-clasico',
    name: 'La Panthère Clásico',
    brand: 'Cartier',
    category: 'Diseñador',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `179_Mujer_Cartier_La_Panthère_Clásico.webp`,
    description: 'La elegancia felina. Gardenia y almizcle.',
    dna: ['Floral', 'Oriental', 'Amaderado']
  },
  {
    id: 'cartier-la-panthere',
    name: 'La Panthère',
    brand: 'Cartier',
    category: 'Diseñador',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `180_Mujer_Cartier_La_Panthère.webp`,
    description: 'Floral salvaje y sofisticado.',
    dna: ['Floral', 'Amaderado', 'Frutal']
  },
  {
    id: 'chloe-narcisse',
    name: 'Narcisse',
    brand: 'Chloé',
    category: 'Diseñador',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `181_Mujer_Chloé_Narcisse.webp`,
    description: 'Intensidad floral clásica con narciso y especias.',
    dna: ['Floral', 'Oriental', 'Especiada']
  },
  {
    id: 'dolce-gabbana-dama',
    name: 'Dolce & Gabbana Dama',
    brand: 'Dolce & Gabbana',
    category: 'Diseñador',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `182_Mujer_Dolce_&_Gabbana_Clásico.webp`,
    description: 'La esencia de la mujer mediterránea.',
    dna: ['Floral', 'Aldehidico' as NoteType, 'Aromatica']
  },

  // ==========================================
  // GAMA MEDIA Y VARIADOS - MASCULINOS
  // ==========================================
  {
    id: 'ralph-lauren-polo-sport',
    name: 'Polo Sport',
    brand: 'Ralph Lauren',
    category: 'Diseñador',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `183_Hombre_Ralph_Lauren_Polo_Sport.webp`,
    description: 'El clásico deportivo americano. Menta y algas.',
    dna: ['Aromatica', 'Verde', 'Acuatica']
  },
  {
    id: 'avon-musk',
    name: 'Musk for Men',
    brand: 'Avon',
    category: 'Diseñador',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `194_Hombre_Animale_Animale_For_Men.webp`,
    description: 'Clásico, limpio y masculino. Cuero y lavanda.',
    dna: ['Aromatica', 'Cuero', 'Amaderado']
  },
  {
    id: 'clinique-happy-men',
    name: 'Happy for Men',
    brand: 'Clinique',
    category: 'Diseñador',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `185_Hombre_Clinique_Happy.webp`,
    description: 'Felicidad cítrica en una botella naranja.',
    dna: ['Citrico', 'Aromatica', 'Acuatica']
  },
  {
    id: 'issey-miyake-hombre',
    name: 'L’Eau d’Issey Pour Homme',
    brand: 'Issey Miyake',
    category: 'Diseñador',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `186_Hombre_Issey_Miyake_L'eau_d'Issey_Pour_Homme.webp`,
    description: 'Elegancia atemporal de yuzu y maderas.',
    dna: ['Citrico', 'Amaderado', 'Aromatica']
  },
  {
    id: 'guess-seductive-homme',
    name: 'Guess Seductive',
    brand: 'Guess',
    category: 'Diseñador',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `187_Hombre_Guess_Seductive.webp`,
    description: 'Encanto magnético con vainilla y cardamomo.',
    dna: ['Oriental', 'Amaderado', 'Dulce']
  },
  {
    id: 'mugler-amen',
    name: 'A*Men',
    brand: 'Mugler',
    category: 'Diseñador',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `188_Hombre_Mugler_A_Men.webp`,
    description: 'Héroe de cómic. Café, caramelo y pachulí.',
    dna: ['Oriental', 'Dulce', 'Amaderado']
  },
  {
    id: 'mugler-amen-edt',
    name: 'A*Men EDT',
    brand: 'Mugler',
    category: 'Diseñador',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `189_Hombre_Mugler_A_Men_EDT.webp`,
    description: 'La versión original y potente.',
    dna: ['Oriental', 'Especiada', 'Gourmand' as NoteType]
  },
  {
    id: 'rasasi-hawas-tropical',
    name: 'Hawas (Tropical)',
    brand: 'Rasasi',
    category: 'Árabe',
    gender: 'Hombre',
    price: 45.00,
    badge: 'TENDENCIA TIKTOK',
    imageUrl: `190_Hombre_Rasasi_Hawas_For_Him.webp`,
    description: 'La leyenda acuática. Ciruela y notas marinas.',
    dna: ['Acuatica', 'Frutal', 'Amaderado']
  },
  {
    id: 'givenchy-blue-label',
    name: 'Blue Label',
    brand: 'Givenchy',
    category: 'Diseñador',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `191_Hombre_Givenchy_Blue_Label.webp`,
    description: 'Relax elegante. Pomelo y cardamomo.',
    dna: ['Citrico', 'Especiada', 'Amaderado']
  },
  {
    id: 'burberry-hombre',
    name: 'Burberry Hombre',
    brand: 'Burberry',
    category: 'Diseñador',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `10_Hombre_Paco_Rabanne_Black_XS_L’Excès.webp`,
    description: 'El gentleman inglés relajado.',
    dna: ['Amaderado', 'Aromatica', 'Fresco' as NoteType]
  },
  {
    id: 'lolita-lempicka-homme',
    name: 'Lolita Lempicka Homme',
    brand: 'Lolita Lempicka',
    category: 'Diseñador',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `193_Hombre_Lolita_Lempicka_Lolita_Lempicka_Au_Masculin.webp`,
    description: 'Dulzor masculino de regaliz y ron.',
    dna: ['Dulce', 'Gourmand' as NoteType, 'Aromatica']
  },
  {
    id: 'animale-hombre',
    name: 'Animale for Men',
    brand: 'Animale',
    category: 'Diseñador',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `oud for glory men.webp`,
    description: 'Audacia magnética. Miel, piña y tabaco.',
    dna: ['Oriental', 'Aromatica', 'Especiada']
  },
  {
    id: 'angel-hombre-schlesser',
    name: 'Angel Hombre',
    brand: 'Angel Schlesser',
    category: 'Diseñador',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `195_Hombre_Mugler_Angel_Men.webp`,
    description: 'Frescura aromática y transparente.',
    dna: ['Aromatica', 'Amaderado', 'Citrico']
  },
  {
    id: 'dolce-gabbana-hombre',
    name: 'Dolce & Gabbana Pour Homme',
    brand: 'Dolce & Gabbana',
    category: 'Diseñador',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `196_Hombre_Dolce_&_Gabbana_Pour_Homme.webp`,
    description: 'Estilo italiano clásico. Lavanda y tabaco.',
    dna: ['Aromatica', 'Fougere', 'Citrico']
  },
  {
    id: 'reyane-insurrection',
    name: 'Insurrection II Pure',
    brand: 'Reyane Tradition',
    category: 'Árabe',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `197_Hombre_Reyane_Tradition_Insurrection.webp`,
    description: 'Inspiración de éxito. Piña y abedul.',
    dna: ['Frutal', 'Amaderado', 'Aromatica']
  },
  {
    id: 'reyane-insurrection-wild',
    name: 'Insurrection II Wild',
    brand: 'Reyane Tradition',
    category: 'Árabe',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `198_Hombre_Reyane_Tradition_Insurrection_Wild.webp`,
    description: 'Carácter salvaje de tabaco y miel.',
    dna: ['Oriental', 'Dulce', 'Tabaco' as NoteType]
  },
  {
    id: 'diesel-plus-clasico',
    name: 'Diesel Plus Plus',
    brand: 'Diesel',
    category: 'Diseñador',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `199_Hombre_Diesel_Plus_Plus_Masculine.webp`,
    description: 'Cremoso y único con notas de leche.',
    dna: ['Oriental', 'Amaderado', 'Lactonico' as NoteType]
  },
  {
    id: 'ted-lapidus-homme',
    name: 'Ted Lapidus Pour Homme',
    brand: 'Ted Lapidus',
    category: 'Diseñador',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `200_Hombre_Ted_Lapidus_Pour_Homme.webp`,
    description: 'Powerhouse de los 80. Miel, tabaco e incienso.',
    dna: ['Oriental', 'Amaderado', 'Especiada']
  },
  {
    id: 'pino-silvestre',
    name: 'Pino Silvestre',
    brand: 'Pino Silvestre',
    category: 'Diseñador',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `201_Hombre_Pino_Silvestre_Original.webp`,
    description: 'La esencia original del bosque de pinos.',
    dna: ['Verde', 'Aromatica', 'Amaderado']
  },
  {
    id: 'parfums-de-marly-layton',
    name: 'Layton',
    brand: 'Parfums de Marly',
    category: 'Nicho',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `202_Hombre_Parfums_de_Marly_Layton.webp`,
    description: 'Nobleza real. Manzana, vainilla y cardamomo.',
    dna: ['Oriental', 'Especiada', 'Dulce']
  },
  {
    id: 'louis-vuitton-clasico',
    name: 'Louis Vuitton Clásico',
    brand: 'Louis Vuitton',
    category: 'Nicho',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `203_Hombre_Louis_Vuitton_Clásico.webp`,
    description: 'Lujo atemporal y viajes infinitos.',
    dna: ['Citrico', 'Amaderado', 'Aromatica']
  },
  {
    id: 'louis-vuitton-imagination',
    name: 'Imagination',
    brand: 'Louis Vuitton',
    category: 'Nicho',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `204_Hombre_Louis_Vuitton_Imagination.webp`,
    description: 'El arte de viajar. Té negro, cidra y ambroxan.',
    dna: ['Citrico', 'Aromatica', 'Fresco' as NoteType]
  },

  // ==========================================
  // ARIANA GRANDE
  // ==========================================
  {
    id: 'ariana-grande-ari',
    name: 'Ariana Pink (Ari)',
    brand: 'Ariana Grande',
    category: 'Diseñador',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `99_Mujer_Ariana_Grande_Pink.webp`,
    description: 'Dulce, coqueta y brillante con frambuesa y malvavisco.',
    dna: ['Dulce', 'Frutal', 'Floral']
  },
  {
    id: 'ariana-grande-cloud',
    name: 'Cloud',
    brand: 'Ariana Grande',
    category: 'Diseñador',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `100_Mujer_Ariana_Grande_Cloud.webp`,
    description: 'Un sueño esponjoso de lavanda, coco y praliné.',
    dna: ['Dulce', 'Vainilla', 'Frutal']
  },
  {
    id: 'ariana-grande-candy',
    name: 'Candy (Sweet Like Candy)',
    brand: 'Ariana Grande',
    category: 'Diseñador',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `101_Mujer_Ariana_Grande_Sweet_Like_Candy.webp`,
    description: 'Explosión de azúcar, zarzamora y crema batida.',
    dna: ['Dulce', 'Frutal', 'Vainilla']
  },
  {
    id: 'ariana-grande-thank-u-next',
    name: 'Thank U, Next',
    brand: 'Ariana Grande',
    category: 'Diseñador',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `102_Mujer_Ariana_Grande_Thank_U_Next.webp`,
    description: 'Actitud atrevida con pera y coco cremoso.',
    dna: ['Dulce', 'Frutal', 'Tropical' as NoteType]
  },
  {
    id: 'ariana-grande-rem',
    name: 'R.E.M.',
    brand: 'Ariana Grande',
    category: 'Diseñador',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `103_Mujer_Ariana_Grande_R.E.M..webp`,
    description: 'Cósmico y soñador con caramelo y sal.',
    dna: ['Dulce', 'Oriental', 'Aromatica']
  },
  {
    id: 'ariana-grande-cherry',
    name: 'Cherry',
    brand: 'Ariana Grande',
    category: 'Diseñador',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `104_Mujer_Ariana_Grande_Cherry.webp`,
    description: 'Seducción frutal de cereza roja intensa.',
    dna: ['Frutal', 'Dulce', 'Floral']
  },

  // ==========================================
  // VICTORIA'S SECRET
  // ==========================================
  {
    id: 'vs-pure-seduction',
    name: 'Pure Seduction',
    brand: "Victoria's Secret",
    category: 'Diseñador',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `105_Mujer_Victoria's_Secret_Pure_Seduction.webp`,
    description: 'Ciruela roja jugosa y fresia dulce.',
    dna: ['Frutal', 'Floral', 'Dulce']
  },
  {
    id: 'vs-vanilla-lace',
    name: 'Vanilla Lace',
    brand: "Victoria's Secret",
    category: 'Diseñador',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `106_Mujer_Victoria's_Secret_Vanilla_Lace.webp`,
    description: 'La vainilla original, cálida y almizclada.',
    dna: ['Vainilla', 'Oriental', 'Dulce']
  },
  {
    id: 'vs-vanilla-clasico',
    name: 'Vanilla Clásico',
    brand: "Victoria's Secret",
    category: 'Diseñador',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `107_Mujer_Victoria's_Secret_Vanilla_Clásico.webp`,
    description: 'Vainilla batida y suave cachemira.',
    dna: ['Vainilla', 'Dulce', 'Amaderado']
  },
  {
    id: 'vs-coconut-passion',
    name: 'Coconut Passion',
    brand: "Victoria's Secret",
    category: 'Diseñador',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `108_Mujer_Victoria's_Secret_Coconut_Passion.webp`,
    description: 'Coco isleño y arenas cálidas.',
    dna: ['Dulce', 'Frutal', 'Vainilla']
  },
  {
    id: 'vs-juice-berry',
    name: 'Juice Berry',
    brand: "Victoria's Secret",
    category: 'Diseñador',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `109_Mujer_Victoria's_Secret_Juice_Berry.webp`,
    description: 'Mezcla vibrante de bayas silvestres.',
    dna: ['Frutal', 'Dulce', 'Floral']
  },
  {
    id: 'vs-mango-temptation',
    name: 'Mango Temptation',
    brand: "Victoria's Secret",
    category: 'Diseñador',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `110_Mujer_Victoria's_Secret_Mango_Temptation.webp`,
    description: 'Néctar de mango y flor de hibisco.',
    dna: ['Frutal', 'Floral', 'Dulce']
  },

  // ==========================================
  // PARIS HILTON
  // ==========================================
  {
    id: 'paris-hilton-clasico',
    name: 'Paris Hilton Clásico',
    brand: 'Paris Hilton',
    category: 'Diseñador',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `111_Mujer_Paris_Hilton_Clásico.webp`,
    description: 'El ícono de los 2000. Melón y feromonas.',
    dna: ['Frutal', 'Floral', 'Dulce']
  },
  {
    id: 'paris-hilton-heiress',
    name: 'Heiress',
    brand: 'Paris Hilton',
    category: 'Diseñador',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `112_Mujer_Paris_Hilton_Heiress.webp`,
    description: 'Brillantes notas de maracuyá y champagne.',
    dna: ['Frutal', 'Dulce', 'Floral']
  },
  {
    id: 'paris-hilton-just-me-can-can-burlesque',
    name: 'Just Me / Can Can Burlesque',
    brand: 'Paris Hilton',
    category: 'Diseñador',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `113_Mujer_Paris_Hilton_Can_Can_Burlesque.webp`,
    description: 'Frambuesa salvaje y orquídea provocativa.',
    dna: ['Frutal', 'Dulce', 'Floral']
  },
  {
    id: 'paris-hilton-can-can',
    name: 'Can Can',
    brand: 'Paris Hilton',
    category: 'Diseñador',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `114_Mujer_Paris_Hilton_Can_Can.webp`,
    description: 'Inspirado en el Moulin Rouge, nectarina y ámbar.',
    dna: ['Frutal', 'Oriental', 'Dulce']
  },

  // ==========================================
  // MOSCHINO
  // ==========================================
  {
    id: 'moschino-toy-2-bubble-gum',
    name: 'Toy 2 Bubble Gum',
    brand: 'Moschino',
    category: 'Diseñador',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `115_Mujer_Moschino_Toy_2_Bubble_Gum.webp`,
    description: 'Divertido aroma a chicle y rosa confitada.',
    dna: ['Dulce', 'Frutal', 'Floral']
  },
  {
    id: 'moschino-toy-2-blanco',
    name: 'Toy 2 Blanco',
    brand: 'Moschino',
    category: 'Diseñador',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `116_Mujer_Moschino_Toy_2_Blanco.webp`,
    description: 'Limpio, jabonoso y fresco con manzana verde.',
    dna: ['Floral', 'Frutal', 'Amaderado']
  },
  {
    id: 'moschino-funny',
    name: 'Funny!',
    brand: 'Moschino',
    category: 'Diseñador',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `117_Mujer_Moschino_Funny!.webp`,
    description: 'Alegría cítrica con té verde y naranja.',
    dna: ['Citrico', 'Verde', 'Floral']
  },
  {
    id: 'moschino-toy-2-pearl',
    name: 'Toy 2 Pearl',
    brand: 'Moschino',
    category: 'Diseñador',
    gender: 'Unisex',
    price: 45.00,
    imageUrl: `118_Unisex_Moschino_Toy_2_Pearl.webp`,
    description: 'Frescura salada de limón y orégano.',
    dna: ['Citrico', 'Aromatica', 'Acuatica']
  },
  {
    id: 'moschino-toy-boy',
    name: 'Toy Boy (Negro)',
    brand: 'Moschino',
    category: 'Diseñador',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `119_Hombre_Moschino_Toy_Boy.webp`,
    description: 'Rosa masculina especiada y oscura.',
    dna: ['Floral', 'Especiada', 'Amaderado']
  },

  // ==========================================
  // PERRY ELLIS
  // ==========================================
  {
    id: 'perry-ellis-360-coral',
    name: '360 Coral',
    brand: 'Perry Ellis',
    category: 'Diseñador',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `120_Mujer_Perry_Ellis_360_Coral.webp`,
    description: 'Brisa frutal y femenina.',
    dna: ['Frutal', 'Floral', 'Dulce']
  },
  {
    id: 'perry-ellis-360-clasico-dama',
    name: '360 Clásico Dama',
    brand: 'Perry Ellis',
    category: 'Diseñador',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `121_Mujer_Perry_Ellis_360_Clásico.webp`,
    description: 'Floral acuático atemporal y elegante.',
    dna: ['Floral', 'Acuatica', 'Frutal']
  },
  {
    id: 'perry-ellis-360-red-dama',
    name: '360 Red Dama',
    brand: 'Perry Ellis',
    category: 'Diseñador',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `122_Mujer_Perry_Ellis_360_Red.webp`,
    description: 'Floral exótico con ciclamen y ciruela.',
    dna: ['Floral', 'Citrico', 'Amaderado']
  },
  {
    id: 'perry-ellis-360-red-hombre',
    name: '360 Red Hombre',
    brand: 'Perry Ellis',
    category: 'Diseñador',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `123_Hombre_Perry_Ellis_360_Red.webp`,
    description: 'Cítrico especiado vibrante, un clásico moderno.',
    dna: ['Citrico', 'Especiada', 'Aromatica']
  },
  {
    id: 'perry-ellis-360-clasico-hombre',
    name: '360 Clásico Hombre',
    brand: 'Perry Ellis',
    category: 'Diseñador',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `124_Hombre_Perry_Ellis_360_Clásico.webp`,
    description: 'Fresco y limpio con bayas de enebro.',
    dna: ['Aromatica', 'Citrico', 'Verde']
  },

  // ==========================================
  // VICTORINOX
  // ==========================================
  {
    id: 'victorinox-swiss-army-classic',
    name: 'Swiss Army Classic Hombre',
    brand: 'Victorinox',
    category: 'Diseñador',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `125_Hombre_Victorinox_Swiss_Army_Classic.webp`,
    description: 'Frescura alpina y maderas robustas.',
    dna: ['Verde', 'Amaderado', 'Aromatica']
  },
  {
    id: 'victorinox-swiss-army-altitude',
    name: 'Swiss Army Altitude',
    brand: 'Victorinox',
    category: 'Diseñador',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `126_Hombre_Victorinox_Swiss_Army_Altitude.webp`,
    description: 'Aire de montaña, cedro y menta.',
    dna: ['Amaderado', 'Aromatica', 'Verde']
  },
  {
    id: 'victorinox-swiss-army-sport',
    name: 'Swiss Army Sport',
    brand: 'Victorinox',
    category: 'Diseñador',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `127_Hombre_Victorinox_Swiss_Army_Sport.webp`,
    description: 'Energía deportiva y frescura crujiente.',
    dna: ['Aromatica', 'Verde', 'Citrico']
  },
  {
    id: 'victorinox-swiss-army-for-her',
    name: 'Swiss Army For Her',
    brand: 'Victorinox',
    category: 'Diseñador',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `128_Mujer_Victorinox_Swiss_Army_For_Her.webp`,
    description: 'Floral fresco inspirado en la naturaleza suiza.',
    dna: ['Floral', 'Verde', 'Frutal']
  },

  // ==========================================
  // CR7 - CRISTIANO RONALDO
  // ==========================================
  {
    id: 'cr7-clasico',
    name: 'CR7 Clásico',
    brand: 'CR7',
    category: 'Diseñador',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `129_Hombre_Cristiano_Ronaldo_CR7_Clásico.webp`,
    description: 'Aromático y deportivo para el día a día.',
    dna: ['Aromatica', 'Amaderado', 'Especiada']
  },
  {
    id: 'cr7-game-on',
    name: 'CR7 Game On',
    brand: 'CR7',
    category: 'Diseñador',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `130_Hombre_Cristiano_Ronaldo_CR7_Game_On.webp`,
    description: 'Noche de juego con cardamomo y tonka.',
    dna: ['Amaderado', 'Aromatica', 'Dulce']
  },
  {
    id: 'cr7-play-it-cool',
    name: 'CR7 Play It Cool (Rojo)',
    brand: 'CR7',
    category: 'Diseñador',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `131_Hombre_Cristiano_Ronaldo_CR7_Play_It_Cool.webp`,
    description: 'Frescura helada para momentos intensos.',
    dna: ['Acuatica', 'Citrico', 'Aromatica']
  },
  {
    id: 'cr7-azul',
    name: 'CR7 Azul',
    brand: 'CR7',
    category: 'Diseñador',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `132_Hombre_Cristiano_Ronaldo_CR7_Azul.webp`,
    description: 'Elegancia azul moderna y versátil.',
    dna: ['Fougere', 'Aromatica', 'Amaderado']
  },

  // ==========================================
  // TOMMY HILFIGER
  // ==========================================
  {
    id: 'tommy-girl',
    name: 'Tommy Girl',
    brand: 'Tommy Hilfiger',
    category: 'Diseñador',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `133_Mujer_Tommy_Hilfiger_Tommy_Girl.webp`,
    description: 'Espíritu americano, flores silvestres y cítricos.',
    dna: ['Floral', 'Citrico', 'Frutal']
  },
  {
    id: 'tommy-clasico-men',
    name: 'Tommy Clásico Men',
    brand: 'Tommy Hilfiger',
    category: 'Diseñador',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `134_Hombre_Tommy_Hilfiger_Tommy_Clásico.webp`,
    description: 'El clásico de los 90, tarta de manzana y libertad.',
    dna: ['Citrico', 'Aromatica', 'Verde']
  },
  {
    id: 'tommy-tradicional-men',
    name: 'Tommy Tradicional Men',
    brand: 'Tommy Hilfiger',
    category: 'Diseñador',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `135_Hombre_Tommy_Hilfiger_Tommy_Tradicional.webp`,
    description: 'Frescura atemporal y estilo preppy.',
    dna: ['Citrico', 'Amaderado', 'Aromatica']
  },

  // ==========================================
  // NAUTICA
  // ==========================================
  {
    id: 'nautica-classic',
    name: 'Nautica Classic',
    brand: 'Nautica',
    category: 'Diseñador',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `136_Hombre_Nautica_Classic.webp`,
    description: 'La brisa del mar original.',
    dna: ['Amaderado', 'Citrico', 'Aromatica']
  },
  {
    id: 'nautica-voyage',
    name: 'Nautica Voyage',
    brand: 'Nautica',
    category: 'Diseñador',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `137_Hombre_Nautica_Voyage.webp`,
    description: 'Manzana verde y loto, el rey del verano.',
    dna: ['Acuatica', 'Verde', 'Frutal']
  },

  // ==========================================
  // AZZARO
  // ==========================================
  {
    id: 'azzaro-the-most-wanted',
    name: 'The Most Wanted',
    brand: 'Azzaro',
    category: 'Diseñador',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `138_Hombre_Azzaro_The_Most_Wanted.webp`,
    description: 'Seducción intensa con cardamomo y toffee.',
    dna: ['Oriental', 'Especiada', 'Dulce']
  },
  {
    id: 'azzaro-wanted',
    name: 'Wanted',
    brand: 'Azzaro',
    category: 'Diseñador',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `139_Hombre_Azzaro_Wanted.webp`,
    description: 'Audacia cítrica y picante con jengibre.',
    dna: ['Citrico', 'Especiada', 'Amaderado']
  },
  {
    id: 'azzaro-wanted-by-night',
    name: 'Wanted By Night / Forever',
    brand: 'Azzaro',
    category: 'Diseñador',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `140_Hombre_Azzaro_Wanted_By_Night.webp`,
    description: 'El seductor nocturno con canela y tabaco.',
    dna: ['Oriental', 'Especiada', 'Amaderado']
  },

  // ==========================================
  // TOM FORD
  // ==========================================
  {
    id: 'tom-ford-clasico',
    name: 'Tom Ford Clásico',
    brand: 'Tom Ford',
    category: 'Diseñador',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `141_Hombre_Tom_Ford_Tom_Ford_Clásico.webp`,
    description: 'Elegancia moderna y sofisticada.',
    dna: ['Amaderado', 'Especiada', 'Citrico']
  },
  {
    id: 'tom-ford-noir-extreme',
    name: 'Noir Extreme',
    brand: 'Tom Ford',
    category: 'Diseñador',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `142_Hombre_Tom_Ford_Noir_Extreme.webp`,
    description: 'Extravagancia oriental con kulfi y vainilla.',
    dna: ['Oriental', 'Dulce', 'Amaderado']
  },
  {
    id: 'tom-ford-ombre-leather',
    name: 'Ombré Leather',
    brand: 'Tom Ford',
    category: 'Diseñador',
    gender: 'Unisex',
    price: 45.00,
    imageUrl: `143_Unisex_Tom_Ford_Ombré_Leather.webp`,
    description: 'Cuero táctil y especias del desierto.',
    dna: ['Cuero', 'Especiada', 'Floral']
  },

  // ==========================================
  // VIKTOR&ROLF
  // ==========================================
  {
    id: 'viktor-rolf-spicebomb-negro',
    name: 'Spicebomb (Negro)',
    brand: 'Viktor&Rolf',
    category: 'Diseñador',
    subcategory: 'Spicebomb',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `144_Hombre_Viktor&Rolf_Spicebomb.webp`,
    description: 'Granada de especias explosiva y adictiva.',
    dna: ['Especiada', 'Amaderado', 'Cuero']
  },
  {
    id: 'viktor-rolf-spicebomb-infrared',
    name: 'Spicebomb Infrared / Gris',
    brand: 'Viktor&Rolf',
    category: 'Diseñador',
    subcategory: 'Spicebomb',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `145_Hombre_Viktor&Rolf_Spicebomb_Infrared.webp`,
    description: 'Calor infrarrojo de chiles y frutos rojos.',
    dna: ['Especiada', 'Dulce', 'Amaderado']
  },
  {
    id: 'viktor-rolf-spicebomb-extreme',
    name: 'Spicebomb Extreme',
    brand: 'Viktor&Rolf',
    category: 'Diseñador',
    subcategory: 'Spicebomb',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `146_Hombre_Viktor&Rolf_Spicebomb_Extreme.webp`,
    description: 'Intensidad extrema de tabaco y vainilla.',
    dna: ['Oriental', 'Especiada', 'Vainilla']
  },

  // ==========================================
  // CREED
  // ==========================================
  {
    id: 'creed-silver-mountain-water',
    name: 'Silver Mountain Water',
    brand: 'Creed',
    category: 'Nicho',
    gender: 'Unisex',
    price: 45.00,
    imageUrl: `147_Hombre_Creed_Silver_Mountain_Water.webp`,
    description: 'La pureza de los arroyos de montaña suizos.',
    dna: ['Aromatica', 'Citrico', 'Verde']
  },
  {
    id: 'creed-green-irish-tweed',
    name: 'Green Irish Tweed / Aventus (Negra)',
    brand: 'Creed',
    category: 'Nicho',
    gender: 'Hombre',
    price: 45.00,
    badge: 'TOP VENTAS',
    imageUrl: `148_Hombre_Creed_Green_Irish_Tweed.webp`,
    description: 'Caminata por el campo irlandés. Clásico y rico.',
    dna: ['Verde', 'Amaderado', 'Aromatica']
  },
  {
    id: 'creed-aventus',
    name: 'Aventus',
    brand: 'Creed',
    category: 'Nicho',
    gender: 'Hombre',
    price: 45.00,
    badge: 'TOP VENTAS',
    imageUrl: `149_Hombre_Creed_Aventus.webp`,
    description: 'El rey de los nichos. Piña, humo y éxito.',
    dna: ['Frutal', 'Amaderado', 'Cuero']
  },

  // ==========================================
  // AFNAN (ANTERIORES)
  // ==========================================
  {
    id: 'afnan-9am-dive',
    name: '9am Dive',
    brand: 'Afnan',
    category: 'Árabe',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `9am-dive.2k.webp`,
    description: 'Frescura profunda y vibrante para comenzar el día.',
    dna: ['Acuatica', 'Citrico', 'Especiada']
  },
  {
    id: 'afnan-9am-clasico',
    name: '9am Clásico',
    brand: 'Afnan',
    category: 'Árabe',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `11_Hombre_Paco_Rabanne_Black_XS_Clásico.webp`,
    description: 'Elegancia matutina con notas limpias y sofisticadas.',
    dna: ['Citrico', 'Amaderado', 'Floral']
  },
  {
    id: 'afnan-9pm-rebel',
    name: '9pm Rebel',
    brand: 'Afnan',
    category: 'Árabe',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `9pm afnan rebel.webp`,
    description: 'Rebeldía nocturna con un toque dulce y seductor.',
    dna: ['Frutal', 'Dulce', 'Amaderado']
  },
  {
    id: 'afnan-9pm-afnan',
    name: '9pm Afnan',
    brand: 'Afnan',
    category: 'Árabe',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `9pma afnan.webp`,
    description: 'El rey de la noche, vainilla y especias irresistibles.',
    dna: ['Vainilla', 'Dulce', 'Especiada']
  },
  {
    id: 'afnan-9pm-elixir',
    name: '9pm Elixir',
    brand: 'Afnan',
    category: 'Árabe',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `16_Hombre_Paco_Rabanne_Invictus_Victory_Elixir_Absolu.webp`,
    description: 'Intensidad concentrada para momentos inolvidables.',
    dna: ['Oriental', 'Amaderado', 'Dulce']
  },
  {
    id: 'afnan-9am-pour-femme-red',
    name: '9am Pour Femme Red',
    brand: 'Afnan',
    category: 'Árabe',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `9am pour femme rose.webp`,
    description: 'Pasión roja envuelta en flores exóticas.',
    dna: ['Floral', 'Frutal', 'Oriental']
  },
  {
    id: 'afnan-9am-pour-femme',
    name: '9am Pour Femme',
    brand: 'Afnan',
    category: 'Árabe',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `9 am pour femme.webp`,
    description: 'Luminosidad femenina y delicadeza floral.',
    dna: ['Floral', 'Citrico', 'Dulce']
  },
  {
    id: 'afnan-9pm-pour-femme',
    name: '9pm Pour Femme',
    brand: 'Afnan',
    category: 'Árabe',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `26_Hombre_Jean_Paul_Gaultier_Scandal_Pour_Homme.webp`,
    description: 'Misterio nocturno para la mujer audaz.',
    dna: ['Oriental', 'Frutal', 'Amaderado']
  },
  {
    id: 'afnan-island-bliss',
    name: 'Island Bliss',
    brand: 'Afnan',
    category: 'Árabe',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `island bliss.webp`,
    description: 'Un escape paradisíaco de frutas tropicales.',
    dna: ['Frutal', 'Dulce', 'Acuatica']
  },

  // ==========================================
  // AHLI
  // ==========================================
  {
    id: 'ahli-corvus',
    name: 'Ahli Corvus',
    brand: 'Ahli',
    category: 'Árabe',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `ahli larpol.webp`,
    description: 'Oscuridad brillante y sofisticación estelar.',
    dna: ['Oriental', 'Floral', 'Amaderado']
  },
  {
    id: 'ahli-karpos',
    name: 'Ahli Karpos',
    brand: 'Ahli',
    category: 'Árabe',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `ahli vega.webp`,
    description: 'Fuerza frutal con una base sólida y viril.',
    dna: ['Frutal', 'Amaderado', 'Citrico']
  },
  {
    id: 'ahli-vega',
    name: 'Ahli Vega',
    brand: 'Ahli',
    category: 'Árabe',
    gender: 'Unisex',
    price: 45.00,
    imageUrl: `ahli.webp`,
    description: 'Brillo universal que trasciende géneros.',
    dna: ['Citrico', 'Aromatica', 'Amaderado']
  },

  // ==========================================
  // LATTAFA
  // ==========================================
  {
    id: 'lattafa-nebras',
    name: 'Nebras',
    brand: 'Lattafa',
    category: 'Árabe',
    gender: 'Unisex',
    price: 45.00,
    imageUrl: `nebras.webp`,
    description: 'Cacao y vainilla en una danza sensual.',
    dna: ['Dulce', 'Vainilla', 'Oriental']
  },
  {
    id: 'lattafa-oud-for-glory-badee',
    name: 'Oud for Glory - Bade\'e Al Oud',
    brand: 'Lattafa',
    category: 'Árabe',
    gender: 'Unisex',
    price: 45.00,
    imageUrl: `oud for glory.webp`,
    description: 'Majestuosidad del Oud en su máxima expresión.',
    dna: ['Amaderado', 'Oriental', 'Especiada']
  },
  {
    id: 'lattafa-honor-and-glory',
    name: 'Honor & Glory',
    brand: 'Lattafa',
    category: 'Árabe',
    gender: 'Unisex',
    price: 45.00,
    imageUrl: `honor Haya al oud.webp`,
    description: 'Piña cremosa y opulencia dorada.',
    dna: ['Frutal', 'Dulce', 'Amaderado']
  },
  {
    id: 'lattafa-oud-for-glory-hombre',
    name: 'Oud for Glory',
    brand: 'Lattafa',
    category: 'Árabe',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `Saffron Oud Hombre 1.webp`,
    description: 'Poder oscuro y prestigio masculino.',
    dna: ['Amaderado', 'Cuero', 'Oriental']
  },
  {
    id: 'lattafa-sublime',
    name: 'Sublime - Bade\'e Al Oud',
    brand: 'Lattafa',
    category: 'Árabe',
    gender: 'Unisex',
    price: 45.00,
    imageUrl: `Yara Blush (Bade'e Al Oud) Dama 1.webp`,
    description: 'Manzana roja y frescura sublime.',
    dna: ['Frutal', 'Dulce', 'Floral']
  },
  {
    id: 'lattafa-amethyst',
    name: 'Amethyst - Bade\'e Al Oud',
    brand: 'Lattafa',
    category: 'Árabe',
    gender: 'Unisex',
    price: 45.00,
    imageUrl: `amethyst lattafa.webp`,
    description: 'Rosa turca y vainilla en una joya violeta.',
    dna: ['Floral', 'Vainilla', 'Oriental']
  },
  {
    id: 'lattafa-yara-candy',
    name: 'Yara Candy',
    brand: 'Lattafa',
    category: 'Árabe',
    gender: 'Dama',
    price: 45.00,
    badge: 'TENDENCIA TIKTOK',
    imageUrl: `oddysey candy.webp`,
    description: 'Golosina irresistible de frutos rojos.',
    dna: ['Dulce', 'Frutal', 'Vainilla']
  },
  {
    id: 'lattafa-yara-rosa',
    name: 'Yara Rosa',
    brand: 'Lattafa',
    category: 'Árabe',
    gender: 'Dama',
    price: 45.00,
    badge: 'TENDENCIA TIKTOK',
    imageUrl: `35_Mujer_Jean_Paul_Gaultier_Classique_Rosado.webp`,
    description: 'El clásico viral, cremoso y encantador.',
    dna: ['Dulce', 'Vainilla', 'Floral']
  },
  {
    id: 'lattafa-yara-tous',
    name: 'Yara Tous',
    brand: 'Lattafa',
    category: 'Árabe',
    gender: 'Dama',
    price: 45.00,
    badge: 'TENDENCIA TIKTOK',
    imageUrl: `Yara Tous Dama 1.webp`,
    description: 'Mango tropical y coco en un verano eterno.',
    dna: ['Frutal', 'Dulce', 'Tropical' as NoteType]
  },
  {
    id: 'lattafa-yara-moi',
    name: 'Yara Moi',
    brand: 'Lattafa',
    category: 'Árabe',
    gender: 'Dama',
    price: 45.00,
    badge: 'TENDENCIA TIKTOK',
    imageUrl: `Yara Moi Dama 1.webp`,
    description: 'Elegancia blanca con notas de melocotón.',
    dna: ['Floral', 'Frutal', 'Amaderado']
  },
  {
    id: 'lattafa-yara-blush',
    name: 'Yara Blush - Bade\'e Al Oud',
    brand: 'Lattafa',
    category: 'Árabe',
    gender: 'Dama',
    price: 45.00,
    badge: 'TENDENCIA TIKTOK',
    imageUrl: `good girl blush.webp`,
    description: 'Un rubor suave de sensualidad floral.',
    dna: ['Floral', 'Dulce', 'Oriental']
  },
  {
    id: 'lattafa-khamrah-qahwa',
    name: 'Khamrah Qahwa',
    brand: 'Lattafa',
    category: 'Árabe',
    gender: 'Unisex',
    price: 45.00,
    badge: 'TENDENCIA TIKTOK',
    imageUrl: `Khamrah Qahwa Unisex 1.webp`,
    description: 'La calidez del café tostado y especias ricas.',
    dna: ['Oriental', 'Especiada', 'Vainilla']
  },
  {
    id: 'lattafa-khamrah-clasico',
    name: 'Khamrah Clásico',
    brand: 'Lattafa',
    category: 'Árabe',
    gender: 'Unisex',
    price: 45.00,
    badge: 'TENDENCIA TIKTOK',
    imageUrl: `Khamrah Clásico Unisex 1.webp`,
    description: 'Lujo dulce de dátiles y canela.',
    dna: ['Dulce', 'Oriental', 'Especiada']
  },
  {
    id: 'lattafa-asad-negro',
    name: 'Asad Negro',
    brand: 'Lattafa',
    category: 'Árabe',
    gender: 'Hombre',
    price: 45.00,
    badge: 'NUEVO',
    imageUrl: `Asad Negro Hombre 1.webp`,
    description: 'Especias potentes y masculinidad absoluta.',
    dna: ['Especiada', 'Amaderado', 'Vainilla']
  },
  {
    id: 'lattafa-asad-zanzibar',
    name: 'Asad Zanzibar',
    brand: 'Lattafa',
    category: 'Árabe',
    gender: 'Hombre',
    price: 45.00,
    badge: 'NUEVO',
    imageUrl: `Asad Zanzibar Hombre 1.webp`,
    description: 'Exotismo insular y aventura especiada.',
    dna: ['Especiada', 'Aromatica', 'Amaderado']
  },
  {
    id: 'lattafa-asad-bourbon',
    name: 'Asad Bourbon',
    brand: 'Lattafa',
    category: 'Árabe',
    gender: 'Hombre',
    price: 45.00,
    badge: 'NUEVO',
    imageUrl: `Asad Bourbon Hombre 1.webp`,
    description: 'Sofisticación licorosa y maderas profundas.',
    dna: ['Amaderado', 'Oriental', 'Cuero']
  },

  // ==========================================
  // ORIENTICA
  // ==========================================
  {
    id: 'orientica-velvet-gold',
    name: 'Velvet Gold',
    brand: 'Orientica',
    category: 'Árabe',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `Velvet Gold Dama 1.webp`,
    description: 'Suavidad aterciopelada envuelta en oro.',
    dna: ['Floral', 'Dulce', 'Oriental']
  },
  {
    id: 'orientica-amber-rouge',
    name: 'Amber Rouge',
    brand: 'Orientica',
    category: 'Árabe',
    gender: 'Unisex',
    price: 45.00,
    imageUrl: `Amber Rouge Unisex 1.webp`,
    description: 'Rojo intenso, azafrán y misterio.',
    dna: ['Oriental', 'Floral', 'Amaderado']
  },
  {
    id: 'orientica-saffron-oud',
    name: 'Saffron Oud',
    brand: 'Orientica',
    category: 'Árabe',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `haramain amber oud gold.webp`,
    description: 'La riqueza del azafrán con la fuerza del oud.',
    dna: ['Oriental', 'Especiada', 'Amaderado']
  },
  {
    id: 'orientica-amber-royal',
    name: 'Amber Royal',
    brand: 'Orientica',
    category: 'Árabe',
    gender: 'Unisex',
    price: 45.00,
    imageUrl: `Amber Royal Unisex 1.webp`,
    description: 'Realeza ambarada y distinción clásica.',
    dna: ['Oriental', 'Amaderado', 'Dulce']
  },
  {
    id: 'orientica-royal-bleu',
    name: 'Royal Bleu',
    brand: 'Orientica',
    category: 'Árabe',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `Royal Bleu Dama 1.webp`,
    description: 'Nobleza azul, fresca y elegante.',
    dna: ['Frutal', 'Floral', 'Acuatica']
  },

  // ==========================================
  // BHARARA
  // ==========================================
  {
    id: 'bharara-king-bharara',
    name: 'King Bharara',
    brand: 'Bharara',
    category: 'Árabe',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `King Bharara 1.webp`,
    description: 'El rey indiscutible de la duración y estela.',
    dna: ['Citrico', 'Amaderado', 'Aromatica']
  },
  {
    id: 'bharara-king-bharara-gold-edition',
    name: 'King Bharara Gold Edition',
    brand: 'Bharara',
    category: 'Árabe',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `King Bharara Gold Edition 1.webp`,
    description: 'Edición dorada de lujo y poder.',
    dna: ['Oriental', 'Amaderado', 'Especiada']
  },
  {
    id: 'bharara-king-bharara-soleil',
    name: 'King Bharara Soleil',
    brand: 'Bharara',
    category: 'Árabe',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `King Bharara Dubai 1.webp`,
    description: 'Radiante como el sol, vibrante y enérgico.',
    dna: ['Citrico', 'Frutal', 'Aromatica']
  },
  {
    id: 'bharara-king-bharara-parfum',
    name: 'King Bharara Parfum',
    brand: 'Bharara',
    category: 'Árabe',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `King Bharara Parfum 1.webp`,
    description: 'Concentración máxima para una huella imborrable.',
    dna: ['Amaderado', 'Oriental', 'Cuero']
  },
  {
    id: 'bharara-king-viking-dubai',
    name: 'King Viking Dubai',
    brand: 'Bharara',
    category: 'Árabe',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `viking bharara.webp`,
    description: 'Conquista nórdica con espíritu de Dubai.',
    dna: ['Acuatica', 'Fougere', 'Amaderado']
  },
  {
    id: 'bharara-king-bharara-rose',
    name: 'King Bharara Rose',
    brand: 'Bharara',
    category: 'Árabe',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `King Bharara Rose Dama 1.webp`,
    description: 'Rosas majestuosas en un jardín real.',
    dna: ['Floral', 'Dulce', 'Frutal']
  },
  {
    id: 'bharara-king-bharara-rojo',
    name: 'King Bharara Rojo',
    brand: 'Bharara',
    category: 'Árabe',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `Bharara Niche Unisex 1.webp`,
    description: 'Pasión encendida y feminidad audaz.',
    dna: ['Frutal', 'Floral', 'Oriental']
  },
  {
    id: 'bharara-bharara-niche',
    name: 'Bharara Niche',
    brand: 'Bharara',
    category: 'Árabe',
    gender: 'Unisex',
    price: 45.00,
    imageUrl: `bharara queen.webp`,
    description: 'Calidad nicho accesible, complejo y único.',
    dna: ['Oriental', 'Cuero', 'Amaderado']
  },

  // ==========================================
  // ARMAF (ODYSSEY)
  // ==========================================
  {
    id: 'armaf-odyssey-mandarin-sky',
    name: 'Odyssey Mandarin Sky',
    brand: 'Armaf',
    category: 'Árabe',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `oddysey mandarin sky.webp`,
    description: 'Cielo mandarina, dulce y seductor.',
    dna: ['Citrico', 'Dulce', 'Amaderado']
  },
  {
    id: 'armaf-odyssey-mandarin-elixir',
    name: 'Odyssey Mandarin Elixir',
    brand: 'Armaf',
    category: 'Árabe',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `17_Hombre_Paco_Rabanne_Invictus_Elixir.webp`,
    description: 'Elixir cítrico de potencia y duración.',
    dna: ['Citrico', 'Especiada', 'Oriental']
  },
  {
    id: 'armaf-odyssey-mandarin-mega',
    name: 'Odyssey Mandarin Mega',
    brand: 'Armaf',
    category: 'Árabe',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `oddysey mega mandarin.webp`,
    description: 'Mega explosión de frescura y carácter.',
    dna: ['Aromatica', 'Citrico', 'Fougere']
  },
  {
    id: 'armaf-odyssey-candee',
    name: 'Odyssey Candee',
    brand: 'Armaf',
    category: 'Árabe',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `1_Mujer_Armaf_Odyssey_Candee.webp`,
    description: 'Dulce fantasía caramelizada.',
    dna: ['Dulce', 'Vainilla', 'Frutal']
  },

  // ==========================================
  // AL HARAMAIN
  // ==========================================
  {
    id: 'al-haramain-amber-oud',
    name: 'Amber Oud',
    brand: 'Al Haramain',
    category: 'Árabe',
    gender: 'Unisex',
    price: 45.00,
    imageUrl: `haramain amber oud.webp`,
    description: 'Clásico moderno de ámbar y maderas suaves.',
    dna: ['Amaderado', 'Oriental', 'Aromatica']
  },
  {
    id: 'al-haramain-amber-oud-aqua-dubai',
    name: 'Amber Oud Aqua Dubai',
    brand: 'Al Haramain',
    category: 'Árabe',
    gender: 'Unisex',
    price: 45.00,
    imageUrl: `2_Unisex_Al_Haramain_Amber_Oud_Aqua_Dubai.webp`,
    description: 'Frescura acuática en el corazón del desierto.',
    dna: ['Acuatica', 'Citrico', 'Amaderado']
  },
  {
    id: 'al-haramain-amber-oud-dubai-night',
    name: 'Amber Oud Dubai Night',
    brand: 'Al Haramain',
    category: 'Árabe',
    gender: 'Unisex',
    price: 45.00,
    imageUrl: `3_Unisex_Al_Haramain_Amber_Oud_Dubai_Night.webp`,
    description: 'La magia de las noches árabes embotellada.',
    dna: ['Oriental', 'Amaderado', 'Especiada']
  },
  {
    id: 'al-haramain-amber-oud-edition',
    name: 'Amber Oud Edition',
    brand: 'Al Haramain',
    category: 'Árabe',
    gender: 'Unisex',
    price: 45.00,
    imageUrl: `4_Unisex_Al_Haramain_Amber_Oud_Edition.webp`,
    description: 'Edición especial de equilibrio perfecto.',
    dna: ['Amaderado', 'Dulce', 'Fougere']
  },

  // ==========================================
  // MAISON FRANCIS KURKDJIAN (INSPIRACIONES)
  // ==========================================
  {
    id: 'maison-francis-kurkdjian-baccarat-rouge-540',
    name: 'Baccarat Rouge 540',
    brand: 'Maison Francis Kurkdjian',
    category: 'Nicho',
    gender: 'Dama',
    price: 45.00,
    badge: 'TENDENCIA TIKTOK',
    imageUrl: `maison francis kurkjdijan.webp`,
    description: 'Cristal rojo, azafrán y brisa ambarada.',
    dna: ['Oriental', 'Floral', 'Amaderado']
  },
  {
    id: 'maison-francis-kurkdjian-baccarat-rouge-540-maison',
    name: 'Baccarat Rouge 540 Maison',
    brand: 'Maison Francis Kurkdjian',
    category: 'Nicho',
    gender: 'Dama',
    price: 45.00,
    badge: 'TENDENCIA TIKTOK',
    imageUrl: `5_Mujer_Maison_Francis_Kurkdjian_Baccarat_Rouge_540.webp`,
    description: 'La firma olfativa de la excelencia maison.',
    dna: ['Oriental', 'Floral', 'Amaderado']
  },

  // ==========================================
  // LORENZO PAZZAGLIA
  // ==========================================
  {
    id: 'lorenzo-pazzaglia-sweet-xplosion',
    name: 'Sweet Xplosion',
    brand: 'Lorenzo Pazzaglia',
    category: 'Autor',
    gender: 'Unisex',
    price: 45.00,
    imageUrl: `sweet xplosion.webp`,
    description: 'Explosión gourmand de dulzura ilimitada.',
    dna: ['Dulce', 'Vainilla', 'Frutal']
  },
  {
    id: 'lorenzo-pazzaglia-sex-sea',
    name: 'Sex Sea',
    brand: 'Lorenzo Pazzaglia',
    category: 'Autor',
    gender: 'Unisex',
    price: 45.00,
    imageUrl: `sex sea.webp`,
    description: 'Mar, piel salada y seducción pura.',
    dna: ['Acuatica', 'Aromatica', 'Citrico']
  },
  {
    id: 'lorenzo-pazzaglia-dream-sea',
    name: 'Dream Sea',
    brand: 'Lorenzo Pazzaglia',
    category: 'Autor',
    gender: 'Unisex',
    price: 45.00,
    imageUrl: `dream sea.webp`,
    description: 'Un sueño oceánico etéreo y envolvente.',
    dna: ['Acuatica', 'Floral', 'Vainilla']
  },
  {
    id: 'lorenzo-pazzaglia-black-sea',
    name: 'Black Sea',
    brand: 'Lorenzo Pazzaglia',
    category: 'Autor',
    gender: 'Unisex',
    price: 45.00,
    imageUrl: `black sea.webp`,
    description: 'La fuerza oscura de un mar tormentoso.',
    dna: ['Acuatica', 'Amaderado', 'Aromatica']
  },
  {
    id: 'lorenzo-pazzaglia-sun-gria',
    name: 'Sun-gria',
    brand: 'Lorenzo Pazzaglia',
    category: 'Autor',
    gender: 'Unisex',
    price: 45.00,
    imageUrl: `sun gria.webp`,
    description: 'Sangría bajo el sol, fiesta y alegría.',
    dna: ['Frutal', 'Citrico', 'Dulce']
  },
  {
    id: 'lorenzo-pazzaglia-summer-hammer',
    name: 'Summer Hammer',
    brand: 'Lorenzo Pazzaglia',
    category: 'Autor',
    gender: 'Unisex',
    price: 45.00,
    imageUrl: `6_Unisex_Lorenzo_Pazzaglia_Summer_Hammer.webp`,
    description: 'Golpe de verano tropical y potente.',
    dna: ['Frutal', 'Tropical' as NoteType, 'Dulce']
  },

  // ==========================================
  // OTROS (ILMIN)
  // ==========================================
  {
    id: 'ilmin-ilmin-kakuno',
    name: 'Ilmin Kakuno',
    brand: 'Ilmin',
    category: 'Nicho',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `7_Hombre_Ilmin_Kakuno.webp`,
    description: 'Carácter único y presencia inolvidable.',
    dna: ['Amaderado', 'Cuero', 'Oriental']
  },

  // ==========================================
  // CAROLINA HERRERA
  // ==========================================
  // Línea Bad Boy
  {
    id: 'carolina-herrera-bad-boy-cobalt',
    name: 'Bad Boy Cobalt',
    brand: 'Carolina Herrera',
    category: 'Diseñador',
    subcategory: 'Bad Boy',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `bad boy carolina herrera cohalt.webp`,
    description: 'El rayo azul de la seducción eléctrica.',
    dna: ['Aromatica', 'Amaderado', 'Especiada']
  },
  {
    id: 'carolina-herrera-bad-boy-clasico',
    name: 'Bad Boy Clásico',
    brand: 'Carolina Herrera',
    category: 'Diseñador',
    subcategory: 'Bad Boy',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `bad boy carolina herrera its so good to be bad.webp`,
    description: 'Dualidad magnética de cacao y pimienta.',
    dna: ['Oriental', 'Especiada', 'Dulce']
  },
  // Línea 212
  {
    id: 'carolina-herrera-212-sexy-dama',
    name: '212 Sexy Dama',
    brand: 'Carolina Herrera',
    category: 'Diseñador',
    subcategory: '212',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `212 sexy carolina herrera.webp`,
    description: 'Sensualidad urbana con pimienta rosa y algodón de azúcar.',
    dna: ['Dulce', 'Floral', 'Oriental']
  },
  {
    id: 'carolina-herrera-212-heroes-dama',
    name: '212 Heroes Dama',
    brand: 'Carolina Herrera',
    category: 'Diseñador',
    subcategory: '212',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `212 heroes forever young.webp`,
    description: 'Juventud eterna en un skate dorado.',
    dna: ['Frutal', 'Floral', 'Amaderado']
  },
  {
    id: 'carolina-herrera-212-vip-rose',
    name: '212 VIP Rosé',
    brand: 'Carolina Herrera',
    category: 'Diseñador',
    subcategory: '212',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `212  VIP Rosé NYC.webp`,
    description: 'Champán rosado para la chica más VIP.',
    dna: ['Frutal', 'Floral', 'Dulce']
  },
  {
    id: 'carolina-herrera-212-heroes-hombre',
    name: '212 Heroes Hombre',
    brand: 'Carolina Herrera',
    category: 'Diseñador',
    subcategory: '212',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `212 men heroes forever young.webp`,
    description: 'Espíritu rebelde con pera y geranio.',
    dna: ['Frutal', 'Aromatica', 'Amaderado']
  },
  {
    id: 'carolina-herrera-212-vip-men',
    name: '212 VIP Men',
    brand: 'Carolina Herrera',
    category: 'Diseñador',
    subcategory: '212',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `212 vip men are you on the list.webp`,
    description: 'El alma de la fiesta con vodka y menta.',
    dna: ['Aromatica', 'Especiada', 'Amaderado']
  },
  {
    id: 'carolina-herrera-212-vip-black-red',
    name: '212 VIP Black Red',
    brand: 'Carolina Herrera',
    category: 'Diseñador',
    subcategory: '212',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `212 VIP black own the party.webp`,
    description: 'Edición limitada de fuego y especias.',
    dna: ['Especiada', 'Aromatica', 'Dulce']
  },
  {
    id: 'carolina-herrera-212-vip-black',
    name: '212 VIP Black',
    brand: 'Carolina Herrera',
    category: 'Diseñador',
    subcategory: '212',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `212 vip black.webp`,
    description: 'Absenta y almizcle para la noche intensa.',
    dna: ['Aromatica', 'Fougere', 'Vainilla']
  },
  {
    id: 'carolina-herrera-212-men-nyc',
    name: '212 Men NYC',
    brand: 'Carolina Herrera',
    category: 'Diseñador',
    subcategory: '212',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `212 men NYC.webp`,
    description: 'El aroma de Manhattan, verde y vibrante.',
    dna: ['Verde', 'Citrico', 'Amaderado']
  },
  {
    id: 'carolina-herrera-212-sexy-men',
    name: '212 Sexy Men',
    brand: 'Carolina Herrera',
    category: 'Diseñador',
    subcategory: '212',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `212 Sexy men.webp`,
    description: 'Seducción magnética con vainilla y guayaco.',
    dna: ['Oriental', 'Fougere', 'Vainilla']
  },
  {
    id: 'carolina-herrera-212-vip-men-wins',
    name: '212 VIP Men Wins',
    brand: 'Carolina Herrera',
    category: 'Diseñador',
    subcategory: '212',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `212 VIP men wins.webp`,
    description: 'La victoria huele a kiwi y notas verdes.',
    dna: ['Aromatica', 'Verde', 'Citrico']
  },
  {
    id: 'carolina-herrera-ch-212-hombre',
    name: 'CH 212 Hombre',
    brand: 'Carolina Herrera',
    category: 'Diseñador',
    subcategory: '212',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `12_Hombre_Paco_Rabanne_Black_XS_Aerosol.webp`,
    description: 'Elegancia casual para el hombre moderno.',
    dna: ['Cuero', 'Dulce', 'Amaderado']
  },
  // Línea Good Girl & Clásicos
  {
    id: 'carolina-herrera-good-girl-negro',
    name: 'Good Girl Negro',
    brand: 'Carolina Herrera',
    category: 'Diseñador',
    subcategory: 'Good Girl',
    gender: 'Dama',
    price: 45.00,
    badge: 'TOP VENTAS',
    imageUrl: `good girl it so good.webp`,
    description: 'Es bueno ser mala. Jazmín y Cacao.',
    dna: ['Oriental', 'Floral', 'Dulce']
  },
  {
    id: 'carolina-herrera-good-girl-blush',
    name: 'Good Girl Blush',
    brand: 'Carolina Herrera',
    category: 'Diseñador',
    subcategory: 'Good Girl',
    gender: 'Dama',
    price: 45.00,
    badge: 'TOP VENTAS',
    imageUrl: `good girl.webp`,
    description: 'Feminidad empolvada de peonía y vainilla.',
    dna: ['Floral', 'Vainilla', 'Citrico']
  },
  {
    id: 'carolina-herrera-good-girl-very-good-girl',
    name: 'Good Girl Very Good Girl',
    brand: 'Carolina Herrera',
    category: 'Diseñador',
    subcategory: 'Good Girl',
    gender: 'Dama',
    price: 45.00,
    badge: 'TOP VENTAS',
    imageUrl: `carolina herrera 2.webp`,
    description: 'Audacia roja con lichi y rosa.',
    dna: ['Frutal', 'Floral', 'Dulce']
  },
  {
    id: 'carolina-herrera-clasico-dama',
    name: 'Carolina Herrera Clásico',
    brand: 'Carolina Herrera',
    category: 'Diseñador',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `carolina herrera.webp`,
    description: 'La esencia de la elegancia atemporal.',
    dna: ['Floral', 'Citrico', 'Amaderado']
  },
  {
    id: 'carolina-herrera-tradicional-dama',
    name: 'Carolina Herrera Tradicional',
    brand: 'Carolina Herrera',
    category: 'Diseñador',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `8_Mujer_Carolina_Herrera_Tradicional.webp`,
    description: 'Sofisticación pura de nardos y jazmín.',
    dna: ['Floral', 'Amaderado', 'Citrico']
  },

  // ==========================================
  // YANBAL
  // ==========================================
  {
    id: 'yanbal-temptation-hombre',
    name: 'Temptation Hombre',
    brand: 'Yanbal',
    category: 'Diseñador',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `13_Hombre_Paco_Rabanne_Invictus_Clásico.webp`,
    description: 'El poder de la tentación irresistible.',
    dna: ['Amaderado', 'Especiada', 'Citrico']
  },
  {
    id: 'yanbal-temptation-black-men',
    name: 'Temptation Black Men',
    brand: 'Yanbal',
    category: 'Diseñador',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `temptation black yanbal.webp`,
    description: 'Seducción intensa y misteriosa.',
    dna: ['Especiada', 'Amaderado', 'Oriental']
  },
  {
    id: 'yanbal-temptation-men',
    name: 'Temptation Men',
    brand: 'Yanbal',
    category: 'Diseñador',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `temptation yanbal.webp`,
    description: 'Carácter fuerte para el hombre decidido.',
    dna: ['Amaderado', 'Citrico', 'Aromatica']
  },
  {
    id: 'yanbal-temptation-dama',
    name: 'Temptation Dama',
    brand: 'Yanbal',
    category: 'Diseñador',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `temptation black auu de parfum.webp`,
    description: 'Aroma floral que despierta pasiones.',
    dna: ['Floral', 'Oriental', 'Frutal']
  },
  {
    id: 'yanbal-osadia-hombre',
    name: 'Osadía Hombre',
    brand: 'Yanbal',
    category: 'Diseñador',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `osadia hombre.webp`,
    description: 'Para el hombre que se atreve a todo.',
    dna: ['Amaderado', 'Citrico', 'Especiada']
  },
  {
    id: 'yanbal-osadia-dama',
    name: 'Osadía Dama',
    brand: 'Yanbal',
    category: 'Diseñador',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `9_Mujer_Yanbal_Osadía.webp`,
    description: 'Chispa latina y encanto atrevido.',
    dna: ['Frutal', 'Floral', 'Dulce']
  },
  {
    id: 'yanbal-cielo-dama',
    name: 'Cielo Dama',
    brand: 'Yanbal',
    category: 'Diseñador',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `yanbal cielo.webp`,
    description: 'La pureza del aire y flores blancas.',
    dna: ['Floral', 'Acuatica', 'Citrico']
  },
  {
    id: 'yanbal-gaia-dama',
    name: 'Gaïa Dama',
    brand: 'Yanbal',
    category: 'Diseñador',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `10_Mujer_Yanbal_Gaïa.webp`,
    description: 'La diosa de la tierra, mística y floral.',
    dna: ['Floral', 'Oriental', 'Amaderado']
  },
  {
    id: 'yanbal-cori-crystal-dama',
    name: 'Cori Crystal Dama',
    brand: 'Yanbal',
    category: 'Diseñador',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `70_Mujer_Versace_Bright_Crystal.webp`,
    description: 'Brillo cristalino de rosas frescas.',
    dna: ['Floral', 'Frutal', 'Acuatica']
  },
  {
    id: 'yanbal-arom-azul-hombre',
    name: 'Arom Azul Hombre',
    brand: 'Yanbal',
    category: 'Diseñador',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `66_Hombre_Versace_Eros_Azul.webp`,
    description: 'Frescura vital y energía masculina.',
    dna: ['Citrico', 'Acuatica', 'Aromatica']
  },
  {
    id: 'yanbal-arom-negro-hombre',
    name: 'Arom Negro Hombre',
    brand: 'Yanbal',
    category: 'Diseñador',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `14_Hombre_Paco_Rabanne_Invictus_Legend.webp`,
    description: 'Elegancia nocturna y sofisticada.',
    dna: ['Amaderado', 'Especiada', 'Cuero']
  },
  {
    id: 'yanbal-arom-clasico-hombre',
    name: 'Arom Clásico Hombre',
    brand: 'Yanbal',
    category: 'Diseñador',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `18_Hombre_Paco_Rabanne_1_Million_Clásico.webp`,
    description: 'El sello del hombre tradicional.',
    dna: ['Amaderado', 'Citrico', 'Especiada']
  },
  {
    id: 'yanbal-adrenalina-hombre',
    name: 'Adrenalina Hombre',
    brand: 'Yanbal',
    category: 'Diseñador',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `15_Hombre_Paco_Rabanne_Invictus_Victory.webp`,
    description: 'Energía pura para vivir al límite.',
    dna: ['Citrico', 'Aromatica', 'Verde']
  },
  {
    id: 'yanbal-ohm-azul-hombre',
    name: 'Ohm Azul Hombre',
    brand: 'Yanbal',
    category: 'Diseñador',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `184_Hombre_Avon_Musk.webp`,
    description: 'Fuerza oceánica y frescura profunda.',
    dna: ['Acuatica', 'Amaderado', 'Citrico']
  },
  {
    id: 'yanbal-ohm-negro-hombre',
    name: 'Ohm Negro Hombre',
    brand: 'Yanbal',
    category: 'Diseñador',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `19_Hombre_Paco_Rabanne_1_Million_Lucky.webp`,
    description: 'Distinción y carácter absoluto.',
    dna: ['Amaderado', 'Especiada', 'Oriental']
  },
  {
    id: 'yanbal-ohm-clasico-hombre',
    name: 'Ohm Clásico Hombre',
    brand: 'Yanbal',
    category: 'Diseñador',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `28_Hombre_Jean_Paul_Gaultier_Ultra_Male_Clásico.webp`,
    description: 'El clásico que nunca pasa de moda.',
    dna: ['Amaderado', 'Citrico', 'Cuero']
  },
  {
    id: 'yanbal-solo-hombre',
    name: 'Solo Hombre',
    brand: 'Yanbal',
    category: 'Diseñador',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `20_Hombre_Paco_Rabanne_1_Million_Privé.webp`,
    description: 'Para el hombre único y auténtico.',
    dna: ['Amaderado', 'Especiada', 'Citrico']
  },

  // ==========================================
  // PACO RABANNE
  // ==========================================
  // Damas
  {
    id: 'paco-rabanne-olympea',
    name: 'Olympea',
    brand: 'Paco Rabanne',
    category: 'Diseñador',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `1_Mujer_Paco_Rabanne_Olympea.webp`,
    description: 'La diosa moderna. Vainilla salada.',
    dna: ['Vainilla', 'Acuatica', 'Floral']
  },
  {
    id: 'paco-rabanne-pure-xs-dama',
    name: 'Pure XS Dama',
    brand: 'Paco Rabanne',
    category: 'Diseñador',
    subcategory: 'XS',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `2_Mujer_Paco_Rabanne_Pure_XS.webp`,
    description: 'Exceso floral con ylang-ylang y palomitas.',
    dna: ['Dulce', 'Floral', 'Oriental']
  },
  {
    id: 'paco-rabanne-fame',
    name: 'Fame',
    brand: 'Paco Rabanne',
    category: 'Diseñador',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `3_Mujer_Paco_Rabanne_Fame.webp`,
    description: 'Mango jugoso y jazmín para la estrella.',
    dna: ['Frutal', 'Dulce', 'Floral']
  },
  {
    id: 'paco-rabanne-lady-million',
    name: 'Lady Million',
    brand: 'Paco Rabanne',
    category: 'Diseñador',
    subcategory: 'Lady Million',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `1_Mujer_Paco_Rabanne_Lady_Million.webp`,
    description: 'Diamante dorado de frambuesa y miel.',
    dna: ['Dulce', 'Floral', 'Frutal']
  },
  {
    id: 'paco-rabanne-lady-million-prive',
    name: 'Lady Million Privé',
    brand: 'Paco Rabanne',
    category: 'Diseñador',
    subcategory: 'Lady Million',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `2_Mujer_Paco_Rabanne_Lady_Million_Privé.webp`,
    description: 'Lujo íntimo de cacao y vainilla.',
    dna: ['Oriental', 'Dulce', 'Amaderado']
  },
  {
    id: 'paco-rabanne-lady-million-royal',
    name: 'Lady Million Royal',
    brand: 'Paco Rabanne',
    category: 'Diseñador',
    subcategory: 'Lady Million',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `3_Mujer_Paco_Rabanne_Lady_Million_Royal.webp`,
    description: 'Realeza floral frutal deslumbrante.',
    dna: ['Floral', 'Frutal', 'Amaderado']
  },
  {
    id: 'paco-rabanne-lady-million-fabulous',
    name: 'Lady Million Fabulous',
    brand: 'Paco Rabanne',
    category: 'Diseñador',
    subcategory: 'Lady Million',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `4_Mujer_Paco_Rabanne_Lady_Million_Fabulous.webp`,
    description: 'Fabulosa noche de flores solares y vainilla.',
    dna: ['Oriental', 'Floral', 'Vainilla']
  },
  {
    id: 'paco-rabanne-black-xs-dama',
    name: 'Black XS Dama',
    brand: 'Paco Rabanne',
    category: 'Diseñador',
    subcategory: 'XS',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `5_Mujer_Paco_Rabanne_Black_XS.webp`,
    description: 'Rebeldía dulce con arándanos y cacao.',
    dna: ['Oriental', 'Amaderado', 'Frutal']
  },
  // Phantom & XS Hombres
  {
    id: 'paco-rabanne-phantom-gris',
    name: 'Phantom Gris',
    brand: 'Paco Rabanne',
    category: 'Diseñador',
    subcategory: 'Phantom',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `6_Hombre_Paco_Rabanne_Phantom_Gris.webp`,
    description: 'Futurismo aromático de lavanda y limón.',
    dna: ['Aromatica', 'Citrico', 'Vainilla']
  },
  {
    id: 'paco-rabanne-phantom-black',
    name: 'Phantom Black',
    brand: 'Paco Rabanne',
    category: 'Diseñador',
    subcategory: 'Phantom',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `7_Hombre_Paco_Rabanne_Phantom_Black.webp`,
    description: 'La versión nocturna y misteriosa del robot.',
    dna: ['Aromatica', 'Amaderado', 'Oriental']
  },
  {
    id: 'paco-rabanne-pure-xs-hombre',
    name: 'Pure XS Hombre',
    brand: 'Paco Rabanne',
    category: 'Diseñador',
    subcategory: 'XS',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `8_Hombre_Paco_Rabanne_Pure_XS.webp`,
    description: 'Exceso de jengibre y vainilla ardiente.',
    dna: ['Oriental', 'Especiada', 'Dulce']
  },
  {
    id: 'paco-rabanne-black-xs-hombre',
    name: 'Black XS Hombre',
    brand: 'Paco Rabanne',
    category: 'Diseñador',
    subcategory: 'XS',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `9_Hombre_Paco_Rabanne_Black_XS.webp`,
    description: 'Rock & Roll con praliné y limón.',
    dna: ['Oriental', 'Amaderado', 'Dulce']
  },
  {
    id: 'paco-rabanne-black-xs-lexces',
    name: 'Black XS L’Excès',
    brand: 'Paco Rabanne',
    category: 'Diseñador',
    subcategory: 'XS',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `21_Hombre_Paco_Rabanne_1_Million_Elixir.webp`,
    description: 'Intensidad excesiva y vibrante.',
    dna: ['Aromatica', 'Amaderado', 'Citrico']
  },
  {
    id: 'paco-rabanne-black-xs-clasico',
    name: 'Black XS Clásico',
    brand: 'Paco Rabanne',
    category: 'Diseñador',
    subcategory: 'XS',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `22_Hombre_Paco_Rabanne_1_Million_Gold.webp`,
    description: 'El original rebelde de la colección.',
    dna: ['Oriental', 'Amaderado', 'Especiada']
  },
  {
    id: 'paco-rabanne-black-xs-aerosol',
    name: 'Black XS Aerosol',
    brand: 'Paco Rabanne',
    category: 'Diseñador',
    subcategory: 'XS',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `23_Hombre_Paco_Rabanne_1_Million_Royal.webp`,
    description: 'Frescura rebelde en formato spray.',
    dna: ['Aromatica', 'Citrico', 'Amaderado']
  },
  // Línea Invictus
  {
    id: 'paco-rabanne-invictus-clasico',
    name: 'Invictus Clásico',
    brand: 'Paco Rabanne',
    category: 'Diseñador',
    subcategory: 'Invictus',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `36_Hombre_Hugo_Boss_Boss_Clásico.webp`,
    description: 'El trofeo del ganador. Toronja y laurel.',
    dna: ['Acuatica', 'Citrico', 'Aromatica']
  },
  {
    id: 'paco-rabanne-invictus-legend',
    name: 'Invictus Legend',
    brand: 'Paco Rabanne',
    category: 'Diseñador',
    subcategory: 'Invictus',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `71_Hombre_Montblanc_Legend_Spirit.webp`,
    description: 'Duelo ardiente entre especias y mar.',
    dna: ['Acuatica', 'Especiada', 'Amaderado']
  },
  {
    id: 'paco-rabanne-invictus-victory',
    name: 'Invictus Victory',
    brand: 'Paco Rabanne',
    category: 'Diseñador',
    subcategory: 'Invictus',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `11_Hombre_Paco_Rabanne_Invictus_Victory.webp`,
    description: 'Victoria extrema de vainilla y ámbar.',
    dna: ['Vainilla', 'Oriental', 'Dulce']
  },
  {
    id: 'paco-rabanne-invictus-victory-elixir',
    name: 'Invictus Victory Elixir / Absolu',
    brand: 'Paco Rabanne',
    category: 'Diseñador',
    subcategory: 'Invictus',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `31_Hombre_Jean_Paul_Gaultier_Le_Male_Elixir_Absolu.webp`,
    description: 'El pináculo de la intensidad. Rico y poderoso.',
    dna: ['Vainilla', 'Oriental', 'Amaderado']
  },
  {
    id: 'paco-rabanne-invictus-elixir',
    name: 'Invictus Elixir',
    brand: 'Paco Rabanne',
    category: 'Diseñador',
    subcategory: 'Invictus',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `30_Hombre_Jean_Paul_Gaultier_Le_Male_Elixir.webp`,
    description: 'Energía concentrada y magnetismo puro.',
    dna: ['Amaderado', 'Acuatica', 'Citrico']
  },
  // Línea 1 Million
  {
    id: 'paco-rabanne-1-million-clasico',
    name: '1 Million Clásico',
    brand: 'Paco Rabanne',
    category: 'Diseñador',
    subcategory: '1 Million',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `54_Hombre_Armani_Acqua_di_Gio_Clásico.webp`,
    description: 'El lingote de oro original. Canela y cuero.',
    dna: ['Especiada', 'Cuero', 'Dulce']
  },
  {
    id: 'paco-rabanne-1-million-lucky',
    name: '1 Million Lucky',
    brand: 'Paco Rabanne',
    category: 'Diseñador',
    subcategory: '1 Million',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `12_Hombre_Paco_Rabanne_1_Million_Lucky.webp`,
    description: 'Suerte pura con avellana y ciruela.',
    dna: ['Dulce', 'Frutal', 'Amaderado']
  },
  {
    id: 'paco-rabanne-1-million-prive',
    name: '1 Million Privé',
    brand: 'Paco Rabanne',
    category: 'Diseñador',
    subcategory: '1 Million',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `13_Hombre_Paco_Rabanne_1_Million_Privé.webp`,
    description: 'Elegancia oriental con tabaco y mirra.',
    dna: ['Oriental', 'Especiada', 'Dulce']
  },
  {
    id: 'paco-rabanne-1-million-elixir',
    name: '1 Million Elixir',
    brand: 'Paco Rabanne',
    category: 'Diseñador',
    subcategory: '1 Million',
    gender: 'Hombre',
    price: 45.00,
    badge: 'TOP VENTAS',
    imageUrl: `43_Hombre_Hugo_Boss_Boss_Elixir.webp`,
    description: 'La máxima expresión de poder absoluto.',
    dna: ['Dulce', 'Frutal', 'Vainilla']
  },
  {
    id: 'paco-rabanne-1-million-gold',
    name: '1 Million Gold',
    brand: 'Paco Rabanne',
    category: 'Diseñador',
    subcategory: '1 Million',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `14_Hombre_Paco_Rabanne_1_Million_Gold.webp`,
    description: 'El nuevo estándar de éxito brillante.',
    dna: ['Amaderado', 'Citrico', 'Especiada']
  },
  {
    id: 'paco-rabanne-1-million-royal',
    name: '1 Million Royal',
    brand: 'Paco Rabanne',
    category: 'Diseñador',
    subcategory: '1 Million',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `15_Hombre_Paco_Rabanne_1_Million_Royal.webp`,
    description: 'Para el rey de la selva urbana.',
    dna: ['Amaderado', 'Oriental', 'Citrico']
  },

  // ==========================================
  // JEAN PAUL GAULTIER
  // ==========================================
  // Scandal
  {
    id: 'jpg-scandal-intense',
    name: 'Scandal Intense',
    brand: 'Jean Paul Gaultier',
    category: 'Diseñador',
    subcategory: 'Scandal',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `24_Mujer_Jean_Paul_Gaultier_Scandal_Intense.webp`,
    description: 'Miel y jazmín en una intensidad escandalosa.',
    dna: ['Dulce', 'Floral', 'Oriental']
  },
  {
    id: 'jpg-scandal-clasico',
    name: 'Scandal Clásico',
    brand: 'Jean Paul Gaultier',
    category: 'Diseñador',
    subcategory: 'Scandal',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `25_Mujer_Jean_Paul_Gaultier_Scandal_Clásico.webp`,
    description: 'La miel chipre que rompe clichés.',
    dna: ['Dulce', 'Floral', 'Citrico']
  },
  {
    id: 'jpg-scandal-pour-homme',
    name: 'Scandal Pour Homme',
    brand: 'Jean Paul Gaultier',
    category: 'Diseñador',
    subcategory: 'Scandal',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `27_Hombre_Jean_Paul_Gaultier_Scandal_Le_Parfum.webp`,
    description: 'El rey del ring con caramelo y haba tonka.',
    dna: ['Dulce', 'Aromatica', 'Amaderado']
  },
  {
    id: 'jpg-scandal-le-parfum',
    name: 'Scandal Le Parfum',
    brand: 'Jean Paul Gaultier',
    category: 'Diseñador',
    subcategory: 'Scandal',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `29_Hombre_Jean_Paul_Gaultier_Le_Male.webp`,
    description: 'Geranio y madera de sándalo adictiva.',
    dna: ['Amaderado', 'Aromatica', 'Dulce']
  },
  // Le Male / Le Beau
  {
    id: 'jpg-ultra-male',
    name: 'Ultra Male',
    brand: 'Jean Paul Gaultier',
    category: 'Diseñador',
    subcategory: 'Le Male',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `32_Hombre_Jean_Paul_Gaultier_Le_Beau.webp`,
    description: 'Pera y vainilla para el rompecorazones.',
    dna: ['Dulce', 'Frutal', 'Oriental']
  },
  {
    id: 'jpg-le-male',
    name: 'Le Male',
    brand: 'Jean Paul Gaultier',
    category: 'Diseñador',
    subcategory: 'Le Male',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `33_Hombre_Jean_Paul_Gaultier_Le_Beau_Paradise_Garden.webp`,
    description: 'El clásico marinero de lavanda y menta.',
    dna: ['Fougere', 'Aromatica', 'Vainilla']
  },
  {
    id: 'jpg-le-male-elixir',
    name: 'Le Male Elixir',
    brand: 'Jean Paul Gaultier',
    category: 'Diseñador',
    subcategory: 'Le Male',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `34_Mujer_Jean_Paul_Gaultier_Divine.webp`,
    description: 'Fuego dorado de miel, tabaco y benjuí.',
    dna: ['Oriental', 'Dulce', 'Amaderado']
  },
  {
    id: 'jpg-le-male-elixir-absolu',
    name: 'Le Male Elixir Absolu',
    brand: 'Jean Paul Gaultier',
    category: 'Diseñador',
    subcategory: 'Le Male',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `56_Hombre_Armani_Acqua_di_Gio_Elixir.webp`,
    description: 'La quintaesencia de la seducción intensa.',
    dna: ['Oriental', 'Amaderado', 'Especiada']
  },
  {
    id: 'jpg-le-beau',
    name: 'Le Beau',
    brand: 'Jean Paul Gaultier',
    category: 'Diseñador',
    subcategory: 'Le Beau',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `16_Hombre_Jean_Paul_Gaultier_Le_Beau.webp`,
    description: 'Frescura adictiva de coco y bergamota.',
    dna: ['Amaderado', 'Aromatica', 'Dulce']
  },
  {
    id: 'jpg-le-beau-paradise-garden',
    name: 'Le Beau Paradise Garden',
    brand: 'Jean Paul Gaultier',
    category: 'Diseñador',
    subcategory: 'Le Beau',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `17_Hombre_Jean_Paul_Gaultier_Le_Beau_Paradise_Garden.webp`,
    description: 'Paraíso verde de higo y notas acuáticas.',
    dna: ['Verde', 'Acuatica', 'Frutal']
  },
  // Otros JPG
  {
    id: 'jpg-divine',
    name: 'Divine',
    brand: 'Jean Paul Gaultier',
    category: 'Diseñador',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `18_Mujer_Jean_Paul_Gaultier_Divine.webp`,
    description: 'Lirio solar y merengue dulce.',
    dna: ['Floral', 'Dulce', 'Acuatica']
  },
  {
    id: 'jpg-classique-rosado',
    name: 'Classique (Rosado)',
    brand: 'Jean Paul Gaultier',
    category: 'Diseñador',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `19_Mujer_Jean_Paul_Gaultier_Classique_Rosado.webp`,
    description: 'Polvos de arroz y rosa seductora.',
    dna: ['Floral', 'Oriental', 'Especiada']
  },

  // ==========================================
  // HUGO BOSS
  // ==========================================
  {
    id: 'hugo-boss-clasico',
    name: 'Boss Clásico',
    brand: 'Hugo Boss',
    category: 'Diseñador',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `37_Hombre_Hugo_Boss_Boss_Bottled.webp`,
    description: 'El éxito embotellado. Manzana y canela.',
    dna: ['Amaderado', 'Frutal', 'Especiada']
  },
  {
    id: 'hugo-boss-bottled',
    name: 'Boss Bottled',
    brand: 'Hugo Boss',
    category: 'Diseñador',
    subcategory: 'Bottled',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `38_Hombre_Hugo_Boss_Boss_Bottled_Parfum.webp`,
    description: 'Elegancia contemporánea y versátil.',
    dna: ['Amaderado', 'Vainilla', 'Frutal']
  },
  {
    id: 'hugo-boss-bottled-parfum',
    name: 'Boss Bottled Parfum',
    brand: 'Hugo Boss',
    category: 'Diseñador',
    subcategory: 'Bottled',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `39_Hombre_Hugo_Boss_Boss_Bottled_Intense.webp`,
    description: 'Intensidad oscura de cuero y maderas.',
    dna: ['Amaderado', 'Cuero', 'Citrico']
  },
  {
    id: 'hugo-boss-bottled-intense',
    name: 'Boss Bottled Intense',
    brand: 'Hugo Boss',
    category: 'Diseñador',
    subcategory: 'Bottled',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `42_Hombre_Hugo_Boss_Boss_Intense.webp`,
    description: 'Más especiado, más profundo, más Boss.',
    dna: ['Amaderado', 'Especiada', 'Vainilla']
  },
  {
    id: 'hugo-boss-unlimited',
    name: 'Boss Unlimited',
    brand: 'Hugo Boss',
    category: 'Diseñador',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `40_Hombre_Hugo_Boss_Boss_Unlimited.webp`,
    description: 'Frescura vigorizante de menta y piña.',
    dna: ['Aromatica', 'Frutal', 'Verde']
  },
  {
    id: 'hugo-boss-sport',
    name: 'Boss Sport',
    brand: 'Hugo Boss',
    category: 'Diseñador',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `41_Hombre_Hugo_Boss_Boss_Sport.webp`,
    description: 'Energía cítrica para el hombre activo.',
    dna: ['Citrico', 'Aromatica', 'Fougere']
  },
  {
    id: 'hugo-boss-intense',
    name: 'Boss Intense',
    brand: 'Hugo Boss',
    category: 'Diseñador',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `44_Hombre_Hugo_Boss_Boss_Infinite.webp`,
    description: 'Carácter fuerte y seducción magnética.',
    dna: ['Oriental', 'Amaderado', 'Especiada']
  },
  {
    id: 'hugo-boss-elixir',
    name: 'Boss Elixir',
    brand: 'Hugo Boss',
    category: 'Diseñador',
    subcategory: 'Bottled',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `45_Hombre_Hugo_Boss_Boss_Orange.webp`,
    description: 'Incienso y cardamomo en alta concentración.',
    dna: ['Amaderado', 'Especiada', 'Oriental']
  },
  {
    id: 'hugo-boss-infinite',
    name: 'Boss Infinite',
    brand: 'Hugo Boss',
    category: 'Diseñador',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `46_Hombre_Hugo_Boss_Boss_Red.webp`,
    description: 'Equilibrio entre frescura y calidez.',
    dna: ['Aromatica', 'Amaderado', 'Frutal']
  },
  {
    id: 'hugo-boss-orange',
    name: 'Boss Orange',
    brand: 'Hugo Boss',
    category: 'Diseñador',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `47_Hombre_Hugo_Boss_Boss_In_Motion.webp`,
    description: 'Espíritu libre con vainilla y manzana.',
    dna: ['Amaderado', 'Especiada', 'Vainilla']
  },
  {
    id: 'hugo-boss-red',
    name: 'Boss Red',
    brand: 'Hugo Boss',
    category: 'Diseñador',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `48_Hombre_Hugo_Boss_Boss_The_Scent.webp`,
    description: 'Notas metálicas y ruibarbo audaz.',
    dna: ['Oriental', 'Frutal', 'Aromatica']
  },
  {
    id: 'hugo-boss-in-motion',
    name: 'Boss In Motion',
    brand: 'Hugo Boss',
    category: 'Diseñador',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `49_Mujer_Hugo_Boss_Boss_The_Scent.webp`,
    description: 'Adrenalina en una esfera de energía.',
    dna: ['Oriental', 'Fougere', 'Citrico']
  },
  {
    id: 'hugo-boss-the-scent-hombre',
    name: 'Boss The Scent Hombre',
    brand: 'Hugo Boss',
    category: 'Diseñador',
    subcategory: 'The Scent',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `50_Hombre_Armani_Code.webp`,
    description: 'Seducción lenta con fruto de Maninka.',
    dna: ['Aromatica', 'Especiada', 'Cuero']
  },
  {
    id: 'hugo-boss-the-scent-dama',
    name: 'Boss The Scent Dama',
    brand: 'Hugo Boss',
    category: 'Diseñador',
    subcategory: 'The Scent',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `20_Mujer_Hugo_Boss_The_Scent.webp`,
    description: 'Melocotón y cacao tostado irresistible.',
    dna: ['Floral', 'Frutal', 'Dulce']
  },

  // ==========================================
  // OTRAS CASAS DE DISEÑADOR
  // ==========================================
  
  // EMPORIO ARMANI
  {
    id: 'armani-code',
    name: 'Armani Code',
    brand: 'Giorgio Armani',
    category: 'Diseñador',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `51_Hombre_Armani_Stronger_With_You_Intensely.webp`,
    description: 'El código de la seducción elegante.',
    dna: ['Oriental', 'Especiada', 'Cuero']
  },
  {
    id: 'armani-stronger-intensely',
    name: 'Stronger With You Intensely',
    brand: 'Giorgio Armani',
    category: 'Diseñador',
    subcategory: 'Stronger With You',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `52_Hombre_Armani_Stronger_With_You.webp`,
    description: 'Toffee y canela para un amor intenso.',
    dna: ['Dulce', 'Oriental', 'Fougere']
  },
  {
    id: 'armani-stronger-with-you',
    name: 'Stronger With You',
    brand: 'Giorgio Armani',
    category: 'Diseñador',
    subcategory: 'Stronger With You',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `53_Hombre_Armani_Stronger_With_You_Absolutely.webp`,
    description: 'Castaña y vainilla, joven y moderno.',
    dna: ['Aromatica', 'Dulce', 'Especiada']
  },
  {
    id: 'armani-stronger-absolutely',
    name: 'Stronger With You Absolutely',
    brand: 'Giorgio Armani',
    category: 'Diseñador',
    subcategory: 'Stronger With You',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `55_Hombre_Armani_Acqua_di_Gio_Profondo.webp`,
    description: 'Acorde de ron y vainilla adictiva.',
    dna: ['Oriental', 'Dulce', 'Amaderado']
  },
  {
    id: 'armani-acqua-di-gio-clasico',
    name: 'Acqua di Gio Clásico',
    brand: 'Giorgio Armani',
    category: 'Diseñador',
    subcategory: 'Acqua di Gio',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `57_Mujer_Armani_Acqua_di_Gioia_Intense.webp`,
    description: 'La frescura mítica del mar Mediterráneo.',
    dna: ['Acuatica', 'Citrico', 'Aromatica']
  },
  {
    id: 'armani-acqua-di-gio-profondo',
    name: 'Acqua di Gio Profondo',
    brand: 'Giorgio Armani',
    category: 'Diseñador',
    subcategory: 'Acqua di Gio',
    gender: 'Hombre',
    price: 45.00,
    badge: 'NUEVO',
    imageUrl: `21_Hombre_Giorgio_Armani_Acqua_di_Gio_Profondo.webp`,
    description: 'Inmersión profunda en el azul marino.',
    dna: ['Acuatica', 'Aromatica', 'Mineral' as NoteType]
  },
  {
    id: 'armani-acqua-di-gio-elixir',
    name: 'Acqua di Gio Elixir',
    brand: 'Giorgio Armani',
    category: 'Diseñador',
    subcategory: 'Acqua di Gio',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `63_Hombre_Dior_Sauvage_Elixir.webp`,
    description: 'Frescura incandescente y maderas ricas.',
    dna: ['Acuatica', 'Amaderado', 'Especiada']
  },
  {
    id: 'armani-acqua-di-gioia-intense',
    name: 'Acqua di Gioia Intense',
    brand: 'Giorgio Armani',
    category: 'Diseñador',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `91_Hombre_Valentino_Uomo_Born_in_Roma_Intense.webp`,
    description: 'Alegría intensa de cítricos y jazmín.',
    dna: ['Floral', 'Frutal', 'Acuatica']
  },

  // DIOR
  {
    id: 'dior-miss-dior',
    name: 'Miss Dior',
    brand: 'Dior',
    category: 'Diseñador',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `58_Mujer_Dior_Miss_Dior.webp`,
    description: 'Un bouquet de flores frescas y sensuales.',
    dna: ['Floral', 'Dulce', 'Citrico']
  },
  {
    id: 'dior-jadore',
    name: 'J’adore',
    brand: 'Dior',
    category: 'Diseñador',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `59_Mujer_Dior_J’adore.webp`,
    description: 'El gran floral femenino de Dior.',
    dna: ['Floral', 'Frutal', 'Acuatica']
  },
  {
    id: 'dior-jadore-lor',
    name: 'J’adore L’Or',
    brand: 'Dior',
    category: 'Diseñador',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `60_Mujer_Dior_J’adore_L’Or.webp`,
    description: 'Esencia de oro, noble y concentrada.',
    dna: ['Floral', 'Oriental', 'Amaderado']
  },
  {
    id: 'dior-fahrenheit',
    name: 'Fahrenheit Clásico',
    brand: 'Dior',
    category: 'Diseñador',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `61_Hombre_Dior_Fahrenheit_Clásico.webp`,
    description: 'Único, revolucionario, cuero y violeta.',
    dna: ['Cuero', 'Amaderado', 'Floral']
  },
  {
    id: 'dior-sauvage',
    name: 'Sauvage Clásico',
    brand: 'Dior',
    category: 'Diseñador',
    subcategory: 'Sauvage',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `62_Hombre_Dior_Sauvage_Clásico.webp`,
    description: 'Frescura radical, cruda y noble.',
    dna: ['Citrico', 'Especiada', 'Amaderado']
  },
  {
    id: 'dior-sauvage-elixir',
    name: 'Sauvage Elixir',
    brand: 'Dior',
    category: 'Diseñador',
    subcategory: 'Sauvage',
    gender: 'Hombre',
    price: 45.00,
    badge: 'NUEVO',
    imageUrl: `22_Hombre_Dior_Sauvage_Elixir.webp`,
    description: 'Concentración extrema de especias y lavanda.',
    dna: ['Especiada', 'Amaderado', 'Aromatica']
  },

  // VERSACE
  {
    id: 'versace-blue-jeans',
    name: 'Blue Jeans',
    brand: 'Versace',
    category: 'Diseñador',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `64_Hombre_Versace_Blue_Jeans.webp`,
    description: 'Clásico juvenil, cítrico y aromático.',
    dna: ['Aromatica', 'Citrico', 'Amaderado']
  },
  {
    id: 'versace-man-eau-fraiche',
    name: 'Man Eau Fraiche',
    brand: 'Versace',
    category: 'Diseñador',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `65_Hombre_Versace_Man_Eau_Fraiche.webp`,
    description: 'Frescura mediterránea con carambola y limón.',
    dna: ['Acuatica', 'Citrico', 'Amaderado']
  },
  {
    id: 'versace-eros-azul',
    name: 'Eros Azul',
    brand: 'Versace',
    category: 'Diseñador',
    subcategory: 'Eros',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `67_Hombre_Versace_Eros_Flame.webp`,
    description: 'Menta, manzana y vainilla para el dios del amor.',
    dna: ['Aromatica', 'Vainilla', 'Verde']
  },
  {
    id: 'versace-eros-flame',
    name: 'Eros Flame',
    brand: 'Versace',
    category: 'Diseñador',
    subcategory: 'Eros',
    gender: 'Hombre',
    price: 45.00,
    badge: 'TOP VENTAS',
    imageUrl: `68_Hombre_Versace_Energy.webp`,
    description: 'Pasión ardiente con cítricos y pimienta.',
    dna: ['Especiada', 'Citrico', 'Amaderado']
  },
  {
    id: 'versace-eros-energy',
    name: 'Versace Energy',
    brand: 'Versace',
    category: 'Diseñador',
    subcategory: 'Eros',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `69_Hombre_Versace_Pour_Homme.webp`,
    description: 'Explosión de cítricos vibrantes y energía pura.',
    dna: ['Citrico', 'Aromatica', 'Amaderado']
  },
  {
    id: 'versace-pour-homme',
    name: 'Versace Pour Homme',
    brand: 'Versace',
    category: 'Diseñador',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `89_Hombre_Bvlgari_Aqva_Pour_Homme_Marine.webp`,
    description: 'El aroma del hombre mediterráneo clásico.',
    dna: ['Citrico', 'Aromatica', 'Fougere']
  },
  {
    id: 'versace-bright-crystal',
    name: 'Bright Crystal',
    brand: 'Versace',
    category: 'Diseñador',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `87_Mujer_Bvlgari_Omnia_Crystalline.webp`,
    description: 'Transparencia de cristal y flores frescas.',
    dna: ['Floral', 'Frutal', 'Acuatica']
  },

  // MONTBLANC
  {
    id: 'montblanc-legend-spirit',
    name: 'Legend Spirit',
    brand: 'Montblanc',
    category: 'Diseñador',
    subcategory: 'Legend',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `72_Hombre_Montblanc_Explorer_Extreme.webp`,
    description: 'Frescura blanca, elegante y atemporal.',
    dna: ['Citrico', 'Aromatica', 'Amaderado']
  },
  {
    id: 'montblanc-explorer-extreme',
    name: 'Explorer Extreme',
    brand: 'Montblanc',
    category: 'Diseñador',
    subcategory: 'Explorer',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `73_Hombre_Montblanc_Explorer.webp`,
    description: 'Aventura extrema hacia nuevos horizontes.',
    dna: ['Amaderado', 'Cuero', 'Aromatica']
  },
  {
    id: 'montblanc-explorer',
    name: 'Explorer',
    brand: 'Montblanc',
    category: 'Diseñador',
    subcategory: 'Explorer',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `74_Hombre_Montblanc_Explorer_Platinum.webp`,
    description: 'Bergamota y vetiver para el explorador moderno.',
    dna: ['Amaderado', 'Aromatica', 'Citrico']
  },
  {
    id: 'montblanc-explorer-platinum',
    name: 'Explorer Platinum',
    brand: 'Montblanc',
    category: 'Diseñador',
    subcategory: 'Explorer',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `75_Hombre_Montblanc_Starwalker.webp`,
    description: 'Alturas nevadas con hojas de violeta.',
    dna: ['Amaderado', 'Aromatica', 'Verde']
  },
  {
    id: 'montblanc-starwalker',
    name: 'Starwalker',
    brand: 'Montblanc',
    category: 'Diseñador',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `23_Hombre_Montblanc_Starwalker.webp`,
    description: 'Caminar entre las estrellas. Bambú y almizcle.',
    dna: ['Amaderado', 'Especiada', 'Citrico']
  },

  // CALVIN KLEIN
  {
    id: 'calvin-klein-beauty',
    name: 'CK Beauty',
    brand: 'Calvin Klein',
    category: 'Diseñador',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `76_Mujer_Calvin_Klein_Beauty.webp`,
    description: 'Feminidad sofisticada y radiante.',
    dna: ['Floral', 'Amaderado', 'Dulce']
  },
  {
    id: 'calvin-klein-escape',
    name: 'Escape',
    brand: 'Calvin Klein',
    category: 'Diseñador',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `77_Mujer_Calvin_Klein_Escape.webp`,
    description: 'Romance y aventura con melón y manzanilla.',
    dna: ['Floral', 'Acuatica', 'Frutal']
  },
  {
    id: 'calvin-klein-clasico-dama',
    name: 'CK Clásico Dama',
    brand: 'Calvin Klein',
    category: 'Diseñador',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `78_Mujer_Calvin_Klein_CK_Clásico.webp`,
    description: 'El minimalismo elegante de los 90.',
    dna: ['Floral', 'Citrico', 'Verde']
  },
  {
    id: 'calvin-klein-one',
    name: 'CK One',
    brand: 'Calvin Klein',
    category: 'Diseñador',
    gender: 'Unisex',
    price: 45.00,
    imageUrl: `79_Hombre_Calvin_Klein_CK_One.webp`,
    description: 'El ícono unisex. Cítrico y limpio.',
    dna: ['Citrico', 'Verde', 'Aromatica']
  },
  {
    id: 'calvin-klein-eternity-hombre',
    name: 'Eternity Hombre',
    brand: 'Calvin Klein',
    category: 'Diseñador',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `80_Hombre_Calvin_Klein_Eternity.webp`,
    description: 'El hombre familiar y romántico clásico.',
    dna: ['Aromatica', 'Fougere', 'Verde']
  },
  {
    id: 'calvin-klein-clasico-hombre',
    name: 'CK Clásico Hombre',
    brand: 'Calvin Klein',
    category: 'Diseñador',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `81_Hombre_Calvin_Klein_CK_Clásico.webp`,
    description: 'Intensidad masculina y seducción clásica.',
    dna: ['Oriental', 'Amaderado', 'Especiada']
  },

  // CHANEL
  {
    id: 'chanel-bleu',
    name: 'Bleu de Chanel',
    brand: 'Chanel',
    category: 'Diseñador',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `82_Hombre_Chanel_Bleu_de_Chanel.webp`,
    description: 'El elogio de la libertad masculina.',
    dna: ['Citrico', 'Amaderado', 'Aromatica']
  },
  {
    id: 'chanel-allure-sport-extreme',
    name: 'Allure Homme Sport Extrême',
    brand: 'Chanel',
    category: 'Diseñador',
    subcategory: 'Allure',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `83_Hombre_Chanel_Allure_Homme_Sport_Extrême.webp`,
    description: 'Adrenalina sin límites. Menta y tonka.',
    dna: ['Aromatica', 'Amaderado', 'Dulce']
  },
  {
    id: 'chanel-allure-sport',
    name: 'Allure Homme Sport',
    brand: 'Chanel',
    category: 'Diseñador',
    subcategory: 'Allure',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `84_Hombre_Chanel_Allure_Homme_Sport.webp`,
    description: 'Frescura cristalina y sensualidad.',
    dna: ['Acuatica', 'Citrico', 'Amaderado']
  },
  {
    id: 'chanel-coco',
    name: 'Coco Chanel',
    brand: 'Chanel',
    category: 'Diseñador',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `85_Mujer_Chanel_Coco_Chanel.webp`,
    description: 'El barroco oriental de Gabrielle Chanel.',
    dna: ['Oriental', 'Floral', 'Especiada']
  },

  // BVLGARI
  {
    id: 'bvlgari-omnia-coral',
    name: 'Omnia Coral',
    brand: 'Bvlgari',
    category: 'Diseñador',
    subcategory: 'Omnia',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `86_Mujer_Bvlgari_Omnia_Coral.webp`,
    description: 'Alegría solar de hibisco y granada.',
    dna: ['Floral', 'Frutal', 'Amaderado']
  },
  {
    id: 'bvlgari-omnia-crystalline',
    name: 'Omnia Crystalline',
    brand: 'Bvlgari',
    category: 'Diseñador',
    subcategory: 'Omnia',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `88_Mujer_Bvlgari_Omnia_Rose_Goldea.webp`,
    description: 'Pureza de cristal y flor de loto.',
    dna: ['Floral', 'Acuatica', 'Amaderado']
  },
  {
    id: 'bvlgari-rose-goldea',
    name: 'Omnia Rose Goldea',
    brand: 'Bvlgari',
    category: 'Diseñador',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `yara rose.webp`,
    description: 'Homenaje a la feminidad y la rosa.',
    dna: ['Floral', 'Dulce', 'Amaderado']
  },
  {
    id: 'bvlgari-aqva-marine',
    name: 'Aqva Pour Homme Marine',
    brand: 'Bvlgari',
    category: 'Diseñador',
    subcategory: 'Aqva',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `24_Hombre_Bvlgari_Aqva_Pour_Homme_Marine.webp`,
    description: 'Frescura vibrante de las profundidades oceánicas.',
    dna: ['Acuatica', 'Citrico', 'Aromatica']
  },

  // VALENTINO
  {
    id: 'valentino-uomo-born-in-roma',
    name: 'Valentino Uomo Born in Roma',
    brand: 'Valentino',
    category: 'Diseñador',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `90_Hombre_Valentino_Uomo_Born_in_Roma.webp`,
    description: 'Elegancia romana con un toque moderno de sal.',
    dna: ['Amaderado', 'Especiada', 'Mineral' as NoteType]
  },
  {
    id: 'valentino-uomo-born-in-roma-intense',
    name: 'Valentino Uomo Born in Roma Intense',
    brand: 'Valentino',
    category: 'Diseñador',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `93_Mujer_Valentino_Donna_Born_in_Roma.webp`,
    description: 'Seducción nocturna y profunda.',
    dna: ['Oriental', 'Vainilla', 'Amaderado']
  },
  {
    id: 'valentino-clasico-hombre',
    name: 'Valentino Clásico',
    brand: 'Valentino',
    category: 'Diseñador',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `92_Hombre_Valentino_Clásico.webp`,
    description: 'Tradición italiana y estilo impecable.',
    dna: ['Cuero', 'Dulce', 'Amaderado']
  },
  {
    id: 'valentino-donna-born-in-roma',
    name: 'Valentino Donna Born in Roma',
    brand: 'Valentino',
    category: 'Diseñador',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `25_Mujer_Valentino_Donna_Born_in_Roma.webp`,
    description: 'Alta costura callejera con jazmín y vainilla.',
    dna: ['Floral', 'Dulce', 'Amaderado']
  },

  // LACOSTE
  {
    id: 'lacoste-l1212-red',
    name: 'L.12.12 Red (Rouge)',
    brand: 'Lacoste',
    category: 'Diseñador',
    subcategory: 'L.12.12',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `94_Hombre_Lacoste_L.12.12_Red.webp`,
    description: 'Energía dinámica y especiada.',
    dna: ['Especiada', 'Amaderado', 'Frutal']
  },
  {
    id: 'lacoste-l1212-noir',
    name: 'L.12.12 Noir',
    brand: 'Lacoste',
    category: 'Diseñador',
    subcategory: 'L.12.12',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `95_Hombre_Lacoste_L.12.12_Noir.webp`,
    description: 'Intensidad nocturna y elegante.',
    dna: ['Aromatica', 'Dulce', 'Amaderado']
  },
  {
    id: 'lacoste-l1212-blanc',
    name: 'L.12.12 Blanc',
    brand: 'Lacoste',
    category: 'Diseñador',
    subcategory: 'L.12.12',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `96_Hombre_Lacoste_L.12.12_Blanc.webp`,
    description: 'Pureza blanca y frescura limpia.',
    dna: ['Amaderado', 'Floral', 'Citrico']
  },
  {
    id: 'lacoste-essential',
    name: 'Essential',
    brand: 'Lacoste',
    category: 'Diseñador',
    gender: 'Hombre',
    price: 45.00,
    imageUrl: `97_Hombre_Lacoste_Essential.webp`,
    description: 'Libertad en movimiento. Hoja de tomate.',
    dna: ['Aromatica', 'Verde', 'Citrico']
  },
  {
    id: 'lacoste-l1212-sparkling',
    name: 'L.12.12 Sparkling',
    brand: 'Lacoste',
    category: 'Diseñador',
    gender: 'Dama',
    price: 45.00,
    imageUrl: `98_Mujer_Lacoste_L.12.12_Sparkling.webp`,
    description: 'Dulce y juguetona como un macaron.',
    dna: ['Dulce', 'Frutal', 'Floral']
  }
];