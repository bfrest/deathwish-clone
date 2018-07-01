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

app.listen(3001, () => {
  console.log("APP IS CAFFINATED");
});
