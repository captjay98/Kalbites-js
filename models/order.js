import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    item: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Item",
      required: true,
    },

    buyer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    delivery: {
      type: Date,
      default: () => {
        const currentDate = new Date();
        const deliveryDate = new Date();
        deliveryDate.setDate(currentDate.getDate() + 2); // Adding two days to current date
        return deliveryDate;
      },
    },

    delivered: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);
export default Order;

// #i thin this Schema will do but we shall wait and se first
// i inda orefer sql ngl it is waynore straightforward
