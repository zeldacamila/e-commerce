import logo from '../../images/LOGOlacasa4.png'
import cartImg from '../../images/cartLogo.png'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../store/productContext'

const Header = () => {

  const navigate = useNavigate()

  const handleClickLogo = () => {
    navigate('/')
  }
  const handleClickCart = () => {
    navigate('/cart')
  }
  const {productsCART} = useContext(CartContext)
  console.log('productscart', productsCART)
  const productsCart = JSON.parse(localStorage.getItem('ProductsCart'))
  const productCounter = productsCart.length;
  console.log('productscart', productCounter)
  return (
      <header className="header">
        <div className='empty'></div>
        <div className='logo-container'>
          <img className='header_logo' src={logo} alt ="logo" onClick={handleClickLogo}/>
        </div>
        <div className='cartlogo-container'>
          {productCounter}
          <img className='cart_logo' src={cartImg} alt ='cartImg' onClick={handleClickCart} />
        </div>
      </header>
  )
}

export default Header
