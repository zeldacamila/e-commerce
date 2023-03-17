import FuegoIPClipper from './images/clipper.png'
import MiniSopleteNegro from './images/products-images/soplete_pequeño_negro2.jpg'
import MiniSopleteNaranja from './images/products-images/soplete_pequeño_naranja.jpg'
import MiniSopleteVerde from './images/products-images/soplete_pequeño_verde.jpg'
import BongRickExtraccion from './images/products-images/bong_rick_extraccion2.jpg'
import BongDengke from './images/products-images/miniatura_bong_dengke.jpg'
import BongDengkeCalaveras from './images/products-images/miniatura_bong_dengke_calaveras.jpg'
import BongEyceVerde from './images/products-images/miniatura_bong_eyce.jpg'
import BongDengkeCalavera from './images/products-images/miniatura_bong_dengke_calavera.jpg'
import BongBulldogGin from './images/products-images/bong_bulldogGin.jpg'
import PipaFelix from './images/products-images/miniatura_pipa_felixelgato.jpg'
import PipaCono from './images/products-images/miniatura_pipa_conohelado.jpg'
import PipaColores from './images/products-images/miniatura_pipa_colores.jpg'
import PowerHitterMorado from './images/products-images/miniatura_powerhitter_morado.jpg'
import PowerHitterVerde from './images/products-images/miniatura_powerhitter_verde.jpg'
import BateriaAirisII from './images/products-images/miniatura_bateria_airis_mystica2.jpg'
import BateriaLeafBuddi from './images/products-images/miniatura_bateria_leafbuddiTH420.jpg'
import BateriaYocanUNI from './images/products-images/miniatura_bateria_yocan_UNI.jpg'
import VapoAirisDabble from './images/products-images/miniatura_vaporizador_airis_dabble.jpg'
import RascadorElectricoSD from './images/products-images/miniatura_rascador_electrico_snoopDog.jpg'

import HighHemp6PaperCones from './images/products-images/papercones6_highhemp.jpg'


const data = {
  FireProducts: [
    {
      productId: 1,
      productImage:FuegoIPClipper,
      productTitle:'Clipper - Collection Flight',
      productPath:`/collections/FireProducts/Candela1`,
      productPrice:4500,
      productQuantity: 1,
      productDetails:'Los encendedores Clipper son los mas conocidos gracias a sus creativos diseños y su excelente calidad, son duraderos y lo mejor es que con estos encendedores puedes recargar su gas cuando este se acabe, prolongando así la vida útil de los encendedores. También cuentan con válvulas de seguridad patentada para evitar explosiones.'
    },
    {
      productId: 2,
      productImage:FuegoIPClipper,
      productTitle:'Clipper - Collection Flight',
      productPath:'/collections/FireProducts/Candela2',
      productPrice:4500,
      productQuantity: 1,
      productDetails:'Los encendedores Clipper son los mas conocidos gracias a sus creativos diseños y su excelente calidad, son duraderos y lo mejor es que con estos encendedores puedes recargar su gas cuando este se acabe, prolongando así la vida útil de los encendedores. También cuentan con válvulas de seguridad patentada para evitar explosiones.'
    },
    {
      productId: 3,
      productImage:MiniSopleteVerde,
      productTitle:'Mini soplete verde Floppi',
      productPath:'/collections/FireProducts/MiniSopleteVerde',
      productPrice:12000,
      productQuantity: 1,
      productDetails:'Mini soplete encendedor marca Floppi. Potencia de la llama regulable. Sistema de seguridad antiencendido. Tamaño: 8cm x 5cm'
    },
    {
      productId: 4,
      productImage:MiniSopleteNaranja,
      productTitle:'Mini soplete naranja Floppi',
      productPath:'/collections/FireProducts/MiniSopleteNaranja',
      productPrice:12000,
      productQuantity: 1,
      productDetails:'Mini soplete encendedor marca Floppi. Potencia de la llama regulable. Sistema de seguridad antiencendido. Tamaño: 8cm x 5cm'
    },
    {
      productId: 5,
      productImage:MiniSopleteNegro,
      productTitle:'Mini soplete negro Floppi',
      productPath:'/collections/FireProducts/MiniSopleteNegro',
      productPrice:12000,
      productQuantity: 1,
      productDetails:'Mini soplete encendedor marca Floppi. Potencia de la llama regulable. Sistema de seguridad antiencendido. Tamaño: 8cm x 5cm'
    }
  ],
  AptoProducts: [
    {
      productId: 6,
      productImage: PowerHitterMorado,
      productTitle:'Colector de humo morado',
      productPath:'/collections/AptoProducts/PowerHitterMorado',
      productPrice: 40000,
      productDetails:'Colector de humo clásico morado, marca ThePowerHitterCo'
    },
    {
      productId: 7,
      productImage: PowerHitterVerde,
      productTitle:'Colector de humo verde',
      productPath:'/collections/AptoProducts/PowerHitterVerde',
      productPrice: 40000,
      productDetails:'Colector de humo clásico verde, marca ThePowerHitterCo'
    }
  ],
  DabsProducts: [
  ],
  ElectronicsProducts: [
    {
      productId: 17,
      productImage: BateriaAirisII,
      productTitle:'Batería para vapeo AIRIS Mystica II',
      productPath:'/collections/ElectronicsProducts/BateriaAirisII',
      productPrice: 100000,
      productDetails:'Mystica II de Airistech es un vaporizador para concentrados. Cuenta con acople magnético que se adapta a cualquier cartucho para mayor comodidad, además tiene una ventana para que puedas ver la cantidad de concentrado disponible. Tiene 3 voltajes diferentes para ajustar de acuerdo al concentrado que quieras vaporizar, estos 3 voltajes se encuentran diferenciados por colores: Verde 3.4V, Azul 3.7V y Rojo 4.0V para mejorar tu experiencia de vaporización.'
    },
    {
      productId: 18,
      productImage: BateriaLeafBuddi,
      productTitle:'Batería para vapeo LEAF BUDDI TH-420',
      productPath:'/collections/ElectronicsProducts/BateriaLeafBuddiTH420',
      productPrice: 100000,
      productDetails:'El TH-420 de Leaf Buddi tiene un diseño único y especial y cuenta con voltaje de trabajo ajustable: 3.4V-3.7V-4.0V. La luz de diferentes colores indica la carga actual de la batería. Este dispositivo tiene una hermosa superficie lisa que descansa cómodamente en su mano a la vez que es muy pequeño y de tamaño conveniente. El cartucho se inserta de forma inteligente y se bloquea en la caja mediante un conector magnético.'
    },
    {
      productId: 19,
      productImage: BateriaYocanUNI,
      productTitle:'Batería para vapeo Yocan UNI',
      productPath:'/collections/ElectronicsProducts/BateriaYocanUNI',
      productPrice: 100000,
      productDetails:'Echa un vistazo al YoCan UNI Universal Portable Mod, que implementa un puerto de cartucho ajustable, 3 niveles de salida de voltaje y cuenta con una función de precalentamiento innovadora para lograr caladas suaves.'
    },
    {
      productId: 20,
      productImage: VapoAirisDabble,
      productTitle:'Vaporizador de dab Airis Dabble',
      productPath:'/collections/ElectronicsProducts/VapoAirisDabble',
      productPrice: 100000,
      productDetails:'Vaporizador de dab de doble uso Airis Dabble portátil. Compatible con bong de vidrio, dispone de un  modo de calentamiento automático de manos libres. Airis Dabble es para usar con cera, y dispone de una batería de 900mAh con gran capacidad y voltajes variables, así mismo, tiene función de precalentamiento y se carga mediante Micro USB.'
    },
    
    {
      productId: 21,
      productImage: RascadorElectricoSD,
      productTitle:'Rascador eléctrico Snoop Dog',
      productPath:'/collections/ElectronicsProducts/RascadorElectricoSD',
      productPrice: 90000,
      productDetails:'Rascador eléctrico Snoop Dog'
    },
  ],
  GlassProducts: [
    {
      productId: 8,
      productImage:BongRickExtraccion,
      productTitle:'Bong para extracción Rick y Snuffles',
      productPath:'/collections/GlassProducts/BongRickExtraccion',
      productPrice: 200000,
      productDetails:'Bong en porcelana con uña para extracción, colección Rick and Morty'
    },
    {
      productId: 9,
      productImage:BongDengke,
      productTitle:'Bong D&K para flor y extracción',
      productPath:'/collections/GlassProducts/BongDengke',
      productPrice:110000,
      productDetails:'Bong de vidrio marca Dengke. Este producto viene sin boquilla metálica y sin banger'
    },
    {
      productId: 10,
      productImage: BongDengkeCalaveras,
      productTitle: 'Bong D&K para flor, grabado calaveras',
      productPath: '/collections/GlassProducts/BongDengkeCalaveras',
      productPrice: 115000,
      productDetails: 'Bong de vidrio marca Dengke para flor, con grabado de calaveras'
    },
    {
      productId: 11,
      productImage: BongEyceVerde,
      productTitle: 'Bong Eyce siliconado verde',
      productPath: '/collections/GlassProducts/BongEyceVerde',
      productPrice: 250000,
      productDetails: 'Bong de vidrio marca Eyce tipo beaker siliconado'
    },
    { productId: 12,
      productImage: BongDengkeCalavera,
      productTitle: 'Bong D&K para flor, calavera azul',
      productPath: '/collections/GlassProducts/BongDengkeCalavera',
      productPrice: 115000,
      productDetails: 'Bong de vidrio marca Dengke, en forma de calavera azul'
    },
    { productId: 13,
      productImage: BongBulldogGin,
      productTitle: 'Bong Bulldog Gin para flor',
      productPath: '/collections/GlassProducts/BongBulldogGin',
      productPrice: 110000,
      productDetails: 'Bong de vidrio en forma de botella de ginebra Bulldog'
    },
    { productId: 14,
      productImage: PipaFelix,
      productTitle: 'Pipa de silicona y vidrio Félix El Gato',
      productPath: '/collections/GlassProducts/PipaFelix',
      productPrice: 28000,
      productDetails: 'Pipa en silicona con diseño de Félix El Gato, pequeña con bowl o tazón en vidrio, fácil de limpiar y duradera.'
    },
    { productId: 15,
      productImage: PipaCono,
      productTitle: 'Pipa de silicona y vidrio Icecream',
      productPath: '/collections/GlassProducts/PipaCono',
      productPrice: 28000,
      productDetails: 'Pipa en silicona con diseño de cono de helado, pequeña con bowl o tazón en vidrio, fácil de limpiar y duradera.'
    },
    { productId: 16,
      productImage: PipaColores,
      productTitle: 'Pipa de silicona y vidrio Colores',
      productPath: '/collections/GlassProducts/PipaColores',
      productPrice: 25000,
      productDetails: 'Pipa en silicona con colores variados, pequeña con bowl o tazón en vidrio, fácil de limpiar y duradera.'
    }
  ],
  GrowProducts: [
  ],
  KitsProducts: [
  ],
  MedicinalProducts: [
  ],
  PaperProducts: [/* 
    { productId: 19,
      productImage: HighHemp6PaperCones,
      productTitle: 'Conos de papel x6 High Hemp',
      productPath: '/collections/PaperProducts/HighHemp6PaperCones',
      productPrice: 15000,
      productDetails: 'Conos de papel x6 marca High Hemp.'
    }, */
  ],

};
export default data;