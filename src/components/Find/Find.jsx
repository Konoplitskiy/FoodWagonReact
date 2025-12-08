import { useState } from "react"
import './Find.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMotorcycle, faBagShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';




export default function Find({ setAddres, deliveryType, setDeliveryType }) {

    const [text, setText] = useState('');
    

    return (
        <>
            <div className="find-form-main">
                <div className="form--find-food">
                    <h2>Are you starving?</h2>
                    <p className="text-under-h2">Within a few clicks, find meals that are accessible near you</p>
                    <div className="form-find">
                        <div className="span-deliveri">
                            <p className={`p-delivery ${deliveryType === "Delivery" ? "active" : ""}`}onClick={() => setDeliveryType("Delivery")}>
                                <FontAwesomeIcon icon={faMotorcycle} /> Delivery
                            </p>

                            <p className={`p-picup ${deliveryType === "Pickup" ? "active" : ""}`} onClick={() => setDeliveryType("Pickup")}
                            >
                                <FontAwesomeIcon icon={faBagShopping} /> Pickup
                            </p>

                        </div>
                        <hr />
                        <div className="form-input">
                            <form onSubmit={(e) => e.preventDefault()}>
                                <input onChange={(e) => setText(e.target.value)} type="text" placeholder="Enter Your Addres" />
                                <button onClick={() => setAddres(text)}>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} /> Find food
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}