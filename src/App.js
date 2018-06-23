import React, { Component } from "react";

// components
import MobileNav from "./components/MobileNav/MobileNav.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MobileNav />
        <div className="homepage-wrapper">
          <p>Deathwish Homepage</p>
        </div>
      </div>
    );
  }
}

export default App;
