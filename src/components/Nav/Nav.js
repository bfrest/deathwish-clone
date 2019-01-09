import React from "react";
import NavStyles from "./NavStyles.css";
import shoppingCarLogo from "../../icons/shopping-cart.png";

const Nav = () => {
  return (
    <div className="Nav-container">
      <p>MENU</p>
      <img className="deathwish-logo" src="https://res.cloudinary.com/bfrest/image/upload/v1546996267/Screen_Shot_2019-01-08_at_6.05.11_PM.png" alt="logos" />
      <img className="shoppingcart-logo" src={shoppingCarLogo} alt="shopping cart" />
    </div>
  );
};

export default Nav;
