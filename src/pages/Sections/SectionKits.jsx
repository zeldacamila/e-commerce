import React from 'react'
import ButtonBack from '../../components/ButtonBack/ButtonBack'
import ProductCard from '../../components/ProductCard/ProductCard'
import data from '../../data'

const SectionKits = () => {
  const {KitsProducts} = data
  return (
    <>
      <div className='section-container'>
        <ButtonBack />
        <h1>Kits</h1>
        <div className='section_products'>
          {KitsProducts.map((product) => (
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

export default SectionKits