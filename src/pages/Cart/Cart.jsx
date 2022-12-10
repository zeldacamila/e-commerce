import React from 'react'
import ButtonBack from '../../components/ButtonBack/ButtonBack'
import { useContext } from 'react'
import { CartContext } from '../../store/productContext'
import { useNavigate } from 'react-router-dom'
import ProductInCartCard from '../../components/ProductInCartCard/ProductInCartCard'

const Cart = () => {

  const navigate = useNavigate()

  const {productscart} = useContext(CartContext)
  console.log('productscart', productscart)
  const productsCart = JSON.parse(localStorage.getItem('ProductsCart'))
  console.log('productsCart', productsCart)

  const handleClickCleanCart = () => {
    localStorage.removeItem('ProductsCart')
    navigate('/cart')
  }

  const handleGoToShop = () => {
    navigate('/')
  }

  let amount = 0

  return (
    <div className='Cart-container'>
      <ButtonBack />
      <h1>🛒Carrito</h1>
      <div className='ProductsCart-container'>
        {productsCart ?
            (productsCart.map((product) => {
              amount = amount + product.productPrice
              console.log('amount', amount)
              return(
              <ProductInCartCard productImage={product.productImage} productTitle={product.productTitle} productPrice={product.productPrice} />
              )
            }))
              :
            <p>No has agregado productos al carrito</p>
        }
        <h3>Total: COP ${amount}</h3>
      </div>
      <div className="CheckoutCart-container">
        <button onClick={handleGoToShop} className='buttonCleanCart'>Seguir comprando</button>
        <button onClick={handleClickCleanCart} className='buttonCleanCart'>Vaciar carrito</button>
        <button onClick={() => alert('Implementar Pasarela de Pagos!')} className='buttonCleanCart'>Pagar</button>
      </div>
    </div>
  )
}

export default Cart