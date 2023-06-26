import express from "express";

import { getBlogs, getBlog, createBlog, deleteBlog } from "../controllers/blogController.js";

const bRouter = express.Router();

bRouter.get("/", getBlogs);
bRouter.get("/:id", getBlog);
bRouter.post("/create", createBlog);
bRouter.delete("/:id", deleteBlog);

export default bRouter;
