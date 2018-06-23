import React, { Component } from "react";

// components
import PurchaseCoffee from "./components/PurchaseCoffee/PurchaseCoffee.js";
import Nav from "./components/Nav/Nav.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <PurchaseCoffee />
        <p>Deathwish</p>
      </div>
    );
  }
}

export default App;
