import React from "react";
import { Switch, Route } from "react-router-dom";

// components
import PurchaseCoffee from "./components/PurchaseCoffee/PurchaseCoffee.js";
import AddCoffee from "./components/AddCoffee/AddCoffee.js";
import Home from "./components/Home/Home.js";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/coffee" component={PurchaseCoffee} />
    <Route path="/add-coffee" component={AddCoffee} />
  </Switch>
);
