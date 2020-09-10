import React from 'react';
import Subtotal from './Subtotal';
import './checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';

function Checkout() {
    const [{cart, user}, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" />
                <div>
                    <h3>Hey, {user?.email}</h3>
                    <h2 className="checkout_title">Your shopping Cart</h2>
                    {cart.map((product,i) => (
                        <CheckoutProduct key={i} id={product.id} title={product.title} image={product.image} rating={product.rating} price={product.price}/>
                    ))}
                </div>
            </div>
            <div className="checkout_right">
                <Subtotal />
            </div>
        </div>
    );
}

export default Checkout;
