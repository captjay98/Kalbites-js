import express from "express";
import {
  blog_index, blog_create_post, blog_create_get,
  blog_details, blog_delete
} from "../controllers/blogController.js";

const brouter = express.Router();

brouter.get("/", blog_index)
brouter.post("/", blog_create_post);
brouter.get("/create", blog_create_get)
brouter.get("/:id", blog_details);
brouter.delete("/:id", blog_delete)

export { brouter };
