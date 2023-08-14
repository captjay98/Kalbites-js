import express from "express";
import {
  userRegistration,
  userLogin,
  userProfile,
  userLogout,
} from "../controllers/userController.js";
import { getCurrentUser } from "../middlewares/auth.js";

const uRouter = express.Router();

uRouter.post("/login", userLogin);
uRouter.post("/register", userRegistration);
uRouter.get("/account", getCurrentUser, userProfile);
uRouter.delete("/logout", getCurrentUser, userLogout);

export default uRouter;
