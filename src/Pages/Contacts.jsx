
import './../app/styles/substrate/substrate.scss';
import './../app/styles/widjets/map/Map.scss';
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import MapComponent from '../widjets/mapWidjet/Mapadd';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

export default function Contacts() {
  return (
    <div className='container'>
      <div className='substrate-box'>
        <MapComponent /> 

        <div className='information'>
          <div className='social-media-box'>
            <div className='substrate-box-socialmedia'>
              <span><FontAwesomeIcon icon={faCoffee} /></span>
            </div>
            <div className='substrate-box-socialmedia'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M31.5 63.5C0 95 0 145.7 0 247V265C0 366.3 0 417 31.5 448.5C63 480 113.7 480 215 480H233C334.3 480 385 480 416.5 448.5C448 417 448 366.3 448 265V247C448 145.7 448 95 416.5 63.5C385 32 334.3 32 233 32H215C113.7 32 63 32 31.5 63.5zM75.6 168.3H126.7C128.4 253.8 166.1 290 196 297.4V168.3H244.2V242C273.7 238.8 304.6 205.2 315.1 168.3H363.3C359.3 187.4 351.5 205.6 340.2 221.6C328.9 237.6 314.5 251.1 297.7 261.2C316.4 270.5 332.9 283.6 346.1 299.8C359.4 315.9 369 334.6 374.5 354.7H321.4C316.6 337.3 306.6 321.6 292.9 309.8C279.1 297.9 262.2 290.4 244.2 288.1V354.7H238.4C136.3 354.7 78 284.7 75.6 168.3z"/>
              </svg>
            </div>
          </div>

          <div className='social-media-contacts'>
            <h2><FaPhoneAlt />7 (924)-745-58-19</h2>
            <h2><IoMdMail />mebeltut@mail.ru</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
