import "../../app/styles/widjets/btn/btn.scss"

import { FaPlus } from "react-icons/fa";
import useStoreCart from '../../Store/CartStore/CartStore';


export default function AddToCart({ product }) {
  const { addItemToCart } = useStoreCart();

  return (
    <div className='block-btn'>

      <button onClick={() => addItemToCart(product)} className='counter-button'>
        <FaPlus />
      </button>
      <span>Добавить в корзину</span>



    </div>
  )
}
