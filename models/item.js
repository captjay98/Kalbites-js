import mongoose from "mongoose";

const itemSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    quantity: {
      type: Number,
      reuired: true,
    },

    size: {
      type: Number,
      required: false,
      default: 1,
    },

    available: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

const Item = mongoose.model("Item", itemSchema);
export default Item;
