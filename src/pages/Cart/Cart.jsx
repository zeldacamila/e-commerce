import React from 'react'
import ButtonBack from '../../components/ButtonBack/ButtonBack'
import { useContext } from 'react'
import { CartContext } from '../../store/productContext'
import { useNavigate } from 'react-router-dom'
import ProductInCartCard from '../../components/ProductInCartCard/ProductInCartCard'
import cartImg3 from '../../images/cartLogo3.png'

const Cart = () => {

  const navigate = useNavigate()
  const {productscart} = useContext(CartContext)
  console.log('productscart', productscart)
  const productsCart = JSON.parse(localStorage.getItem('ProductsCart'))
/*   const productCounter = productsCart.length;
  console.log('productscart', productCounter) */
  const handleClickCleanCart = () => {
    localStorage.removeItem('ProductsCart')
    navigate('/cart')
  }

  const handleGoToShop = () => {
    navigate('/')
  }

  let amount = 0
  const handlePayment = () => {
    html2canvas(document.body).then(canvas => {
      // Convertir el canvas a imagen
      const image = canvas.toDataURL('image/png');
      // Preparar el enlace de WhatsApp
      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent('Tu mensaje aquí')}%20${encodeURIComponent(image)}`;
      // Abrir el enlace
      window.open(whatsappUrl, '_blank');
    });

  return (
    <div className='Cart-container'>
      <ButtonBack />
      <h1><img className='baglogo' src={cartImg3} alt='' />Bolsa</h1>
      <div className='ProductsCart-container'>
        {productsCart ?
            (productsCart.map((product) => {
              amount = amount + (product.productQuantity*product.productPrice)
              console.log('amount', amount)
              return(
              <ProductInCartCard 
                productId = {product.productId}
                productImage={product.productImage}
                productQuantity={product.productQuantity}
                productTitle={product.productTitle}
                productPrice={product.productPrice} />
              )
            }))
              :
            <p>No has agregado productos a la bolsa</p>
        }
        <h3 >Total: COP ${amount}</h3>
      </div>
      <div className="CheckoutCart-container">
        <div className="CheckoutCartWithoutbuttoncart-container">
          <button onClick={handleGoToShop} className='buttonCart1'>Seguir comprando</button>
          <button onClick={handleClickCleanCart} className='buttonCart2'>Vaciar bolsa</button>
        </div>
        <button onClick={handlePayment} className='buttonCart3'>Pagar 💰</button>
      </div>
    </div>
  )
}

export default Cart
