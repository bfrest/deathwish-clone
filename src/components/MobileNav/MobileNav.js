import React, { Component } from "react";
import MobileNavStyles from "./MobileNav.css";
import shoppingCarLogo from "../../icons/shopping-cart.png";
import { Link } from "react-router-dom";

class MobileNav extends Component {
  render() {
    return (
      <div className="mobileNav-container">
        {/* this is the navbar that is always showing*/}
        <div className="mobileNav">
          <p
            onClick={() => {
              const mobileNavList = document.querySelector(".mobileNav-list");
              mobileNavList.classList.add("open-nav");
            }}>
            MENU
          </p>
          <Link to="/">
            <img className="deathwish-logo" src="https://cdn.shopify.com/s/files/1/0271/7209/t/99/assets/logo_svg.svg?2939705249316593302" alt="logo" />
          </Link>
          <img className="shoppingcart-logo" src={shoppingCarLogo} alt="shopping cart" />
        </div>

        {/* slide-in left nav */}
        <div className="mobileNav-list">
          <p
            className="closeNav"
            onClick={() => {
              const mobileNavList = document.querySelector(".mobileNav-list");
              mobileNavList.classList.remove("open-nav");
            }}>
            X
          </p>
          <ul>
            <Link to="/coffee" className="nav-link">
              <li>Shop</li>
            </Link>
            <br />
            <Link to="/add-coffee" className="nav-link">
              <li>Add Coffee</li>
            </Link>
          </ul>
        </div>

        {/* slide-in right shopping cart */}
        <div className="shopping-cart">
          <p>Your Cart</p>
        </div>
      </div>
    );
  }
}

export default MobileNav;
