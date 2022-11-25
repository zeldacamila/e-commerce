import React from 'react'
import { Link } from 'react-router-dom'


const Button2 = ({buttonTitle, buttonPath}) => {

    return (
        <button className='button2-container'>
            <Link id='button2-path' to={buttonPath}>{buttonTitle}</Link>
        </button>
    )
}

export default Button2