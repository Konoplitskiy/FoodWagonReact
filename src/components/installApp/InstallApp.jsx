import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faApple, faGooglePlay} from '@fortawesome/free-brands-svg-icons';
import "./installApp.css"

export default function InstallApp() {
    const burronRedirect = (url) => {
            const usedConfirm = window.confirm('Ви дійсно хочете перейти на інший сайт?')
            if (usedConfirm) {
                window.open(url, '_blank')
            }
    }
    return (
        <>
            <div className="container-install-app ">
                <div className="info-install-app">
                    <img src="../../src/assets/images/installAppImg/discountInstall.png" alt="" />
                    <span className="color-text-install">Daily <br /> Discount</span>
                    <hr className='' />
                    <img src="../../src/assets/images/installAppImg/mapInstall.png" alt="" />
                    <span className="color-text-install">Live <br /> Tracing</span>
                    <hr className=''/>
                    <img src="../../src/assets/images/installAppImg/timeInstall.png" alt="" />
                    <span className="color-text-install">Quick <br />Delivery</span>
                </div>
                <div className="button-install-app">
                    <img src="../../src/assets/images/installAppImg/appPhone.png" alt="" />
                    <div className="text-install-app">
                        <span className="one-text-install">Install the app</span>
                        <span className="two-text-install">It's never been easier to order food. Look for the finest discounts and you'll be lost in a world of delectable food.</span>
                        <div className="button-cont-app">
                            <button onClick={() => burronRedirect('https://play.google.com/store/games')} className="button-install-click">
                                <FontAwesomeIcon className='icon-size-install' icon={faGooglePlay} />
                                <div className='info-button-install'>
                                    <span  className='button-action-text'>GET IN ON</span>
                                    <span className='button-store-name'>Google Play</span>
                                </div>
                            </button>
                            <button onClick={() => burronRedirect('https://apps.apple.com/ua/app/apple-store/id375380948')} className="button-install-click">
                                <FontAwesomeIcon className='icon-size-install' icon={faApple} />
                                 <div className='info-button-install'>
                                    <span className='button-action-text'>Dowland on the</span>
                                    <span className='button-store-name'>App Store</span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}