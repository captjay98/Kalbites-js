import User from "../models/user.js";
import Item from "../models/item.js";
import Order from "../models/order.js";

export const createItem = async (req, res) => {
  try {
    const { name, price, quantity, size, available } = req.body;
    const newItem = await Item.create({ name, price, quantity, size, available });
    return res.status(201).json({ newItem });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server Error" });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json({ users });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server Error" });
  }
};

export const getUser = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    const user = await User.findById(id);
    return res.status(200).json({ user });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server Error" });
  }
};

export const getItems = async (req, res) => {
  try {
    const items = await Item.find();
    return res.status(200).json({ items });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server Error" });
  }
};

export const getItem = async (req, res) => {
  const id = req.params.id;
  try {
    const item = await Item.findById(id);
    return res.status(200).json({ item });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server Error" });
  }
};

export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    return res.status(200).json({ orders });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server Error" });
  }
};

export const getOrder = async (req, res) => {
  const id = rq.params.id;
  try {
    const order = await Order.findById(id);
    return res.status(200).json({ order });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server Error" });
  }
};

export const grs = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server Error" });
  }
};

export const ges = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server Error" });
  }
};
