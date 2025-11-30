import Header from './components/Header/Header'
import Find from './components/Find/Find'
import './App.css'
import { use, useState } from 'react'

function App() {
  const [addres, setAddres] = useState('');
  const [deliveryType, setDeliveryType] = useState("Delivery");
  return (
    <>
      <Header addres={addres} deliveryType={deliveryType} />
      <Find
        setAddres={setAddres}
        deliveryType={deliveryType}
        setDeliveryType={setDeliveryType}
      />

    </>
  )
}

export default App
