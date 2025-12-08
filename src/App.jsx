import Header from './components/Header/Header'
import Find from './components/Find/Find'
import DiscountFood from './components/DiscountFood/DiscountFood'
import DoesWork from './components/DoesWork/DoesWork.jsx';
import Slider from './components/Slider/Slider.jsx';
import { vage, doesWork } from './data.js'
import { useState } from 'react'
import './components/DiscountFood/CardsContainer.css';
import './App.css'

function App() {
  const [addres, setAddres] = useState('');
  const [deliveryType, setDeliveryType] = useState("Delivery");
  const [counterBasket, setCounterBasket] = useState(0)
  return (
    <>
      <Header addres={addres} deliveryType={deliveryType} basket={counterBasket} />
      <Find setAddres={setAddres} deliveryType={deliveryType} setDeliveryType={setDeliveryType} />
      <div className='card-cont'>
        {vage.map((vage) => <DiscountFood key={vage.id} data={vage} counter={setCounterBasket} />)}
      </div>
      <div className='cont-does-work'>
        <p>How does it work</p>
        <div className='section-does-work'>
        {doesWork.map((work) => <DoesWork key={work.id} work={work} />)}
        </div>
      </div>
      <Slider counter={setCounterBasket} />
    </>
  )
}

export default App
