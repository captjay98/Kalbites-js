import InfoBar from "./InfoBar";
const Blogs = () => {
  const description = "Welcome to KalBlogs";
  return (
    <div className="h-screen overflow-auto">
      <InfoBar description={description} />
      <div className=" m-auto mt-5 w-11/12 h-96  rounded-3xl">
        <h2 className="text-yellow-500 font-bold text-center px-2 py-2 mt-5 mb-5">ALL BLOGS</h2>
        <div className="mb-5 mt-4 border-l-4 w-11/12 border-b-4 border-yellow-500 rounded-lg m-auto  p-4">
          <a className="text-decoration-none" href="">
            <h3 className="text-yellow-500 text-xl font-bold py-2 mb-4">Hello World</h3>
            <p className="text-gray-300  300">This is a sample blog</p>
          </a>
        </div>

        <div className="mb-5 mt-4 border-l-4 w-11/12 border-b-4 border-yellow-500 rounded-lg m-auto p-4">
          <a className="text-decoration-none" href="">
            <h3 className="text-yellow-500 text-xl font-bold mb-2">Hello World</h3>
            <p className="text-gray-300  300">This is a sample blog</p>
          </a>
        </div>

        <div className="mb-5 mt-4 border-l-4 w-11/12 border-b-4 border-yellow-500 rounded-lg m-auto p-4">
          <a className="text-decoration-none" href="">
            <h3 className="text-yellow-500 text-xl font-bold mb-2">Hello World</h3>
            <p className="text-gray-300  300">This is a sample blog</p>
          </a>
        </div>

        <div className="mb-5 mt-4 border-l-4 w-11/12 border-b-4 border-yellow-500 rounded-lg m-auto p-4">
          <a className="text-decoration-none" href="">
            <h3 className="text-yellow-500 text-xl font-bold mb-2">Hello World</h3>
            <p className="text-gray-300  300">This is a sample blog</p>
          </a>
        </div>

        <div className="mb-5 mt-4 border-l-4 w-11/12 border-b-4 border-yellow-500 rounded-lg m-auto p-4">
          <a className="text-decoration-none" href="">
            <h3 className="text-yellow-500 text-xl font-bold mb-2">Hello World</h3>
            <p className="text-gray-300  300">This is a sample blog</p>
          </a>
        </div>
        <div className="mb-5 mt-4 border-l-4 w-11/12 border-b-4 border-yellow-500 rounded-lg m-auto p-4">
          <a className="text-decoration-none" href="">
            <h3 className="text-yellow-500 text-xl font-bold mb-2">Hello World</h3>
            <p className="text-gray-300  300">This is a sample blog</p>
          </a>
        </div>

        <div className="mb-5 mt-4 border-l-4 w-11/12 border-b-4 border-yellow-500 rounded-lg m-auto p-4">
          <a className="text-decoration-none" href="">
            <h3 className="text-yellow-500 text-xl font-bold mb-2">Hello World</h3>
            <p className="text-gray-300  300">This is a sample blog</p>
          </a>
        </div>

        <div className="mb-5 mt-4 border-l-4 w-11/12 border-b-4 border-yellow-500 rounded-lg m-auto p-4">
          <a className="text-decoration-none" href="">
            <h3 className="text-yellow-500 text-xl font-bold mb-2">Hello World</h3>
            <p className="text-gray-300  300">This is a sample blog</p>
          </a>
        </div>

        <div className="mb-5 mt-4 border-l-4 w-11/12 border-b-4 border-yellow-500 rounded-lg m-auto p-4">
          <a className="text-decoration-none" href="">
            <h3 className="text-yellow-500 text-xl font-bold mb-2">Hello World</h3>
            <p className="text-gray-300  300">This is a sample blog</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
