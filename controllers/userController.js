import { User } from "../models/user.js";
import { Order } from "../models/order.js";

const login_index = (req, res) => {
  res.render("login");
}

const register_Index = (req, res) => {
  res.render("register");
}

const profile_index = (req, res) => {
  res.render("profile");
}
export {
  login_index,
  register_Index,
  profile_index,
}
