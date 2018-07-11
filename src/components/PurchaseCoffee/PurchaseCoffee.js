import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PurchaseCoffeeStyles from "./PurchaseCoffeeStyles.css";

class PurchaseCoffee extends Component {
  constructor() {
    super();

    this.state = {
      coffee: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:3001/api/getAllCoffee").then(results => {
      this.setState({ coffee: [...results.data] });
      console.log(results.data);
    });
  }

  render() {
    const listOfCoffee = this.state.coffee.map(item => {
      return (
        <div className="coffee-list">
          <Link to={item.coffee_reference}>
            <img src={item.coffee_pic} />
          </Link>
          <p>{item.coffee_name}</p>
          <p>- ${item.price}.99</p>
        </div>
      );
    });

    return (
      <div className="purchase-coffee-wrapper">
        <div className="purchase-header">
          <h3>
            <strong>Coffee</strong>
          </h3>
          <div className="blackLine" />
          <p>
            <strong>World's strongest coffee</strong>
          </p>
          <p>Free Shipping on alll orders over $50. 100% money back guarantee if it's not the stringest coffee you've ever had.</p>
        </div>
        {listOfCoffee}
      </div>
    );
  }
}

export default PurchaseCoffee;
