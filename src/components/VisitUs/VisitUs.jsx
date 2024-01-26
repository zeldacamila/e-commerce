import React from 'react'
import casa2 from '../../images/casa2.jpeg'
import casa3 from '../../images/casa3.jpeg'
import casa5 from '../../images/casa5.jpeg'
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Pagination, Autoplay } from "swiper"
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const VisitUs = () => {
  return (
      <div className='VisitUs-container'>
        <h1 className='VisitUs-title'>🏠Visita la tienda</h1>
        <div className="VisitUs-notitle-container">
          <div className="VisitUsDetails-container">
            <p>¡Sin perderse pues!</p>
            <p>A una cuadra del metro 🚇</p>
            <p>(Estación Bello)</p>
          </div>
          <div className='VisitUsSlider-container'>
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              autoplay={true}
              pagination={true}
              modules={[EffectCoverflow, Pagination, Autoplay]}
              className="mySwiper"
            >
              
              <SwiperSlide>
                <img src={casa2} alt='' />
              </SwiperSlide>
              <SwiperSlide>
                <img src={casa3} alt='' />
              </SwiperSlide>
              <SwiperSlide>
                <img src={casa5} alt='' />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
  )
}

export default VisitUs