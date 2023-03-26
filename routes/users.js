const express = require("express")
const userController = require("../controllers/userController")

const urouter = express.Router();


urouter.get("/login", userController.login_index);
urouter.get("/register", userController.register_Index);
urouter.post("/login", userController.login_index_post);
urouter.post("/register", userController.register_Index_post);
urouter.get("/account", userController.profile_index);
urouter.delete("/logout", userController.logout_index)
// urouter.patch();
// urouter.delete();

module.exports = urouter;
