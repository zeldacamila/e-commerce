import React from 'react'
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
            {product.productImg2 !== null ? <SwiperSlide>
              <img src={product.productImg2} alt='' />
            </SwiperSlide> : <div></div>}
            
            {product.productImg3 !== null ? <SwiperSlide>
              <img src={product.productImg3} alt='' />
            </SwiperSlide> : <div></div>}
            {product.productImg4 !== null ? <SwiperSlide>
              <img src={product.productImg4} alt='' />
            </SwiperSlide> : <div></div>}
          </Swiper>
        </div>
        <article className='details'>
          <h2 className='details_company'>CASA MARACACHAFA, Smoke & Grow</h2>
          <h2 className='details_title'>{product.productTitle}</h2>
          <p className='details_description'>{product.productDetails}</p>
          <div className="details_price">
            <p className="details_now">COP ${product.productPrice} {product.productDiscount !== null ? <span className='details_discount'>%{product.productDiscount}</span> : <div></div>}{/* <span className='details_discount'>%{product.productDiscount}</span> */}</p>
            {product.productPriceBefore !== null ? <p className="details_before">COP ${product.productPriceBefore} </p> : <div></div>}
            {/* <p className="details_before">COP ${product.productPriceBefore} </p> */}
          </div>
        </article>
      </section>
    </div>
  )
}

export default ProductPage