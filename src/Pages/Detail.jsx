  import React from 'react'
  import { useParams } from 'react-router-dom'
  import { products_item } from '../Products';
  import './../app/styles/widjets/deatil/detail.scss'
  import AddToCart from '../widjets/btn/btn-addcart';


  export default function Detail() {
    const params = useParams();
    const prodId = parseInt(params.id);
    const product = products_item.find((item) => item.id === prodId);

    return (
      <>
        {product ? (
          <div key={product.id} className='detail-parent'>
            <div className='image-preview'>
              <img src={product.preview} alt="" />

            </div>



            <div className='detail-info'>


              <div className='name-price'>
                <h1>{product.name}</h1>
                <span>{product.price} ₽</span>
              </div>

              <div className='detail-descr'>
              <h3>Цвет</h3>
                <div className='detail-info-colors'>

                  {product.color.map((color, index) => (
                    <div key={index} style={{ backgroundColor: color  }} className='color-swatch'>
                    
                    </div>
                  ))}




                  
                </div>
                <h3>О товаре</h3>
                <span>{product.description}</span>
                <AddToCart product={product} />
                  

              </div>

            </div>

          </div>



        ) : (
          <p>Продукт не найден</p>
        )}
      </>
    );
  }