import React from 'react'
import logoWA from '../../images/comprarWA.png'
import logoWAmobile from '../../images/Logo-WhatsApp-vector-PNG.png'

const ButtonWhatsapp = () => {

  return (
    <button className='WAButton-container' >
      <a className='logoWApc-container' href='https://api.whatsapp.com/send?phone=573195250514&text=¡Hola!%20Quiero%20comprar%20un%20producto%20de%20la%20CASA%20%F0%9F%8F%A1%F0%9F%9B%B8%F0%9F%91%BD'>
        <img id='logoWA' src={logoWA} alt='' />
      </a>
      <a className='logoWAmobile-container' href='https://api.whatsapp.com/send?phone=573195250514&text=¡Hola!%20Quiero%20comprar%20un%20producto%20de%20la%20CASA%20%F0%9F%8F%A1%F0%9F%9B%B8%F0%9F%91%BD'>
        <img id='logoWA' src={logoWAmobile} alt='' />
      </a>
    </button>
  )
}

export default ButtonWhatsapp