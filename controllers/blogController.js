import Blog from "../models/blog.js";

export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    return res.status(200).json({ blogs });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Server Error" });
  }
};

// i don't know wy this isn't woring but i intend to find out

export const getBlog = async (req, res) => {
  const id = req.params.id.toString();
  console.log(id);
  try {
    const blog = await Blog.findById(id);
    return res.status(200).json({ blog });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server Error" });
  }
};

export const createBlog = async (req, res) => {
  try {
    const blog = await Blog.create(req.body);
    return res.status(200).json({ blog });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server Error" });
  }
};

export const deleteBlog = async (req, res) => {
  const id = req.params.id;
  try {
    await Blog.findByIdAndDelete(id);
    return res.status(200).json({ message: "Blog Deleted" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server Error" });
  }
};
