import { useState } from 'react';

import { Link } from 'react-router-dom'
import "../../app/styles/widjets/header/header.scss"
import Logo from './../../assets/Layer_1.png'


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <div className='header'>
      <div className='logo'>
        <img src={Logo} alt="Logo" />
      </div>


      <div className="btn-menu" onClick={toggleMenu}>
        {!isMenuOpen && (
          <>
            <span></span>
            <span></span>
            <span></span>
          </>
        )}
      </div>

 
      <div className={`links-header ${isMenuOpen ? 'open' : ''}`}>

        {isMenuOpen && (
          <div className="close-btn" onClick={toggleMenu}></div>
        )}

        <Link to="/" onClick={() => setIsMenuOpen(false)}>Главная</Link>
        <Link to="/Contacts" onClick={() => setIsMenuOpen(false)}>Контакты</Link>
        <Link to="/delivery" onClick={() => setIsMenuOpen(false)}>О доставке</Link>
        <Link to="/partner" onClick={() => setIsMenuOpen(false)}>Партнеры</Link>
        <Link to="/profile" onClick={() => setIsMenuOpen(false)}>Профиль</Link>
      </div>

      <div className='profile'>
        <h1>7 (924)-745-58-19</h1>
      </div>
    </div>
  )
}
