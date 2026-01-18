import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faHeart, faCopyright } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';
import { useState } from 'react';

export default function Footer() {
    const [inputValue, setInputValue] = useState('')
    const handleChange = (event) => {
        setInputValue(event.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue === '') {
            window.alert('Поле пусте введіть свій E-Mail')
        }
        else {
            setInputValue('');
            window.alert('Ви відправили свій E-Mail')
        }
    };

    return (
        <div className="main-footer-style">
            <div className="footer-container">

                <div className="footer-section cities-section">
                    <span className="footer-title">Our top cities</span>
                    <div className="info-footer-city">
                        <ul>
                            <li>San Francisco</li>
                            <li>Miami</li>
                            <li>San Diego</li>
                            <li>East Bay</li>
                            <li>Long Beach</li>
                        </ul>
                        <ul>
                            <li>Los Angeles</li>
                            <li>Washington DC</li>
                            <li>Seattle</li>
                            <li>Portland</li>
                            <li>Nashville</li>
                        </ul>
                        <ul>
                            <li>New York City</li>
                            <li>Orange County</li>
                            <li>Atlanta</li>
                            <li>Charlotte</li>
                            <li>Denver</li>
                        </ul>
                        <ul>
                            <li>Chicago</li>
                            <li>Phoenix</li>
                            <li>Las Vegas</li>
                            <li>Sacramento</li>
                            <li>Oklahoma City</li>
                        </ul>
                        <ul>
                            <li>Columbus</li>
                            <li>New Mexico</li>
                            <li>Albuquerque</li>
                            <li>New Orleans</li>
                        </ul>
                    </div>
                </div>

                <hr className="line-footer" />

                <div className="footer-links-and-subscribe">
                    <div className="footer-columns">
                        <div className='flexbox-footer'>

                            <div className="footer-column">
                                <h4>Company</h4>
                                <ul>
                                    <li>About us</li>
                                    <li>Team</li>
                                    <li>Careers</li>
                                    <li>Blog</li>
                                </ul>
                            </div>

                            <div className="footer-column">
                                <h4>Contact</h4>
                                <ul>
                                    <li>Help & Support</li>
                                    <li>Partner with us</li>
                                    <li>Ride with us</li>
                                </ul>
                            </div>

                            <div className="footer-column">
                                <h4>Legal</h4>
                                <ul>
                                    <li>Terms & Conditions</li>
                                    <li>Refund & Cancellation</li>
                                    <li>Privacy Policy</li>
                                    <li>Cookie Policy</li>
                                </ul>
                            </div>
                        </div>

                        <div className="footer-column follow-column">
                            <h4>Follow Us</h4>
                            <div className="social-icons">
                                <FontAwesomeIcon icon={faInstagram} />
                                <FontAwesomeIcon icon={faFacebook} />
                                <FontAwesomeIcon icon={faTiktok} />
                            </div>

                            <p className="subscribe-text">Receive exclusive offers in your mailbox</p>

                            <form className="subscribe-form" onSubmit={handleSubmit}>
                                <input
                                    type="email"
                                    placeholder="Enter Your email"
                                    className="input-footer-style"
                                    value={inputValue}
                                    onChange={handleChange}
                                />
                                <button  type="submit" className="button-footer">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <hr className="line-footer" />

                <div className="footer-made-with">
                    <div className="footer-content">
                        <div className="gap-content-footer">
                            <span>All rights Reserved</span>
                            <FontAwesomeIcon icon={faCopyright} />
                            <span className="bold-footer-text">Your Company, </span>
                            <span className="bold-footer">2026</span>
                        </div>

                        <div className="gap-content-footer">
                            <span>Made with</span>
                            <FontAwesomeIcon className="hearts-style" icon={faHeart} />
                            <span>by</span>
                            <span className="bold-footer-text">Konoplitskiy</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}