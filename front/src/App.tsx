import React from "react";
import { UserProvider } from "./Context/UserContext";

import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./Components/AnimatedRoutes";
import { ProductProvider } from "./Context/ProductContext";

const App = () => {
  return (
    <ProductProvider>
      <Router>
        <UserProvider>
          <AnimatedRoutes />
        </UserProvider>
      </Router>
    </ProductProvider>
  );
};

export default App;
