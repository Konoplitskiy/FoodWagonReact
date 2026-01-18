import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import Modal from '../Modal/Modal';
import './CallToAction.css'
import { useState } from 'react';

export default function CallToAction() {
    const [modalShow, setModalShow] = useState(false)
    function show() {
        setModalShow(true)
    }
    return (
        <>
        <div className='main-call-action'>
            <div>
            <span className='text-call-action'>Are you ready to order  </span>
            <span className='text-call-action'>with the best deals?</span>
            </div>
            <button onClick={show} className='button-call-action'>Proceed to order <FontAwesomeIcon icon={faAngleRight} /></button>
        </div>
        <Modal open={modalShow} >
        <p>dd</p>
        </Modal>
        </>
    )
}