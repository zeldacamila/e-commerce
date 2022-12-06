import React from 'react'
import brand1 from '../../images/brand1.png'
import brand2 from '../../images/brand2.png'
import brand3 from '../../images/brand3.png'
import brand4 from '../../images/brand4.png'
import brand5 from '../../images/brand5.png'
import brand6 from '../../images/brand6.png'
import brand7 from '../../images/brand7.png'
import brand8 from '../../images/brand8.jpg'
import brand9 from '../../images/brand9.png'
import brand10 from '../../images/brand10.png'
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay, EffectCards, EffectCreative, EffectCube } from "swiper"
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Brands = () => {
  return (
      <div className='Brands-container'>
        <h2 className='animate__animated animate__fadeInLeft'>🍁Marcas aliadas</h2>
        <div className='BrandsSlider-container-mobile'>
          <Swiper
            effect={"cube"}
            grabCursor={true}
            cubeEffect={{
              shadow: false,
              slideShadows: false,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
/*             style="height:200px" */
            autoplay={true}
            modules={[EffectCube, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide ><img className='Brand-img' src={brand1} alt='' /></SwiperSlide>
            <SwiperSlide ><img className='Brand-img' src={brand2} alt='' /></SwiperSlide>
            <SwiperSlide ><img className='Brand-img' src={brand3} alt='' /></SwiperSlide>
            <SwiperSlide ><img className='Brand-img' src={brand4} alt='' /></SwiperSlide>
            <SwiperSlide ><img className='Brand-img' src={brand5} alt='' /></SwiperSlide>
            <SwiperSlide ><img className='Brand-img' src={brand6} alt='' /></SwiperSlide>
            <SwiperSlide ><img className='Brand-img' src={brand7} alt='' /></SwiperSlide>
            <SwiperSlide ><img className='Brand-img' src={brand8} alt='' /></SwiperSlide>
            <SwiperSlide ><img className='Brand-img' src={brand9} alt='' /></SwiperSlide>
            <SwiperSlide ><img className='Brand-img' src={brand10} alt='' /></SwiperSlide>
          </Swiper>
        </div>
      </div>
  )
}

export default Brands