import React from 'react'
import { useStateValue } from "./StateProvider";

//as here we only need the data in the basket we do not use dispatch in the array we just get the basket
import "./Checkout.css";

import CheckoutProduct from "./CheckoutProduct"

import Subtotal from './Subtotal';


function Checkout() {

    const [{ basket }] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://visme.co/blog/wp-content/uploads/2019/08/header-1.gif" alt=""/>


                {/* if else statement */}
                {basket?.length === 0 ?  (
                    <div>
                        <h2>Your Shopping Basket is empty</h2>
                    </div>
                ) : (
                    <div>
                        <h2 className="checkout__title">Your Shopping Basket</h2>

                        {/* list of checkout products */}
                        {basket.map(item =>(
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))

                        }
                    </div>
                )

                }
            </div>

            {basket.length>0&&(
                <Subtotal/>
            )}
        </div>
    )
}

export default Checkout
