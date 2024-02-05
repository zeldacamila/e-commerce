import logo from '../../images/LOGOlacasa5a.png'
import logo2 from '../../images/LOGOlacasa5b.png'
import logoMin from '../../images/LOGOTIPO.png'
import { useNavigate, useLocation } from 'react-router-dom'

const Header = () => {

  const navigate = useNavigate()
  const location = useLocation();

  const handleClickLogo = () => {
    navigate('/')
  }
  
  // Determinar qué logo mostrar basado en la ruta
  const isHomePage = location.pathname === '/';
  const logoToShow = isHomePage ? logo : logoMin;
  return (
    <header className={`header ${!isHomePage ? 'header-not-home' : ''}`}>
        <div className='empty'></div>
        <div className='logo-container'>
        <img loading='lazy' className={`header_logo ${!isHomePage ? 'header_logo-not-home' : ''}`} src={logoToShow} alt="logo" onClick={() => navigate('/')} />
        <img loading='lazy' className='header_logo2' src={logo2} alt ="logo2" onClick={handleClickLogo}/>
        </div>
        <div className='cartlogo-container'>
        </div>
      </header>
  )
}

export default Header;
