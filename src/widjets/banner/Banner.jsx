import './../../app/styles/widjets/bannerMotion/banner.scss'
import { products_item } from '../../Products';
import Product from '../product/product';

export default function Banner() {
  return (
    <div className='banner'>
      <img className='banner-img' src="\public\Group 27.png" alt="" />


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
