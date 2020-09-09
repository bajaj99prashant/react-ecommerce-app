import React from 'react';
import './header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from 'react-router-dom';
import {useStateValue} from "./StateProvider";

function Header() {
    const [{ cart }, dispatch] = useStateValue();

    return (
        <div className="header">
            <Link to="/">
                <img className="header_logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            </Link>
            <div className="header_search">
                <input className="header_searchIn" type="text"/>
                <SearchIcon className="header_searchIcon" />
            </div>
            <div className="header_nav">
                <div className="header_option">
                    <span className="header_option1">Hello, Guest</span>
                    <span className="header_option2">Sign in</span>
                </div>
                <div className="header_option">
                    <span className="header_option1">Return</span>
                    <span className="header_option2">&amp; Orders</span>
                </div>
                <div className="header_option">
                    <span className="header_option1">Your</span>
                    <span className="header_option2">Wishlist</span>
                </div>
                <Link to="/checkout">
                    <div className="header_option">
                        <span className="header_option_number">{ cart?.length }</span>
                        <ShoppingCartIcon className="header_cart" />
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Header;
