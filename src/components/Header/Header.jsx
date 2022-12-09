import logo from '../../images/LOGOlacasa4.png'
import cartImg from '../../images/cartLogo.png'
import { useNavigate } from 'react-router-dom'

const Header = () => {

  const navigate = useNavigate()

  const handleClickLogo = () => {
    navigate('/')
  }
  const handleClickCart = () => {
    navigate('/cart')
  }

  return (
      <header className="header">
        <div className='falsediv'></div>
        <img className='header_logo' src={logo} alt ="logo" onClick={handleClickLogo}/>
        <img className='cart_logo' src={cartImg} alt ='cartImg' onClick={handleClickCart} />
      </header>
  )
}

export default Header
