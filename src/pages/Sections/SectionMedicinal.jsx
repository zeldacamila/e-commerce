import React from 'react'
import ButtonBack from '../../components/ButtonBack/ButtonBack'
import ProductCard from '../../components/ProductCard/ProductCard'
import data from '../../data'

const SectionMedicinal = () => {
  const {products_sectionMedicinal} = data
  return (
    <>
      <div className='section-container'>
        <ButtonBack />
        <h1>Medicinal</h1>
        <div className='section_products'>
          {products_sectionMedicinal.map((product) => (
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

export default SectionMedicinal