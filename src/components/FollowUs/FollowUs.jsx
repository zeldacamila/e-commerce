import React from 'react'
import logoIG from '../../images/iglogo.png'
const FollowUs = () => {
  return (
    <div className='FollowUs-container'>
      <h1 className='FollowUs-title'>👽Conecta con nosotros</h1>
        <div className="FollowUsDetails-container">
          <a className="FollowUsImgAndDetail-container" target="_blank" rel="nofollow noreferrer" href='https://www.instagram.com/casamaracachafasmokegrow/'>
            <div className="FollowUsImg-container">
              <img src={logoIG} alt=''/>
            </div>
            <p id='followUs'>Síguenos y no te pierdas de nuestras promociones.</p>
          </a>
          <p>@casamaracachafasmokegrow</p>  
        </div>
    </div>
  )
}

export default FollowUs