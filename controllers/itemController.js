import { Item } from "../models/item.js";
import { Order } from "../models/order.js"
import { User } from "../models/user.js"


const chops_index = (req, res) => {
  res.render("items/chops", { title: "All Chops" });
}


const order_index_post = async (req, res) => {
  const id = req.body.id
  try {
    const user = await User.find({ name: "Jamal" })
    const chop = await Item.find({ _id: id })
    const item = await new Order({
      buyer: user[0],
      chop: chop[0]
    }).save()
    console.log(item)
    res.render("items/orderdetail", { detail: item, title: "Order Placed" });
  } catch (error) {
    console.log(error)
    res.status(401).render("items/details", { title: "Order Failed" })
  }
}


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
  const id = req.params.id;
  console.log(id)
  try {
    const item = await Item.findById(id)
    res.render("items/details", { item: item, title: "Cake" })
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


export {
  chops_index,
  order_index_post,
  cake_index,
  cake_detail,
  muffins_index,
  cookies_index,
  rolls_index,
  cups_index,
  brownies_index,
}
