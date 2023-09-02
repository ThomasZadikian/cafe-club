import "./input.css";
import React from "react";

import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./Components/AnimatedRoutes";
import { ProductProvider } from "./Components/ProductContext";

const App = () => {
  return (
    <ProductProvider>
      <Router>
        <AnimatedRoutes />
      </Router>
    </ProductProvider>
  );
};

export default App;
