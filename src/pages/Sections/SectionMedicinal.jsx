import React from 'react'
import ButtonBack from '../../components/ButtonBack/ButtonBack'
import ProductCard from '../../components/ProductCard/ProductCard'
import data from '../../data'

const SectionMedicinal = () => {
  const {MedicinalProducts} = data
  return (
    <>
      <div className='section-container'>
        <ButtonBack />
        <h1>Medicinal</h1>
        <div className='section_products'>
          {MedicinalProducts.map((product) => (
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

export default SectionMedicinal