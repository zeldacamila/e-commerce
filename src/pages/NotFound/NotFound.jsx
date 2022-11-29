import notFoundImage from '../../images/404-.png'
import ButtonBack from '../../components/ButtonBack/ButtonBack'

const NotFound = () => {
  return (
    <div className='notfound-container'>
      <ButtonBack />
      <img src={notFoundImage} alt='404'/>
      <p id='notFound'> NOT FOUND </p>
      <p> Sitio en construcción</p>
    </div>
  )
}

export default NotFound

