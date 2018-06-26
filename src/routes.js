import React from "react";
import { Switch, Route } from "react-router-dom";

// components
import App from "./App.js";
import PurchaseCoffee from "./components/PurchaseCoffee/PurchaseCoffee.js";
import AddCoffee from "./components/AddCoffee/AddCoffee.js";
import Home from "./components/Home/Home.js";
import ItemAdder from "./components/ItemAdder.js";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/coffee" component={PurchaseCoffee} />
    <Route path="/add-coffee" component={AddCoffee} />
    <Route path="/add-items" component={ItemAdder} />
  </Switch>
);
