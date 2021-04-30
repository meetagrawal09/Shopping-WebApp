import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from "./StateProvider";

// the parameters should be in curly braces
function CheckoutProduct({id,title,image,price,rating}) {
    const [, dispatch] = useStateValue();

    const removeFromBasket=()=>{
        //remove from basket
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id
        })
    }
    
    
    
    return (

        <div className="checkoutProduct">
            <img className="checkoutProduct__image"src={image} alt=""/>

            
            <div className="checkoutProduct__info">

                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>

                    {/* strong tag for the boldness */}
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        // make array of size of rating
                        Array(rating)
                        .fill()   //fill the array with empty characters
                        //we loop through the array  printing the star 5 times
                        .map((_)=>(<p>
                            ★
                        </p>))
                    }
                </div>
                <button onClick={removeFromBasket}>
                    Remove from basket
                </button>

            </div>
        </div>
    )
}

export default CheckoutProduct
