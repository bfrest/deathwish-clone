import React, { Component } from "react";
import AppStyle from "./AppStyles.css";
import routes from "./routes.js";
import { Link } from "react-router-dom";

// components
import MobileNav from "./components/MobileNav/MobileNav.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MobileNav />
        {routes}
      </div>
    );
  }
}

export default App;
