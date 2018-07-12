import React, { Component } from "react";
import ShoppingCartStyles from "./ShoppingCart.css";
import { connect } from "react-redux";

class ShoppingCart extends Component {
  render() {
    let cart;
    let quantity = 2;

    // not sure why its refering to the props and coffee_name ????
    const { coffee_name, coffee_pic, price } = this.props.coffee_name;

    if (this.props.coffee_pic === "") {
      cart = <p>Your cart is empty</p>;
    } else {
      cart = (
        <div className="cart-items-wrapper">
          <img src={coffee_pic} alt="coffee image" />
          <p>
            {coffee_name}
            <br /> ${price}.00
          </p>
          <div>
            <button>-</button>
            <input defaultValue={quantity} />
            <button>+</button>
          </div>
          <h1>Total: ${price * quantity}.00</h1>
        </div>
      );
    }

    return (
      <div className="Shopping-cart-wrapper">
        <p className="close-cart" onClick={this.props.closeCartFunction}>
          X
        </p>
        <h2>Your Cart</h2>
        {cart}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    coffee_pic: state.coffee_pic,
    coffee_name: state.coffee_name,
    price: state.price
  };
}

export default connect(mapStateToProps)(ShoppingCart);
