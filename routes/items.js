import express from "express";
import {
  cake_index, muffins_index, cookies_index,
  rolls_index, cups_index, brownies_index
} from "../controllers/itemController.js";

const irouter = express.Router();


irouter.get("/", cake_index);

irouter.get("/", muffins_index);

irouter.get("/", cookies_index)

irouter.get("/", rolls_index);

irouter.get("/", cups_index);

irouter.get("/", brownies_index);

// router.patch();

// router.delete();


export { irouter };
