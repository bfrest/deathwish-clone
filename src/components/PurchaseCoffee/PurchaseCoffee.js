import React, { Component } from "react";
import PurchaseCoffeeStyles from "./PurchaseCoffeeStyles.css";

class PurchaseCoffee extends Component {
  constructor() {
    super();

    this.state = {
      coffee: [
        {
          name: "coffee",
          pic: "https://cdn.shopify.com/s/files/1/0271/7209/products/1lb-ground_2048x2048_8c4fab8d-e6aa-4a33-90de-52184944022f_1024x1024.png?v=1511887286",
          price: 22,
          description: "This is the description for the coffe yoo"
        },
        {
          name: "coffee3",
          pic: "https://cdn.shopify.com/s/files/1/0271/7209/products/barrel_brand_1024x1024.jpg?v=1504104887",
          price: 24,
          description: "This is the description for the coffe yoo"
        }
      ]
    };
  }
  render() {
    const listOfCoffee = this.state.coffee.map(item => {
      return (
        <div className="coffee-list">
          <img src={item.pic} />
          <p>{item.name}</p>
          <p>${item.price}</p>
        </div>
      );
    });
    return (
      <div className="purchase-coffee-wrapper">
        <p>Coffee</p>
        <hr />
        <p>World's strongest coffee</p>
        <p>Free Shipping on alll orders over $50. 100% money back guarantee if it's not the stringest coffee you've ever had.</p>
        {listOfCoffee}
      </div>
    );
  }
}

export default PurchaseCoffee;
