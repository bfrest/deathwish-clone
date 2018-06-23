import React from "react";
import shoppingCart from "../../icons/shopping-Cart.png";

const Nav = () => {
  return (
    <div>
      <li>Shop</li>
      <li>About</li>
      <img src={shoppingCart} alt="a dope image" />
    </div>
  );
};

export default Nav;
