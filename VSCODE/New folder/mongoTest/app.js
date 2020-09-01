const express = require("express");
const morgan = require("morgan");
const app = express();
const mongoose = require("mongoose");
const TouristDestination = require("./models/addlocations");

const dbURI =
  "mongodb+srv://capstone:12345@cluster0.gdfnt.mongodb.net/Capstone?retryWrites=true&w=majority";

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(4000))
  .catch((err) => console.log(err));

app.get("/add-location", (req, res) => {
  const location = new TouristDestination({
    name: "test addition",
  });
  location.save();
});
