import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faXmark } from '@fortawesome/free-solid-svg-icons';
import Modal from '../Modal/Modal';
import { promoCard } from '../../data'
import './PromoCard.css'
import { useState } from 'react';

export default function PromoCard({counter}) {
    const [show, setShow] = useState(false)
    const [selectedItem, setSelectedItem] = useState(null)
    const [count, setCount] = useState(1)
    function Count() {
        counter(count => count + 1)
        setTimeout(() => {setShow(false)},500)
      
    }
    function openModal(item) {
        setShow(true)
        setSelectedItem(item)
    }

    function plus() {
        setCount(count + 1);
    }

    function minus() {
        if (count > 1) {
            setCount(count - 1);
        }
    }
    return (
        <>
            <div className='container-main-promo'>
                {promoCard.map((item) => (
                    <div className='card-promo-cont' key={item.id}>
                        <div className='info-and-button'>
                            <div className='text-info-gap'>
                                <span className='title-promo-cont'>{item.title} <span className='color-promo-cont'>{item.titletwo}</span></span>
                                <br />
                                <span className='description-promo-cont'>{item.description}</span>
                            </div>
                            <button onClick={() => openModal(item)} className='button-promo-card'>PROCEED TO ORDER <FontAwesomeIcon icon={faAngleRight} /> </button>
                        </div>
                        <img src={item.img} alt="Photo Card Promo" />
                    </div>
                ))}
            </div>

            <Modal open={show}>
                {selectedItem && (
                    <div className="modal-content-wrapper">
                        <div className='modal-img-promo'>
                            <img src={selectedItem.img} alt="Pizza" />
                        </div>
                        <button className='close-position' onClick={() => setShow(false)}><FontAwesomeIcon icon={faXmark} /></button>
                        <div className='modal-text-promo'>
                            <p className='text-title-modal'>{selectedItem.title} {selectedItem.titletwo}</p>
                            <p className='text-description-modal'>{selectedItem.description}</p>
                            <div className='counter-promo-modal'>
                                <button onClick={minus} className='button-count'>-</button>
                                <p className=''>{count}</p>
                                <button onClick={plus} className='button-count'>+</button>
                            </div>
                            <button onClick={Count} className='button-buy'>Add to card - {selectedItem.price * count}$</button>
                        </div>
                    </div> 
                )}
            </Modal>
        </>
    )
}