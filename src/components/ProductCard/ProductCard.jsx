import React from 'react' 
import { useContext } from "react";
import { CartContext } from "../../store/productContext";
import data2 from '../../data2';
import { message } from 'antd'
import cartImg2 from '../../images/cartLogo2.png'

const ProductCard = ({productImage, productId, productTitle, productPath, productPrice, productQuantity}) => {
   const { allProducts } = data2 
   const { addProduct } = useContext(CartContext) 
   const openMessage = () => {
    message.info({
      content: '¡Producto agregado!',
      duration: 3,
    })
  }

  const handleAddtoCart = () => { 
    const product = allProducts.find((x) => x.productId === productId);
    addProduct(product)
    openMessage()
    if (localStorage.getItem("ProductsCart") === null) {
      localStorage.setItem("ProductsCart",JSON.stringify([]))
    }
    let products = [localStorage.getItem("ProductsCart")]
    console.log('products', products)
    products = JSON.parse(products)
    let objProduct = {productImage,productPrice,productTitle,productQuantity,productId}
    const productExist = products.find((x) => x.productId === objProduct.productId)
    if (productExist) {
      const productToPush = products.map((x) =>
        x.productId === objProduct.productId ? { ...productExist, productQuantity: productExist.productQuantity + 1 } : x
      )
      products = productToPush
    } else {
      const productToPush = {...objProduct, productQuantity:1 }
      products.push(productToPush)
    }  
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
      <button className='addtocart_button' onClick={handleAddtoCart} >Agregar a la <img className='bag_logo' src={cartImg2} alt='' /></button>
    </div>
  )
}

export default ProductCard
