import './../../app/styles/widjets/bannerMotion/banner.scss'
import { products_item } from '../../Products';
import Product from '../product/product';

export default function Banner() {
  return (
    <div className='banner'>
      <img className='banner-img' src="https://i.pinimg.com/736x/9f/19/7b/9f197b9923666ed3f45d6a909a432e98.jpg" alt="" />


      <div className='product-frame'>
        {products_item.length > 0 && (
          <div key={products_item[0].id}>
            <Product
              product={products_item[0]}
              id={products_item[0].id}
              name={products_item[0].name}
              price={products_item[0].price}
              img={products_item[0].preview}
            />
          </div>
        )}
      </div>
    </div>
  )
}
