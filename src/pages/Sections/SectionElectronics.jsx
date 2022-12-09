import React from 'react'
import ButtonBack from '../../components/ButtonBack/ButtonBack'
import ProductCard from '../../components/ProductCard/ProductCard'
import data from '../../data'

const SectionElectronics = () => {
  const {products_sectionElectronics} = data
  return (
    <>
      <div className='section-container'>
        <ButtonBack />
        <h1>Electronicos</h1>
        <div className='section_products'>
          {products_sectionElectronics.map((product) => (
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

export default SectionElectronics