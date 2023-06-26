import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import Blog from "./Blogs";
import Account from "./Account";
import Brownies from "./Brownies";
import BentoCakes from "./BentoCakes";
import CupCakes from "./CupCakes";
import Muffins from "./Muffins";
import SwissRolls from "./SwissRolls";
import Item from "./item";
import Payment from "./Payment";
import Confirmation from "./Confirmation";
import BlogPost from "./BlogPost";
import "../index.css";

const App = () => {
  return (
    <Router>
      <div className="w-screen  bg-myBlue text-gold font-sans">
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blogs/:id" element={<BlogPost />} />
          <Route path="/account" element={<Account />} />
          <Route path="/Brownies" element={<Brownies />} />
          <Route path="/BentoCakes" element={<BentoCakes />} />
          <Route path="/CupCakes" element={<CupCakes />} />
          <Route path="/Muffins" element={<Muffins />} />
          <Route path="/SwissRolls" element={<SwissRolls />} />
          <Route path="/:category/:itemId" element={<Item />} />
          <Route path="/:category/:itemId/payment" element={<Payment />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
        <NavBar />
      </div>
    </Router>
  );
};

export default App;
