import React from 'react'
import ProductCard from '../../components/ProductCard/ProductCard'

const Section = () => {
  return (
    <>
      <div className='section-fire'>
        <h1>FUEGO</h1>
        <div className='section-fire_products'>
          <ProductCard
            productImage='pipe.png'
            buttonTitle='Candela1'
            buttonPath='/collections/Fire/products/Candela1' />
          <ProductCard
            productImage='pipe.png'
            buttonTitle='Candela2'
            buttonPath='/collections/Fire/products/Candela2' />
          <ProductCard
            productImage='pipe.png'
            buttonTitle='Candela3'
            buttonPath='/collections/Fire/products/Candela3' />
        </div>
      </div>
      
    </>
  )
}

export default Section