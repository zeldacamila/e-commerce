import React from 'react'
import Button from '../Button/Button'

const ProductCard = ({productImage, buttonTitle, buttonPath}) => {
  return (
    <div className='ProductCard-container'>
        <div className='productCardImg-container'>
            <img src={productImage} alt='' />
        </div>
        <div>
          <Button 
          buttonTitle={buttonTitle}
          buttonPath={buttonPath} />
        </div>
    </div>
  )
}

export default ProductCard