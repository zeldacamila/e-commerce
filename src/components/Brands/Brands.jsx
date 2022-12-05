import React from 'react'
import brand1 from '../../images/brand1.png'
import brand2 from '../../images/brand2.png'
import brand3 from '../../images/brand3.png'
import brand4 from '../../images/brand4.png'
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay, EffectCards } from "swiper"
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Brands = () => {
  return (
      <div className='Brands-container'>
       {/*  <h1 className='Brands-title'>🏠Marcas aliadas</h1> */}
        <div className="Brands-notitle-container">
          <div className='BrandsSlider-container'>
            <Swiper
              effect={"cards"}
              grabCursor={true}
              autoplay={true}
              modules={[EffectCards, Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide><img className='Brand-img' src={brand1} alt='' /></SwiperSlide>
              <SwiperSlide><img className='Brand-img' src={brand2} alt='' /></SwiperSlide>
              <SwiperSlide><img className='Brand-img' src={brand3} alt='' /></SwiperSlide>
              <SwiperSlide><img className='Brand-img' src={brand4} alt='' /></SwiperSlide>
              <SwiperSlide><img className='Brand-img' src={brand1} alt='' /></SwiperSlide>
              <SwiperSlide><img className='Brand-img' src={brand2} alt='' /></SwiperSlide>
              <SwiperSlide><img className='Brand-img' src={brand3} alt='' /></SwiperSlide>
              <SwiperSlide><img className='Brand-img' src={brand4} alt='' /></SwiperSlide>
              <SwiperSlide><img className='Brand-img' src={brand1} alt='' /></SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
  )
}

export default Brands