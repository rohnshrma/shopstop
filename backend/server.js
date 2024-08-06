import dotenv from "dotenv";
dotenv.config();
import express from "express";

const port = process.env.PORT || 4000;
const app = express();

import products from "./data/products.js";

app.get("/", (req, res) => {
  res.send("API is Running.");
});
app.get("/api/products", (req, res) => {
  res.json(products);
});
app.get("/api/products/:id", (req, res) => {
  res.json(products.find((p) => p._id === req.params.id));
});

app.listen(port, () => {
  console.log("server started on port", port);
});
