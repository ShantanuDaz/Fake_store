import React, { useEffect } from "react";
import Dashboard from "./Components/dashboard";
import Footer from "./Components/footer";
import Header from "./Components/header";
import ProductDashboard from "./Components/productDashboard";
import Product from "./Components/product/product";
import Cart from "./Components/cart/cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Categories from "./Components/categories/categories";
import { useDispatch } from "react-redux";
import { setCategories } from "./Redux/silcer";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    getCategories();
  }, []);
  const getCategories = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products/categories");
      const jsonres = await res.json();
      dispatch(setCategories(jsonres));
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <>
      <Router>
        <Header />
        <Categories />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/category/:category" element={<ProductDashboard />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
