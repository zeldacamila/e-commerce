import React from 'react'
/* import BrandsSlider from '../../components/BrandsSlider/Brands' */
import CategoryCard from '../../components/CategoryCard/CategoryCard'
import { Button, Modal } from 'antd'
import { useState } from 'react'
import 'animate.css'
import Cookies from 'universal-cookie'

const Home = () => {

  const [open, setOpen] = useState(true);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Para permitir tu ingreso a CannaDev verificaremos si eres mayor de edad. ¿Certificas que eres mayor de 18 años?');
  const cookies = new Cookies()
  const handleYes = () => {
    cookies.set('modal', 'yes', {options: {path: '/', maxAge:60*60*24*30}})
  }
  const handleOk = ({okButtonProps}) => {
    
    if (modalText === 'Lo sentimos, no puedes acceder a nuestro contenido si no eres mayor de edad.') {
      return (
        okButtonProps={disabled: true}
      )
    } else {
      handleYes()
      setModalText('Accediendo a CannaDev...');
      setConfirmLoading(true);
      setTimeout(() => {
        setOpen(false);
        setConfirmLoading(false);
      }, 500);
      }
  };
  const handleCancel = () => {
    console.log('Clicked cancel button');
    setModalText('Lo sentimos, no puedes acceder a nuestro contenido si no eres mayor de edad.');
  };
  return (
    <div className='Home-container'>
      { cookies.get('modal') === 'yes' ? <></> : (
      <Modal
        title='BIENVENIDO A CANNADEV'
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        style={{
          top: 20,
          fontFamily:'Oswald'
        }}
        footer={[
          <Button style={{border: "2px solid #177333", color: '#177333'}} onClick={handleCancel}>
            NO
          </Button>,
          <Button style={{border: "2px solid #177333", color: '#177333' }} onClick={handleOk}>
            SÍ
          </Button>
        ]}
      >
        <p>{modalText}</p>
      </Modal>)}   
      <p className='advertising'>Envíos gratis por compras superiores a 200.000 COP</p>
      <h1 className='animate__animated animate__fadeInLeft'>NUESTRAS MARCAS ALIADAS</h1>
    {/*   <div className='Brands-container'>
        <BrandsSlider />
      </div> */}
      <h1 className='animate__animated animate__fadeInLeft'>¿QUÉ ESTÁS BUSCANDO?</h1>
      <div className='Cards-container'>
        <CategoryCard 
          cardImage='vapes.png'
          buttonTitle='PAPELES'
          buttonPath='/collections/Glass' />
        <CategoryCard 
          cardImage='bong.png'
          buttonTitle='VIDRIOS'
          buttonPath='/collections/Bongs' />
        <CategoryCard 
          cardImage='grinder.png'
          buttonTitle='FUEGO'
          buttonPath='/collections/sectionFire' />
        <CategoryCard 
          cardImage='lighter.png'
          buttonTitle='ELECTRONICOS'
          buttonPath='/collections/Electronics' />
        <CategoryCard 
          cardImage='papers.png'
          buttonTitle="ACCESORIOS PARA TU APTO"
          buttonPath="/collections/IndoorAccesories" />
        <CategoryCard 
          cardImage='pipe.png'
          buttonTitle='DABS'
          buttonPath='/collections/Dabs' />
        <CategoryCard 
          cardImage='grow.png'
          buttonTitle='KITS'
          buttonPath='/collections/Kits' />
        <CategoryCard 
          cardImage='grow.png'
          buttonTitle='GROW'
          buttonPath='/collections/Grow' />
         <CategoryCard 
          cardImage='grow.png'
          buttonTitle='MEDICINAL'
          buttonPath='/collections/Medicinal' />
      </div>
      
      <h1 className='animate__animated animate__fadeInLeft'>VISITA NUESTRO BLOG</h1>
      <div className='Blog-container'>

      </div>
    </div>
  )
}

export default Home