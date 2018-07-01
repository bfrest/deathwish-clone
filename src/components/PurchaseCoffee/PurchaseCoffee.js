import React, { Component } from "react";
import axios from "axios";
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
          <img src={item.coffee_pic} />
          <p>{item.coffee_name}</p>
          <p>- ${item.price}.99</p>
        </div>
      );
    });

    return (
      <div className="purchase-coffee-wrapper">
        <p>
          <strong>Coffee</strong>
        </p>
        <hr />
        <p>World's strongest coffee</p>
        <p>Free Shipping on alll orders over $50. 100% money back guarantee if it's not the stringest coffee you've ever had.</p>
        {listOfCoffee}
      </div>
    );
  }
}

export default PurchaseCoffee;
