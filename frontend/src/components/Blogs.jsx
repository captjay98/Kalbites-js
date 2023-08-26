import { Link } from "react-router-dom";
import axiosInstance from "../../axiosInstance";
import InfoBar from "./InfoBar";
import { useEffect, useState } from "react";

const Blogs = () => {
  const description = "Welcome to KalBlogs";
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState(true);

  const getData = async () => {
    try {
      const response = await axiosInstance.get("/blogs");
      console.log(response.data);
      setBlogs(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("fetching blogs");
    getData(), [];
  });

  return (
    <div className="h-screen overflow-auto">
      <InfoBar description={description} />
      <div className=" m-auto mt-5 w-11/12 h-96  rounded-3xl">
        <h2 className="text-yellow-500 font-bold text-center px-2 py-2 mt-5 mb-5">ALL BLOGS</h2>
        {loading ? (
          <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
            <div className="border-t-transparent border-solid animate-spin mt-24 rounded-full border-blue-400 border-8 h-16 w-16"></div>
          </div>
        ) : blogs.length > 0 ? (
          blogs.map((blog) => (
            <div
              key={item._id}
              className="mb-5 mt-4 border-l-4 w-11/12 border-b-4 border-yellow-500 rounded-lg m-auto  p-4"
            >
              <Link to={`/blogs/${blog._id}`} className="text-decoration-none" href="">
                <h3 className="text-yellow-500 text-xl font-bold py-2 mb-4">{blog.title}</h3>
                <p className="text-gray-300  300">{blog.snippet}</p>
              </Link>
            </div>
          ))
        ) : (
          <p className="text-yellow-300 text-center py-16 px-16">
            Sorry There are no Blogs Right Now, Come another Time, Arigato.
          </p>
        )}
      </div>
    </div>
  );
};

export default Blogs;
