import React from 'react'
import { useContext } from "react";
import { CartContext } from "../../store/productContext";
import data2 from '../../data2';
import { useNavigate } from 'react-router-dom'

const ProductInCartCard = ({productImage, productId, productTitle, productPrice, productQuantity}) => {
  const navigate = useNavigate()
  const { allProducts } = data2
  const { deleteProduct } = useContext(CartContext)

  const handleDelete = () => {
    console.log('delete ')
    let productsInLocal = [localStorage.getItem("ProductsCart")]
    productsInLocal = JSON.parse(productsInLocal)
    console.log('products', productsInLocal)
    const exist = productsInLocal.find((x) => x.productId === productId);
    console.log('exist', exist)

    if (exist.productQuantity === 1) {
      const productsagain = productsInLocal.filter((x) => x.productId !== productId);
      console.log(productsagain)
      productsInLocal = productsagain
    } else {
      const productsagain = productsInLocal.map((x) =>
        x.productId === productId ? { ...exist, productQuantity: exist.productQuantity - 1 } : x
      )
      console.log(productsagain)  
      productsInLocal = productsagain
    } 
    localStorage.setItem("ProductsCart",JSON.stringify(productsInLocal));
    navigate('/cart')
  }
  const handlePlus = () => {
    console.log('plus ')
    let productsInLocal = [localStorage.getItem("ProductsCart")]
    productsInLocal = JSON.parse(productsInLocal)
    console.log('products', productsInLocal)
    const exist = productsInLocal.find((x) => x.productId === productId);
      console.log('exist', exist)

/*     if (exist.productQuantity === 1) {
      const productsagain = productsInLocal.filter((x) => x.productId !== productId);
      console.log(productsagain)
      productsInLocal = productsagain
    } else { */
      const productsagain = productsInLocal.map((x) =>
        x.productId === productId ? { ...exist, productQuantity: exist.productQuantity + 1 } : x
      )
      console.log(productsagain)  
      productsInLocal = productsagain
    
    localStorage.setItem("ProductsCart",JSON.stringify(productsInLocal));
    navigate('/cart')
  }
  return (
    <div className='ProductInCartCard-container'>
      <div className='productInCartCardImg-container'>
        <img className='ProductInCartCard-image' src={productImage} alt='' />
      </div>
      <div className='productInCartCardInfo-container'>
        <p className='productInCartName'>{productTitle}</p>
        <p className='productInCartPrice'>COP ${productPrice}</p>
        <div className='productInCartCardInfoQuantity-container'>
          <button className='buttonHandleDelete' onClick={handleDelete}>-</button>
          <p className='productInCartQuantity'>{productQuantity}</p>
          <button className='buttonHandlePlus' onClick={handlePlus}>+</button>
        </div>
      </div>
    </div>
  )
}

export default ProductInCartCard