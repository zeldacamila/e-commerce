import React from 'react'
import ButtonProduct from '../ButtonProduct/ButtonProduct'

const ProductCard = ({productImage, productTitle, productPath, productPrice}) => {
  return (
    <div className='ProductCard-container'>
      <a className='productImg-Details-container' href={productPath}>
        <div className='productCardImg-container'>
            <img src={productImage} alt='' />
        </div>
        <div className='productCardDetails-container'>
          <p className='productTitle'>{productTitle}</p>
          <p className='productPrice'>COP ${productPrice}</p>
        </div>
      </a> 
    </div>
  )
}

export default ProductCard
