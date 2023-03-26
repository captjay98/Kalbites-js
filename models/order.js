const mongoose = require("mongoose")

const orderSchema = mongoose.Schema({
  // date: {
  //   type: Date,
  //   default: Date.now
  // },

  chop: {
    type: mongoose.Schema.Types.ObjectId, ref: "Item",
    required: true
  },

  buyer: {
    type: mongoose.Schema.Types.ObjectId, ref: "User",
    required: true
  }
}, { timestamps: true })


const Order = mongoose.model("Order", orderSchema);

module.exports = Order;


// #i thin this Schema will do but we shall wait and se first
// i inda orefer sql ngl it is waynore straightforward
