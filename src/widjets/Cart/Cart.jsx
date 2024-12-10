import { useState } from "react";
import useStoreCart from "../../Store/CartStore/CartStore";
import '../../app/styles/substrate/substrate.scss';
import '../../app/styles/widjets/Cart/Cart.scss';


export default function Cart() {

  const { cartStore } = useStoreCart();

  const [isCartOpen, setIsCartOpen] = useState(false);
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };



  return (
    <>

      <div className='cart-block' onClick={toggleCart}>
        <div className='rounded-btn'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" /></svg>
        </div>

      </div>

      <div className={`ss ${isCartOpen ? 'open' : ''}`}>
        <h2>Корзина</h2>
        {cartStore.length === 0 ? (
          <p>Корзина пуста</p>
        ) : (
          <ul>
            {cartStore.map(item => (
              <li key={item.id}>
                <span>{item.name}</span> — <span>{item.quantity} шт.</span>
                <button >Удалить</button>
              </li>
            ))}
          </ul>
        )}

        {isCartOpen && (
          <div className="close-btn" onClick={toggleCart}></div>
        )}

        <button >Очистить корзину</button>
      </div>
    </>
  )
}
