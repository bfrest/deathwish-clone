import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import EditDeathwishStyle from "./EditDeathwish.css";

class EditDeathwish extends Component {
  constructor() {
    super();

    this.state = {
      coffee: []
    };

    this.handleInputs = this.handleInputs.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.deleteCoffee = this.deleteCoffee.bind(this);
  }

  componentDidMount() {
    axios.get("http://localhost:3001/api/getDeathwish").then(results => this.setState({ coffee: [...results.data] }));
  }

  handleInputs(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  updateItem() {
    const { coffee_name, coffee_pic, side_pic, description } = this.state;

    axios.put(`http://localhost:3001/api/updateDeathwish`, { coffee_name, coffee_pic, side_pic, description }).then(console.log("updated"));
  }
  deleteCoffee() {
    axios.delete("http://localhost:3001/api/deleteDeathwish").then(() => console.log("deleted"));
  }

  render() {
    return this.state.coffee.map(coffee => {
      return (
        <div className="EditDeathwish-wrapper">
          <h1>Edit Coffee</h1>
          <p>
            <i>Don't forget to change each input to set it to state</i>
          </p>
          <form onChange={this.handleInputs}>
            <label htmlFor="coffee_name">Coffee Name</label>
            <input type="text" name="coffee_name" defaultValue={coffee.coffee_name} onChange={this.handleName} className="nameInput" />
            <label htmlFor="coffee_name">Coffee Pic</label>
            <input type="text" name="coffee_pic" defaultValue={coffee.coffee_pic} onChange={this.handlePic} />
            <label htmlFor="coffee_name">Side Pic</label>
            <input type="text" name="side_pic" defaultValue={coffee.side_pic} onChange={this.handleSidepic} />
            <label htmlFor="coffee_name">Description</label>
            <input type="text" name="description" defaultValue={coffee.description} onChange={this.handleDescription} />
          </form>
          <button onClick={this.updateItem}>Edit</button>
          <Link to="/deathwish">
            <button>Cancel</button>
          </Link>
          <button onDoubleClick={this.deleteCoffee}>Delete</button>
        </div>
      );
    });
  }
}

export default EditDeathwish;
