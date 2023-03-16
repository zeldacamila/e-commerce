import React from 'react'
import ProductCard from '../../components/ProductCard/ProductCard'
import ButtonBack from '../../components/ButtonBack/ButtonBack'
import data from '../../data'

const SectionDabs = () => {
  const {DabsProducts} = data
  return (
    <>
      <div className='section-container'>
        <ButtonBack />
        <h1>Dabs</h1>
        <div className='section_products'>
          {DabsProducts.map((product) => (
            <ProductCard
              productId={product.productId} 
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

export default SectionDabs