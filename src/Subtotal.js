import React from 'react'

import './Subtotal.css'

import { useStateValue } from "./StateProvider";

//for the react-currency-format look up the docs
import CurrencyFormat from "react-currency-format";

function Subtotal() {

    const [{ basket }] = useStateValue();

    //loop through the basket to get the total

    const getBasketTotal=()=>{
        let total=0;
        for(let i=0;i<basket.length;i++)
        {
            total=total+basket[i].price;
        }
        return total;
    }

    return (
        <div className="subtotal">
            {/* price and button */}
           
            <CurrencyFormat 
                renderText = {(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal()}
                displayType={"text"}

                //thousands 
                thousandSeparator={true}
                prefix={"$"}
            />

            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal;
