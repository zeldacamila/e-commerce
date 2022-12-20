import React from 'react'
import ButtonBack from '../../components/ButtonBack/ButtonBack'
import ProductCard from '../../components/ProductCard/ProductCard'
import data from '../../data'

const SectionGlass = () => {
  const {GlassProducts} = data
  return (
    <>
      <div className='section-container'>
        <ButtonBack />
        <h1>Vidrios</h1>
        <div className='section_products'>
          {GlassProducts.map((product) => (
            <ProductCard 
              productImage={product.productImage}
              productTitle={product.productTitle}
              productPath={product.productPath}
              productPrice={product.productPrice}
              productQuantity={product.productQuantity}
            />
          ))}
        </div>
      </div>
      
    </>
  )
}

export default SectionGlass