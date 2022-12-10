import React from 'react'
import { useContext } from "react";
import { CartContext } from "../../store/productContext";
import data2 from '../../data2';

const ProductCard = ({productImage, productTitle, productPath, productPrice}) => {
  const {allProducts} = data2
  const { addProduct } = useContext(CartContext)

/*   const openMessage = () => {
    message.info({
      content: '¡Producto agregado!',
      duration: 3,
    })
  } */

  const handleAddtoCart = () => {
    const product = allProducts.find((x) => x.productTitle === productTitle);
    console.log('product', product)
    console.log('productTitle', productTitle)
    addProduct(product)
    if (localStorage.getItem("ProductsCart") === null) {
      localStorage.setItem("ProductsCart",JSON.stringify([]))
    }
    localStorage.setItem('products', product)
    let products = [localStorage.getItem("ProductsCart")]
    products = JSON.parse(products)
      const objProduct = {productImage,productPrice,productTitle}
      console.log('objProduct',objProduct)
      products.push(objProduct)
      localStorage.setItem("ProductsCart",JSON.stringify(products));
  }
  
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
      <button className='addtocart_button' onClick={handleAddtoCart} >Agregar al 🛒</button>
    </div>
  )
}

export default ProductCard
