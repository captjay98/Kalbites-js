import Item from "../models/item.js";
import Order from "../models/order.js";
import User from "../models/user.js";
import redisClient from "../middlewares/redisManager.js";

export const orderDetails = async (req, res) => {
  const userId = req.user;
  const redisKey = `itemid:${userId}`;

  const itemId = await redisClient.get(redisKey);
  console.log("Item id", itemId);

  try {
    const user = await User.findById(userId);
    const item = await Item.findById(itemId);

    if (!user || !item) {
      return res.status(404).json({ message: "User or item not found" });
    }

    const order = await new Order({
      buyer: user,
      item: item,
    }).save();

    console.log(order);

    return res.status(200).json({ order });
  } catch (error) {
    console.log(error);
    res.status(501).json({ message: "Server Error" });
  }
};

export const getOrder = async (req, res) => {
  const userId = req.user;
  try {
    const order = await Order.findOne({ buyer: userId })
      .sort({ _id: -1 })
      .populate("buyer", "firstName lastName address phone")
      .populate("item", "name price quantity size")
      .exec();
    return res.status(200).json({ order });
  } catch (error) {
    console.log(error);
  }
};

export const getItem = async (req, res) => {
  const userId = req.user;
  const itemId = req.params.id;
  const redisKey = `itemid:${userId}`;
  console.log("USER:", userId, "ITEM:", itemId, "REDIS:", redisKey);

  redisClient.set(redisKey, itemId, (err, reply) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Error storing item ID in Redis" });
    }
    console.log(reply);
  });

  console.log(itemId);
  try {
    const item = await Item.findById(itemId);
    return res.status(200).json({ item });
  } catch (error) {
    console.log(error);
    res.status(501).json({ message: "Server Error" });
  }
};

export const getCakes = async (req, res) => {
  try {
    const item = await Item.find({ name: "cake" });
    console.log(item);
    return res.status(200).json({ item });
  } catch (error) {
    console.log(error);
    res.status(501).json({ message: "Server Error" });
  }
};

export const getMuffins = async (req, res) => {
  try {
    const item = await Item.find({ name: "Muffins" });
    return res.status(200).json({ item });
  } catch (error) {
    console.log(error);
    res.status(501).json({ message: "Server Error" });
  }
};

export const getCookies = async (req, res) => {
  try {
    const item = await Item.find({ name: "cookies" });
    return res.status(200).json({ item });
  } catch (error) {
    console.log(error);
    res.status(501).json({ message: "Server Error" });
  }
};

export const getRolls = async (req, res) => {
  try {
    const item = await Item.find({ name: "rolls" });
    return res.status(200).json({ item });
  } catch (error) {
    console.log(error);
    res.status(501).json({ message: "Server Error" });
  }
};

export const getCups = async (req, res) => {
  try {
    const item = await Item.find({ name: "cups" });
    return res.status(200).json({ item });
  } catch (error) {
    console.log(error);
    res.status(501).json({ message: "Server Error" });
  }
};

export const getBrownies = async (req, res) => {
  try {
    const item = await Item.find({ name: "brownie" });
    return res.status(200).json({ item });
  } catch (error) {
    console.log(error);
    res.status(501).json({ message: "Server Error" });
  }
};
