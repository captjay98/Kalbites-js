const express = require("express");
const irouter = express.Router();
const icontroller = require("../controllers/itemcontroller")

irouter.get("/", icontroller.cake_index);

irouter.get("/", icontroller.parfait_index);

irouter.get("/", icontroller.brownie_index);

// router.get();//tres leches

irouter.post("/", icontroller.cake_index);

// router.patch();

// router.delete();


module.exports = irouter;
