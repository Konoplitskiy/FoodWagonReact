import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './DiscountFood.css'
import Modal from '../Modal/Modal'
import { useState } from 'react'

export default function DiscountFood({ data, counter }) {
    const [modal, setModal] = useState(false)
    function openModal() {
        setModal(true)
    }

    function buyCounter() {
        counter(Count => Count + 1);
        setTimeout(() => { setModal(false) }, 350)
    }

    return (
        <>
            <div onClick={openModal} className='catalog-sell'>
                <div className='main-discount'>
                    <div className='image-and-info'>
                        <img src={data.img} alt="sell-food" />
                        <div className='position-sell'>
                            <p className='discount-number'>{data.discount}</p>
                            <div className='sell-off'>
                                <p> {data.interest}</p>
                                <p>{data.off} </p>
                            </div>
                        </div>
                    </div>
                    <div className='description-sell'>
                        <p> {data.text}</p>
                        <p className='fake-button'>{data.discountDay}</p>
                    </div>
                </div>
            </div>
            <Modal open={modal}>
                <div className='modal-discount'>
                    <div className='container-img-modal' >
                        <img src={data.img} alt="" />
                    </div>
                <button onClick={() => setModal(false)} className='close-position'><FontAwesomeIcon icon={faXmark} /></button>
                    <div className='container-modal-info'>
                        <p className='name-dish-modal'>{data.dishName}</p>
                        <p className='price-modal'>${data.price}</p>
                        <span className='description-modal-size'>{data.description}</span>
                        <button onClick={buyCounter} className='button-buy'>Add to Card </button>
                    </div>
                </div>
            </Modal>
        </>
    )
}