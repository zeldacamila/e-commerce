import React from 'react'
import ProductCard from '../../components/ProductCard/ProductCard'
import ButtonBack from '../../components/ButtonBack/ButtonBack'
import data from '../../data'

const SectionApto = () => {
  const {AptoProducts} = data
  return (
    <>
      <div className='section-container'>
        <ButtonBack />
        <h1>Para tu apto</h1>
        <div className='section_products'>
          {AptoProducts.map((product) => (
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

export default SectionApto