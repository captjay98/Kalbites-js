const mongoose = require("mongoose")


const itemSchema = mongoose.Schema({
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

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
