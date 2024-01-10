const Header = () => {
  return (
    <div className="flex justify-center py-4 px-2 mt-2 mr-3 ml-3">
      <div className="left-side">
        <h1 className="mb-2 text-xl font-bold text-yellow-400 text-20">
          Hello, Guest 👋
        </h1>
        <span className="text-gray-500 text-15">Welcome to Kalbites.</span>
      </div>
      <div className="mt-1 ml-auto w-12 h-12 bg-blue-300 bg-cover rounded-full">
        AVT
      </div>
    </div>
  );
};

export default Header;
