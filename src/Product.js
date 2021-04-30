import React from 'react';
import './Product.css';
import { useStateValue } from "./StateProvider";
// we have this function taking in the product details as parameters-> use props 
//or we can put in the parameter names
//parameters here can have any order- in curly braces
//every place we want to address a variable's value we write it in curly braces




function Product( {id,title,price,rating,image} ) {

    const [, dispatch] = useStateValue();
    //function for adding to basket
    const addToBasket=()=>{
        //add item to basket
        //we use the dispatch as a gun
        dispatch({
            type:'ADD_TO_BASKET',
            item: {
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating,
            },
        })
    };



    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>

                    {/* strong tag for the boldness */}
                    <strong>{price}</strong>
                </p>

                {/* We have the rating being passed as a number so we loop throw that number and print stars that many times */}
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
            </div>
            
            <img src={image} alt=""/>
            <button onClick={addToBasket}>Add to Basket</button>

        </div>

    )
}

export default Product
