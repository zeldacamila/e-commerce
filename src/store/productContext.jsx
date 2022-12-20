import { useState } from "react";
import { createContext } from "react";


export const CartContext = createContext()

const ProductContextProvider = ({children}) => {

    const [productscart, setProductscart] = useState([])

    const addProduct = (product) => {
/*       const exist = productscart.find((x) => x.productId === product.productId)
      console.log('exist', exist)
      if (exist) {
        setProductscart(
          productscart.map((x) =>
            x.productId === product.productId ? { ...exist, productQuantity: exist.productQuantity + 1 } : x
          )
        )
      } else {
        const newCartItems = [...productscart, { ...product, productQuantity: 1 }];
        setProductscart(newCartItems);
      } */
    }
/*     const deleteProduct = (product) => {
      console.log('product', product)
      let productsInLocal = (JSON.parse(localStorage.getItem("ProductsCart")))
      console.log('productsInLocal',productsInLocal)
      const exist = productsInLocal.find((x) => x.productId === product.productId);
      console.log('exist', exist)

      if (exist.productQuantity === 1) {
        setProductscart(productsInLocal.filter((x) => x.productId !== product.productId));
      } else {
        setProductscart(
          productsInLocal.map((x) =>
            x.productId === product.productId ? { ...exist, productQuantity: exist.productQuantity - 1 } : x
          )
        );
      }
    } */

    const store = {
        productscart, addProduct
    }

  return (
    <CartContext.Provider value={store}>
        {children}
    </CartContext.Provider>
    
  )
}

export default ProductContextProvider;