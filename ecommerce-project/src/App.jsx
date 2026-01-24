
import { Routes, Route } from 'react-router'

import { HomePage } from './pages/HomePage'

import './App.css'
import { CheckoutPage } from './pages/CheckOut'

function App() {
 
return (

  <Routes>
    <Route path="/" element={<HomePage/>} />
    <Route path="checkout" element={<CheckoutPage/>}/>
  </Routes>
  

)
}

export default App
