const express = require("express");
const mongoose = require("mongoose");
const PORT = 5000;
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
require("dotenv").config();

mongoose
  .connect(process.env.mongo_URL)
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log("Database Not Connected", err));

const restaurantDetails = new mongoose.Schema({
  Name: { type: String, required: true },
  City: { type: String, required: true },
  items: { type: [String] },
});
const restaurantDetail = mongoose.model("restaurantDetail", restaurantDetails);

const itemDetails = new mongoose.Schema({
  Name: { type: String, required: true },
  Price: { type: String, required: true },
});
const itemDetail = mongoose.model("itemDetail", itemDetails);

app.listen(PORT, () => {
  console.log("Server running");
});
