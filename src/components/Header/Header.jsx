import logo from '../../images/LOGOlacasa5a.png'
import logo2 from '../../images/LOGOlacasa5b.png'
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
        <div className='empty'></div>
        <div className='logo-container'>
          <img className='header_logo' src={logo} alt ="logo" onClick={handleClickLogo}/>
          <img className='header_logo2' src={logo2} alt ="logo2"/>
        </div>
        <div className='cartlogo-container'>
          <img className='cart_logo' src={cartImg} alt ='cartImg' onClick={handleClickCart} />
        </div>
      </header>
  )
}

export default Header;
