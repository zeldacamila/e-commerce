import React from 'react'
import { Link } from 'react-router-dom'


const ButtonProduct = ({buttonTitle, buttonPath}) => {

    return (
        <button className='buttonProduct-container'>
            <Link id='buttonProduct-path' to={buttonPath}>{buttonTitle}</Link>
        </button>
    )
}

export default ButtonProduct