import './DiscountFood.css'
import Modal from '../Modal/Modal'
import { useState } from 'react'

export default function DiscountFood({ data, counter}) {
    const [modal, setModal] = useState(false)
    function openModal() {
        setModal(true)
    }

    function buyCounter() {
        counter(Count => Count + 1);
        setTimeout(() => {setModal(false)}, 350)   
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
                <div>
                    <div className='container-main'>
                        <div className='container-button'>
                            <button onClick={() => setModal(false)}>Close</button>
                        </div>
                    </div>
                    <div className='info-with-modal'>
                        <p className='title-modal'>{data.dishName}</p>
                        <div className='discount-modal-main'>
                            <span>${data.price}</span>
                            <div className='discount-modal'>
                                <p>{data.discount}%</p>
                                <p className='text-off-modal'>{data.off}</p>
                            </div>
                        </div>
                        <span className='description-modal'>{data.description}</span>
                        <div className='button-cont-buy'>
                        <button onClick={buyCounter}  className='button-buy'>Buy for {data.price}$</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    )
}