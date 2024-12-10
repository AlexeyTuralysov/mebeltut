import Banner from "../widjets/banner/Banner"
import useStoreCart from "../Store/CartStore/CartStore"

export default function Home() {
  const { addItemToCart } = useStoreCart();

  
  const products = [
    { id: 1, name: 'Товар 1', price: 100 },
    { id: 2, name: 'Товар 2', price: 200 },
    { id: 3, name: 'Товар 3', price: 300 },
  ];
  return (
    <div>

      <Banner />
      <div>
        <h2>Товары</h2>
        <ul>
          {products.map((product) => (
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
