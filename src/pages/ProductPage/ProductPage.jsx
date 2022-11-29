import React from 'react'
import iconPrevious from '../../images/icon-previous.svg'
import iconNext from '../../images/icon-next.svg'
import thumbnail1 from '../../images/image-product-1-thumbnail.jpg'
import thumbnail2 from '../../images/image-product-2-thumbnail.jpg'
import thumbnail3 from '../../images/image-product-3-thumbnail.jpg'
import thumbnail4 from '../../images/image-product-4-thumbnail.jpg'
import iconClose from '../../images/icon-close.svg'
import img1 from '../../images/image-product-1.jpg'
import img2 from '../../images/image-product-2.jpg'
import img3 from '../../images/image-product-3.jpg'
import img4 from '../../images/image-product-4.jpg'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectFlip, Pagination, Navigation } from "swiper";

const ProductPage = () => {

  return (
    <div className='ProductPage'>
      <section className='content'>
        <div className='Slider-container'>
          <Swiper
            effect={"flip"}
            grabCursor={true}
            pagination={true}
            navigation={true}
            modules={[EffectFlip, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={img1} alt='' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} alt='' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img3} alt='' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img4} alt='' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img3} alt='' />
            </SwiperSlide>
          </Swiper>
        </div>
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