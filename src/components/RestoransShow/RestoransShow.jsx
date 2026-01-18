import { restorans } from '../../data.js'
import { useState } from 'react'
import './RestoransShow.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faTag, faClock, faStar } from '@fortawesome/free-solid-svg-icons';


export default function RestoransShow() {
  const [showAll, setShowAll] = useState(false);
  const displayRestorans = showAll ? restorans : restorans.slice(0, 4);
  const toggleShowAll = () => {
    setShowAll(prev => !prev);
  }
  const getButtonClass = (text) => {
    return text.length > 12 ? 'button-long' : 'button-short';
  };

  return (
    <>
      <div className='main-cont-show'>
        <h3>Featured Restaurants</h3>
        <div className='container-restorans-show'>
          {displayRestorans.map(item => (
            <div className='card-main-cont' key={item.id}>
              <img src={item.img} alt="Image Featured Restaurants" />
              <div className='card-position'>
                <p className='color-one-position'><FontAwesomeIcon icon={faTag} /> {item.discount}% {item.off}</p>
                <p className='color-two-position'><FontAwesomeIcon icon={faClock} /> {item.fast} </p>
              </div>
              <div className='cont-mini-img'>
                <img src={item.imgMini} alt="Img mini restorans" />
                <div className='text-mini-img'>
                  <p className='under-text-img'>{item.nameRest}</p>
                  <p className='star-img-mini'> <FontAwesomeIcon icon={faStar} /> {item.rating}</p>
                </div>
              </div>
              <span className={`restaurant-action-button ${getButtonClass(item.button)}`}>
                {item.button}
              </span>
            </div>
          ))}
        </div> <button onClick={toggleShowAll} className='button-show'> {showAll ? 'View Less' : 'View All'}   <FontAwesomeIcon icon={faAngleRight} /></button>
      </div>
    </>
  )
}