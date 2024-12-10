import { useState } from "react";
import useStoreCart from "../../Store/CartStore/CartStore";
import '../../app/styles/widjets/Cart/Cart.scss'

export default function Cart() {

  const { cartStore } = useStoreCart();

  const [isCartOpen, setIsCartOpen] = useState(false);
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };



  return (
    <>

      <div>
        <button onClick={toggleCart}>открыть</button>
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
