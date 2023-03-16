import { Schema, model } from "mongoose";

const itemSchema = Schema({
  name: {
    type: String,
    required: true
  },

  price: {
    type: Number,
    required: true
  },

  quantity: {
    type: Number,
    reuired: true
  },

  size: {
    type: Number,
    required: false
  },

  available: {
    type: Boolean,
    required: true
  }

})

const Item = model("Item", itemSchema);

export { Item };
