import React from 'react';
import './subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';

function Subtotal() {
    const [{cart}, dispatch] = useStateValue();
    return (
        <div className="subtotal">
           <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            {/* part to be done */}
                            Subtotal ({cart.length} items):
                            <strong>{cart.reduce((prev, next) => prev + next.price, 0)}</strong>
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox"/> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale = {2}
                value = {0} // part to be done
                displayType={"text"}
                thousandSeperator={true}
                prefix={'₹'}
            /> 
            <button>Proceed to Checkout</button>
        </div>
    );
}

export default Subtotal;
