import FuegoIPClipper from './images/clipper.png'
import img2 from './images/image-product-2.jpg'
import img3 from './images/image-product-3.jpg'
import img4 from './images/image-product-4.jpg'
import MiniSoplete from './images/products-images/soplete_pequeño.jpg'
import MiniSopleteNegro from './images/products-images/soplete_pequeño_negro2.jpg'
import MiniSopleteNaranja from './images/products-images/soplete_pequeño_naranja.jpg'
import MiniSopleteVerde from './images/products-images/soplete_pequeño_verde.jpg'
import BongRickExtraccion from './images/products-images/bong_rick_extraccion.jpg'
import BongRickExtraccion2 from './images/products-images/bong_rick_extraccion2.jpg'
import BongDengke from './images/products-images/bong_dengke.jpg'
import BongDengke2 from './images/products-images/bong_dengke2.jpg'
import BongDengkeCalaveras from './images/products-images/bong_dengke_calaveras.jpg'
import BongDengkeCalaveras2 from './images/products-images/bong_dengke_calaveras2.jpg'
import BongEyceVerde from './images/products-images/miniatura_bong_eyce.jpg'
import BongEyceVerde2 from './images/products-images/bong_eyce.jpg'
import BongEyceVerde3 from './images/products-images/bong_eyce2.jpg'
import BongEyceVerde4 from './images/products-images/bong_eyce_dimensiones.jpg'
import BongDengkeCalavera from './images/products-images/bong_dengke_calavera.jpg'
import BongDengkeCalavera2 from './images/products-images/bong_dengke_calavera2.jpg'
import BongBulldogGin from './images/products-images/bong_bulldogGin.jpg'
import BongBulldogGin2 from './images/products-images/bong_bulldogGin2.jpg'
import PipaFelix from './images/products-images/miniatura_pipa_felixelgato.jpg'
import PipasSilicona from './images/products-images/pipas_silicona_vidrio.jpg'
import PipaCono from './images/products-images/miniatura_pipa_conohelado.jpg'
import PipaColores from './images/products-images/miniatura_pipa_colores.jpg'
import PowerHitterMorado from './images/products-images/miniatura_powerhitter_morado.jpg'
import PowerHitterVerde from './images/products-images/miniatura_powerhitter_verde.jpg'
import PowerHitter2 from './images/products-images/powerhitter_dimensiones.jpg'
import PowerHitter3 from './images/products-images/powerhitter_desarmado.jpg'
import PowerHitter4 from './images/products-images/powerhitter_instrucciones.jpg'

const data2 = {
  allProducts: [
    {
      productId: 1,
      productName:'Candela1',
      productQuantity: 1,
      productImage:FuegoIPClipper,
      productImg2: img2,
      productImg3: img3,
      productImg4: img4,
      productTitle:'Clipper - Collection Flight1',
      productPath:`/collections/FireProducts/Candela1`,
      productPrice: 4500,
      productPriceBefore: '6.000',
      productDiscount: '25',
      productDetails:'Los encendedores Clipper son los mas conocidos gracias a sus creativos diseños y su excelente calidad, son duraderos y lo mejor es que con estos encendedores puedes recargar su gas cuando este se acabe, prolongando así la vida útil de los encendedores. También cuentan con válvulas de seguridad patentada para evitar explosiones.'
    },
    {
      productId: 2,
      productName:'Candela2',
      productQuantity: 1,
      productImage:FuegoIPClipper,
      productImg2: img2,
      productImg3: img3,
      productImg4: img4,
      productTitle:'Clipper - Collection Flight2',
      productPath:'/collections/FireProducts/Candela2',
      productPrice: 4500,
      productPriceBefore: '6.000',
      productDiscount: '25',
      productDetails:'Los encendedores Clipper son los mas conocidos gracias a sus creativos diseños y su excelente calidad, son duraderos y lo mejor es que con estos encendedores puedes recargar su gas cuando este se acabe, prolongando así la vida útil de los encendedores. También cuentan con válvulas de seguridad patentada para evitar explosiones.'
    },
    {
      productId: 3,
      productName:'MiniSopleteVerde',
      productQuantity: 1,
      productImage:MiniSopleteVerde,
      productImg2: MiniSoplete,
      productImg3: null,
      productImg4: null,
      productTitle:'Mini soplete verde Floppi',
      productPath:'/collections/FireProducts/MiniSopleteVerde',
      productPrice: 12000,
      productPriceBefore: null,
      productDiscount: null,
      productDetails:'Mini soplete encendedor marca Floppi. Potencia de la llama regulable. Sistema de seguridad antiencendido. Tamaño: 8cm x 5cm'
    },
    {
      productId: 4,
      productName:'MiniSopleteNaranja',
      productQuantity: 1,
      productImage:MiniSopleteNaranja,
      productImg2: MiniSoplete,
      productImg3: null,
      productImg4: null,
      productTitle:'Mini soplete naranja Floppi',
      productPath:'/collections/AptoProducts/MiniSopleteNaranja',
      productPrice: 12000,
      productPriceBefore: null,
      productDiscount: null,
      productDetails:'Mini soplete encendedor marca Floppi. Potencia de la llama regulable. Sistema de seguridad antiencendido. Tamaño: 8cm x 5cm'
    },
    {
      productId: 5,
      productName:'MiniSopleteNegro',
      productQuantity: 1,
      productImage:MiniSopleteNegro,
      productImg2: MiniSoplete,
      productImg3: null,
      productImg4: null,
      productTitle:'Mini soplete negro Floppi',
      productPath:'/collections/FireProducts/MiniSopleteNegro',
      productPrice: 12000,
      productPriceBefore: null,
      productDiscount: null,
      productDetails:'Mini soplete encendedor marca Floppi. Potencia de la llama regulable. Sistema de seguridad antiencendido. Tamaño: 8cm x 5cm'
    },
    {
      productId: 6,
      productName: 'PowerHitterMorado',
      productQuantity: 1,
      productImage: PowerHitterMorado,
      productImg2: PowerHitter2,
      productImg3: PowerHitter3,
      productImg4: PowerHitter4,
      productTitle:'Colector de humo ThePowerHitterCo morado',
      productPath:'/collections/AptoProducts/PowerHitterMorado',
      productPrice: 40000,
      productPriceBefore: null,
      productDiscount: null,
      productDetails:'Colector de humo clásico morado, marca ThePowerHitterCo'
    },
    {
      productId: 7,
      productName: 'PowerHitterVerde',
      productQuantity: 1,
      productImage: PowerHitterVerde,
      productImg2: PowerHitter2,
      productImg3: PowerHitter3,
      productImg4: PowerHitter4,
      productTitle:'Colector de humo ThePowerHitterCo verde',
      productPath:'/collections/AptoProducts/PowerHitterVerde',
      productPrice: 40000,
      productPriceBefore: null,
      productDiscount: null,
      productDetails:'Colector de humo clásico verde, marca ThePowerHitterCo'
    },
    {
      productId: 8,
      productName:'BongRickExtraccion',
      productQuantity: 1,
      productImage:BongRickExtraccion2,
      productImg2: BongRickExtraccion,
      productImg3: null,
      productImg4: null,
      productTitle:'Bong para extracción Rick y Snuffles',
      productPath:'/collections/GlassProducts/BongRickExtraccion',
      productPrice: 200000,
      productPriceBefore: null,
      productDiscount: null,
      productDetails:'Bong en porcelana con uña para extracción, colección Rick and Morty'
    },
    {
      productId: 9,
      productName:'BongDengke',
      productQuantity: 1,
      productImage:BongDengke,
      productImg2: BongDengke2,
      productImg3: null,
      productImg4: null,
      productTitle:'Bong DENGKE para flor y extracción',
      productPath:'/collections/GlassProducts/BongDengke',
      productPrice: 110000,
      productPriceBefore: null,
      productDiscount: null,
      productDetails:'Bong de vidrio marca Dengke. Este producto viene sin boquilla metálica y sin banger'
    },
    {
      productId: 10,
      productName:'BongDengkeCalaveras',
      productQuantity: 1,
      productImage:BongDengkeCalaveras,
      productImg2: BongDengkeCalaveras2,
      productImg3: null,
      productImg4: null,
      productTitle:'Bong DENGKE para flor con grabado de calaveras',
      productPath:'/collections/GlassProducts/BongDengkeCalaveras',
      productPrice: 115000,
      productPriceBefore: null,
      productDiscount: null,
      productDetails:'Bong de vidrio marca Dengke para flor, con grabado de calaveras'
    },
    {
      productId: 11,
      productName:'BongEyceVerde',
      productQuantity: 1,
      productImage:BongEyceVerde,
      productImg2: BongEyceVerde2,
      productImg3: BongEyceVerde3,
      productImg4: BongEyceVerde4,
      productTitle:'Bong Eyce tipo beaker siliconado verde',
      productPath:'/collections/GlassProducts/BongEyce',
      productPrice: 250000,
      productPriceBefore: null,
      productDiscount: null,
      productDetails:'Bong de vidrio marca Eyce tipo beaker siliconado.'
    },
    {
      productId: 12,
      productName:'BongDengkeCalavera',
      productQuantity: 1,
      productImage:BongDengkeCalavera,
      productImg2: BongDengkeCalavera2,
      productImg3: null,
      productImg4: null,
      productTitle:'Bong D&K para flor, calavera azul',
      productPath:'/collections/GlassProducts/BongDengkeCalavera',
      productPrice: 115000,
      productPriceBefore: null,
      productDiscount: null,
      productDetails:'Bong de vidrio marca Dengke, en forma de calavera azul'
    },
    {
      productId: 13,
      productName: 'BongBulldogGin',
      productQuantity: 1,
      productImage: BongBulldogGin,
      productImg2: BongBulldogGin2,
      productImg3: null,
      productImg4: null,
      productTitle:'Bong Bulldog Gin para flor',
      productPath:'/collections/GlassProducts/BongBulldogGin',
      productPrice: 110000,
      productPriceBefore: null,
      productDiscount: null,
      productDetails:'Bong de vidrio en forma de botella de ginebra Bulldog.'
    },
    {
      productId: 14,
      productName: 'PipaFelix',
      productQuantity: 1,
      productImage:PipaFelix,
      productImg2: PipasSilicona,
      productImg3: null,
      productImg4: null,
      productTitle:'Pipa Félix El Gato',
      productPath:'/collections/GlassProducts/PipaFelix',
      productPrice: 28000,
      productPriceBefore: null,
      productDiscount: null,
      productDetails:'Pipa de silicona con bowl en vidrio, diseño de Félix El Gato'
    },
    {
      productId: 15,
      productName: 'PipaCono',
      productQuantity: 1,
      productImage:PipaCono,
      productImg2: PipasSilicona,
      productImg3: null,
      productImg4: null,
      productTitle:'Pipa Cono de helado',
      productPath:'/collections/GlassProducts/PipaCono',
      productPrice: 28000,
      productPriceBefore: null,
      productDiscount: null,
      productDetails:'Pipa de silicona con bowl en vidrio, diseño de cono de helado'
    },
    {
      productId: 16,
      productName: 'PipaColores',
      productQuantity: 1,
      productImage: PipaColores,
      productImg2: PipasSilicona,
      productImg3: null,
      productImg4: null,
      productTitle:'Pipa Cono de helado',
      productPath:'/collections/GlassProducts/PipaColores',
      productPrice: 25000,
      productPriceBefore: null,
      productDiscount: null,
      productDetails:'Pipa en silicona con colores variados, pequeña con bowl o tazón en vidrio, fácil de limpiar y duradera.'
    },
  ],

};
export default data2;