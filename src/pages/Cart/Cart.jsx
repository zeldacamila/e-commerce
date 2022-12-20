import React from 'react'
import ButtonBack from '../../components/ButtonBack/ButtonBack'
import { useContext } from 'react'
import { CartContext } from '../../store/productContext'
import { useNavigate } from 'react-router-dom'
import ProductInCartCard from '../../components/ProductInCartCard/ProductInCartCard'
import cartImg3 from '../../images/cartLogo3.png'

const Cart = () => {

  const navigate = useNavigate()
  const { emptyCart } = useContext(CartContext)
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
      <h1><img className='baglogo' src={cartImg3} alt='' />Bolsa</h1>
      <div className='ProductsCart-container'>
        {productsCart ?
            (productsCart.map((product) => {
              amount = amount + product.productPrice
              console.log('amount', amount)
              return(
              <ProductInCartCard productId = {product.productId} productImage={product.productImage} productQuantity={product.productQuantity} productTitle={product.productTitle} productPrice={product.productPrice} />
              )
            }))
              :
            <p>No has agregado productos al carrito</p>
        }
        <h3>Total: COP ${amount}</h3>
      </div>
      <div className="CheckoutCart-container">
        <button onClick={handleGoToShop} className='buttonCart'>Seguir comprando</button>
        <button onClick={handleClickCleanCart} className='buttonCart'>Vaciar bolsa</button>
        <button onClick={() => alert('Implementar Pasarela de Pagos!')} className='buttonCart'>Pagar 💰</button>
      </div>
    </div>
  )
}

export default Cart