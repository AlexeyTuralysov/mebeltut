
import './../app/styles/substrate/substrate.scss';
import './../app/styles/widjets/map/Map.scss';
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import MapComponent from '../widjets/mapWidjet/Mapadd';
import { FaInstagram,FaVk } from "react-icons/fa6";



export default function Contacts() {
  return (
    <div className='container'>
      <div className='substrate-box'>
        <MapComponent /> 

        <div className='information'>
          <div className='social-media-box'>
            <div className='substrate-box-socialmedia'>
              <span><FaInstagram /></span>
            </div>
            <div className='substrate-box-socialmedia'>
              <FaVk/>
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
