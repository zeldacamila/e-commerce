import { useState } from "react";
import { createContext } from "react";


export const CartContext = createContext()

const ProductContextProvider = ({children}) => {

    const [productscart, setProductscart] = useState([])

    const addProduct = (product) => {
        setProductscart((prev) => [...prev, product])
    }
    const onAdd = (product) => {
      const exist = productscart.find((x) => x.productTitle === product.productTitle);
      if (exist) {
        setProductscart(
          productscart.map((x) =>
            x.productTitle === product.productTitle ? { ...exist, productQuantity: exist.productQuantity + 1 } : x
          )
        );
      } else {
        setProductscart([...productscart, { ...product, productQuantity: 1 }]);
      }
    }
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