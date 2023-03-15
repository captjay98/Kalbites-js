const express = require("express");
const urouter = express.Router();
const ucontroller = require("../controllers/userController")

urouter.post("/", ucontroller.login_index);

urouter.post("/", ucontroller.register_Index);

urouter.get("/", ucontroller.profile_index);

urouter.get("/", ucontroller.order_index);

urouter.post("/", ucontroller.order_index);

// urouter.patch();

// urouter.delete();

module.exports = urouter;
