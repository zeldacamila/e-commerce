import React from 'react'
import casa1 from '../../images/casa1.png'
import casa2 from '../../images/casa2.jpeg'
import casa3 from '../../images/casa3.jpeg'
import casa4 from '../../images/casa4.jpeg'
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
            <p>A una cuadra del metro 🚇 (Estación Bello)</p>
            <p>Cra 47 # 45 - 91, Barrio Manchester</p>
            {/* <p>Abrimos todos los días de 12 a 7 PM</p> */}
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
                <img src={casa1} alt='' />
              </SwiperSlide>
              <SwiperSlide>
                <img src={casa2} alt='' />
              </SwiperSlide>
              <SwiperSlide>
                <img src={casa3} alt='' />
              </SwiperSlide>
              <SwiperSlide>
                <img src={casa4} alt='' />
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