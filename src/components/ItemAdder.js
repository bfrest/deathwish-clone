import React, { Component } from "react";
import axios from "axios";

class ItemAdder extends Component {
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
          pic: "https://www.deathwishcoffee.com/products/valhalla-java-odin-force-blend?lshst=collection",
          price: 24,
          description: "This is the description for the coffe yoo"
        }
      ]
    };
  }

  render() {
    const listOfCoffee = this.state.coffee.map(item => {
      return (
        <div>
          <p>{item.name}</p>
          <img src={item.pic} />
          <p>{item.name}</p>
        </div>
      );
    });
    return (
      <div>
        <p>Item Adder</p>
        {listOfCoffee}
      </div>
    );
  }
}

export default ItemAdder;
