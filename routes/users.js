import express from "express";
import {
  login_index, register_Index,
  profile_index, order_index
} from "../controllers/userController.js"

const urouter = express.Router();

urouter.post("/", login_index);

urouter.post("/", register_Index);

urouter.get("/", profile_index);

urouter.get("/", order_index);

urouter.post("/", order_index);

// urouter.patch();

// urouter.delete();

export { urouter };
