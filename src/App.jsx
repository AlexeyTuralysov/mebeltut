

import Home from './Pages/Home';

import Contacts from './Pages/Contacts';
import AbouParner from './Pages/AbouParner';
import { Route, Routes } from 'react-router-dom'
import Header from './widjets/header/header';
import './app/styles/global/global.scss'

import Cart from './widjets/Cart/Cart';
import Detail from './Pages/Detail';
import Delivery from './Pages/Delivery';
function App() {



  return (
    <>
      <Cart />

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/partner" element={<AbouParner />} />
        <Route path="/delivery" element={<Delivery />} />


        <Route path="/product/:id" element={<Detail />} />


      </Routes>
    </>

  )
}

export default App
