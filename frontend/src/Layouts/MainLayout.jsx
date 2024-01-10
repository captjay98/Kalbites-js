import NavBar from "../components/NavBar";
import Header from "../components/Header";
const MainLayout = ({ children }) => {
  return (
    <div className="overflow-auto m-auto max-w-md h-screen bg-myBlue">
      <Header />
      {children}
      <NavBar />
    </div>
  );
};

export default MainLayout;
