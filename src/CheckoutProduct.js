import React from 'react';
import './checkoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({id, image, title, rating, price}) {
    const [{cart}, dispatch] = useStateValue();

    const removeFromCart = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id
        })
    }
    return (
        <div className="checkout_product">
            <img className="checkout_product_image" src={image} />
            <div className="checkout_product_info">
                <p className="checkout_product_title">{title}</p>
                <p className="checkout_product_price">
                    <small>₹ </small>
                    <strong>{price}</strong>
                </p>
                <div className="checkout_product_rating">
                    {Array(rating).fill().map((_, i)=>(
                        <p>⭐</p>
                    ))}
                </div>
                <button onClick={removeFromCart}>Remove from Cart</button>
            </div>
        </div>
    );
}

export default CheckoutProduct;
