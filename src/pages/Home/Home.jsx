import React from 'react'
import CategoryCard from '../../components/CategoryCard/CategoryCard'
import Brands from '../../components/Brands/Brands'
import FollowUs from '../../components/FollowUs/FollowUs';
import VisitUs from '../../components/VisitUs/VisitUs';
import { Button, Modal } from 'antd'
import { useState } from 'react'
import 'animate.css'
import Cookies from 'universal-cookie'
import logosPago from '../../images/pago-logos2.png'
import papelesCategory from '../../images/papeles.jpg'
import vidriosCategory from '../../images/vidrios.jpg'
import fuegoCategory from '../../images/fuego.jpg'
import electroCategory from '../../images/electronicos.jpg'
import dabsCategory from '../../images/dabs.jpg'
import growCategory from '../../images/grow.jpg'
import kitsCategory from '../../images/kits.jpg'
import medicinalCategory from '../../images/medicinal.jpg'
import paratuaptoCategory from '../../images/apto.jpg'



const Home = () => {

  const [open, setOpen] = useState(true);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Para acceder a la CASA debes ser un adulto. ¿Certificas que eres mayor de 18 años?');
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
      setModalText('Accediendo a CASA MARACACHAFA...');
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
        title='BIENVENIDO A CASA MARACACHAFA'
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        style={{
          top: 80,
          fontFamily:'Oswald',
        }}
        footer={[
          <Button style={{border: "2px solid rgb(1, 138, 0)", color: 'rgb(1, 138, 0)', fontFamily: 'Oswald'}} onClick={handleCancel}>
            NO
          </Button>,
          <Button style={{border: "2px solid rgb(1, 138, 0)", color: 'rgb(1, 138, 0)', fontFamily: 'Oswald' }} onClick={handleOk}>
            SÍ
          </Button>
        ]}
      >
        <p>{modalText}</p>
      </Modal>)}   
      <h1 className='animate__animated animate__fadeInLeft'>🛸</h1>
      <div className='Cards-container'>
        <CategoryCard 
          cardImage={papelesCategory}
          buttonTitle='PAPELES'
          buttonPath='/collections/Paper' />
        <CategoryCard 
          cardImage={vidriosCategory}
          buttonTitle='VIDRIOS'
          buttonPath='/collections/Glass' />
        <CategoryCard 
          cardImage={fuegoCategory}
          buttonTitle='FUEGO'
          buttonPath='/collections/Fire' />
        <CategoryCard 
          cardImage={electroCategory}
          buttonTitle='ELECTRÓNICOS'
          buttonPath='/collections/Electronics' />
        <CategoryCard 
          cardImage={paratuaptoCategory}
          buttonTitle="PARA TU APTO"
          buttonPath="/collections/IndoorAccesories" />
        <CategoryCard 
          cardImage={dabsCategory}
          buttonTitle='DABS'
          buttonPath='/collections/Dabs' />
        <CategoryCard 
          cardImage={kitsCategory}
          buttonTitle='KITS'
          buttonPath='/collections/Kits' />
        <CategoryCard 
          cardImage={growCategory}
          buttonTitle='GROW'
          buttonPath='/collections/Grow' />
         <CategoryCard 
          cardImage={medicinalCategory}
          buttonTitle='MEDICINAL'
          buttonPath='/collections/Medicinal' />
      </div>
      <Brands />
      <FollowUs />
      <VisitUs />
      <div className='InfoPago-container'>
        <h1 className='paymentMethods-title' >💸Medios de pago</h1>
          <div className="InfoPago-container-notitle">
            <div className='InfoPago-container_logos'>
              <img className='logoInfoPago' src={logosPago} alt='' />
            </div>
          </div>
      </div>
    </div>
  )
}

export default Home