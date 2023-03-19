import { Schema, model } from "mongoose";

const userSchema = Schema({

  name: {
    type: String,
    required: true,
  },

  phone: {
    type: String,
    required: true,
    unique: true
  },

  address: {
    type: String,
    required: true
  },
})


const User = model("User", userSchema);

export { User };
