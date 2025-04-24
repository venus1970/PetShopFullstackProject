import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About"; // ✅ Include About
import Products from "./pages/products/Products";
import AddProduct from "./pages/add-product/AddProduct";
import Contact from "./pages/contact/Contact";
import EditProduct from "./pages/edit-product/EditProduct";
import DeleteProduct from "./pages/delete-product/DeleteProduct";
import Footer from "./components/footer/Footer"; // ✅ Optional
import ProductList from "./pages/productslist/ProductsList";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />

      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/productslist" element={<ProductList />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products">
            <Route index element={<Products />} />
            <Route path="add" element={<AddProduct />} />
            <Route path="edit/:id" element={<EditProduct />} />
            <Route path="delete/:id" element={<DeleteProduct />} />
          </Route>
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;
