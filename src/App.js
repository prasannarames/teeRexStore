import React from "react";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
}

export default App;
