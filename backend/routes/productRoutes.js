import express from "express";
const router = express.Router();

import products from "../data/products.js";

router.get("/", (req, res) => {
  res.json(products);
});
router.get("/:id", (req, res) => {
  res.json(products.find((p) => p._id === req.params.id));
});

export default router;
