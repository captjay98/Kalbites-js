import express from "express";
import {
  createItem,
  getUsers,
  getUser,
  getItems,
  getOrders,
} from "../controllers/adminController.js";
import upload from "../middlewares/multer.js";

const aRouter = express.Router();

aRouter.post("/create", upload.single("image"), createItem);
aRouter.get("/users", getUsers);
aRouter.get("/users/:id", getUser);
aRouter.get("/items", getItems);
aRouter.get("/items/:id", getItems);
aRouter.get("/orders", getOrders);
aRouter.get("/orders/:id", getOrders);

export default aRouter;
