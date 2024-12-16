import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import Home from "./screens/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Men from "./screens/Men";
import Women from "./screens/Women";
import Summercollection from "./screens/Summercollection";
import WinterCollection from "./screens/WinterCollection";
import Kids from "./screens/Kids";
import Allproducts from "./screens/Allproducts";
import PreviewItem from "./components/PreviewItem";
import WishListItem from "./components/WishListItem";
import { FaArrowUp } from "react-icons/fa"; // Import an icon for the button
import Cart from "./screens/Cart";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Checkout from "./screens/Checkout";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <Router>
      <div className="overflow-x-hidden relative">
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections/all" element={<Allproducts />} />
          <Route path="/collections/men" element={<Men />} />
          <Route path="/collections/women" element={<Women />} />
          <Route path="/collections/kids" element={<Kids />} />
          <Route path="/collections/summer" element={<Summercollection />} />
          <Route path="/collections/winter" element={<WinterCollection />} />
          <Route path="/product/:id" element={<PreviewItem />} />
          <Route path="/wishlist" element={<WishListItem />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
        <Toaster />

        {/* Scroll-to-top button */}
        {isVisible && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-20 scroll-smooth border border-slate-200 duration-300 text-slate-600 hover:text-white hover:bg-cyan-400 shadow-xl right-5 bg-slate-100 p-3 rounded-sm  z-[999]"
            aria-label="Scroll to top"
          >
            <FaArrowUp size={18} className="" />
          </button>
        )}
      </div>
      <Footer />
    </Router>
  );
}

export default App;
