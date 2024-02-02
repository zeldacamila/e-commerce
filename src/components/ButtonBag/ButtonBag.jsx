import logoBag from '../../images/cartLogo.png'
import { useNavigate } from 'react-router-dom'

const ButtonBag = () => {

    const navigate = useNavigate()
    const handleClickCart = () => {
      navigate('/cart')
    }

  return (
    <button className='BagButton-container' >
      <a className='logoBagpc-container' >
        <img id='logoBag' src={logoBag} alt ='' onClick={handleClickCart} />
      </a>
      <a className='logoBagmobile-container' >
        <img id='logoBag' src={logoBag} alt ='' onClick={handleClickCart} />
      </a>
    </button>
  )
}

export default ButtonBag