import React from 'react'
import ProductCard from '../../components/ProductCard/ProductCard'
import FuegoIPClipper from '../../images/clipper.png'

const SectionKits = () => {
  return (
    <>
      <div className='section-container'>
        <h1>Kits</h1>
        <div className='section_products'>
          <ProductCard
            productImage={FuegoIPClipper}
            productTitle='Clipper - Collection Flight'
            productPath='/collections/Fire/products/Candela1'
            productPrice='4.500' />
          <ProductCard
            productImage={FuegoIPClipper}
            productTitle='Clipper - Collection Flight'
            productPath='/collections/Fire/products/Candela2'
            productPrice='4.500' />
          <ProductCard
            productImage={FuegoIPClipper}
            productTitle='Clipper - Collection Flight'
            productPath='/collections/Fire/products/Candela3'
            productPrice='4.500' />
        </div>
      </div>
      
    </>
  )
}

export default SectionKits