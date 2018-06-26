const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const massive = require("massive");
require("dotenv").config();
const coffeeController = require("./coffeeController");

const app = express();
massive(process.env.CONNECTION_STRING).then(dbConnect => {
  app.set("db", dbConnect);

  console.log("SERVER IS CAFFINATED!");
});

app.use(bodyParser.json());
app.use(cors());

app.listen(3001, () => {
  console.log("APP IS CAFFINATED");
});
