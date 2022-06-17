import React from "react";
import Dashboard from "./Components/dashboard";
import Footer from "./Components/footer";
import Header from "./Components/header";
import ProductDashboard from "./Components/productDashboard";
import Product from "./Components/product/product";
import Cart from "./Components/cart/cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Categories from "./Components/categories/categories";
function App() {
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
