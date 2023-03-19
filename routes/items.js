import express from "express";
import {
  cake_index, muffins_index, cookies_index, rolls_index,
  cups_index, brownies_index, chops_index, cake_detail,
  order_index_post
} from "../controllers/itemController.js";

const irouter = express.Router();

irouter.get("/", chops_index);
irouter.get("/cakes", cake_index);
irouter.get("/cakes/:id", cake_detail)
irouter.get("/muffins", muffins_index);
irouter.get("/cookies", cookies_index)
irouter.get("/rolls", rolls_index);
irouter.get("/cups", cups_index);
irouter.get("/brownies", brownies_index);
// irouter.get("/order", order_index)
irouter.post("/", order_index_post)
// router.patch();
// router.delete();
// order_index, 
export { irouter };
