import React, { Component } from "react";
import axios from "axios";
import DeathwishStyles from "./Deathwish.css";
import skull from "../../icons/skull.png";
import { Link } from "react-router-dom";

class Deathwish extends Component {
  constructor() {
    super();
    this.state = {
      coffee: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:3001/api/getDeathwish").then(results => this.setState({ coffee: [...results.data] }));
  }

  render() {
    return (
      <div className="Deathwish-wrapper">
        {this.state.coffee.map(coffee => {
          return (
            <div>
              <img src={coffee.coffee_pic} className="coffee-bag" />
              <div className="crud-btn">
                <Link to="/editDeathwish">
                  <button>edit</button>
                </Link>
                <Link to="/deleteDeathwish">
                  <button>delete</button>
                </Link>
              </div>

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

              <button>ADD TO CART</button>
              <p className="high-caffeine">DEATH WISH COFFEE COMPANY: STRONG, HIGH-CAFFEINE COFFEE WITH LOW ACIDITY</p>

              <div className="left-text">
                <p>THE WORLDS STRONGEST COFFEE</p>
                <p>{coffee.description}</p>
              </div>

              <p>
                <img className="skull" src={skull} alt="skull" />WARNING: HIGHLY ADDICTIVE
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Deathwish;
