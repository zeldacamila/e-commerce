import React from 'react'
import Button from '../Button/Button'

const CategoryCard = ({cardImage, buttonTitle, buttonPath}) => {
  return (
    <div className='HomeCard-container'>
      <a className='buttonPath' href={buttonPath} alt=''>
        <div className='cardImg-container'>
            <img src={cardImage} alt='' />
        </div>
        <div>
          <Button 
          buttonTitle={buttonTitle}
          buttonPath={buttonPath} />
        </div>
      </a> 
    </div>
  )
}

export default CategoryCard