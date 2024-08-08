import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";

const port = process.env.PORT || 4000;

connectDB();

const app = express();

import products from "./data/products.js";

app.get("/", (req, res) => {
  res.send("API is Running.");
});

app.use("/api/products", productRoutes);

app.listen(port, () => {
  console.log("server started on port", port);
});
