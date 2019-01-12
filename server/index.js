const express = require("express"),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  massive = require("massive"),
  coffeeController = require("./coffeeController.js");
require("dotenv").config();

const app = express();
app.use(cors());

// this will use the connection string in the env file to connect to the postgres db
massive(process.env.CONNECTION_STRING).then(dbConnect => {
  app.set("db", dbConnect);

  console.log("SERVER IS CAFFINATED!");
});

app.use(bodyParser.json());

app.post("/api/addCoffee", coffeeController.addCoffee);
app.get("/api/getAllCoffee", coffeeController.getAllCoffee);
app.get("/api/getDeathwish", coffeeController.getDeathwish);
app.get("/api/getOdin", coffeeController.getOdin);
app.get("/api/getOdinCups", coffeeController.getOdinCups);
app.get("/api/getJack", coffeeController.getJack);
app.get("/api/getDeathCups", coffeeController.getDeathCups);
//app.get("/api/getCoffee/:coffeeReference", coffeeController.getCoffee);
app.put("/api/updateDeathwish", coffeeController.updateDeathwish);
app.delete("/api/deleteDeathwish", coffeeController.deleteDeathwish);

app.listen(3001, () => {
  console.log("APP IS CAFFINATED");
});
