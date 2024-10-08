import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ContactPage from "../Pages/ContactPage";
import ShopPage from "../Pages/ShopPage";
import OrderPage from "../Pages/OrderPage";
import { AnimatePresence } from "framer-motion";
import Navbar from "./shared/Navbar";
import ErrorDb from "./shared/ErrorDb";
import AdminPage from "../Pages/AdminPage";
import UserCreationPage from "../Pages/UserCreationPage";
import UserConnectPage from "../Pages/UserConnectPage";

type AnimatedRoutesProps = {};

const AnimatedRoutes: React.FC<AnimatedRoutesProps> = () => {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <ErrorDb />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/create" element={<UserCreationPage />} />
          <Route path="/connect" element={<UserConnectPage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default AnimatedRoutes;
