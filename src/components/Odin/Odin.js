import React, { Component } from "react";
import axios from "axios";
//import OdinStyles from "./Odin.css";
// import skull from "../../icons/skull.png";
// import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import { connect } from "react-redux";
import { updateCoffee } from "../../ducks/reducer.js";

class Odin extends Component {
  constructor() {
    super();
    this.state = {
      coffee: [],
      adminCode: "caffeine",
      toEdit: false
    };

    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.coffeeEdit = this.coffeeEdit.bind(this);
  }

  componentDidMount() {
    axios.get("http://localhost:3001/api/getOdin").then(results => this.setState({ coffee: [...results.data] }));
  }

  // this function will add the item to the cart using redux, and show and hide the success message
  handleAddToCart(e) {
    // this will use redux to set the coffee to add to the state
    const { updateCoffee } = this.props;
    const messageBox = document.querySelector(".message");

    this.state.coffee.map(item => {
      // I could not figure out how to get the values from state to set them as a variable without mapping it
      const coffee_reference = item.coffee_reference;
      const coffee_pic = item.coffee_pic;
      const price = item.price;
      updateCoffee(coffee_pic, coffee_reference, price);
    });

    // below, it will show the success message for 2.3 seconds, then slides it out
    messageBox.classList.add("message-open");
    setTimeout(() => {
      messageBox.classList.remove("message-open");
    }, 2300);
  }

  coffeeEdit() {
    const { adminCode } = this.state;
    const adminCodeInput = document.querySelector(".secretInput");
    if (adminCodeInput.value === adminCode) {
      // redirect to the edit page
      this.setState({ toEdit: true });
    } else {
      alert("YOU SHALL NOT PASS!");
    }
  }

  toggleAdminForm(e) {
    const adminInput = document.querySelector(".adminInput");
    adminInput.classList.toggle("open-admin-form");
  }

  render() {
    if (this.state.toEdit === true) {
      return <Redirect to="/editDeathwish" />;
    }

    return (
      <div className="Deathwish-wrapper">
        <div className="message">
          <p>Added to Cart</p>
        </div>

        {this.state.coffee.map(coffee => {
          return (
            <div className="deathwish-all" key={coffee.coffee_reference}>
              <div className="crud-button-with-img">
                <img src={coffee.coffee_pic} className="coffee-bag" onDoubleClick={this.toggleAdminForm} alt="bag of coffee" />

                <div className="adminInput">
                  <label htmlFor="admin-password">Admin Password</label>
                  <input type="password" name="admin-password" className="secretInput" />
                  <button onClick={this.coffeeEdit}>Enter</button>
                  <button onClick={this.toggleAdminForm}>Cancel</button>
                </div>
              </div>

              <div className="coffee-info">
                <p className="coffee-header">{coffee.coffee_name}</p>
                <p>${coffee.price}.99</p>
                <p className="red-text">FREE DOMESTIC SHIPPING OVER $50</p>
                <p className="select-size">Select Size</p>
                <div className="coffee-size-btns">
                  <button>1 POUND</button>
                  <button>2 POUND</button>
                  <button>5 POUND</button>
                </div>

                <div className="grind-wrapper">
                  <p>Select Grind</p>
                  <img className="coffee-type" src="https://res.cloudinary.com/bfrest/image/upload/v1547036310/grounds.jpg" alt="ground coffee" />
                  <img className="coffee-type" src="https://res.cloudinary.com/bfrest/image/upload/v1547036310/whole.jpg" alt="ground coffee" />
                </div>

                <div className="purchase-options-wrapper">
                  <p className="gray-background radio-text">
                    <input type="radio" />
                    One-time purchase $19.99
                  </p>
                  <p className="radio-text">
                    <input type="radio" />
                    Subscribe & Save 20%: $15.99
                  </p>
                  <p>
                    Deliver every
                    <select>
                      <option>7 Days</option>
                      <option>14 Days</option>
                      <option>30 Days</option>
                      <option>60 Days</option>
                    </select>
                  </p>
                </div>

                <button className="addButton" onClick={this.handleAddToCart}>
                  ADD TO CART
                </button>

                <p className="high-caffeine">DEATH WISH COFFEE COMPANY: STRONG, HIGH-CAFFEINE COFFEE WITH LOW ACIDITY</p>

                <div className="left-text">
                  <p>THE WORLDS STRONGEST COFFEE</p>

                  <p>{coffee.description}</p>

                  <li>{coffee.bullet1}</li>
                  <li>{coffee.bullet2}</li>
                  <li>{coffee.bullet3}</li>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { coffee_pic, coffee_name, price } = state;
  return {
    coffee_pic,
    coffee_name,
    price
  };
}

export default connect(
  mapStateToProps,
  { updateCoffee }
)(Odin);
