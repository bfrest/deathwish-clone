import React, { Component } from "react";
import axios from "axios";
import EditDeathwishStyle from "./EditDeathwish.css";

class EditDeathwish extends Component {
  constructor() {
    super();

    this.state = {
      coffee: []
    };

    this.handleName = this.handleName.bind(this);
    this.handlePic = this.handlePic.bind(this);
    this.handleSidepic = this.handleSidepic.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
  }

  componentDidMount() {
    axios.get("http://localhost:3001/api/getDeathwish").then(results => this.setState({ coffee: [...results.data] }));
  }

  handleName(e) {
    this.setState({ coffee_name: e.target.value });
  }

  handlePic(e) {
    this.setState({ coffee_pic: e.target.value });
  }

  handleSidepic(e) {
    this.setState({ side_pic: e.target.value });
  }

  handleDescription(e) {
    this.setState({ description: e.target.value });
  }

  render() {
    return this.state.coffee.map(coffee => {
      return (
        <div className="EditDeathwish-wrapper">
          <p>Edit Coffee</p>
          <label htmlFor="coffee_name">Coffee Name</label>
          <input type="text" name="coffee_name" defaultValue={coffee.coffee_name} onChange={this.handleName} />
          <label htmlFor="coffee_name">Coffee Pic</label>
          <input type="text" name="coffee_pic" defaultValue={coffee.coffee_pic} onChange={this.handlePic} />
          <label htmlFor="coffee_name">Side Pic</label>
          <input type="text" name="side_pic" defaultValue={coffee.side_pic} onChange={this.handleSidepic} />
          <label htmlFor="coffee_name">Description</label>
          <input type="text" name="description" defaultValue={coffee.description} onChange={this.handleDescription} />
          <button>Edit</button>
          {console.log(this.state.coffee)}
        </div>
      );
    });
  }
}

export default EditDeathwish;
