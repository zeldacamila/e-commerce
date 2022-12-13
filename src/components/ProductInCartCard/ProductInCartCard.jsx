import React from 'react'

const ProductInCartCard = ({productImage, productTitle, productPrice, productQuantity}) => {

  return (
    <div className='ProductInCartCard-container'>
      <div className='productInCartCardImg-container'>
        <img className='ProductInCartCard-image' src={productImage} alt='' />
      </div>
      <div className='productInCartCardInfo-container'>
        <p className='productInCartName'>{productTitle}</p>
        <p className='productInCartQuantity'>{productQuantity}</p>
        <p className='productInCartPrice'>COP ${productPrice}</p>
      </div>
    </div>
  )
}

export default ProductInCartCard