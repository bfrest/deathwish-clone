import React from "react";
import { Switch, Route } from "react-router-dom";

// components
import PurchaseCoffee from "./components/PurchaseCoffee/PurchaseCoffee.js";
import AddCoffee from "./components/AddCoffee/AddCoffee.js";
import Home from "./components/Home/Home.js";
import Deathwish from "./components/Deathwish/Deathwish.js";
// import Odin from "./components/Odin/Odin.js";
// import DeathCups from "./components/DeathCups/DeathCups.js";
// import OdinCups from "./components/OdinCups/OdinCups.js";
// import Jack from "./components/Jack/Jack.js";
import EditDeathwish from "./components/EditDeathwish/EditDeathwish.js";
import DeleteDeathwish from "./components/DeleteDeathwish/DeleteDeathwish.js";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/coffee" component={PurchaseCoffee} />
    <Route path="/add-coffee" component={AddCoffee} />
    <Route path="/deathwish" component={Deathwish} />
    {/* <Route path="/odin" component={Odin} />
    <Route path="/deathcups" component={DeathCups} />
    <Route path="/odincups" component={OdinCups} />
    <Route path="/jack" component={Jack} /> */}
    <Route path="/editDeathwish" component={EditDeathwish} />
    <Route path="/deleteDeathwish" component={DeleteDeathwish} />
  </Switch>
);
