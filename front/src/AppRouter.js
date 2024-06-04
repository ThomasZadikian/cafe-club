import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/HomePage";
import ContactPage from "./Pages/ContactPage";
import ShopPage from "./Pages/ShopPage";
import OrderPage from "./Pages/OrderPage";
import AdminPage from "./Pages/AdminPage";
import UserCreationPage from "./Pages/UserCreationPage";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/ordre" component={OrderPage} />
        <Route path="/admin" component={AdminPage} />
        <Route path="/create" element={<UserCreationPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
