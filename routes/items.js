import express from "express";
import { getCurrentUser } from "../middlewares/auth.js";
import {
  getCakes,
  getCookies,
  getCups,
  getMuffins,
  getBrownies,
  getRolls,
  getItem,
  orderDetails,
} from "../controllers/itemController.js";

const iRouter = express.Router();

iRouter.get("/cakes", getCakes);
iRouter.get("/muffins", getMuffins);
iRouter.get("/cookies", getCookies);
iRouter.get("/rolls", getRolls);
iRouter.get("/cups", getCups);
iRouter.get("/brownies", getBrownies);
iRouter.get("/:item/:id", getCurrentUser, getItem);
iRouter.post("/order", getCurrentUser, orderDetails);

export default iRouter;
