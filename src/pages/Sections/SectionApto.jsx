import React from 'react'
import ProductCard from '../../components/ProductCard/ProductCard'
import ButtonBack from '../../components/ButtonBack/ButtonBack'
import data from '../../data'

const SectionApto = () => {
  const {products_sectionApto} = data
  return (
    <>
      <div className='section-container'>
        <ButtonBack />
        <h1>Para tu apto</h1>
        <div className='section_products'>
          {products_sectionApto.map((product) => (
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

export default SectionApto