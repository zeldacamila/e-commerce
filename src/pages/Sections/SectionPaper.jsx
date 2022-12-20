import React from 'react'
import ButtonBack from '../../components/ButtonBack/ButtonBack'
import ProductCard from '../../components/ProductCard/ProductCard'
import data from '../../data'

const SectionPaper = () => {
  const {PaperProducts} = data
  return (
    <>
      <div className='section-container'>
        <ButtonBack />
        <h1>Papeles</h1>
        <div className='section_products'>
          {PaperProducts.map((product) => (
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

export default SectionPaper