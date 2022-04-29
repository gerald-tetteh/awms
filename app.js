require("dotenv").config();
const express = require("express");
const homeRoutes = require("./routes/home");
const studentRoutes = require("./routes/student");
const adminRoutes = require("./routes/admin");

const mongoClient = require("./db/db-connect");

const app = express();

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));

app.use(homeRoutes);
app.use("/students", studentRoutes);
app.use("/admin", adminRoutes);

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
