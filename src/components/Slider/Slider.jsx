import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './Slider.css';
import { foods} from '../../data.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons';

export default function Slider({counter}) {
    function buyCounter() {
        counter(Count => Count +1)
    }

    return (
        <>
        <h3 className='slider-txt'> Popular items </h3>
        <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={5}
            slidesPerView={5}
            loop={true}
            className="custom-swiper"
        >
            <div>
            {foods.map(item => (
                <SwiperSlide key={item.id}>
                    <div className="card">
                        <img src={item.img} alt="photo-card-wraper" />
                        <span className='title-swiper'>{item.title}</span>
                        <span className='location-swiper'>  <FontAwesomeIcon icon={faLocationDot} />{item.location}</span>
                        <span className='price-swiper'>${item.price}</span>
                        <button onClick={buyCounter} className='button-slider'>Order Now</button>
                    </div>
                </SwiperSlide>
            ))}
            </div>
        </Swiper>
        </>
    )
}