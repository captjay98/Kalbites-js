import { Schema, model } from "mongoose";

const blogSchema = new Schema({

  title: {
    type: String,
    required: true
  },

  snipet: {
    type: String,
    required: true
  },

  body: {
    type: String,
    required: true
  },

}, { timestamps: true });

const Blog = model("Blog", blogSchema);

export { Blog };
