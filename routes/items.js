const express = require("express");
const itemController = require("../controllers/itemController")

const irouter = express.Router();

irouter.get("/cakes", itemController.cake_index);
irouter.get("/cakes/:id", itemController.cake_detail)
irouter.get("/muffins", itemController.muffins_index);
irouter.get("/cookies", itemController.cookies_index)
irouter.get("/rolls", itemController.rolls_index);
irouter.get("/cups", itemController.cups_index);
irouter.get("/brownies", itemController.brownies_index);
// router.patch();
// router.delete();
// order_index, 
module.exports = irouter;
