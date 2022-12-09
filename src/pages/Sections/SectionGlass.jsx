import React from 'react'
import ButtonBack from '../../components/ButtonBack/ButtonBack'
import ProductCard from '../../components/ProductCard/ProductCard'
import data from '../../data'

const SectionGlass = () => {
  const {products_sectionGlass} = data
  return (
    <>
      <div className='section-container'>
        <ButtonBack />
        <h1>Vidrios</h1>
        <div className='section_products'>
          {products_sectionGlass.map((product) => (
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

export default SectionGlass