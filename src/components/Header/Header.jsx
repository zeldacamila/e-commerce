import logo from '../../images/LOGOlacasa4.png'
import { useNavigate } from 'react-router-dom'

const Header = () => {

  const navigate = useNavigate()

  const handleClickLogo = () => {
    navigate('/')
  }

  return (
      <header className="header">
        <img className='header_logo' src={logo} alt ="logo" onClick={handleClickLogo}/>
      </header>
  )
}

export default Header
