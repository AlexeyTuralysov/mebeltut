import '../app/styles/page/profile.scss'
import useStoreCart from '../Store/CartStore/CartStore'
import '../app/styles/widjets/Cart/Cart.scss'


export default function Profile() {
    const { cartStore, totatPrice, removeToCart, decreaseQuantity, increaseQuantity } = useStoreCart();
    return (

        <div className="profile-page">

            <div className="profile-container">
                <div className='profile-name'>

                </div>

                <div className="profile-substrate">
                </div>
            </div>


           
                {cartStore.length === 0 ? (
                    <p>Корзина пуста</p>
                ) : (






                    <ul>
                        {cartStore.map(item => (



                            <div key={item.id} className="block-product">
                                <div className="image-product">
                                    <img src={item.preview} alt="" />
                                </div>

                                <div className="info-product">
                                    <h3>{item.name}</h3>
                                    <h4>{item.price} ₽</h4>



                                    <div className="counter-container">
                                        <button className="counter-button" onClick={() => decreaseQuantity(item.id)} >-</button>
                                        <span className="counter-value">{item.quantity}</span>
                                        <button className="counter-button" onClick={() => increaseQuantity(item.id)}>+</button>
                                    </div>


                                </div>

                                <div className="close-btns" onClick={() => removeToCart(item.id)}></div>


                            </div>




                        ))}
                    </ul>


                )}

            </div>

        


    )
}
