import Banner from "../widjets/banner/Banner"
import useStoreCart from "../Store/CartStore/CartStore"
import { products_item } from "../Products";



export default function Home() {
  const { addItemToCart } = useStoreCart();

  
  
  return (
    <div>

      <Banner />
      <div>
        <h2>Товары</h2>
        <ul>
          {products_item.map((product) => (
            <li key={product.id}>
              {product.name} — {product.price}₽
              <button onClick={() => addItemToCart(product)}>Добавить в корзину</button>
            </li>
          ))}
        </ul>
      </div>



    </div>
  )
}
