

import Home from './Pages/Home';

import Contacts from './Pages/Contacts';
import Aboutdelyvey from './Pages/Aboutdelyvey';
import { Route, Routes } from 'react-router-dom'
import Header from './widjets/header/header';
import './app/styles/global/global.scss'

import Cart from './widjets/Cart/Cart';
function App() {


  return (
    <>
      <Cart />

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/delivery" element={<Aboutdelyvey />} />


      </Routes>
    </>

  )
}

export default App
