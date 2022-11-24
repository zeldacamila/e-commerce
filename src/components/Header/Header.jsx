import iconMenu from '../../images/icon-menu.svg'
import logo from '../../images/LOGOlacasa3.png'
import iconClose from '../../images/icon-close.svg'
import iconCart from '../../images/icon-cart.svg'
import imageAvatar from '../../images/image-avatar.png'

const Header = () => {



  return (
      <header className="header">
        <div className="header_navigation">
          <img className='header_menu' src={iconMenu} alt="menu icon"/>
          <img className='header_logo' src={logo} alt ="logo" />
        </div>
        <nav className='navbar'>
          <ul className='navbar_items'>
            <li><a className='navbar_link' href='*'>Marca 1</a></li>
            <li><a className='navbar_link' href='*'>Marca 2</a></li>
            <li><a className='navbar_link' href='*'>Marca 3</a></li>
            <li><a className='navbar_link' href='*'>Marca 4</a></li>
            <li><a className='navbar_link' href='*'>Marca 5</a></li>
            <li><a className='navbar_link' href='*'>Marca 6</a></li>
            <li><a className='navbar_link' href='*'>Marca 7</a></li>
          </ul>
        </nav>
        {/* <!-- inicio Modal Navbar --> */}
        <div className='modal-navbar_background'>
          <nav className='modal-navbar'>
            <img className='modal-navbar_close-icon' src={iconClose} alt=''/>
            <ul className='modal-navbar_items'>
              <li><a className='modal-navbar_link' href='*'>PAPELES</a></li>
              <li><a className='modal-navbar_link' href='*'>VIDRIOS</a></li>
              <li><a className='modal-navbar_link' href='*'>FUEGO</a></li>
              <li><a className='modal-navbar_link' href='*'>ELECTRÓNICOS</a></li>
              <li><a className='modal-navbar_link' href='*'>PARA TU APTO</a></li>
              <li><a className='modal-navbar_link' href='*'>DABS</a></li>
              <li><a className='modal-navbar_link' href='*'>KITS</a></li>
              <li><a className='modal-navbar_link' href='*'>GROW</a></li>
              <li><a className='modal-navbar_link' href='*'>MEDICINAL</a></li>
            </ul>
          </nav>
        </div>
        {/* <!-- final Modal Navbar --> */}
        <div className='header_cart-avatar'>
          <div className='header_cart'>
            <div className='header_cart-notification'>3</div>
            <img src={iconCart} alt='' />
          </div>
          <img className='header_avatar' src={imageAvatar} alt='' />
        </div>
      </header>
  )
}

export default Header
