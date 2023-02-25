// Express
const express = require("express");
const router = express.Router();
// Store Controller
const { getAllProducts } = require("../controllers/Store.controller");

// Routes
router.get("/", getAllProducts);

module.exports = router;
