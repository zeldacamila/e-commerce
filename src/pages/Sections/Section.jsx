import React from 'react'
import ProductCard from '../../components/ProductCard/ProductCard'
import ButtonBack from '../../components/ButtonBack/ButtonBack'
import data from '../../data'
const SectionFire = () => {
  const {products_sectionFire} = data
  return (
    <>
      <div className='section-container'>
        <ButtonBack />
        <h1>Fuego</h1>
        <div className='section_products'>
          {products_sectionFire.map((product) => (
          <ProductCard 
            productImage={product.productImage}
            productTitle={product.productTitle}
            productPath={product.productPath}
            productPrice={product.productPrice}
          />
          ))}
        </div>
      </div>
      
    </>
  )
}

export default SectionFire