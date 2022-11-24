import React from 'react'
import iconPrevious from '../../images/icon-previous.svg'
import iconNext from '../../images/icon-next.svg'
import thumbnail1 from '../../images/image-product-1-thumbnail.jpg'
import thumbnail2 from '../../images/image-product-2-thumbnail.jpg'
import thumbnail3 from '../../images/image-product-3-thumbnail.jpg'
import thumbnail4 from '../../images/image-product-4-thumbnail.jpg'
import iconMinus from '../../images/icon-minus.svg'
import iconPlus from '../../images/icon-plus.svg'
import iconCart from '../../images/icon-cart.svg'
import iconDelete from '../../images/icon-delete.svg'
import iconClose from '../../images/icon-close.svg'

const ProductPage = () => {
  
  return (
    <div className='ProductPage'>
      <section className='content'>
        <article className='gallery'>
          <div className='gallery_image-container'>
            <img className='gallery_previous'src={iconPrevious} alt='previous' />
            <img className='gallery_next'src={iconNext} alt='next' />
          </div>
          <div className='gallery_thumbnails'>
            <img id='1' className='gallery_thumbnail' src={thumbnail1} alt='thumbnail' />
            <img id='2' className='gallery_thumbnail' src={thumbnail2} alt='thumbnail' />
            <img id='3' className='gallery_thumbnail' src={thumbnail3} alt='thumbnail' />
            <img id='4' className='gallery_thumbnail' src={thumbnail4} alt='thumbnail' />
          </div>
        </article>

        <article className='details'>
          <h2 className='details_company'>LA CASA MARACACHAFA, Smoke & Grow</h2>
          <h2 className='details_title'>Clipper - Colección Flight</h2>
          <p className='details_description'>Los encendedores Clipper son los mas conocidos gracias a sus creativos diseños y su excelente calidad, son duraderos y lo mejor es que con estos encendedores puedes recargar su gas cuando este se acabe, prolongando así la vida útil de los encendedores. También cuentan con válvulas de seguridad patentada para evitar explosiones.</p>
          <div className="details_price">
            <p className="details_now">COP $4.500 <span className='details_discount'>%25</span></p>
            <p className="details_before">COP $6.000 </p>
          </div>
          <div className="details_product-quantity">
            <div className="input">
              <img className='input_minus' src={iconMinus} alt='minus'/>
              <input className='input_number' type='text' value='0' />
              <img className='input_plus' src={iconPlus} alt='plus'/>
            </div>
            <button className='details_button'><img src={iconCart} alt='' />Add to cart</button>
          </div>
        </article>
      </section>
      {/* Inicio Cart Modal */}
      <div className="cart-modal">
        <p className="cart-modal_title">Carrito</p>
        <div className="cart-modal_checkout-container">
          <div className="cart-modal_details-container">
            <img class="cart-modal_image"src={thumbnail1} alt='' />
            <div>
              <p className='cart-modal_product'>Clipper - Colección Flight</p>
              <p className='cart-modal_price'>$4.500 x3 <span>$13.500</span></p>
            </div>
            <img className='cart-modal_delete' src={iconDelete} alt='delete' />
          </div>
          <button className='cart-modal_checkout'>Pagar</button>
        </div>
      </div>
      {/* Fin Cart Modal */}

      {/* Inicio Gallery Modal */}
      <div className="modal-gallery_background">
        <article className='modal-gallery'>
          <div className="modal-gallery_close-container">
            <img className='modal-gallery_close' src={iconClose} alt='icon close' />
          </div>
          <div className='modal-gallery_image-container'>
            <img className='modal-gallery_previous'src={iconPrevious} alt='previous' />
            <img className='modal-gallery_next'src={iconNext} alt='next' />
          </div>
          <div className='modal-gallery_thumbnails'>
            <img id='m1' className='modal-gallery_thumbnail' src={thumbnail1} alt='thumbnail' />
            <img id='m2' className='modal-gallery_thumbnail' src={thumbnail2} alt='thumbnail' />
            <img id='m3' className='modal-gallery_thumbnail' src={thumbnail3} alt='thumbnail' />
            <img id='m4' className='modal-gallery_thumbnail' src={thumbnail4} alt='thumbnail' />
          </div>
        </article>
      </div>
      {/* Fin Gallery Modal */}
    </div>
  )
}

export default ProductPage