import React from 'react'
import { TbArrowBack } from 'react-icons/tb'

const ButtonBack = () => {

  const handleClickBack = () => {
    window.history.back()
  }

  return (
    <button className='BackButton-container' onClick={handleClickBack} >
      <TbArrowBack /> Volver
    </button>
  )
}

export default ButtonBack