import { Item } from "../models/item.js";

const cake_index = (req, res) => {
  res.render("index");
}


const muffins_index = (req, res) => {
  res.render("cake");
}

const cookies_index = (req, res) => {
  res.render("index");
}

const rolls_index = (req, res) => {
  res.render("index");
}

const cups_index = (req, res) => {
  res.render("index");
}


const brownies_index = (req, res) => {
  res.render("brownie");
}


export {
  cake_index,
  muffins_index,
  cookies_index,
  rolls_index,
  cups_index,
  brownies_index,
}
