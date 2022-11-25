import notFoundImage from '../../images/404-.png'

const NotFound = () => {
  return (
    <div className='notfound-container'>
      <img src={notFoundImage} alt='404'/>
      <p id='notFound'> NOT FOUND </p>
      <p> Sitio en construcción</p>
    </div>
  )
}

export default NotFound

