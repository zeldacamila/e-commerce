import React from 'react'
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
import ButtonBack from '../../components/ButtonBack/ButtonBack'
import data2 from '../../data2'
import { useParams } from 'react-router-dom'

const ProductPage = () => {
  const {allProducts} = data2

  let productPath = useParams();
  let productName = productPath.Product
/*   console.log('productPath', productPath)
  console.log('productPath.Collection', productPath.Collection)
  console.log('productPath.Product', productPath.Product) */

  const product = allProducts.find((x) => x.productName === productName);
  console.log('product', product)

  return (
    <div className='ProductPage'>
      <section className='content'>
        <ButtonBack />
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
              <img src={product.productImage} alt='' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={product.productImg2} alt='' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={product.productImg3} alt='' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={product.productImg4} alt='' />
            </SwiperSlide>
            <SwiperSlide>
              <img src={product.productImage} alt='' />
            </SwiperSlide>
          </Swiper>
        </div>
        <article className='details'>
          <h2 className='details_company'>CASA MARACACHAFA, Smoke & Grow</h2>
          <h2 className='details_title'>{product.productTitle}</h2>
          <p className='details_description'>{product.productDetails}</p>
          <div className="details_price">
            <p className="details_now">COP ${product.productPrice} <span className='details_discount'>%{product.productDiscount}</span></p>
            <p className="details_before">COP ${product.productPriceBefore} </p>
          </div>
        </article>
      </section>
    </div>
  )
}

export default ProductPage