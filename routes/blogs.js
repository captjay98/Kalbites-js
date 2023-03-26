const express = require("express")

const blogController = require("../controllers/blogController")

const brouter = express.Router();

brouter.get("/", blogController.blog_index)
brouter.post("/", blogController.blog_create_post);
brouter.get("/create", blogController.blog_create_get)
brouter.get("/:id", blogController.blog_details);
brouter.delete("/:id", blogController.blog_delete)

module.exports = brouter;
