import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./PurchaseCoffeeStyles.css";

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
    });
  }

  render() {
    const listOfCoffee = this.state.coffee.map(item => {
      // This if statement is to stop an error I had because I couldn't get access to the DB to edit it :(
      return (
        <div key={item.id}>
          {item.id < 10 && (
            <div className="coffee-list">
              <Link to={item.coffee_reference}>
                <img src={item.coffee_pic} alt="coffee" />
              </Link>
              <p>{item.coffee_name}</p>
              <p>- ${item.price}.99</p>
            </div>
          )}
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
