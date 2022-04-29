require("dotenv").config();
const express = require("express");
const homeRoutes = require("./routes/home");

const mongoClient = require("./db/db-connect");

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(homeRoutes);

const run = async () => {
  try {
    await mongoClient.connect();
    app.listen(process.env.PORT);
    console.log("Server running");
  } catch (e) {
    console.log(e);
  }
};

run();
