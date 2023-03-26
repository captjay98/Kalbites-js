const Blog = require("../models/blog");

const blog_index = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 })

    res.render("blogs/blogs", { title: "All Blogs", blogs: blogs })
  } catch (err) {

    console.log(err);
  }
}

// i don't know wy this isn't woring but i intend to find out

const blog_details = (req, res) => {
  const id = req.params.id;
  console.log(id);
  Blog.findById(id)
    .then((result) => {
      res.render("blogs/details", { blog: result, title: "Blog Details" });
    })
    .catch((err) => {
      res.status(404).render("404", { title: "Blog Not Found" });
    })
}

const blog_create_get = (req, res) => {
  res.render("blogs/create", { title: "Create New Blog" });
}

const blog_create_post = (req, res) => {
  const blog = new Blog(req.body);
  blog.save()
    .then((result) => {
      res.redirect("blogs")
    })
    .catch((err) => console.log(err));
}

const blog_delete = (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "blogs" })
    })
    .catch((err) => {
      console.log(err);
    })
}

module.exports = {
  blog_index,
  blog_details,
  blog_create_get,
  blog_create_post,
  blog_delete
}
