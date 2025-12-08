import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLocationDot,
    faUser,
    faBasketShopping,
    faUserCheck
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import logo from '../../assets/images/logoFoodWagon.png';

export default function Header({ addres, deliveryType, basket }) {

    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    const navigate = useNavigate();
    const navigateToLogin = () => navigate("/login");

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        navigate("/");
    }
    return (
        <>
            <div className='main-section'>
                <div className='food-wagon'>
                    <img src={logo} alt="FoodWagon" className="logo" />
                    <p className='color-food-p'>food<span className='color-wagon-p'>wagon</span></p>
                </div>

                <div className='location-foodwagon'>
                    <p className='text-bold-deliver'>{deliveryType} to:</p>
                    <FontAwesomeIcon className='location-icon' icon={faLocationDot} />
                    <p>Current Location</p>
                    <a className='href-header-location' href="https://www.canva.com/design/DAG53ihRwek/u29Cfxjp8Tff_8glExrV2A/edit?utm_content=DAG53ihRwek&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target='_blank'>
                        {addres ? addres : 'Enter your addres'}
                    </a>
                </div>

                <div className='login-and-bascet'>
                    <div className='bascet-position-relative'>
                    <FontAwesomeIcon className='bascet-icon' onClick={handleLogout} icon={faBasketShopping} />
                        <div className='bascet-position-absolute'>
                    <span>{basket}</span>
                        </div>
                    </div>
                    {isLoggedIn ? (
                        <FontAwesomeIcon className='bascet-icon' onClick={handleLogout} icon={faUserCheck} />
                    ) : (
                        <button onClick={navigateToLogin} type='button'>
                            <FontAwesomeIcon icon={faUser} /> Login
                        </button>
                    )}
                </div>
            </div>
        </>
    )
}
