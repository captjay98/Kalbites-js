import InfoBar from "./InfoBar";
import axiosInstance from "../../axiosInstance";
import { useState, useEffect } from "react";

const BlogPost = () => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState([]);
  const getData = async () => {
    try {
      const response = await axiosInstance.get(`blogs/${id}`);
      console.log(response);
      setBlog(response.data);
      setLoading(false);
    } catch (error) {
      console.log(response);
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("Feching blog");
    getData();
  }, []);

  if (loading) {
    return (
      <div className="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
        <div className="border-t-transparent border-solid animate-spin mt-24 rounded-full border-blue-400 border-8 h-16 w-16"></div>
      </div>
    );
  }

  return (
    <div className="h-screen">
      <InfoBar description={blog.title} />
      <div className="bg-yellow-500 px-5 py-5 m-auto mt-5 w-11/12 rounded-3xl">
        <h3 className="font-extrabold">{blog.title}</h3>
        <p className="text-myBlue px-5 py-5 ">{blog.content}</p>
      </div>
    </div>
  );
};

export default BlogPost;
