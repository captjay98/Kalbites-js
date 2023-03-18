import { Schema, model } from "mongoose";
// import { User } from "./users.js"

const orderSchema = Schema({
  // date: {
  //   type: Date,
  //   default: Date.now
  // },

  chop: {
    type: Schema.Types.ObjectId, ref: "Item",
    required: true
  },

  buyer: {
    type: Schema.Types.ObjectId, ref: "User",
    required: true
  }
}, { timestamps: true })


const Order = model("Order", orderSchema);

export { Order };


// #i thin this Schema will do but we shall wait and se first
// i inda orefer sql ngl it is waynore straightforward
