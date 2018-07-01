import React, { Component } from "react";
import axios from "axios";
import AddCoffeeStyles from "./AddCoffee.css";

class AddCoffee extends Component {
  constructor() {
    super();

    this.state = {
      coffeeName: "",
      coffeePic: "",
      sidePic: "",
      price: "",
      description: ""
    };

    this.handleName = this.handleName.bind(this);
    this.handlePic = this.handlePic.bind(this);
    this.handleSidePic = this.handleSidePic.bind(this);
    this.handlePrice = this.handlePrice.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.addCoffee = this.addCoffee.bind(this);
  }

  handleName(e) {
    this.setState({ coffeeName: e.target.value });
  }

  handlePic(e) {
    this.setState({ coffeePic: e.target.value });
  }

  handleSidePic(e) {
    this.setState({ sidePic: e.target.value });
  }

  handlePrice(e) {
    this.setState({ price: e.target.value });
  }

  handleDescription(e) {
    this.setState({ description: e.target.value });
  }

  addCoffee() {
    const { coffeeName, coffeePic, sidePic, price, description } = this.state;

    axios.post("http://localhost:3001/api/addCoffee", { coffeeName, coffeePic, sidePic, price, description }).then(() => console.log("Item Added"));
  }

  render() {
    return (
      <div className="add-coffee-wrapper">
        <form>
          <input placeholder="Name" onChange={this.handleName} />
          <input placeholder="Picture" onChange={this.handlePic} />
          <input placeholder="Side Picture" onChange={this.handleSidePic} />
          <input placeholder="Price" onChange={this.handlePrice} />
          <input placeholder="Description" onChange={this.handleDescription} />
          <button onClick={this.addCoffee}>Add Coffee</button>
        </form>
      </div>
    );
  }
}

export default AddCoffee;
