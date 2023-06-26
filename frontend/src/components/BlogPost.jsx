import InfoBar from "./InfoBar";

const BlogPost = () => {
  const description = "Blog One";
  return (
    <div className="h-screen">
      <InfoBar description={description} />
      <div className="bg-yellow-500 px-5 py-5 m-auto mt-5 w-11/12 rounded-3xl">
        <h3 className="font-extrabold">Blog Title</h3>
        <p className="text-myBlue px-5 py-5 ">This is just an example blog</p>
      </div>
    </div>
  );
};

export default BlogPost;
