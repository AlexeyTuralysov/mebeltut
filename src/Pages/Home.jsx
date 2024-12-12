import Banner from "../widjets/banner/Banner"
import { products_item } from "../Products";
import Product from "../widjets/product/product";


export default function Home() {




  return (
    <div>

      <Banner />
      <div>


        <div className="catalog">
          <h2>Каталог</h2>
          <div className="catalog-products">
            {products_item.map((product) => (
              < div key={product.id}>

                <Product product={product} id={product.id} name={product.name} price={product.price} img={product.preview} />





              </div>

            ))}
          </div>


        </div>




      </div>



    </div>
  )
}
