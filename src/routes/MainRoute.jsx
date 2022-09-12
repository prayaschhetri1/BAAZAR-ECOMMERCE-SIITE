import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "./../pages/Login";
import SignUp from "./../pages/SignUp";
import Cart from "./../pages/Cart";
import Mens from "./../pages/Mens";
import Womens from "./../pages/Womens";
import Checkout from './../pages/Checkout';

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mens" element={<Mens />} />
      <Route path="/womens" element={<Womens />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/cart/checkout" element={<Checkout />} />

    </Routes>
  );
};

export default MainRoute;
