const Header = () => {
  return (
    <div className="ml-3 mr-3 mb-1 h-32 px-2 py-8 flex justify-center">
      <div className="left-side">
        <h1 className="text-20 text-yellow-400 mb-2 text-xl font-bold ">Hello, Guest 👋</h1>
        <span className="text-15 text-gray-500">Welcome to Kalbites.</span>
      </div>
      <div className="ml-auto mt-4 w-12 h-12 rounded-full bg-cover">AVT</div>
    </div>
  );
};

export default Header;
