import React from 'react'
import iconPrevious from '../../images/icon-previous.svg'
import iconNext from '../../images/icon-next.svg'
import thumbnail1 from '../../images/image-product-1-thumbnail.jpg'
import thumbnail2 from '../../images/image-product-2-thumbnail.jpg'
import thumbnail3 from '../../images/image-product-3-thumbnail.jpg'
import thumbnail4 from '../../images/image-product-4-thumbnail.jpg'
import iconClose from '../../images/icon-close.svg'
import Slider from '../../components/Slider/Slider'

const ProductPage = () => {
  
  const mockImagenes = [
		'https://picsum.photos/id/1020/400',
		'https://picsum.photos/id/1025/400',
		'https://picsum.photos/id/1010/400',
	];

  return (
    <div className='ProductPage'>
      <section className='content'>
        <Slider imagenes={mockImagenes} />
        <article className='details'>
          <h2 className='details_company'>CASA MARACACHAFA, Smoke & Grow</h2>
          <h2 className='details_title'>Clipper - Colección Flight</h2>
          <p className='details_description'>Los encendedores Clipper son los mas conocidos gracias a sus creativos diseños y su excelente calidad, son duraderos y lo mejor es que con estos encendedores puedes recargar su gas cuando este se acabe, prolongando así la vida útil de los encendedores. También cuentan con válvulas de seguridad patentada para evitar explosiones.</p>
          <div className="details_price">
            <p className="details_now">COP $4.500 <span className='details_discount'>%25</span></p>
            <p className="details_before">COP $6.000 </p>
          </div>
        </article>
      </section>
      {/* Inicio Gallery Modal */}
      <div className="modal-gallery_background">
        <article className='modal-gallery'>
          <div className="modal-gallery_close-container">
            <img className='modal-gallery_close' src={iconClose} alt='icon close' />
          </div>
          <div className='modal-gallery_image-container'>
            <img className='modal-gallery_previous'src={iconPrevious} alt='previous' />
            <img className='modal-gallery_next'src={iconNext} alt='next' />
          </div>
          <div className='modal-gallery_thumbnails'>
            <img id='m1' className='modal-gallery_thumbnail' src={thumbnail1} alt='thumbnail' />
            <img id='m2' className='modal-gallery_thumbnail' src={thumbnail2} alt='thumbnail' />
            <img id='m3' className='modal-gallery_thumbnail' src={thumbnail3} alt='thumbnail' />
            <img id='m4' className='modal-gallery_thumbnail' src={thumbnail4} alt='thumbnail' />
          </div>
        </article>
      </div>
      {/* Fin Gallery Modal */}
    </div>
  )
}

export default ProductPage