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
  // Función para formatear el mensaje
  const formatMessage = () => {
    let message = "Hola! Voy a llevar estas cositas:\n\n*Detalles del Pedido:*\n";
    productsCart.forEach(product => {
      amount += product.productQuantity * product.productPrice;
      message += `x${product.productQuantity} -${product.productTitle} $${product.productPrice} c/u\n`;
    });
    message += `\n*TOTAL: COP $${amount}*`;
    return message;
  }

  // Función para enviar mensaje por WhatsApp
  const sendWhatsAppMessage = () => {
    const message = formatMessage();
    const whatsappNumber = '3022711169'; // Cambia esto por el número de destino
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }

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
        <button onClick={sendWhatsAppMessage} className='buttonCart3'>Pagar 💰</button>
      </div>
    </div>
  )
}

export default Cart