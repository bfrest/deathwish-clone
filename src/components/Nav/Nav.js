import React from "react";
import NavStyles from "./NavStyles.css";
import shoppingCarLogo from "../../icons/shopping-cart.png";

const Nav = () => {
  return (
    <div className="Nav-container">
      <p>MENU</p>
      <img className="deathwish-logo" src="https://cdn.shopify.com/s/files/1/0271/7209/t/99/assets/logo_svg.svg?2939705249316593302" alt="logo" />
      <img className="shoppingcart-logo" src={shoppingCarLogo} alt="shopping cart" />
    </div>
  );
};

export default Nav;
