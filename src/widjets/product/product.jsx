import React from 'react'
import '../../app/styles/widjets/product/product.scss'
import useStoreCart from '../../Store/CartStore/CartStore'
import { Link } from 'react-router-dom';

//<button onClick={() => addItemToCart(product)}>Добавить в корзину</button>


export default function Product({ product, id, name, img, price }) {
    const { addItemToCart } = useStoreCart();
    return (
        <div className='product-block'>
            <Link to={'/product/' + id}>
                <div className='product-image'>
                    <img src={img} alt={name} />
                </div>

                <div className='product-main-info'>
                    <span>{name}</span>
                    <h2>{price} ₽</h2>
                    
                </div>

                
            </Link>
            <button className="add-to-cart" onClick={() => addItemToCart(product) }>В корзину</button>
        </div>
    )
}
