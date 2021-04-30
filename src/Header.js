// components names always begin with capital letters
//rfce -> shortcut used
//material ui -> user for the icons required

import React from "react";
import "./Header.css";

// importing the link tag from the react router
//we can make use of the anchor tag but the router provides us this facility without a page refresh
import { Link } from "react-router-dom";

//importing the search icon from material UI
import SearchIcon from '@material-ui/icons/Search';

//importing the shopping basket icon from material UI
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from "./StateProvider";



function Header() {
    
    //using the data layer
    //dispatch is like a gun to shoot an item at the data layer
    //state and dispatch can be the parameters here
    const [{ basket }] = useStateValue();

    return (
        // nav tag used for the nav-bar we are building
        <nav className="header">
            {/* logo on left */}
            {/* image is clickable and takes us to the link provided by us */}
            <Link to="/">
                <img className="header__logo" src="https://www.mabaya.com/wp-content/uploads/2019/10/amazon_PNG25.png" alt=""/>
            </Link>

            {/* search box */}
            {/* put inside a div to keep them together */}
            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <SearchIcon className="header__searchIcon"/>
            </div>


            {/* 3 Links on the right along with the basket */}
            <div className="header__nav">
                {/* 1st link */}
                {/* inside link we have a div tag-> to keep the spans inside it together */}
                {/* we can use <p> tags but span is used to avoid the default styling they put in */}
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello</span>
                        <span className="header__optionLineTwo">Sign In</span>
                    </div>
                </Link>

                {/* 2st link */}
                <Link to="" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Return</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>

                {/* 3st link */}
                <Link to="" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>

                {/* 4st link contains the shopping basket and the number accompanying it*/}
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon/>
                        {/* we use a question mark as optional chaining because the basket for a small time in beggining is in an undefined state */}
                        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>

            </div>
            {/* basket icon with number representing number of items in cart */}
        </nav>
    )
}

export default Header
