import { User } from "../models/user.js";


const login_index = (req, res) => {
  res.render("login");
}

const register_Index = (req, res) => {
  res.render("register");
}

const profile_index = (req, res) => {
  res.render("profile");
}

const order_index = (req, res) => {
  res.render("order");
}

export {
  login_index,
  register_Index,
  profile_index,
  order_index,
}
