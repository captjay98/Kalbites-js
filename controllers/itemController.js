const Item = require("../models/item");
const Order = require("../models/order")
const User = require("../models/user")
const redisClient = require("../redis_manager")


const cake_index = async (req, res) => {
  try {
    const item = await Item.find({ name: "cake" })
    res.render("items/cakes", { title: "Cakes", items: item })
    console.log(item)
  } catch (err) {
    res.status(404).render("404", { title: "Chop Not Found" })
  }
}

const cake_detail = async (req, res) => {
  const id = req.params.id
  redisClient.set('itemid', id, (err, reply) => {
    console.log(reply)
  })

  console.log(id)
  try {
    const item = await Item.findById(id)
    res.render("items/pay", { item: item, title: "Checkout" })
  } catch (err) {
    res.status(404).render("404", { title: "Item not found" })
    console.log(err)
  }
}


const muffins_index = async (req, res) => {
  try {
    const item = await Item.find({ name: "muffins" })
    res.render("items/muffins", { title: "Muffins", items: item })
    console.log(item)
  } catch (err) {
    res.status(404).render("404", { title: "Chop Not Found" })
  }
}


const cookies_index = async (req, res) => {
  try {
    const item = await Item.find({ name: "cookies" })
    res.render("items/cookies", { title: "Cookies", items: item });
    console.log(item)
  } catch (err) {
    res.status(404).render("404", { title: "Chop Not Found" })
  }
}


const rolls_index = async (req, res) => {
  try {
    const item = await Item.find({ name: "rolls" })
    res.render("items/rolls", { title: "Swiss Rolls", items: item });
    console.log(item)
  } catch (err) {
    res.status(404).render("404", { title: "Chop Not Found" })
  }
}


const cups_index = async (req, res) => {
  try {
    const item = await Item.find({ name: "cups" })
    res.render("items/cups", { title: "Cup Cakes", items: item });
    console.log(item)
  } catch (err) {
    res.status(404).render("404", { title: "Chop Not Found" })
  }
}


const brownies_index = async (req, res) => {
  try {
    const item = await Item.find({ name: "brownies" })
    res.render("items/brownies", { title: "Brownies", items: item });
    console.log(item)
  } catch (err) {
    res.status(404).render("404", { title: "Chop Not Found" })
  }
}


module.exports = {
  cake_index,
  cake_detail,
  muffins_index,
  cookies_index,
  rolls_index,
  cups_index,
  brownies_index,
}
