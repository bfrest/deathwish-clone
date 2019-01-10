import React, { Component } from "react";
import "./ShoppingCart.css";
import { connect } from "react-redux";

class ShoppingCart extends Component {
  constructor() {
    super();

    this.state = {
      quantity: 1
    };
    this.incrementQuantity = this.incrementQuantity.bind(this);
    this.decrementQuantity = this.decrementQuantity.bind(this);
  }

  incrementQuantity() {
    this.setState({ quantity: this.state.quantity + 1 });
  }

  decrementQuantity() {
    this.setState({ quantity: this.state.quantity - 1 });
  }

  render() {
    let cart;
    const { quantity } = this.state;

    // not sure why its refering to coffee_name instead of coffee.coffee_name????
    const { coffee_name, coffee_pic, price } = this.props.coffee_name;

    // if the cart is empty show a div that says it's empty else show the items in the cart
    if (this.props.coffee_pic === "") {
      cart = <p className="empty-cart">Your cart is empty</p>;
    } else {
      cart = (
        <div className="cart-items-wrapper">
          <img className="cartImg" src={coffee_pic} alt="coffee bag" />
          <p>
            {coffee_name}
            <br /> ${price}.99
          </p>

          <div className="quantity">
            <button onClick={this.decrementQuantity}>-</button>
            <input className="coffeeNumber" value={this.state.quantity} />
            <button onClick={this.incrementQuantity}>+</button>
          </div>

          <h1>Total: ${price * quantity}.99</h1>
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
