import React, { Component } from "react";
import axios from "axios";
import DeathwishStyles from "./Deathwish.css";
import skull from "../../icons/skull.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateCoffee } from "../../ducks/reducer.js";

class Deathwish extends Component {
  constructor() {
    super();
    this.state = {
      coffee: []
    };
    this.deleteCoffee = this.deleteCoffee.bind(this);
  }

  componentDidMount() {
    axios.get("http://localhost:3001/api/getDeathwish").then(results => this.setState({ coffee: [...results.data] }));
  }

  deleteCoffee() {
    axios.delete("http://localhost:3001/api/deleteDeathwish").then(() => console.log("deleted"));
  }

  render() {
    // this will use redux to set the coffee to add to the state
    const { updateCoffee } = this.props;

    return (
      <div className="Deathwish-wrapper">
        {this.state.coffee.map(coffee => {
          return (
            <div className="deathwish-all" key={coffee.coffee_reference}>
              <div className="crud-button-with-img">
                <img src={coffee.coffee_pic} className="coffee-bag" />
                <Link to="/editDeathwish">
                  <button>edit</button>
                </Link>
                <Link to="/home">
                  <button onClick={this.deleteCoffee}>delete</button>
                </Link>
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
                  <img className="coffee-type" src="https://cdn.shopify.com/s/files/1/0271/7209/t/99/assets/ground.jpg?11144845398872562001" alt="ground coffee" />
                  <img className="coffee-type" src="https://cdn.shopify.com/s/files/1/0271/7209/t/99/assets/whole.jpg?11144845398872562001" alt="ground coffee" />
                </div>
                <div className="purchase-options-wrapper">
                  <p className="gray-background radio-text">
                    <input type="radio" />One-time purchase $19.99
                  </p>
                  <p className="radio-text">
                    <input type="radio" />Subscribe & Save 20%: $15.99
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

                {/* // ! create a function to add the image, name, and the price to redux to use in the shopping-cart */}
                <button
                  onClick={e => {
                    this.state.coffee.map(item => {
                      // I could not figure out how to get the values from state to set them as a variable without mapping it

                      const coffee_reference = item.coffee_reference;
                      const coffee_pic = item.coffee_pic;
                      const price = item.price;
                      updateCoffee(coffee_pic, coffee_reference, price);
                    });
                  }}>
                  ADD TO CART
                </button>
                <p className="high-caffeine">DEATH WISH COFFEE COMPANY: STRONG, HIGH-CAFFEINE COFFEE WITH LOW ACIDITY</p>

                <div className="left-text">
                  <p>THE WORLDS STRONGEST COFFEE</p>

                  <p>{coffee.description}</p>

                  <p>
                    <img className="skull" src={skull} alt="skull" />WARNING: HIGHLY ADDICTIVE
                  </p>
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
)(Deathwish);
