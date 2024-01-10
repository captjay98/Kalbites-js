import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import HomePage from "./HomePage";
import Blog from "./Blogs";
import Account from "./Account";
import MainLayout from "../Layouts/MainLayout";
import Brownies from "./Brownies";
import BentoCakes from "./BentoCakes";
import CupCakes from "./CupCakes";
import Muffins from "./Muffins";
import SwissRolls from "./SwissRolls";
import Item from "./item";
import Payment from "./Payment";
import Confirmation from "./Confirmation";
import BlogPost from "./BlogPost";
import Register from "./Register";
import Login from "./Login";
import "../index.css";

const App = () => {
  return (
    <Router>
      <MainLayout>
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
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
